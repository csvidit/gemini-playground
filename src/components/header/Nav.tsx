"use client";

import Link from "next/link";
import NavItem from "./NavItem";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";

export const links = [
  { index: 0, key: "nav-chat", href: "/chat", label: "Chat" },
  { index: 1, key: "nav-github", href: "https://github.com/csvidit/gemini-playground", label: "Github Repo" },
];

const Nav = (props: {className? : string;}) => {
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  return (
    <motion.nav layout layoutRoot className={props.className}>
      <motion.ul className="flex flex-col lg:flex-row">
        {links.map(({ index, key, href, label }) => (
          <NavItem
            index={index}
            key={key}
            href={href}
            hoveredButtonId={hoveredButtonId}
            setHoveredButtonId={setHoveredButtonId}
          >
            {label}
          </NavItem>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Nav;
