import React from "react";
import { Search } from "lucide-react";

// Sample badge data
const badges = [
  {
    title: "Software Engineering",
    awarded: 20,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F304806%2F59cce1ab07a24566ba2d600e75fbf142%2FAward%20Image-20.svg?generation=1726517815415410&alt=media",
  },
  {
    title: "Python Coder",
    awarded: 141,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F09e1f99bdf3222934ad7769409ec3f6d%2FBadge-26.svg?generation=1727468059623106&alt=media",
  },
  {
    title: "Cyber Security",
    awarded: 1003,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F304806%2F2904e2b1e8acbde8d5ad13443579dfda%2FAward%20Image-18.svg?generation=1726517780511342&alt=media",
  },
  {
    title: "Machine Learning",
    awarded: 1469,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F3baaa158e1ff014b90edc64b110f69bb%2FAward%20Image.svg?generation=1727276946467793&alt=media",
  },
  {
    title: "UI Design",
    awarded: 14093,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F304806%2F21f090fa8230bc1b9c04277ab18e00f5%2FAward%20Image.svg?generation=1727209916661102&alt=media",
  },
  {
    title: "UX Design",
    awarded: 42,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F304806%2Fb4f4e39130efa963a447e045350fd6bf%2FAward%20Image-10.svg?generation=1726113967704528&alt=media",
  },
  {
    title: "Graphics Design",
    awarded: 8,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F67d3960ab66dd17a3b6b1546ca8c3acb%2FBadge-40.svg?generation=1727468269875327&alt=media",
  },
  {
    title: "Best Contributor",
    awarded: 115,
    image:
      "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F304806%2F5ef10fe7ebd4bd327af4a5ceaac8cf35%2FAward%20Image-23.svg?generation=1726517891877959&alt=media",
  },
];

const Badges = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-10 gap-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
        <img
          src="https://api.dicebear.com/7.x/thumbs/svg?seed=Jane"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Badges</h1>
      <p className="text-gray-600 max-w-2xl mb-8">
        From your first quiz to advanced challenges, EduHive rewards your
        progress with beautifully designed badges. Whether you're mastering a
        skill or supporting your peers, your efforts never go unnoticed.
      </p>

      {/* Award Section */}
      <h2 className="text-xl font-semibold mb-4">Award</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center justify-center"
          >
            <img
              src={badge.image}
              alt={badge.title}
              className="w-20 h-20 object-contain mb-3"
            />
            <button
              className="text-sm text-gray-700 border border-gray-300 px-3 py-1 rounded-full bg-transparent hover:bg-gray-100 mb-1 transition"
            >
              {badge.awarded.toLocaleString()} AWARDED
            </button>
            <span className="text-base font-semibold text-center">
              {badge.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
