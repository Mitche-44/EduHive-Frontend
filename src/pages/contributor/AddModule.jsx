import React, { useEffect, useState } from "react"
import { toast } from "sonner"

import { getModules, createModule, updateModule, deleteModule } from "@/api/modules"
import ModuleForm from "@/components/contributor/ModuleForm"
import ModuleCard from "@/components/contributor/ModuleCard"

export default function AddModules() {
  const [modules, setModules] = useState([])
  const [editingModule, setEditingModule] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch modules on mount
  useEffect(() => {
    fetchModules()
  }, [])

  const fetchModules = async () => {
    try {
      const data = await getModules()
      setModules(data)
    } catch (error) {
      toast.error("Failed to fetch modules")
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (formData) => {
    try {
      const newModule = await createModule(formData)
      setModules((prev) => [...prev, newModule])
      toast.success("Module created")
    } catch (error) {
      toast.error("Failed to create module")
    }
  }

  const handleUpdate = async (id, formData) => {
    try {
      const updated = await updateModule(id, formData)
      setModules((prev) => prev.map((m) => (m.id === id ? updated : m)))
      setEditingModule(null)
      toast.success("Module updated")
    } catch (error) {
      toast.error("Failed to update module")
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteModule(id)
      setModules((prev) => prev.filter((m) => m.id !== id))
      toast.success("Module deleted")
    } catch (error) {
      toast.error("Failed to delete module")
    }
  }

  const handleEditClick = (module) => {
    setEditingModule(module)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Manage Modules</h1>

      <ModuleForm
        onSubmit={editingModule ? (data) => handleUpdate(editingModule.id, data) : handleCreate}
        initialValues={editingModule}
        onCancel={() => setEditingModule(null)}
      />

      <div className="grid gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : modules.length === 0 ? (
          <p>No modules created yet.</p>
        ) : (
          modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onEdit={() => handleEditClick(module)}
              onDelete={() => handleDelete(module.id)}
            />
          ))
        )}
      </div>
    </div>
  )

// src/pages/contributor/AddModule.jsx

//import React, { useState, useCallback } from 'react';
//import { Card, CardContent } from '@/components/ui/card';
//import { Input } from '@/components/ui/input';
//import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Video, Image } from 'lucide-react';

// export default function AddModule() {
//   // Form state
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [videoUrl, setVideoUrl] = useState('');
//   const [videoPreview, setVideoPreview] = useState(null);
//   const [questions, setQuestions] = useState(['']);

//   // Drag & drop for video file
//   const [dragActive, setDragActive] = useState(false);
//   const onDragOver = useCallback(e => {
//     e.preventDefault();
//     setDragActive(true);
//   }, []);
//   const onDragLeave = useCallback(e => {
//     e.preventDefault();
//     setDragActive(false);
//   }, []);
//   const onDrop = useCallback(e => {
//     e.preventDefault();
//     setDragActive(false);
//     const file = e.dataTransfer.files[0];
//     if (file) setVideoPreview(URL.createObjectURL(file));
//   }, []);
//   const onFileChange = useCallback(e => {
//     const file = e.target.files?.[0];
//     if (file) setVideoPreview(URL.createObjectURL(file));
//   }, []);

//   // Questions handlers
//   const handleQuestionChange = (idx, val) => {
//     const updated = [...questions];
//     updated[idx] = val;
//     setQuestions(updated);
//   };
//   const addQuestion = () => setQuestions([...questions, '']);
//   const removeQuestion = idx =>
//     setQuestions(questions.filter((_, i) => i !== idx));

//   // Validation
//   const isTitleValid = title.trim() !== '';
//   const areQuestionsValid = questions.every(q => q.trim() !== '');
//   const hasVideo = videoUrl.trim() !== '' || videoPreview !== null;
//   const canSubmit = isTitleValid && areQuestionsValid && hasVideo;

//   return (
//     <main className="mx-auto max-w-4xl p-8 space-y-8">
//       {/* Page Title */}
//       <h1 className="text-4xl font-extrabold">Add Module</h1>

//       {/* Module Details Card */}
//       <Card className="w-full">
//         <CardContent className="p-8 space-y-6">
//           <h2 className="text-2xl font-semibold">Module Details</h2>
//           <div className="space-y-4">
//             {/* Title */}
//             <div>
//               <Input
//                 placeholder="Module Title"
//                 className={`w-full ${
//                   !isTitleValid ? 'border-red-500' : ''
//                 }`}
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//               />
//             </div>
//             {/* Description */}
//             <Textarea
//               placeholder="Module Description"
//               className="w-full"
//               value={description}
//               onChange={e => setDescription(e.target.value)}
//             />
//             {/* Video upload & URL side by side */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Drag & Drop */}
//               <div
//                 onDragOver={onDragOver}
//                 onDragLeave={onDragLeave}
//                 onDrop={onDrop}
//                 className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 cursor-pointer transition-colors ${
//                   dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
//                 }`}
//               >
//                 {videoPreview ? (
//                   <video
//                     src={videoPreview}
//                     controls
//                     className="max-h-40 rounded-md"
//                   />
//                 ) : (
//                   <>
//                     <Video className="w-6 h-6 mb-2 text-gray-500" />
//                     <span className="text-sm text-gray-600">
//                       Drag & drop video, or click to select
//                     </span>
//                   </>
//                 )}
//                 <input
//                   type="file"
//                   accept="video/*"
//                   className="absolute inset-0 w-full h-full opacity-0"
//                   onChange={onFileChange}
//                 />
//               </div>
//               {/* Video URL */}
//               <Input
//                 placeholder="Video URL"
//                 className="w-full"
//                 value={videoUrl}
//                 onChange={e => setVideoUrl(e.target.value)}
//               />
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Questions Card */}
//       <Card className="w-full">
//         <CardContent className="p-8 space-y-6">
//           <h2 className="text-2xl font-semibold">Questions</h2>
//           <div className="space-y-4">
//             {questions.map((q, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4"
//               >
//                 <Input
//                   placeholder="Add a Question"
//                   className="flex-1"
//                   value={q}
//                   onChange={e => handleQuestionChange(idx, e.target.value)}
//                 />
//                 {questions.length > 1 && (
//                   <Button
//                     variant="destructive"
//                     onClick={() => removeQuestion(idx)}
//                   >
//                     Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="secondary" onClick={addQuestion}>
//               + Add Question
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Validation Feedback */}
//       {!canSubmit && (
//         <p className="text-sm text-red-600">
//           Please fill in the title, at least one question, and a video.
//         </p>
//       )}

//       {/* Submit */}
//       <Button
//         className="w-full py-3 text-base"
//         variant="primary"
//         disabled={!canSubmit}
//       >
//         Submit
//       </Button>
//     </main>
//   );

//}

  
  
  
