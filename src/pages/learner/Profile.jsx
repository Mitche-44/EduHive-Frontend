import React from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const SearchBar = () => (
  <div className="w-full">
    <Input
      placeholder="Search for learners, courses…"
      className="w-full py-3 text-base"
    />
  </div>
);

const ProfileHeader = () => (
  <Card className="w-full">
    <CardContent className="p-8">
      <div className="flex items-center justify-between gap-8">
        {/* Left: Avatar + Info */}
        <div className="flex items-center space-x-8">
          {/* Avatar */}
          <div className="rounded-full ring-4 ring-blue-400 p-1">
            <img
              src="https://i.pravatar.cc/150?u=dennis"
              alt="Dennis’s avatar"
              className="w-32 h-32 rounded-full"
            />
          </div>

          {/* Name + Handle + Joined Info */}
          <div>
            <p className="text-base text-gray-500 mb-1">@denniswachira</p>
            <h1 className="text-3xl font-extrabold mb-2">Dennis Wachira</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Joined 2 days ago · last seen in the past day</span>
            </div>
          </div>
        </div>

        {/* Right: Blue Accent Shape */}
        <div className="h-40 w-20 bg-blue-400 rounded-l-full" />
      </div>
    </CardContent>
  </Card>
);

const AboutSection = () => (
  <div className="w-full space-y-6">
    {/* Tab Label */}
    <nav className="border-b">
      <button className="pb-3 border-b-2 border-blue-500 text-xl font-semibold">
        About
      </button>
    </nav>

    {/* Bio + Follow */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Bio */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-2">Bio</h2>
        <p className="text-base leading-relaxed text-gray-700">
          Hello, I’m Dennis—a front-end enthusiast who loves crafting clean,
          responsive interfaces. My favorite tools are React, Tailwind CSS,
          and Python on the backend.
        </p>
      </div>

      {/* Follow Button */}
      <Button className="py-2 px-6 text-base">Follow</Button>
    </div>
  </div>
);

export default function Profile() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      <SearchBar />
      <ProfileHeader />
      <AboutSection />
    </main>
  );
}
