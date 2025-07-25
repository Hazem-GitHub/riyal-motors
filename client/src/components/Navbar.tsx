"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { getNavbar } from "@/data/loaders";
import { notFound } from "next/navigation";
import Image from "next/image";
import LangSwitcher from "./LangSwitcher";

// const useRelume = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width: 991px)");
//   const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
//   const openOnMobileDropdownMenu = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };
//   const openOnDesktopDropdownMenu = () => {
//     !isMobile && setIsDropdownOpen(true);
//   };
//   const closeOnDesktopDropdownMenu = () => {
//     !isMobile && setIsDropdownOpen(false);
//   };
//   const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
//   const animateMobileMenuButtonSpan = isMobileMenuOpen
//     ? ["open", "rotatePhase"]
//     : "closed";
//   const animateDropdownMenu = isDropdownOpen ? "open" : "close";
//   const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
//   return {
//     toggleMobileMenu,
//     openOnDesktopDropdownMenu,
//     closeOnDesktopDropdownMenu,
//     openOnMobileDropdownMenu,
//     animateMobileMenu,
//     animateMobileMenuButtonSpan,
//     animateDropdownMenu,
//     animateDropdownMenuIcon,
//   };
// };



export function Navbar({
  data
}: {
    data: {
      isExternal: boolean;
      label: string;
      url: string;
      id: string;
    }[];
}) {
  // const useActive = useRelume();
  console.log('NAV', data)
  return (
    <section
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex w-full max-w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/white-logo.png"
            alt="Logo image"
            width={150}
            height={50}
            className="h-10 w-auto invert"
          />
        </Link>
        <div className="flex gap-5">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center lg:flex-row">
              {
                data?.length && data?.map((item: {
                  isExternal: boolean;
                  label: string;
                  url: string;
                  id: string;
                }) => (
                  <NavigationMenuLink key={item.id} href={item.url}>
                    {item.label}
                  </NavigationMenuLink>
                ))
              }
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
          </NavigationMenu>
          <LangSwitcher />
        </div>
      </div>
    </section>
  );
}
