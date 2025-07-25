import React from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <main className="p-6 space-y-6 max-w-6xl mx-auto">
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
              <div className="rounded-full border-4 border-blue-400 p-1">
                <img
                  src="https://i.pravatar.cc/150?u=dennis"
                  alt="Dennis’s avatar"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">@denniswachira</p>
                <h1 className="text-2xl font-bold">Dennis Wachira</h1>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined 2 days ago · last seen in the past day</span>
                </div>
              </div>
            </div>

            {/* Right: Blue Accent Shape */}
            <div className="h-32 w-16 bg-blue-400 rounded-l-full" />
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <div className="w-full max-w-3xl space-y-4">
        <nav className="border-b">
          <button className="pb-2 border-b-2 border-blue-500 text-lg font-medium">
            About
          </button>
        </nav>

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold">Bio</h2>
            <p className="mt-2 text-sm text-gray-700">
              Hello Dennis here, I love programming and designing websites. <br />
              My favourite language is React and Python.
            </p>
          </div>
          <Link to="/learner/settings">
            <Button variant="outline">Edit Profile</Button>
          </Link>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full max-w-3xl space-y-4">
        <h2 className="text-base font-semibold">Contact Information</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>wachira.dennis22@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span>Preferred Language: English</span>
          </div>
        </div>
      </div>
    </main>
  );
}
