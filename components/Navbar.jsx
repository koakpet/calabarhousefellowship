"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Buttons from "./Buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen); // Toggles the state between true or false
  }

  return (
    <nav className="px-6 md:px-24 flex items-center justify-between">
      <div className="hidden md:flex gap-6 font-medium">
        <Link
          href="/about"
          className="border-b-4 border-transparent hover:border-red-700"
        >
          WHO WE ARE
        </Link>

        <Link
          href="/blog"
          className="border-b-4 border-transparent hover:border-red-700"
        >
          BLOG
        </Link>
      </div>

      <Link href="/" className="hidden md:block">
        <Image
          src="/images/logo.png"
          width="165"
          height="165"
          alt="Logo"
        ></Image>
      </Link>

      <Link href="/" className="block md:hidden">
        <Image src="/images/logo.png" width="90" height="90" alt="Logo"></Image>
      </Link>

      <div className="hidden md:block">
        <Buttons name="GIVE" />
      </div>

      <div className="md:hidden hamburger" onClick={handleClick}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  );
}
