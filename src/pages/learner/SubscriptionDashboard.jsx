import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "@/lib/api/client";
// import { toast } from "sonner";
import { useSocket } from "@/hooks/useSocket";
import ChangePlanModal from "@/components/modals/ChangePlanModal";

const SubscriptionDashboard = () => {
  const [subscription, setSubscription] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const socket = useSocket();

  const fetchSubscription = async () => {
    try {
      const subRes = await axios.get("/api/user/subscription");
      const historyRes = await axios.get("/api/user/subscription/history");

      setSubscription(subRes.data.subscription);
      setHistory(historyRes.data.history);
    } catch (err) {
      console.error("Error loading subscription data", err);
      // toast.error("Failed to load subscription info");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("subscription_updated", () => {
      // toast.success(`Subscription upgraded to: ${data.plan}`);
      fetchSubscription();
    });

    return () => {
      socket.off("subscription_updated");
    };
  }, [socket]);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <Loader2 className="animate-spin h-6 w-6 text-muted" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-semibold text-[#182E6F]">Subscription Overview</h1>

      {subscription ? (
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">{subscription.plan}</h2>
                <p className="text-muted-foreground">
                  {subscription.billing_cycle} billing - Renews on{" "}
                  <span className="font-medium text-blue-700">
                    {new Date(subscription.renewal_date).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <Badge className="text-sm" variant="outline">
                {subscription.status}
              </Badge>
            </div>

            <Button variant="outline" className="text-sm" onClick={() => setShowModal(true)}>
              Change Plan
            </Button>
          </CardContent>
        </Card>
      ) : (
        <p>No active subscription.</p>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-3">Billing History</h2>
        <div className="space-y-3">
          {history.length === 0 ? (
            <p className="text-muted-foreground">No past transactions found.</p>
          ) : (
            history.map((entry, index) => (
              <Card key={index} className="bg-white border border-slate-200">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      {entry.plan} - {entry.billing_cycle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="font-semibold text-green-600">{entry.amount}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      <ChangePlanModal open={showModal} onClose={() => setShowModal(false)} currentPlan={subscription?.plan} />
    </div>
  );
};

export default SubscriptionDashboard;