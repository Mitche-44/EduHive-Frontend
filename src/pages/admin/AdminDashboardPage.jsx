import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Users, BellRing } from "lucide-react";
import axios from "@/lib/api/client";
import { Link } from "react-router-dom";

const socket = io(import.meta.env.VITE_API_BASE_URL, {
  transports: ["websocket"],
  withCredentials: true,
  path: "/socket.io",
  namespace: "/admin",
});

export default function AdminDashboardPage() {
  const [subscriptionUpdates, setSubscriptionUpdates] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [counts, setCounts] = useState({
    users: 0,
    testimonials: 0,
    badges: 0,
    subscriptions: 0,
  });

  useEffect(() => {
    socket.on("subscription_updated", (data) => {
      setSubscriptionUpdates((prev) => [data, ...prev.slice(0, 4)]);
    });

    socket.on("leaderboard_update", (data) => {
      setLeaderboard(data);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    fetchStats();
    fetchLeaderboard();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get("/api/admin/stats");
      setCounts(res.data);
    } catch (err) {
      console.error("Failed to fetch admin stats", err);
    }
  };

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("/api/admin/leaderboard");
      setLeaderboard(res.data);
    } catch (err) {
      console.error("Failed to fetch leaderboard", err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <Users className="text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Users</p>
              <p className="font-bold">{counts.users}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <BellRing className="text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">Subscriptions</p>
              <p className="font-bold">{counts.subscriptions}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <BadgeCheck className="text-yellow-500" />
            <div>
              <p className="text-sm text-muted-foreground">Badges</p>
              <p className="font-bold">{counts.badges}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <BellRing className="text-purple-500" />
            <div>
              <p className="text-sm text-muted-foreground">Testimonials</p>
              <p className="font-bold">{counts.testimonials}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Upgrade Feed */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Recent Subscription Upgrades</h2>
        {subscriptionUpdates.length === 0 ? (
          <p className="text-muted-foreground">No upgrades yet.</p>
        ) : (
          <ul className="space-y-2">
            {subscriptionUpdates.map((item, idx) => (
              <li
                key={idx}
                className="border p-3 rounded-md bg-muted text-sm"
              >
                <strong>
                  <Link
                    to={`/admin/users/${item.user_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    User {item.user_id}
                  </Link>
                </strong>{" "}
                upgraded to <strong>{item.plan}</strong> ({item.billing_cycle})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Real-time Leaderboard */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Live Leaderboard</h2>
        {leaderboard.length === 0 ? (
          <p className="text-muted-foreground">No leaderboard data yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm bg-white rounded-md">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">User</th>
                  <th className="px-4 py-2 border">Points</th>
                  <th className="px-4 py-2 border">Badge</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((user, index) => (
                  <tr key={user.user_id} className="border-t">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">
                      <Link
                        to={`/admin/users/${user.user_id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {user.name || `User ${user.user_id}`}
                      </Link>
                    </td>
                    <td className="px-4 py-2 border">{user.points}</td>
                    <td className="px-4 py-2 border">{user.badge || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}