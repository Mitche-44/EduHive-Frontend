// /src/components/common/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          EduHive
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {label}
            </a>
          ))}

          <div className="ml-4 flex items-center gap-2">
            <Button variant="outline" size="sm">
              Register
            </Button>
            <Button variant="default" size="sm">
              Sign Up
            </Button>
            <Button variant="secondary" size="sm">
              Get a Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-3 flex flex-col space-y-2">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Register
              </Button>
              <Button variant="default" size="sm">
                Sign Up
              </Button>
              <Button variant="secondary" size="sm">
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}