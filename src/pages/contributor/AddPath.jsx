import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Trash2 } from "lucide-react"

export default function AddPath() {
  const [paths, setPaths] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: "", description: "" })
  const [editingPathId, setEditingPathId] = useState(null)

  // Fetch paths owned by contributor (assumes auth token is included)
  useEffect(() => {
    fetch("/api/contributor/paths")
      .then(res => res.json())
      .then(setPaths)
      .catch(console.error)
  }, [])

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const method = editingPathId ? "PATCH" : "POST"
    const url = editingPathId ? `/api/contributor/paths/${editingPathId}` : "/api/contributor/paths"

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        setOpen(false)
        setForm({ title: "", description: "" })
        setEditingPathId(null)
        setPaths(prev =>
          editingPathId
            ? prev.map(p => (p.id === data.id ? data : p))
            : [...prev, data]
        )
      })
  }

  const handleEdit = path => {
    setForm({ title: path.title, description: path.description })
    setEditingPathId(path.id)
    setOpen(true)
  }

  const handleDelete = id => {
    if (!window.confirm("Are you sure you want to delete this path?")) return

    fetch(`/api/contributor/paths/${id}`, { method: "DELETE" })
      .then(() => setPaths(prev => prev.filter(p => p.id !== id)))
      .catch(console.error)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Paths</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Create New Path</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingPathId ? "Edit Path" : "New Path"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" value={form.title} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" value={form.description} onChange={handleChange} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="secondary" type="button" onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit">{editingPathId ? "Update" : "Create"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paths.map(path => (
          <Card key={path.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{path.title}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(path)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(path.id)}>
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{path.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
