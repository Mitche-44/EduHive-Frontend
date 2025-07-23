import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 border border-gray-200 lg:hidden"
      aria-label="Toggle sidebar"
    >
      <Menu className="w-6 h-6 text-gray-800" />
    </button>
  );
}