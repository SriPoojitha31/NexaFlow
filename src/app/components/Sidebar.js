"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiHome, FiUser, FiSettings, FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{ width: isOpen ? 250 : 70 }}
      className="h-screen bg-gray-900 text-white flex flex-col shadow-lg"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-xl">
        <FiMenu />
      </button>
      <nav className="flex flex-col gap-4 mt-4">
        <SidebarItem href="/" icon={<FiHome />} text="Home" isOpen={isOpen} />
        <SidebarItem href="/dashboard" icon={<FiLayers />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem href="/workflows" icon={<FiZap />} text="Workflows" isOpen={isOpen} />
        <SidebarItem href="/ai-insightful" icon={<FiTrendingUp />} text="AI Insights" isOpen={isOpen} />
        <SidebarItem href="/process-automation" icon={<FiLayers />} text="Automation" isOpen={isOpen} />
        <SidebarItem href="/profile" icon={<FiUser />} text="Profile" isOpen={isOpen} />
        <SidebarItem href="/settings" icon={<FiSettings />} text="Settings" isOpen={isOpen} />
      </nav>
    </motion.div>
  );
}

function SidebarItem({ href, icon, text, isOpen }) {
  return (
    <Link href={href} className="flex items-center p-3 hover:bg-gray-700 transition-all">
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="ml-4">{text}</span>}
    </Link>
  );
}
