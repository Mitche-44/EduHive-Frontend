

import { Link, useNavigate } from 'react-router-dom';
import { Home, Users, DollarSign, BookOpen, MessageCircle, UserPlus, LogIn, Send} from 'lucide-react';
// import logo from '/path-to-your-logo.png';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => navigate("/register");
  const handleSignInClick = () => navigate("/signin");
  const handleQuoteClick = () => navigate("/quote");
  
  return (
    <header className="fixed top-0 left-0 w-full sticky top-0 z-50 bg-[#1A2A44] text-[#F9FAFB] border-b border-[#005F84]">
      <div className= "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:px-6 lg:px-8 gap-8">
        {/* Logo */}
        <div className="flex items-center space-x-12">
          {/* Uncomment and update with your logo path */}
          {/* <img src={logo} alt="EduHive Logo" className="h-12 w-auto" /> */}
          <span className="text-2xl font-bold text-[#F9FAFB]">EduHive</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center text-sm [#F9FAFB] font-semibold medium">
          <Link
            to="/"className="px-3 py-2 hover:text-[#274AB3] transition flex items-center gap-2 duration-300">
            <Home size={14} />
            Home
            <span className="bg-[#274AB3] transform hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/team" className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300 flex items-center gap-2">
            <Users size={14} />
            Team
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            to="/pricing"
            className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/resources" className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300">
            Resources
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#274AB3] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/testimonials" className="relative px-4 py-2 hover:text-[#274AB3] transition duration-300 flex items-center gap-2">
            <MessageCircle size={14} />
            Testimonials
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#005F84] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#005F84] hover:from-[#D6B588] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            <UserPlus size={14} className="mr-2" />
            Register
          </Button>
          <Button
            onClick={handleSignInClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#005F84] hover:from-[#D6B588] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            <LogIn size ={14} className="mr-2" />
            Sign In
          </Button>
          <Button
            onClick={handleQuoteClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#005F84] hover:from-[#D6B588] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            <Send size={14} className="mr-2" />
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

