"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeadLine() {
  const texts = ["I am Amruta 👋", "React Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-14 px-6 md:px-20 mt-20">
      
      {/* Left Side — Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/amruta img.jpg"
          alt="Amruta Photo"
          width={350}
          height={350}
          className="rounded-full shadow-xl object-cover border-4 border-purple-300"
        />
      </motion.div>
<motion.div 
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
       <h1 className="text-4xl md:text-4xl font-bold transition-all duration-500"> Hey there, {texts[index]} </h1>
        <p className="text-lg mt-4 text-gray-700 leading-relaxed">
          Front-End Developer skilled in React.js and Next.js, creating clean, modern, 
          and highly responsive web applications. Focused on writing high-quality code, 
          crafting reusable components, and delivering smooth UI/UX experiences.
        </p>

          {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/Amruta  Resume AP.pdf"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl 
                       shadow-lg hover:opacity-90 transition font-semibold text-lg"
          >
            📄 View Resume
          </a>
        </div>


      {/* Social Icons */}
        <div className="flex items-center gap-8 mt-8 text-3xl">
          
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/dkteamruta-khot-05794b217/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </Link>
       
          

        {/* GitHub */}
          <Link
            href="https://github.com/"
            target="_blank"
            className="text-gray-700 hover:text-black transition-transform hover:scale-110"
          >
            <FaGithub />
          </Link>

        </div>
      </motion.div>
    </section>
  );
}
