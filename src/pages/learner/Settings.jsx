

import React from 'react';
import { Input } from '@shadcn/ui/input';
import { Card, CardContent } from '@shadcn/ui/card';
import { Button } from '@shadcn/ui/button';
import { Bell } from 'lucide-react';

export default function Settings() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Greeting & Date */}
        <div>
          <h1 className="text-2xl font-bold">Welcome, Dennis!</h1>
          <p className="text-sm text-gray-500">Tue 07 June 2022</p>
        </div>

        {/* Search */}
        <div className="flex-1 px-8">
          <Input
            placeholder="Search…"
            className="w-full py-2 text-base"
          />
        </div>

        {/* Notifications & Avatar */}
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <img
            src="https://i.pravatar.cc/40?u=dennis"
            alt="Dennis’s avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Dennis Wachira</h2>
          <p className="text-sm text-gray-500">wachira.dennis22@gmail.com</p>
        </div>
        <Button className="py-1 px-4 text-sm">Edit</Button>
      </div>

      {/* Settings Form Card */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          {/* Full Name Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="nickName"
              >
                Nick Name
              </label>
              <Input
                id="nickName"
                placeholder="Enter your nickname"
                className="w-full"
              />
            </div>
          </div>

        
        </CardContent>
      </Card>
    </main>
  );
}
