// src/pages/contributor/AddPath.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

export default function AddPath() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold">Create a Path</h1>

      {/* Form Container */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          
          {/* 1. Path Details */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Path Details</h2>

            {/* Title */}
            <Input
              placeholder="Add Title"
              className="w-full"
            />

            {/* Description */}
            <Textarea
              placeholder="Add a Description"
              className="w-full"
            />

            {/* Image Upload */}
            <div>
              <label
                htmlFor="pathImage"
                className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-gray-400"
              >
                <Image className="w-6 h-6 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">Upload an image</span>
              </label>
              <input
                type="file"
                id="pathImage"
                accept="image/*"
                className="sr-only"
              />
            </div>
          </section>

        

          {/* Submit */}
          <Button className="w-full py-3 text-base">Submit</Button>
        </CardContent>
      </Card>
    </main>
  );
}
