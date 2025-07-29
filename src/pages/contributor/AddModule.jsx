// src/pages/contributor/AddModule.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function AddModule() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold">Add Modules</h1>

      {/* Form Container */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          {/* Module Title */}
          <Input
            placeholder="Module Title"
            className="w-full"
          />

          {/* Module Description */}
          <Textarea
            placeholder="Module Description"
            className="w-full"
          />

          {/* Video URL */}
          <Input
            placeholder="Video URL"
            className="w-full"
          />

          {/* Add a Question */}
          <Input
            placeholder="Add a Question"
            className="w-full"
          />

          {/* Submit */}
          <Button className="w-full py-3 text-base" variant="primary">
            Submit
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
