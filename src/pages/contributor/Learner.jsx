import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const learners = [
  {
    id: 1,
    name: "Achieng Otieno",
    email: "achieng@example.com",
    status: "pending",
    avatarUrl: "",
  },
  {
    id: 2,
    name: "Brian Mwangi",
    email: "brian@example.com",
    status: "approved",
    avatarUrl: "",
  },
  {
    id: 3,
    name: "Carol Wambui",
    email: "carol@example.com",
    status: "pending",
    avatarUrl: "",
  },
]

export default function Learners() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">My Learners</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {learners.map((learner) => (
          <Card key={learner.id}>
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={learner.avatarUrl} alt={learner.name} />
                <AvatarFallback>
                  {learner.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{learner.name}</p>
                <p className="text-sm text-muted-foreground">{learner.email}</p>
              </div>
            </CardHeader>

            <CardContent>
              <Badge variant={learner.status === "approved" ? "default" : "secondary"}>
                {learner.status === "approved" ? "Approved" : "Pending"}
              </Badge>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button size="sm" variant="destructive">
                Remove
              </Button>
              {learner.status === "pending" && (
                <Button size="sm" variant="default">
                  Approve
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
