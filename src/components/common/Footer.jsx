

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate newsletter subscription API call
    try {
      // Replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
      setSubmitMessage("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setSubmitMessage("Error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#A9A9A9] border-t border-indigo-700 mt-10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Layer: Contact Us, Quick Links, Follow Us */}
        <div className="flex flex-row flex-wrap justify-between gap-8 text-sm text-white mb-8">
          {/* Contact Us */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-300" aria-hidden="true" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-indigo-300" aria-hidden="true" />
                <a href="tel:+254700000000" className="hover:text-indigo-300 transition duration-300">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-indigo-300" aria-hidden="true" />
                <a href="mailto:info@eduhive.com" className="hover:text-indigo-300 transition duration-300">
                  info@eduhive.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <div className="flex space-x-12">
                <ul className="space-y-3">
                    <li>
                    <Link
                      to="/pricing"
                      className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                      aria-label="Pricing page"
                    >
                      Pricing
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                      aria-label="Resources page"
                    >
                      Resources
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/testimonials"
                      className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                      aria-label="Testimonials page"
                    >
                      Testimonials
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Follow Us */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <nav aria-label="Social media links">
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com/eduhive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 transition duration-300 focus:outline-none focus:text-indigo-300"
                  aria-label="Follow EduHive on Facebook"
                >
                  <Facebook className="w-6 h-6" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/eduhive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 transition duration-300 focus:outline-none focus:text-indigo-300"
                  aria-label="Follow EduHive on Twitter"
                >
                  <Twitter className="w-6 h-6" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com/eduhive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 transition duration-300 focus:outline-none focus:text-indigo-300"
                  aria-label="Follow EduHive on Instagram"
                >
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/company/eduhive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 transition duration-300 focus:outline-none focus:text-indigo-300"
                  aria-label="Follow EduHive on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Layer: Links, Logo & About, Newsletter */}
        <div className="flex flex-row flex-wrap justify-between gap-8 text-sm text-white border-t border-indigo-700 pt-8">
          {/* Links */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-white mb-3">Links</h4>
            <nav aria-label="Footer utility links">
              <div className="flex space-x-12">
                <a
                  href="#privacy"
                  className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                  aria-label="Privacy policy"
                >
                  Privacy
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#terms"
                  className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                  aria-label="Terms of service"
                >
                  Terms
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#support"
                  className="relative hover:text-indigo-300 transition duration-300 group focus:outline-none focus:text-indigo-300"
                  aria-label="Support page"
                >
                  Support
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-300 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>
            </nav>
 |         </div>

          {/* Logo & About */}
          <div className="min-w-[180px]">
            <Link
              to="/"
              className="flex items-center space-x-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="EduHive Home"
            >
              {/* Uncomment and update with your logo path */}
              {/* <img src="/assets/logo.png" alt="EduHive Logo" className="h-10 w-10" /> */}
              <span className="text-2xl font-bold text-white">EduHive</span>
            </Link>
            <p className="text-indigo-200">
              Empowering learners with accessible, high-quality educational resources for the future.
            </p>
          </div>

          {/* Newsletter */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-white mb-3">Newsletter</h4>
            <p className="text-indigo-200 mb-4">Subscribe to get the latest updates and offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-indigo-800 text-white placeholder-indigo-300"
                required
                aria-required="true"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold text-sm shadow-md"
                >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>

            </form>
            {submitMessage && (
              <p
                className={`mt-2 text-sm ${
                  submitMessage.includes("successfully") ? "text-green-300" : "text-red-300"
                }`}
                role="alert"
              >
                {submitMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-indigo-700 text-center text-indigo-200 text-xs py-4">
        © {new Date().getFullYear()} EduHive. All rights reserved.
      </div>
    </footer>
  );
}