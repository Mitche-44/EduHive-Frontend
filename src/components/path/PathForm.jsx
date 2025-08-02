import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { createPath, updatePath } from "@/api/paths"

export default function PathForm({ mode = "create", initialData = {}, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: "",
    content_link: ""
  })

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "",
        thumbnail: initialData.thumbnail || "",
        content_link: initialData.content_link || ""
      })
    }
  }, [mode, initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let response
      if (mode === "edit") {
        response = await updatePath(initialData.id, formData)
        toast.success("Path updated")
      } else {
        response = await createPath(formData)
        toast.success("Path created")
      }
      onSuccess(response.data)
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-sm border">
      <CardHeader>
        <CardTitle className="text-lg">
          {mode === "edit" ? "Edit Path" : "Create New Path"}
        </CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="content_link">Content Link</Label>
            <Input
              id="content_link"
              name="content_link"
              value={formData.content_link}
              onChange={handleChange}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-4">
          {onCancel && (
            <Button variant="ghost" type="button" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit">
            {mode === "edit" ? "Update Path" : "Create Path"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
