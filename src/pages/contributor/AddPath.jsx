// import React, { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Pencil, Trash2 } from "lucide-react"

// export default function AddPath() {
//   const [paths, setPaths] = useState([])
//   const [open, setOpen] = useState(false)
//   const [form, setForm] = useState({ title: "", description: "" })
//   const [editingPathId, setEditingPathId] = useState(null)

//   useEffect(() => {
//     fetch("/api/contributor/paths")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch paths")
//         return res.json()
//       })
//       .then(setPaths)
//       .catch(console.error)
//   }, [])

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const method = editingPathId ? "PATCH" : "POST"
//     const url = editingPathId
//       ? `/api/contributor/paths/${editingPathId}`
//       : "/api/contributor/paths"

//     fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Submission failed")
//         return res.json()
//       })
//       .then((data) => {
//         setPaths((prev) =>
//           editingPathId
//             ? prev.map((p) => (p.id === data.id ? data : p))
//             : [...prev, data]
//         )
//         setForm({ title: "", description: "" })
//         setEditingPathId(null)
//         setOpen(false)
//       })
//       .catch(console.error)
//   }

//   const handleEdit = (path) => {
//     setForm({ title: path.title, description: path.description })
//     setEditingPathId(path.id)
//     setOpen(true)
//   }

//   const handleDelete = (id) => {
//     if (!window.confirm("Are you sure you want to delete this path?")) return

//     fetch(`/api/contributor/paths/${id}`, { method: "DELETE" })
//       .then((res) => {
//         if (!res.ok) throw new Error("Delete failed")
//         setPaths((prev) => prev.filter((p) => p.id !== id))
//       })
//       .catch(console.error)
//   }

//   const handleDialogClose = () => {
//     setOpen(false)
//     setEditingPathId(null)
//     setForm({ title: "", description: "" })
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">My Paths</h2>
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button onClick={() => setOpen(true)}>Create New Path</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>{editingPathId ? "Edit Path" : "New Path"}</DialogTitle>
//             </DialogHeader>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <Label htmlFor="title">Title</Label>
//                 <Input
//                   id="title"
//                   name="title"
//                   value={form.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   name="description"
//                   value={form.description}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex justify-end gap-2">
//                 <Button
//                   variant="secondary"
//                   type="button"
//                   onClick={handleDialogClose}
//                 >
//                   Cancel
//                 </Button>
//                 <Button type="submit">
//                   {editingPathId ? "Update" : "Create"}
//                 </Button>
//               </div>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {paths.map((path) => (
//           <Card key={path.id}>
//             <CardHeader>
//               <CardTitle className="flex justify-between items-center">
//                 <span>{path.title}</span>
//                 <div className="flex gap-2">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => handleEdit(path)}
//                   >
//                     <Pencil className="w-4 h-4" />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => handleDelete(path.id)}
//                   >
//                     <Trash2 className="w-4 h-4 text-red-600" />
//                   </Button>
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{path.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// src/pages/contributor/AddPath.jsx

import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

export default function AddPath() {
  // Image upload state
  const [isDragActive, setIsDragActive] = useState(false);
  const [preview, setPreview] = useState(null);

  // Modules state: now including title, description, videoUrl
  const [modules, setModules] = useState([
    { title: '', description: '', videoUrl: '' },
  ]);

  // Drag & drop handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragActive(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  }, []);
  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }, []);

  // Module list handlers
  const handleModuleChange = (index, field, value) => {
    const updated = [...modules];
    updated[index][field] = value;
    setModules(updated);
  };
  const addModule = () =>
    setModules([...modules, { title: '', description: '', videoUrl: '' }]);
  const removeModule = (index) =>
    setModules(modules.filter((_, i) => i !== index));

  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold">Create a Learning Path</h1>

      {/* Path Details Card */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Path Details</h2>
          <div className="space-y-4">
            <Input placeholder="Add Title" className="w-full" />
            <Textarea placeholder="Add a Description" className="w-full" />

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 cursor-pointer transition-colors ${
                isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
              }`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-48 rounded-md"
                />
              ) : (
                <>
                  <Image className="w-6 h-6 mb-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Drag & drop an image, or click to select
                  </span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modules Card */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Add Modules</h2>
          <div className="space-y-8">
            {modules.map((mod, idx) => (
              <div key={idx} className="space-y-4">
                {/* Module Title */}
                <Textarea
                  placeholder="Module Title"
                  className="w-full"
                  value={mod.title}
                  onChange={(e) =>
                    handleModuleChange(idx, 'title', e.target.value)
                  }
                />
                {/* Module Description */}
                <Input
                  placeholder="Module Description"
                  className="w-full"
                  value={mod.description}
                  onChange={(e) =>
                    handleModuleChange(idx, 'description', e.target.value)
                  }
                />
                {/* Video URL */}
                <Input
                  placeholder="Video URL"
                  className="w-full"
                  value={mod.videoUrl}
                  onChange={(e) =>
                    handleModuleChange(idx, 'videoUrl', e.target.value)
                  }
                />
                {/* Remove button */}
                {modules.length > 1 && (
                  <Button
                    variant="destructive"
                    onClick={() => removeModule(idx)}
                  >
                    Remove Module
                  </Button>
                )}
              </div>
            ))}

            <Button variant="secondary" onClick={addModule}>
              + Add Module
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submit */}
      <Button className="w-full py-3 text-base" variant="primary">
        Submit
      </Button>
    </main>
  );
}
  
  
  
  
  
  
  
  
  
  
