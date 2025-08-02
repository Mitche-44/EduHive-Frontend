import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const moduleSchema = z.object({
  title: z.string().min(1, "Title is required").max(150),
  description: z.string().min(1, "Description is required"),
  content: z.string().optional(),
  media_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")), 
})

export default function ModuleForm({ onSubmit, initialValues, onCancel }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      media_url: "",
      image_url: "", 
    },
  })

  useEffect(() => {
    if (initialValues) {
      reset(initialValues)
    } else {
      reset()
    }
  }, [initialValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <Input {...register("title")} />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <Textarea {...register("description")} />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Content (optional)</label>
        <Textarea rows={4} {...register("content")} />
      </div>

      <div>
        <label className="block mb-1 font-medium">Media URL (optional)</label>
        <Input {...register("media_url")} />
        {errors.media_url && <p className="text-red-500 text-sm">{errors.media_url.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Image URL (optional)</label>
        <Input {...register("image_url")} />
        {errors.image_url && <p className="text-red-500 text-sm">{errors.image_url.message}</p>}
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {initialValues ? (isSubmitting ? "Updating..." : "Update Module") : isSubmitting ? "Submitting..." : "Create Module"}
        </Button>

        {initialValues && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}