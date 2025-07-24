
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
  if (rank === 1) return "#🥇";
  if (rank === 2) return "#🥈";
  if (rank === 3) return "#🥉";
  if (rank === 4 || rank === 5) return "#🎖️";
  return null;
};

export default function LeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortAsc, setSortAsc] = useState(false)
  const [month, setMonth] = useState("all")
  const [activity, setActivity] = useState("all")
  const [liveData, setLiveData] = useState(initialLeaderboard)

  const currentUserName = "You"

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) =>
        prev.map((u) =>
          u.name === "You"
            ? { ...u, points: u.points + Math.floor(Math.random() * 5) }
            : u
        )
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const filtered = liveData
    .filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (month === "all" || u.joined.startsWith(month)) &&
      (activity === "all" || u.activity === activity)
    )
    .sort((a, b) => (sortAsc ? a.points - b.points : b.points - a.points))

  const currentUser = filtered.find((user) => user.name === currentUserName)

  return (
      <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-6xl mx-auto">
          <CardHeader className="space-y-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#F97316]" />
              <CardTitle className="text-3xl font-bold text-[#1A2A44]">Leaderboard</CardTitle>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Input
                placeholder="Search by username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              <Select onValueChange={setMonth} defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="2024-01">Jan</SelectItem>
                  <SelectItem value="2024-02">Feb</SelectItem>
                  <SelectItem value="2024-03">Mar</SelectItem>
                  <SelectItem value="2024-04">Apr</SelectItem>
                  <SelectItem value="2024-05">May</SelectItem>
                  <SelectItem value="2024-06">Jun</SelectItem>
                  <SelectItem value="2024-07">July</SelectItem>
                  <SelectItem value="2024-08">August</SelectItem>
                  <SelectItem value="2024-09">Sept</SelectItem>
                  <SelectItem value="2024-10">Oct</SelectItem>
                  <SelectItem value="2024-11">Nov</SelectItem>
                  <SelectItem value="2024-12">Dec</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setActivity} defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="Courses">Courses</SelectItem>
                  <SelectItem value="Quizzes">Quizzes</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => setSortAsc((prev) => !prev)}
                className="flex items-center gap-2"
              >
                <ArrowDownUp className="w-4 h-4" />
                Sort ({sortAsc ? "Asc" : "Desc"})
              </Button>
            </div>
          </CardHeader>
  
          {currentUser && (
            <CardContent className="border-y py-4 bg-indigo-50 mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{currentUser.name} (You)</p>
                  <p className="text-sm text-muted-foreground">
                    Rank: #{currentUser.rank} • Points: {currentUser.points}
                  </p>
                </div>
              </div>
            </CardContent>
          )}
  
          <CardContent className="overflow-x-auto rounded-md">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Joined</th>
                  <th className="px-6 py-3">Activity</th>
                  <th className="px-6 py-3">🥇</th>
                  <th className="px-6 py-3">🥈</th>
                  <th className="px-6 py-3">🥉</th>
                  <th className="px-6 py-3">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filtered.map((entry, idx) => (
                  <tr
                    key={entry.rank}
                    className={`hover:bg-gray-100 transition ${
                      entry.name === currentUserName ? "bg-indigo-50 border-l-4 border-indigo-500" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold">
                      {getMedalIcon(idx + 1) ?? idx + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={entry.avatar} />
                          <AvatarFallback>{entry.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{entry.joined}</td>
                    <td className="px-6 py-4">{entry.activity}</td>
                    <td className="px-6 py-4 text-yellow-500 font-bold">{entry.medals.gold}</td>
                    <td className="px-6 py-4 text-gray-500 font-bold">{entry.medals.silver}</td>
                    <td className="px-6 py-4 text-orange-500 font-bold">{entry.medals.bronze}</td>
                    <td className="px-6 py-4 font-semibold text-indigo-700">{entry.points}</td>
                  </tr>
                ))}
              </tbody>
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
            </table>
          </CardContent>
        </Card>
      </div>
    )
  }


