"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { Links } from "@/constants/link";
import { IoMdPulse } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full py-5 dark:bg-dark px-10">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Diplo
            </h1>
            <IoMdPulse
              className="text-3xl dark:text-white"
              aria-hidden="true"
            />
            
          </div>
        </Link>

        <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
          {Links.map((link) => {
            
            const {label, route} = link
            const isActive = (pathname.includes(route) && route.length > 1) 
            || pathname === route;
            
            return (
              <Link
                href={route}
                key={link.label}
                className={ isActive ? "px-3 py-1 bg-sky-400 text-white rounded-md" : "text-sky-400 rounded-none bg-transparent cursor-pointer no-underline"}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex-1 justify-end flex gap-3 items-center">
           <ThemeToggle />
            <MobileMenu /> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;