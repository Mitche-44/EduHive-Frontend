import React from 'react';
import { ChevronRight, MessageCircle, User } from 'lucide-react';

// 🔹 Course Card
const CourseCard = ({ title, instructor, progress, thumbnail, category }) => (
  <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
    <div className="aspect-video bg-gray-900">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm text-gray-900 mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="text-xs text-gray-600">{instructor}</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-600">
          <span>{category}</span>
          <span>{progress}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

// 🔹 Continue Learning
const ProgressSection = ({ courses }) => (
  <section className="mb-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Continue Learning</h2>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <ChevronRight size={20} />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  </section>
);

// 🔹 Mentor Card
const MentorCard = ({ name, role, status }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <User size={16} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
      }`}>
        {status}
      </span>
      <button className="p-1 rounded-full hover:bg-gray-100">
        <MessageCircle size={14} />
      </button>
    </div>
  </div>
);

// ✅ Main Component
const Dashboard = () => {
  const courses = [
    {
      title: "Beginner's Guide To Becoming A Professional Front-End Developer",
      instructor: "Erick Mose",
      progress: 5,
      thumbnail: "/api/placeholder/300/200",
      category: "ADVANCED TOPICS"
    },
    {
      title: "Beginner's Guide To Becoming A Professional Web Designer",
      instructor: "Mervault Singh",
      progress: 9,
      thumbnail: "/api/placeholder/300/200",
      category: "ONLINE TIPS"
    },
    {
      title: "Fundamentals Of Software Development",
      instructor: "Asenath Kennedy",
      progress: 2,
      thumbnail: "/api/placeholder/300/200",
      category: "EXPLAINER"
    }
  ];

  const tutors = [
    { name: "Erick Mose", date: "24/7/2025", status: "BEGINNER" },
    { name: "Asenath Kennedy", date: "25/7/2025", status: "BEGINNER" }
  ];

  const mentors = [
    { name: "Morgan Albert", role: "Software Developer", status: "Online" },
    { name: "Erica Maria Margaret", role: "Software Developer", status: "Online" },
    { name: "Nelson Omlung", role: "Backend Engineer", status: "Online" },
    { name: "Fiona Kamp", role: "Product Manager", status: "Offline" },
    { name: "Williams Kastrel", role: "Research and Data Analyst", status: "Offline" }
  ];

  return (
    <div className="space-y-10 px-2 sm:px-4 lg:px-0 max-w-screen-xl mx-auto py-6">
      {/* 🟦 Hero Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 text-white">
        <div className="max-w-xl">
          <p className="text-sm font-medium mb-2 opacity-90">PROGRAMMING COURSES</p>
          <h1 className="text-2xl font-bold mb-4">
            Enhance Your Skills With Professional Software Development Courses
          </h1>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2">
            Join Now
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* 🟨 Progress Mini Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Foundations of Web Development", completed: "5/15", width: "33%" },
          { title: "Python Programming", completed: "9/15", width: "60%" },
          { title: "UI/UX Product Design", completed: "2/8", width: "25%" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">{item.completed} Completed</p>
            <p className="font-semibold text-gray-900 mb-3">{item.title}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: item.width }}></div>
            </div>
          </div>
        ))}
      </section>

      {/* 🟧 Learning Progress */}
      <ProgressSection courses={courses} />

      {/* 🟫 Tutors Section */}
      <section className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Tutors</h2>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">See All</button>
        </div>
        <div className="space-y-4">
          {tutors.map((tutor, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">{tutor.name}</p>
                  <p className="text-xs text-gray-500">{tutor.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 hidden sm:block">COURSE TYPE: {tutor.status}</span>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-600">
                  JOIN FOR FREE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟪 Mentors */}
      <section className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Mentor</h3>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">See All</button>
        </div>
        <div className="space-y-2">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
