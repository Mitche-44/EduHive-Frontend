const Footer = () => {
  return (
    <footer className="w-full bg-[#000066] border-t text-white font-semibold text-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} EduHive. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
