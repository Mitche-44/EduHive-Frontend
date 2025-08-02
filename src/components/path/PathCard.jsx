import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash, ExternalLink } from "lucide-react"

export default function PathCard({
  path,
  onEdit,
  onDelete,
  showActions = false, // contributor/admin toggle
}) {
  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md">
      <CardHeader className="p-0">
        {path.thumbnail ? (
          <img
            src={path.thumbnail}
            alt={path.title}
            className="rounded-t-2xl h-48 w-full object-cover"
          />
        ) : (
          <div className="h-48 w-full bg-gray-100 rounded-t-2xl flex items-center justify-center text-gray-400 text-sm">
            No Thumbnail
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg mb-1">{path.title}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{path.description}</p>

        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <Badge variant="secondary">{path.category}</Badge>

          {path.is_approved ? (
            <Badge variant="outline" className="text-green-600 border-green-400">
              ✅ Approved
            </Badge>
          ) : (
            <Badge variant="outline" className="text-yellow-600 border-yellow-400">
              ⏳ Pending
            </Badge>
          )}
        </div>

        {path.content_link && (
          <a
            href={path.content_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            View Full Content <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {typeof path.progress === "number" && (
          <div className="mt-4">
            <div className="text-xs text-muted-foreground mb-1">Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${path.progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>

      {showActions && (
        <CardFooter className="flex justify-end gap-2">
          <Button size="sm" variant="outline" onClick={() => onEdit?.(path)}>
            <Pencil className="w-4 h-4 mr-1" /> Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={() => onDelete?.(path)}>
            <Trash className="w-4 h-4 mr-1" /> Delete
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
