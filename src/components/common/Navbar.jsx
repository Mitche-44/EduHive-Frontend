

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
    <header className="bg-[#1A2A44] text-[#F9FAFB] py-6">
      <div className= "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* Uncomment and update with your logo path */}
          {/* <img src={logo} alt="EduHive Logo" className="h-12 w-auto" /> */}
          <span className="text-2xl font-bold text-[#F9FAFB]">EduHive</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8 text-[#F9FAFB] text-base font-semibold">
          <Link
            to="/"
            className="relative px-4 py-2 hover:text-[#F97316] transition duration-300">
            <Home size={16} />
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          
          </Link>
          <Link to="/team" className="relative px-4 py-2 hover:text-[#F97316] transition duration-300 flex items-center gap-2">
            <Users size={16} />
            Team
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            to="/pricing"
            className="relative px-4 py-2 hover:text-[#F97316] transition duration-300"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/resources" className="relative px-4 py-2 hover:text-[#F97316] transition duration-300">
            {/* <BookOpen size={14} /> */}
            Resources
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/testimonials" className="relative px-4 py-2 hover:text-[#F97316] transition duration-300 flex items-center gap-2">
            <MessageCircle size={16} />
            Testimonials
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#F97316] hover:from-[#F97316] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </Button>
          <Button
            onClick={handleSignInClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#F97316] hover:from-[#F97316] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Sign In
          </Button>
          <Button
            onClick={handleQuoteClick}
            className="bg-gradient-to-r from-[#1A2A44] to-[#F97316] hover:from-[#F97316] hover:to-[#1A2A44] text-[#F9FAFB] text-sm font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;