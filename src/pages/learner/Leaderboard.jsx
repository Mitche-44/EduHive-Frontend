// import React from "react";
// import { Trophy } from "lucide-react";

// const LeaderboardPage = () => {
//   // Placeholder data - replace with API call or state management
//   const leaderboardData = [
//     { rank: 1, username: "Alice", points: 1500 },
//     { rank: 2, username: "Bob", points: 1200 },
//     { rank: 3, username: "Charlie", points: 950 },
//     { rank: 4, username: "Diana", points: 800 },
//     { rank: 5, username: "Eve", points: 600 },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex items-center space-x-3 mb-6">
//           <Trophy className="w-8 h-8 text-[#F97316]" />
//           <h1 className="text-3xl font-bold text-[#1A2A44]">Leaderboard</h1>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#1A2A44] text-[#F9FAFB]">
//                 <tr>
//                   <th className="px-4 py-3 text-left font-semibold">Rank</th>
//                   <th className="px-4 py-3 text-left font-semibold">Username</th>
//                   <th className="px-4 py-3 text-left font-semibold">Points</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaderboardData.map((user) => (
//                   <tr
//                     key={user.username}
//                     className="border-b border-[#D1D5DB] hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-3 text-[#1A2A44] font-medium">{user.rank}</td>
//                     <td className="px-4 py-3 text-[#1A2A44]">{user.username}</td>
//                     <td className="px-4 py-3 text-[#1A2A44]">{user.points}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaderboardPage;

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const mockLeaderboard = [
  {
    rank: 1,
    name: 'Dennis W',
    joined: '7 years ago',
    medals: { gold: 120, silver: 37, bronze: 15 },
    points: 4212,
  },
  {
    rank: 2,
    name: 'Kennedy O',
    joined: '6 years ago',
    medals: { gold: 5, silver: 108, bronze: 825 },
    points: 3938,
  },
  {
    rank: 3,
    name: 'Natasha O',
    joined: '4 years ago',
    medals: { gold: 33, silver: 94, bronze: 72 },
    points: 2679,
  },
  {
    rank: 4,
    name: 'Enoc',
    joined: '6 years ago',
    medals: { gold: 16, silver: 5, bronze: 11 },
    points: 2119,
  },
];

const LeaderboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockLeaderboard.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-2">LEADERBOARD</h1>
      <p className="text-gray-600 mb-6">
        This live leaderboard shows the absolute best students on EduHive. A competitor must be an Expert tier or higher to be ranked for that category.{' '}
        <a href="#" className="text-indigo-600 underline">
          Learn more
        </a>
      </p>

      {/* Search */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <Input
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Button variant="outline">Settings</Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3">Rank</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Joined</th>
              <th className="px-6 py-3">Gold</th>
              <th className="px-6 py-3">Silver</th>
              <th className="px-6 py-3">Bronze</th>
              <th className="px-6 py-3">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filtered.map((user) => (
              <tr key={user.rank} className="hover:bg-gray-100 transition">
                <td className="px-6 py-4 font-semibold">{user.rank}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.joined}</td>
                <td className="px-6 py-4 text-yellow-500 font-bold">{user.medals.gold}</td>
                <td className="px-6 py-4 text-gray-500 font-bold">{user.medals.silver}</td>
                <td className="px-6 py-4 text-orange-500 font-bold">{user.medals.bronze}</td>
                <td className="px-6 py-4 font-semibold text-indigo-700">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (static for now) */}
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
