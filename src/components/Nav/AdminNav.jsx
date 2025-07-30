import { Link, useNavigate } from 'react-router-dom';
import { Home, Users, UserPlus, LogIn, Send, Badge, BadgeCheck} from 'lucide-react';
// import logo from '/path-to-your-logo.png';
import { Button } from "@/components/ui/button";

const AdminNav = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A2A44] text-[#F9FAFB] border-b border-[#005F84]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:px-6 lg:px-8 gap-8">
        {/* Logo */}
        <div className="flex items-center space-x-12">
          {/* Uncomment and update with your logo path */}
          {/* <img src={logo} alt="EduHive Logo" className="h-12 w-auto" /> */}
          <span className="text-2xl font-bold text-[#F9FAFB]">EduHive</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center text-sm text-[#F9FAFB] font-semibold">
          <Link
            to="/"
            className="relative px-3 py-2 hover:text-[#274AB3] transition duration-300 flex items-center gap-2"
          >
            <Home size={14} />
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link 
            to="/admin/learners" 
            className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300 flex items-center gap-2"
          >
            <Users size={14} />
            learners
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link 
            to="/admin/modules" 
            className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300"
          >
            Modules
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link 
            to="/admin/paths" 
            className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300 flex items-center gap-2"
          >
            <BadgeCheck size={14} />
        Paths 
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#005F84] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-[#F9FAFB] hover:text-[#274AB3] transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;