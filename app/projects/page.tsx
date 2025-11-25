"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-6 py-20 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }, // cards appear one after another
            },
          }}
        >
          {/* Project Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all p-8 w-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Factory Floor Monitoring & Asset Management System
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Built an interactive factory floor visualization system that
              displays real-time processes and dynamically positioned assets.
              Users can view detailed asset information, receive alerts, and
              rearrange assets using drag-and-drop functionality.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Interactive factory floor map</li>
              <li>Dynamic asset placement</li>
              <li>Clickable asset details</li>
              <li>Maintenance & security alerts</li>
              <li>Drag & drop asset repositioning</li>
              <li>Tree-view process–asset mapping</li>
              <li>Built with React & Next.js</li>
            </ul>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all p-8 w-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Portfolio Website
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              A clean and modern personal portfolio built with Next.js, Tailwind
              CSS, and reusable UI components. Includes smooth transitions and
              optimized routing.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fully responsive modern UI</li>
              <li>Smooth transitions & animations</li>
              <li>Reusable component structure</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
