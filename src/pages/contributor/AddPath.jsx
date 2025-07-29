// src/pages/contributor/AddPath.jsx

import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

export default function AddPath() {
  // State for drag/drop and preview
  const [isDragActive, setIsDragActive] = useState(false);
  const [preview, setPreview] = useState(null);

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
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, []);

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
                <img src={preview} alt="Preview" className="max-h-48 rounded-md" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Module Description" className="w-full" />
            <Input placeholder="Video URL" className="w-full" />
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
