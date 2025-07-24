
import { useEffect, useState } from "react"
import { Trophy, ArrowDownUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

const initialLeaderboard = [
  // sample entries
  {
    rank: 1,
    name: "David Washington",
    joined: "2024-01",
    points: 1200,
    avatar: "https://i.pravatar.cc/150?img=1",
    activity: "Quizzes",
    medals: { gold: 5, silver: 2, bronze: 1 },
  },
  {
    rank: 2,
    name: "Bob Brown",
    joined: "2024-02",
    points: 1150,
    avatar: "https://i.pravatar.cc/150?img=2",
    activity: "Courses",
    medals: { gold: 3, silver: 4, bronze: 2 },
  },
  {
    rank: 3,
    name: "Charlie Mbeumo",
    joined: "2024-03",
    points: 1100,
    avatar: "https://i.pravatar.cc/150?img=3",
    activity: "Quizzes",
    medals: { gold: 2, silver: 2, bronze: 5 },
  },
  {
    rank: 4,
    name: "You",
    joined: "2024-04",
    points: 1000,
    avatar: "https://i.pravatar.cc/150?img=4",
    activity: "Courses",
    medals: { gold: 1, silver: 1, bronze: 1 },
  },
  {
    rank: 5,
    name: "Ann Smith",
    joined: "2024-05",
    points: 950,
    avatar: "https://i.pravatar.cc/150?img=5",
    activity: "Quizzes",
    medals: { gold: 0, silver: 2, bronze: 4 },
  },
  {
    rank: 6,
    name: "Eve Johnson",
    joined: "2024-06",
    points: 800,
    avatar: "https://i.pravatar.cc/150?img=6",
    activity: "Courses",
    medals: { gold: 0, silver: 1, bronze: 2 },
  },
]
const getMedalIcon = (rank) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  if (rank === 4 || rank === 5) return "🎖️";
  return null;
};

