// src/pages/contributor/Challenges.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Challenges() {
  // TODO: replace with real module list from API or context
  const modules = [
    { id: 'mod1', name: 'Module 1: Intro to React' },
    { id: 'mod2', name: 'Module 2: State & Props' },
    { id: 'mod3', name: 'Module 3: Hooks' },
  ];

  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold">Add Challenge Questions</h1>

      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          {/* Quiz Title */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Quiz Title</h2>
            <Textarea
              placeholder="Enter the quiz title here"
              className="w-full"
            />
          </div>

          {/* Module Selector */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Select Module</h2>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a module…" />
              </SelectTrigger>
              <SelectContent>
                {modules.map((mod) => (
                  <SelectItem key={mod.id} value={mod.id}>
                    {mod.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-medium">Question {idx + 1}</h3>
                <Textarea
                  placeholder="Enter the question text here"
                  className="w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Choice A" className="w-full" />
                  <Input placeholder="Choice B" className="w-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <Button className="w-full py-3 text-base" variant="primary">
            Submit Questions
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}