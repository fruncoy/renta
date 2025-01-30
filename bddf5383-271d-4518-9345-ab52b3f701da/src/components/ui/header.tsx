import React from "react";
import { Link } from "react-router-dom";
import { Bell, Ticket, Menu } from "lucide-react";
import { cn } from "../../lib/utils";
export function Header({
  onMenuClick,
  isOpen
}: {
  onMenuClick: () => void;
  isOpen: boolean;
}) {
  return <header className="h-16 border-b border-gray-100 bg-white flex items-center px-4 justify-between w-full">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-[#162171]" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <div className="h-8 w-8 bg-[#162171] flex md:hidden items-center justify-center text-white font-bold rounded-full border-2 border-red-500">
            ON
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span className="text-red-500 font-bold italic">ON</span>
            <span className="text-[#162171] font-bold italic">FREY</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-[#162171] hover:bg-gray-50 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#162171] hover:bg-gray-50 rounded-full">
          <Ticket className="h-5 w-5" />
          
        </button>
      </div>
    </header>;
}