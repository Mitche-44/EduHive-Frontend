// /home/enock/Development/code/phase_5/EduHive-Frontend/src/pages/learner/Settings.jsx

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <main className="mx-auto max-w-4xl p-8 space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Dennis!</h1>
          <p className="text-sm text-gray-500">Tue 07 June 2022</p>
        </div>

        <div className="flex-1 px-8">
          <Input
            placeholder="Search…"
            className="w-full py-2 text-base"
            disabled={!isEditing}
          />
        </div>

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
        <Button
          className="py-1 px-4 text-sm"
          variant={isEditing ? 'destructive' : 'default'}
          onClick={toggleEdit}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      {/* Settings Form Card */}
      <Card className="w-full">
        <CardContent className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                className="w-full"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="nickName" className="block text-sm font-medium mb-2">
                Nick Name
              </label>
              <Input
                id="nickName"
                placeholder="Enter your nickname"
                className="w-full"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-2">
                Gender
              </label>
              <Select disabled={!isEditing}>
                <SelectTrigger id="gender" className="w-full">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-2">
                Country
              </label>
              <Select disabled={!isEditing}>
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium mb-2">
                Language
              </label>
              <Select disabled={!isEditing}>
                <SelectTrigger id="language" className="w-full">
                  <SelectValue placeholder="Select your language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="swahili">Swahili</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Contact
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254 712 345 678"
                className="w-full"
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-4">
            <Input
              type="checkbox"
              id="primaryEmail"
              className="h-4 w-4"
              checked
              disabled={!isEditing}
            />
            <label htmlFor="primaryEmail" className="text-sm">
              My email address:{' '}
              <span className="font-medium">
                wachira.dennis22@gmail.com
              </span>{' '}
              (1 month ago)
            </label>
          </div>

          <div className="pt-4">
            <Button className="px-6 py-2 text-base" disabled={!isEditing}>
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
