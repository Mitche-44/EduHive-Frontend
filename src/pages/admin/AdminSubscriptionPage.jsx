import React, { useEffect, useState } from "react";
import axios from "@/lib/api/client"; // Axios instance with base URL and token
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const AdminSubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/admin/subscriptions")
      .then((res) => {
        setSubscriptions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch subscriptions", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#182E6F] mb-6">All Subscriptions</h1>

      {loading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subscriptions.map((sub) => (
            <Card key={sub.id} className="p-4">
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{sub.user_email}</h2>
                  <Badge
                    className={`${
                      sub.active ? "bg-green-200 text-green-900" : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {sub.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p>
                  <strong>Plan:</strong> {sub.plan}
                </p>
                <p>
                  <strong>Billing:</strong> {sub.billing_cycle}
                </p>
                <p>
                  <strong>Expires:</strong>{" "}
                  {sub.expires_at ? new Date(sub.expires_at).toLocaleDateString() : "N/A"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSubscriptionPage;
