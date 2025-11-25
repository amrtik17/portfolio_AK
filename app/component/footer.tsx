"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
    
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Amruta Khot. All Rights Reserved.
        </p>
    
    </footer>
  );
}
