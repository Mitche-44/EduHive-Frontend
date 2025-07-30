import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import {
  Table, TableHeader, TableBody, TableFooter, TableHead,
  TableRow, TableCell, TableCaption
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const socket = io("http://localhost:5000/leaderboard"); // adjust for prod URL

const LeaderboardPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("/api/leaderboard");
      setLeaders(res.data.leaderboard || []);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();

    // WebSocket setup
    socket.on("connect", () => {
      console.log("Connected to leaderboard socket");
    });

    socket.on("leaderboard_update", () => {
      console.log("Leaderboard updated via socket");
      fetchLeaderboard();
    });

    return () => {
      socket.off("leaderboard_update");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Trophy className="text-yellow-500" />
        Leaderboard
      </h1>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          {loading ? (
            <div className="space-y-3 p-6">
              {[...Array(5)].map((_, idx) => (
                <Skeleton key={idx} className="h-10 w-full rounded-md" />
              ))}
            </div>
          ) : (
            <Table>
              <TableCaption>Top learners ranked by total points</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">#</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {leaders.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className={cn(index < 3 && "bg-yellow-50")}
                  >
                    <TableCell className="font-semibold">{index + 1}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {user.name || "N/A"}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-right font-bold">
                      {user.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4} className="text-sm text-muted-foreground text-right pr-4">
                    {leaders.length} {leaders.length === 1 ? "participant" : "participants"}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;
