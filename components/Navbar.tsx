"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Build", href: "/build" },
    { name: "Research", href: "/research" },
    { name: "Lead", href: "/lead" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 300) {
      setIsVisible(true);
    } else {
      if (latest > lastScrollY && latest > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    setLastScrollY(latest);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 md:top-8 left-1/2 z-[100] w-max max-w-[95vw]"
        >
          <nav className="flex flex-col md:flex-row items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-white border-[3px] md:border-4 border-[var(--text-main)] rounded-2xl md:rounded-full brutal-shadow overflow-x-hidden md:overflow-x-auto hide-scrollbar w-max max-w-full">
            {links.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative w-full text-center px-4 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-black uppercase transition-all rounded-full ${isActive ? 'text-white' : 'text-black hover:bg-gray-100'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarIndicator"
                      className="absolute inset-0 bg-[var(--primary-accent)] rounded-full border-2 border-[var(--text-main)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 tracking-widest whitespace-nowrap block w-full">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
