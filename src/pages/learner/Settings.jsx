
import React from 'react';
import { Input } from '@shadcn/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@shadcn/ui/select';
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
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

            {/* Nick Name */}
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

            {/* Gender */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <Select>
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

            {/* Country */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <Select>
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

            {/* Language */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="language"
              >
                Language
              </label>
              <Select>
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

            {/* Phone Contact */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="phone"
              >
                Phone Contact
              </label>
              <Input
                id="phone"
                placeholder="+254 712 345 678"
                className="w-full"
                type="tel"
              />
            </div>
          </div>

          {/* My Email Address */}
          <div className="flex items-center space-x-3 mt-4">
            <Input
              type="checkbox"
              id="primaryEmail"
              className="h-4 w-4"
              checked
            />
            <label htmlFor="primaryEmail" className="text-sm">
              My email address: <span className="font-medium">wachira.dennis22@gmail.com</span> (1 month ago)
            </label>
          </div>

          {/* Save Changes */}
          <div className="pt-4">
            <Button className="px-6 py-2 text-base">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
