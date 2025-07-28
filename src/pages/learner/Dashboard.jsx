import React, { useState, useEffect } from 'react';
import { 
  Search, Bell, Settings, MessageCircle, User, ChevronRight, Play, Clock, 
  Award, BookOpen, Target, TrendingUp, Calendar, Star, Download, Share2,
  CheckCircle, BarChart3, Zap, Filter, ArrowRight, PlayCircle, Users,
  Globe, Shield, Briefcase, GraduationCap, Trophy, Heart
} from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";

// Enhanced Course Card with Kaggle-style features
const CourseCard = ({ title, instructor, progress, thumbnail, category, duration, rating, students, difficulty, isFree, isNew, skills }) => (
  <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-[#155dfc]/20 transition-all duration-300">
    <div className="relative aspect-video bg-gradient-to-br from-[#155dfc] to-[#0d47d1] overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Course badges */}
      <div className="absolute top-2 left-2 flex gap-1">
        {isFree && (
          <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded">FREE</span>
        )}
        {isNew && (
          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded animate-pulse">NEW</span>
        )}
        <span className={`px-2 py-0.5 text-xs font-medium rounded ${
          difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
          difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {difficulty}
        </span>
      </div>
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <PlayCircle className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Duration */}
      <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-white text-xs">
        {duration}
      </div>
    </div>
    
    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <span className="px-2 py-0.5 bg-[#155dfc]/10 text-[#155dfc] text-xs font-medium rounded uppercase tracking-wide">
          {category}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-gray-600">{rating}</span>
        </div>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight line-clamp-2 group-hover:text-[#155dfc] transition-colors">
        {title}
      </h3>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gradient-to-br from-[#155dfc] to-[#0d47d1] rounded-full flex items-center justify-center">
          <User className="w-3 h-3 text-white" />
        </div>
        <div>
          <span className="text-xs font-medium text-gray-800">{instructor}</span>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Users className="w-2 h-2" />
              {students}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-2 h-2" />
              {duration}
            </span>
          </div>
        </div>
      </div>
      
      {/* Skills learned */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 mb-1">Skills:</p>
        <div className="flex flex-wrap gap-1">
          {skills?.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
              {skill}
            </span>
          ))}
          {skills?.length > 3 && (
            <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
              +{skills.length - 3}
            </span>
          )}
        </div>
      </div>
      
      {/* Progress section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-[#155dfc] h-1.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-[#155dfc] hover:bg-[#0d47d1] text-white py-2 px-3 rounded font-medium text-xs transition-colors flex items-center justify-center gap-1">
            {progress > 0 ? 'Continue' : 'Start'}
            <ArrowRight className="w-3 h-3" />
          </button>
          <button className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
            <Heart className="w-3 h-3 text-gray-400 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Learning Path Component
const LearningPath = ({ title, description, courses, completedCourses, estimatedTime, difficulty }) => (
  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md hover:border-[#155dfc]/20 transition-all duration-300">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h3 className="font-semibold text-base text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {courses} courses
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {estimatedTime}
          </span>
          <span className={`px-2 py-0.5 rounded text-xs ${
            difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
            difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {difficulty}
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold text-gray-900">{completedCourses}/{courses}</div>
        <div className="text-xs text-gray-500">Done</div>
      </div>
    </div>
    
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
      <div 
        className="bg-[#155dfc] h-1.5 rounded-full transition-all duration-500" 
        style={{ width: `${(completedCourses / courses) * 100}%` }}
      ></div>
    </div>
    
    <button className="w-full bg-[#155dfc] hover:bg-[#0d47d1] text-white py-2.5 px-4 rounded font-medium text-sm transition-colors">
      Continue Path
    </button>
  </div>
);

// Achievement Card
const AchievementCard = ({ title, description, icon: Icon, earned, progress, total }) => (
  <div className={`p-4 rounded-lg border transition-all duration-300 ${
    earned 
      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
      : 'bg-gray-50 border-gray-200'
  }`}>
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        earned 
          ? 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white' 
          : 'bg-gray-300 text-gray-500'
      }`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 text-sm">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
    {!earned && (
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Progress</span>
          <span>{progress}/{total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-[#155dfc] h-1 rounded-full" 
            style={{ width: `${(progress / total) * 100}%` }}
          ></div>
        </div>
      </div>
    )}
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Dr. Angela Yu",
      progress: 15,
      thumbnail: "/api/placeholder/400/225",
      category: "Web Development",
      duration: "65h",
      rating: 4.8,
      students: "850K",
      difficulty: "Beginner",
      isFree: true,
      isNew: false,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "Kirill Eremenko",
      progress: 0,
      thumbnail: "/api/placeholder/400/225",
      category: "Data Science",
      duration: "44h",
      rating: 4.9,
      students: "1.2M",
      difficulty: "Intermediate",
      isFree: false,
      isNew: true,
      skills: ["Python", "R", "Machine Learning", "Data Analysis", "Statistics"]
    },
    {
      title: "The Complete 2024 Flutter Development Bootcamp",
      instructor: "Dr. Angela Yu",
      progress: 32,
      thumbnail: "/api/placeholder/400/225",
      category: "Mobile Development",
      duration: "31h",
      rating: 4.7,
      students: "300K",
      difficulty: "Intermediate",
      isFree: true,
      isNew: false,
      skills: ["Flutter", "Dart", "iOS", "Android", "Firebase"]
    }
  ];

  const learningPaths = [
    {
      title: "Full-Stack Web Developer",
      description: "Master both frontend and backend development with modern technologies",
      courses: 8,
      completedCourses: 3,
      estimatedTime: "6 months",
      difficulty: "Intermediate"
    },
    {
      title: "Data Science Professional",
      description: "Learn data analysis, machine learning, and statistical modeling",
      courses: 6,
      completedCourses: 1,
      estimatedTime: "4 months", 
      difficulty: "Advanced"
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first course", icon: Trophy, earned: true, progress: 1, total: 1 },
    { title: "Dedicated Learner", description: "Study for 7 days straight", icon: Target, earned: false, progress: 3, total: 7 },
    { title: "Skill Collector", description: "Master 5 different skills", icon: Award, earned: false, progress: 2, total: 5 },
  ];

  const upcomingDeadlines = [
    { title: "Web Development Assignment", dueDate: "Tomorrow", priority: "high" },
    { title: "Python Quiz", dueDate: "In 3 days", priority: "medium" },
    { title: "Project Submission", dueDate: "Next week", priority: "low" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Executive Header */}
      <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="lg:hidden p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors" />
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, skills, or topics..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#155dfc] focus:border-[#155dfc] bg-white text-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Filter className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-gray-900">Cole Palmer</div>
                <div className="text-xs text-gray-500">Premium</div>
              </div>
              <div className="w-8 h-8 bg-[#155dfc] rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Executive Welcome Section */}
          <div className="bg-gradient-to-r from-[#155dfc] to-[#0d47d1] rounded-lg p-6 lg:p-8 text-white mb-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-100 text-sm font-medium mb-3">
                <Globe className="w-4 h-4" />
                PROFESSIONAL LEARNING PLATFORM
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-3">
                Welcome back, Cole 👋
              </h1>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Continue building expertise with industry-leading courses designed for professionals.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-white text-[#155dfc] px-6 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Continue Learning
                </button>
                <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Set Goals
                </button>
              </div>
            </div>
          </div>

          {/* Executive Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-green-600 text-xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +2 this week
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#155dfc]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#155dfc]" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-green-600 text-xs flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    3 certificates
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Study Streak</p>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                  <p className="text-orange-600 text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    days straight
                  </p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Hours Learned</p>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                  <p className="text-[#155dfc] text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    this month
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#155dfc]/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#155dfc]" />
                </div>
              </div>
            </div>
          </div>

          {/* Learning Paths */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Learning Paths</h2>
                <p className="text-gray-600 text-sm">Structured curricula for professional growth</p>
              </div>
              <button className="text-[#155dfc] font-medium hover:text-[#0d47d1] flex items-center gap-1 text-sm">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {learningPaths.map((path, index) => (
                <LearningPath key={index} {...path} />
              ))}
            </div>
          </div>

          {/* Continue Learning */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                <p className="text-gray-600 text-sm">Resume your progress</p>
              </div>
              <button className="text-[#155dfc] font-medium hover:text-[#0d47d1] flex items-center gap-1 text-sm">
                See All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
                <p className="text-gray-600 text-sm">Your learning milestones</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </div>
        </main>

        {/* Executive Right Sidebar */}
        <aside className="hidden xl:block w-72 bg-white border-l border-gray-200 p-5">
          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#155dfc] rounded-lg mx-auto mb-3 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Professional Dashboard</h3>
            <p className="text-sm text-gray-600 mb-3">Track your learning progress</p>
            <div className="flex justify-center gap-2">
              <button className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Settings size={14} />
              </button>
              <button className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <MessageCircle size={14} />
              </button>
              <button className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 size={14} />
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="mb-6">
            <div className="bg-[#155dfc] rounded-lg p-5 text-white text-center">
              <div className="text-2xl font-bold mb-1">75%</div>
              <div className="text-sm opacity-90 mb-3">Overall Progress</div>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div className="bg-white h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Upcoming Deadlines</h3>
            <div className="space-y-2">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      deadline.priority === 'high' ? 'bg-red-500' :
                      deadline.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{deadline.title}</p>
                      <p className="text-xs text-gray-500">{deadline.dueDate}</p>
                    </div>
                  </div>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <button className="w-full bg-[#155dfc] hover:bg-[#0d47d1] text-white p-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Certificate
            </button>
            <button className="w-full border border-gray-200 text-gray-700 p-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Find Study Group
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;