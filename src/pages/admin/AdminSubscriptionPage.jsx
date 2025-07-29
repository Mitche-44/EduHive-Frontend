// import React, { useEffect, useState } from "react";
// import axios from "@/lib/api/client"; // Axios instance with base URL and token
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";

// const AdminSubscriptionPage = () => {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("/api/admin/subscriptions")
//       .then((res) => {
//         setSubscriptions(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch subscriptions", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-[#182E6F] mb-6">All Subscriptions</h1>

//       {loading ? (
//         <div className="space-y-4">
//           {[...Array(4)].map((_, i) => (
//             <Skeleton key={i} className="h-20 w-full rounded-md" />
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {subscriptions.map((sub) => (
//             <Card key={sub.id} className="p-4">
//               <CardContent>
//                 <div className="flex justify-between items-center mb-2">
//                   <h2 className="text-xl font-semibold">{sub.user_email}</h2>
//                   <Badge
//                     className={`${
//                       sub.active ? "bg-green-200 text-green-900" : "bg-gray-300 text-gray-700"
//                     }`}
//                   >
//                     {sub.active ? "Active" : "Inactive"}
//                   </Badge>
//                 </div>
//                 <p>
//                   <strong>Plan:</strong> {sub.plan}
//                 </p>
//                 <p>
//                   <strong>Billing:</strong> {sub.billing_cycle}
//                 </p>
//                 <p>
//                   <strong>Expires:</strong>{" "}
//                   {sub.expires_at ? new Date(sub.expires_at).toLocaleDateString() : "N/A"}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminSubscriptionPage;


import React, { useEffect, useState } from "react";
import axios from "@/lib/api/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table"; // create if not exists
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RefreshCw } from "lucide-react";

const AdminSubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState({ plan: "", billing: "" });

  const fetchSubscriptions = async () => {
    try {
      const res = await axios.get("/api/admin/subscriptions");
      setSubscriptions(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Failed to load subscriptions", err);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  useEffect(() => {
    const filteredData = subscriptions.filter((s) => {
      return (
        (!filter.plan || s.plan === filter.plan) &&
        (!filter.billing || s.billing_cycle === filter.billing)
      );
    });
    setFiltered(filteredData);
  }, [filter, subscriptions]);

  return (
    <Card className="p-4">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <h2 className="text-xl font-bold">All Subscriptions</h2>
          <Button variant="ghost" onClick={fetchSubscriptions} className="ml-auto">
            <RefreshCw size={18} className="mr-1" />
            Refresh
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Select onValueChange={(v) => setFilter((f) => ({ ...f, plan: v }))}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Free">Free</SelectItem>
              <SelectItem value="Basic">Basic</SelectItem>
              <SelectItem value="Pro">Pro</SelectItem>
              <SelectItem value="Elite">Elite</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(v) => setFilter((f) => ({ ...f, billing: v }))}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Billing Cycle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Plan</Th>
                <Th>Billing</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filtered.map((s) => (
                <Tr key={s.id}>
                  <Td>{s.user?.email || "Unknown"}</Td>
                  <Td>{s.plan}</Td>
                  <Td>{s.billing_cycle}</Td>
                  <Td>{new Date(s.start_date).toLocaleDateString()}</Td>
                  <Td>{new Date(s.end_date).toLocaleDateString()}</Td>
                  <Td>
                    {s.active ? (
                      <span className="text-green-600 font-medium">Active</span>
                    ) : (
                      <span className="text-red-500">Inactive</span>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSubscriptionPage;
