"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-xl md:text-2xl font-bold">Amruta Khot</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/skills" className="hover:text-blue-600">Skill</Link>
          <Link href="/experience" className="hover:text-blue-600">Experience</Link>
           <Link href="/projects" className="hover:text-blue-600">Project</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Me</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-blue-600" onClick={() => setOpen(false)}>About</Link>
          <Link href="/experience" className="hover:text-blue-600" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact Me</Link>
        </nav>
      )}
    </header>
  );
}
