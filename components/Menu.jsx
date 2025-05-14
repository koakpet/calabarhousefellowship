import React from "react";
import Link from "next/link";
import Buttons from "./Buttons";

function Menu() {
  return (
    <div className="h-screen hidden py-6 px-12 flex flex-col bg-red-50 text-2xl">
      <Link
        href="/about"
        className="my-3 hover:underline decoration-4 decoration-red-700"
      >
        Who we are
      </Link>
      <Link
        href="/blog"
        className="my-3 hover:underline decoration-4 decoration-red-700"
      >
        Blog
      </Link>
      <Link
        href="contact"
        className="my-3 hover:underline decoration-4 decoration-red-700"
      >
        Contact
      </Link>
      <div className="pt-24 pb-9 text-lg">
        TODAY, IF YOU HEAR HIS VOICE, DO NOT HARDEN YOUR HEART
      </div>
      <div className="text-lg">
        <Buttons name="GIVE" />
      </div>
    </div>
  );
}

export default Menu;
