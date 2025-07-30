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
}
