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
          initial={{ y: 0, x: "-50%", scale: 0.8, opacity: 0 }}
          animate={{ y: 0, x: "-50%", scale: 1, opacity: 1 }}
          exit={{ y: 0, x: "-50%", scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 md:bottom-auto md:top-8 left-1/2 z-[100] w-max max-w-[95vw]"
        >
          {/* Changed to flex-row for both mobile and desktop to create a pill/dock look */}
          <nav className="flex flex-row items-center p-1 md:p-2 bg-white border-[3px] md:border-4 border-[var(--text-main)] rounded-full brutal-shadow overflow-hidden">
            {links.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative shrink-0 text-center px-3 py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-base font-black uppercase transition-all rounded-full ${isActive ? 'text-white' : 'text-black hover:bg-gray-100'}`}
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
