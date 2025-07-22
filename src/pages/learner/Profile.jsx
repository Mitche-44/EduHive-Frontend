
import React from 'react';
import { Input } from '@shadcn/ui/input';
import { Card, CardContent } from '@shadcn/ui/card';
import { Calendar } from 'lucide-react';

export default function Profile() {
  return (
    <main className="p-6 space-y-6">
      {/* Search Bar */}
      <div className="max-w-xl">
        <Input placeholder="Search" className="w-full" />
      </div>

      {/* Profile Header Card */}
      <Card className="w-full max-w-3xl">
        <CardContent>
          <div className="flex items-center justify-between">
            {/* Left: Avatar + Info */}
            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <div className="rounded-full border-4 border-blue-400 p-1">
                <img
                  src="/path/to/avatar.jpg"
                  alt="Dennis’s avatar"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              {/* Name  and info */}
              <div>
                <p className="text-sm text-gray-500">@denniswachira</p>
                <h1 className="text-2xl font-bold">Dennis Wachira</h1>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined 2 days ago · last seen in the past day</span>
                </div>
              </div>
            </div>

            {/*  Blue Accent Shape */}
            <div className="h-32 w-16 bg-blue-400 rounded-l-full" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
