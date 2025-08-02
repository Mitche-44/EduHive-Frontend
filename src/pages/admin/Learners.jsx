import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const students = [
  {
    id: 1,
    name: "Brian Mwangi",
    email: "brian@studentmail.com",
    role: "student",
    status: "pending",
    avatarUrl: "",
  },
  {
    id: 2,
    name: "Sharon Wambui",
    email: "sharon@studentmail.com",
    role: "student",
    status: "approved",
    avatarUrl: "",
  },
  {
    id: 3,
    name: "Eric Mugo",
    email: "eric@studentmail.com",
    role: "contributor",
    status: "approved",
    avatarUrl: "",
  },
]

export default function Learners() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Manage Students</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Card key={student.id}>
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={student.avatarUrl} alt={student.name} />
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
            </CardHeader>

            <CardContent className="flex justify-between">
              <Badge variant="outline">
                {student.role === "contributor" ? "Contributor" : "Student"}
              </Badge>
              <Badge variant={student.status === "approved" ? "default" : "secondary"}>
                {student.status === "approved" ? "Approved" : "Pending"}
              </Badge>
            </CardContent>

            <CardFooter className="flex gap-2 flex-wrap">
              <Button size="sm" variant="destructive">
                Remove
              </Button>
              {student.status === "pending" && (
                <Button size="sm" variant="default">
                  Approve
                </Button>
              )}
              {student.role !== "contributor" && student.status === "approved" && (
                <Button size="sm" variant="outline">
                  Promote to Contributor
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
