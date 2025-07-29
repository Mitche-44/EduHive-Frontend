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

  // Modules state
  const [modules, setModules] = useState([
    { description: '', videoUrl: '' },
  ]);

  // Handlers for drag & drop
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

  // Handlers for modules array
  const handleModuleChange = (index, field, value) => {
    const updated = [...modules];
    updated[index][field] = value;
    setModules(updated);
  };
  const addModule = () =>
    setModules([...modules, { description: '', videoUrl: '' }]);
  const removeModule = (index) =>
    setModules(modules.filter((_, i) => i !== index));

  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold">Create a Learning Path</h1>

      {/* Path Details */}
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

      {/* Modules Section */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Add Modules</h2>
          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
              >
                <Input
                  placeholder="Module Description"
                  className="w-full"
                  value={mod.description}
                  onChange={(e) =>
                    handleModuleChange(idx, 'description', e.target.value)
                  }
                />
                <div className="flex gap-4">
                  <Input
                    placeholder="Video URL"
                    className="flex-1"
                    value={mod.videoUrl}
                    onChange={(e) =>
                      handleModuleChange(idx, 'videoUrl', e.target.value)
                    }
                  />
                  {modules.length > 1 && (
                    <Button
                      variant="destructive"
                      onClick={() => removeModule(idx)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
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
