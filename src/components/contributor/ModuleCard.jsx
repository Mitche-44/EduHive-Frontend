import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"

export default function ModuleCard({ module, onEdit, onDelete }) {
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${module.title}"?`)) {
      onDelete(module.id)
    }
  }

  return (
    <Card className="w-full shadow-md">
      {module.image_url && (
        <img
          src={module.image_url}
          alt={module.title}
          className="w-full h-48 object-cover rounded-t-md"
        />
      )}

      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
          <Badge
            variant={module.status === "approved" ? "success" : "secondary"}
            className="mt-1"
          >
            {module.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm mb-2">
          {module.description}
        </p>

        {module.media_url && (
          <a
            href={module.media_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
          >
            <span className="font-medium">Media URL:</span> {module.media_url}
          </a>
        )}
      </CardContent>

      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(module)}
          className="flex items-center gap-1"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          className="flex items-center gap-1"
        >
          <Trash className="w-4 h-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
