import Link from "next/link";
import Image from "next/image";
import Meeting from "./Meeting";

export default function Footer() {
  return (
    <footer className="pt-12 px-6 md:px-20 bg-neutral-100">
      <div className="border-y border-gray-400 py-9 flex justify-center gap-7 md:gap-20 text-lg font-bold text-slate-600">
        <Link href="/about" className="hover:text-black">
          WHO WE ARE
        </Link>
        <Link href="/testimonies" className="hover:text-black">
          TESTIMONIES
        </Link>
        <Link href="/contact" className="hover:text-black">
          CONTACT
        </Link>
        <Link href="/give" className="hover:text-black">
          GIVE
        </Link>
      </div>
      <div className="flex flex-col items-center gap-6 py-12 ">
        <Image
          src="/images/logo.png"
          width="150"
          height="150"
          alt="Logo"
        ></Image>
        <h1 className="text-2xl md:text-4xl font-thin text-center">
          TODAY, IF YOU HEAR HIS VOICE, DO NOT HARDEN YOUR HEART
        </h1>
      </div>
      <div className="border-t border-gray-400 py-9 text-slate-500">
        <p>
          <a
            href="https://www.google.com/maps/dir//4.9566827,8.3536656/@4.9565665,8.3535771,19z?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            ESUK ATU, OPPOSITE IMPERIAL COLLEGE, <br />
            SATELLITE TOWN, CALABAR
          </a>
        </p>
      </div>
    </footer>
  );
}
