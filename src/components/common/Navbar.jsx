

import { Link } from 'react-router-dom';
import { Home, Users, DollarSign, BookOpen, MessageCircle, UserPlus, LogIn, Send} from 'lucide-react';
// import logo from '/path-to-your-logo.png';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-[#A9A9A9] border-t border-indigo-700 mt-10">
      <div className= "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* Uncomment and update with your logo path */}
          {/* <img src={logo} alt="EduHive Logo" className="h-12 w-auto" /> */}
          <span className="text-2xl font-bold text-white">EduHive</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-white text-sm font-medium">
          <Link
            to="/"
            className="px-3 py-2 hover:text-blue-400 transition flex items-center gap-2 relative group"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
          <Link to="/team" className="px-3 py-2 hover:text-blue-400 transition flex items-center gap-2">
            <Users size={14} />
            <span>Team</span>
          </Link>
          <Link to="/pricing" className="px-3 py-2 hover:text-blue-400 transition flex items-center gap-2">
            {/* <DollarSign size={14} /> */}
            <span>Pricing</span>
          </Link>
          <Link to="/resources" className="px-3 py-2 hover:text-blue-400 transition flex items-center gap-2">
            {/* <BookOpen size={14} /> */}
            <span>Resources</span>
          </Link>
          <Link to="/testimonials" className="px-3 py-2 hover:text-blue-400 transition flex items-center gap-2">
            <MessageCircle size={14} />
            <span>Testimonials</span>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2">
              <UserPlus size={14} />
              <span>Register</span>
            </Button>
          </Link>
          <Link to="/signin">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2">
              <LogIn size={14} />
              <span>Sign In</span>
            </Button>
          </Link>
          <Link to="/quote">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2">
              <Send size={14} />
              <span>GET QUOTE</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;