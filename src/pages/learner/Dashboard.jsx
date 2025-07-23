import React from 'react';
import { Search, Bell, Settings, MessageCircle, User, ChevronRight } from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";

// Course Card Component
const CourseCard = ({ title, instructor, progress, thumbnail, category }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <div className="aspect-video bg-gray-900 relative">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="text-xs text-gray-600">{instructor}</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-600">
          <span>{category}</span>
          <span>{progress}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" 
            style={{ width: ${progress}% }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

// Progress Section Component
const ProgressSection = ({ courses }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Continue Learning</h2>
      <div className="flex gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  </div>
);

// Mentor Component
const MentorCard = ({ name, role, status }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <User size={16} />
      </div>
      <div>
        <div className="font-medium text-sm text-gray-900">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
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

// Main Dashboard Component
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
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50" />
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your course here..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell size={20} />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium hidden sm:block">Your Profile</span>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 text-white mb-8">
              <div className="max-w-xl">
                <div className="text-sm font-medium mb-2 opacity-90">PROGRAMMING COURSES</div>
                <h1 className="text-xl lg:text-2xl font-bold mb-4">
                  Enhance Your Skills With Professional Software Development Courses
                </h1>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2">
                  Join Now
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">5/15 Completed</div>
                <div className="font-semibold text-gray-900 mb-3">Foundations of Web Development</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">9/15 Completed</div>
                <div className="font-semibold text-gray-900 mb-3">Python Programming</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">2/8 Completed</div>
                <div className="font-semibold text-gray-900 mb-3">UI/UX Product Design</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>

            <ProgressSection courses={courses} />

            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
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
                        <div className="font-medium text-sm">{tutor.name}</div>
                        <div className="text-xs text-gray-500">{tutor.date}</div>
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
            </div>
          </main>

          <aside className="hidden xl:block w-80 bg-white border-l border-gray-200 p-6">
            <div className="text-center mb-8">
              <div className="text-sm text-blue-600 mb-2">Welcome, Cole Palmer!</div>
              <div className="text-xs text-gray-500 mb-4">Continue Your Journey And Remember Progress Not Perfection</div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
              <div className="flex justify-center gap-2">
                <button className="p-2 bg-gray-100 rounded-full">
                  <Settings size={16} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full">
                  <MessageCircle size={16} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full">
                  <User size={16} />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-6 text-white text-center">
                <div className="text-2xl font-bold mb-2">75%</div>
                <div className="text-sm opacity-90">Overall Progress</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Your Mentor</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">See All</button>
              </div>
              <div className="space-y-2">
                {mentors.map((mentor, index) => (
                  <MentorCard key={index} {...mentor} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

