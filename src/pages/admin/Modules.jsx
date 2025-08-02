import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const modules = [
  {
    id: 1,
    title: "Introduction to HTML",
    status: "approved",
    lessons: 10,
  },
  {
    id: 2,
    title: "JavaScript Basics",
    status: "pending",
    lessons: 8,
  },
  {
    id: 3,
    title: "Advanced CSS",
    status: "approved",
    lessons: 12,
  },
]

export default function Modules() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Manage Modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Card key={mod.id}>
            <CardHeader>
              <h2 className="text-lg font-semibold">{mod.title}</h2>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <Badge variant={mod.status === "approved" ? "default" : "secondary"}>
                {mod.status}
              </Badge>
              <span className="text-sm text-muted-foreground">{mod.lessons} Lessons</span>
            </CardContent>
            <CardFooter className="flex gap-2 flex-wrap">
              <Button size="sm" variant="destructive">
                Remove
              </Button>
              <Button size="sm" variant="outline">
                Edit
              </Button>
              {mod.status === "pending" && (
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
