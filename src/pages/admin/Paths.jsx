import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const paths = [
  {
    id: 1,
    title: "Frontend Developer",
    status: "approved",
    modulesCount: 4,
  },
  {
    id: 2,
    title: "Backend Developer",
    status: "pending",
    modulesCount: 5,
  },
  {
    id: 3,
    title: "Fullstack Developer",
    status: "approved",
    modulesCount: 7,
  },
]

export default function Paths() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Manage Learning Paths</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Card key={path.id}>
            <CardHeader>
              <h2 className="text-lg font-semibold">{path.title}</h2>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <Badge variant={path.status === "approved" ? "default" : "secondary"}>
                {path.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {path.modulesCount} Modules
              </span>
            </CardContent>
            <CardFooter className="flex gap-2 flex-wrap">
              <Button size="sm" variant="destructive">
                Remove
              </Button>
              <Button size="sm" variant="outline">
                Edit
              </Button>
              {path.status === "pending" && (
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
