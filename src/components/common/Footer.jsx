// /src/components/layout/Footer.jsx
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Github,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-sm text-muted-foreground">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:justify-between">
        {/* Left: Branding & Contact */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-primary">EduHive</h2>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@eduhive.com" className="hover:underline">
              support@eduhive.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
          <a href="#support" className="hover:underline">Support</a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 hover:text-primary" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 hover:text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-primary" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-primary" />
          </a>
        </div>
      </div>

      <div className="text-center py-4 border-t mt-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} EduHive. All rights reserved.
      </div>
    </footer>
  );
}