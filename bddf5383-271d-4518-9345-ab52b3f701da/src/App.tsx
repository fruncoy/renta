import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import { Header } from "./components/ui/header";
import { LayoutDashboard, BarChart2, Car, Users, Calendar, Wallet, Settings, LogOut } from "lucide-react";
export function App() {
  const links = [{
    label: "Dashboard",
    href: "#",
    icon: <LayoutDashboard className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Analytics",
    href: "#",
    icon: <BarChart2 className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Cars",
    href: "#",
    icon: <Car className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Clients",
    href: "#",
    icon: <Users className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Bookings",
    href: "#",
    icon: <Calendar className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Finances",
    href: "#",
    icon: <Wallet className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }, {
    label: "Settings",
    href: "#",
    icon: <Settings className="text-[#162171] h-5 w-5 flex-shrink-0" />
  }];
  const [open, setOpen] = useState(false);
  return <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
      <Header onMenuClick={() => setOpen(!open)} isOpen={open} />
      <div className="flex flex-col md:flex-row bg-gray-50 w-full flex-1">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col gap-2">
                {links.map((link, idx) => <SidebarLink key={idx} link={link} />)}
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-4">
              <SidebarLink link={{
              label: "John Doe",
              href: "#",
              icon: <div className="h-7 w-7 flex-shrink-0 rounded-full bg-[#162171] border-2 border-red-500 flex items-center justify-center text-white text-sm font-medium">
                      JD
                    </div>
            }} />
              <SidebarLink link={{
              label: "Logout",
              href: "#",
              icon: <LogOut className="text-[#162171] h-5 w-5 flex-shrink-0" />
            }} />
            </div>
          </SidebarBody>
        </Sidebar>
        <Dashboard />
      </div>
    </div>;
}
const Dashboard = () => {
  return <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-gray-100 bg-white flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => <div key={`first-array-${i}`} className="h-20 w-full rounded-lg bg-gray-50 animate-pulse"></div>)}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => <div key={`second-array-${i}`} className="h-full w-full rounded-lg bg-gray-50 animate-pulse"></div>)}
        </div>
      </div>
    </div>;
};