import React, { useState } from "react";
import { Search, Users } from "lucide-react";

const forumsData = [
  {
    id: 1,
    icon: "🧬",
    title: "General",
    description: "Announcements, resources, and interesting discussions",
    lastPost: "an hour ago by Enock Cheruiyot",
    recentContributors: "Arnold Wainaina, Kennedy Odero, Chance Oyugi",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Getting Started",
    description: "The first stop for new EduHive learners",
    lastPost: "2 hours ago by Mitchelle Ngetich",
    recentContributors: "Mitchelle Ngetich, Dennis Wachira, Natasha Onsongo",
  },
];

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForums = forumsData.filter((forum) =>
    `${forum.title} ${forum.description} ${forum.recentContributors}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Discussions Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold mb-2">Discussions</h1>
          <p className="text-gray-600 text-sm">
            Discuss the EduHive platform & machine learning topics , this includes sharing feedback, asking questions, and more.
          </p>
        </div>
        <img
          src="https://www.kaggle.com/static/images/discussion/landing/header-light.svg"
          alt="Discussion Illustration"
          className="w-36 mt-6 md:mt-0"
        />
      </div>

      
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Forums
        </h2>

        {filteredForums.length > 0 ? (
          <div className="space-y-4">
            {filteredForums.map((forum) => (
              <div key={forum.id} className="flex justify-between items-start border-b pb-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold">
                      {forum.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{forum.title}</h3>
                    <p className="text-sm text-gray-600">{forum.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      last <span className="text-blue-600">post</span> {forum.lastPost}
                    </p>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-600 hidden sm:block">
                  <p>Recent topics by</p>
                  <p>{forum.recentContributors}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No discussions match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Community;
