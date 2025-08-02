
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const contributors = [
  {
    id: 1,
    name: "Faith Kamau",
    email: "faith@example.com",
    role: "contributor",
    status: "pending",
    avatarUrl: "",
  },
  {
    id: 2,
    name: "George Otieno",
    email: "george@example.com",
    role: "contributor",
    status: "approved",
    avatarUrl: "",
  },
  {
    id: 3,
    name: "Linda Njeri",
    email: "linda@example.com",
    role: "admin",
    status: "approved",
    avatarUrl: "",
  },
]

export default function Contributors() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Manage Contributors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((user) => (
          <Card key={user.id}>
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </CardHeader>

            <CardContent className="flex justify-between">
              <Badge variant="outline">{user.role === "admin" ? "Admin" : "Contributor"}</Badge>
              <Badge variant={user.status === "approved" ? "default" : "secondary"}>
                {user.status === "approved" ? "Approved" : "Pending"}
              </Badge>
            </CardContent>

            <CardFooter className="flex gap-2 flex-wrap">
              <Button size="sm" variant="destructive">
                Remove
              </Button>
              {user.status === "pending" && (
                <Button size="sm" variant="default">
                  Approve
                </Button>
              )}
              {user.role !== "admin" && user.status === "approved" && (
                <Button size="sm" variant="outline">
                  Promote to Admin
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
