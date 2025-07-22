
import React from 'react';
import { Input } from '@shadcn/ui/input';
import { Card, CardContent } from '@shadcn/ui/card';

export default function Profile() {
  return (
    <main className="p-6 space-y-6">
      {/* Search Bar */}
      <div className="max-w-xl">
        <Input placeholder="Search" className="w-full" />
      </div>

      
      <Card className="w-full max-w-3xl">
        <CardContent>
         
        </CardContent>
      </Card>
    </main>
  );
}

