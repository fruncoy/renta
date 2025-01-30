import React, { useState, createContext, useContext } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LayoutDashboard, BarChart2, Car, Users, Calendar, Wallet, Settings } from "lucide-react";
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}
interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;
  return <SidebarContext.Provider value={{
    open,
    setOpen,
    animate
  }}>
      {children}
    </SidebarContext.Provider>;
};
export const Sidebar = ({
  children,
  open,
  setOpen,
  animate
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>;
};
export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props as React.ComponentProps<"div">} />
    </>;
};
export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const {
    open,
    setOpen,
    animate
  } = useSidebar();
  return <motion.div className={cn("h-full px-4 py-4 hidden md:flex md:flex-col bg-white border-r border-gray-100 w-[300px] flex-shrink-0", className)} animate={{
    width: animate ? open ? "300px" : "60px" : "300px"
  }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} {...props}>
      {children}
    </motion.div>;
};
export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const {
    open,
    setOpen
  } = useSidebar();
  return <>
      <div className={cn("hidden")} {...props} />
      <AnimatePresence>
        {open && <motion.div initial={{
        x: "-100%",
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} exit={{
        x: "-100%",
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: "easeInOut"
      }} className={cn("fixed h-full w-full inset-0 bg-white p-10 z-[100] flex flex-col justify-between md:hidden", className)}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between bg-[#162171] px-6 py-4 border-2 border-red-500">
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold italic">ONFREY</span>
                </div>
                <button className="text-white cursor-pointer" onClick={() => setOpen(!open)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const {
    open,
    animate
  } = useSidebar();
  return <Link to={link.href} className={cn("flex items-center justify-start gap-2 group/sidebar py-2 hover:text-[#162171]", className)} {...props}>
      {link.icon}
      <motion.span animate={{
      display: animate ? open ? "inline-block" : "none" : "inline-block",
      opacity: animate ? open ? 1 : 0 : 1
    }} className="text-[#162171] text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
        {link.label}
      </motion.span>
    </Link>;
};