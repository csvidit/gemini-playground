"use client";

import { RxShadowNone } from "react-icons/rx";
import Nav from "./Nav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Rotate as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PiSparkleDuotone } from "react-icons/pi";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <LayoutGroup>
      <motion.header layout layoutRoot className="fixed z-40 self-center w-full top-4 lg:top-6 lg:flex lg:flex-col">
        <motion.div
          layout
          layoutRoot={isTabletOrMobile ? false : true}
          className="flex flex-col self-center justify-center max-w-full gap-2 px-8 py-2 mx-4 border rounded-md lg:mx-6 bg-neutral-50 bg-opacity-60 border-neutral-800 backdrop-blur-md"
        >
          <motion.div
            layout
            className="flex flex-row items-center justify-between gap-2 lg:justify-start"
          >
            <Link
              href="/"
              className="flex flex-row items-center gap-1 text-lg text-blue-500 group"
            >
              <PiSparkleDuotone className="transition-transform duration-200 ease-in-out" />
              <p className="extended">Gemini Playground</p>
            </Link>
            {isTabletOrMobile ? (
              <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
            ) : (
              <Nav />
            )}
          </motion.div>
          {isTabletOrMobile && (
            <AnimatePresence mode="popLayout">
              {isOpen && <Nav />}
            </AnimatePresence>
          )}
        </motion.div>
      </motion.header>
    </LayoutGroup>
  );
};

export default Header;
