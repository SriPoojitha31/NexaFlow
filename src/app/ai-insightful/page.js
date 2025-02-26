"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AIInsights() {
  const [insights, setInsights] = useState([
    { id: 1, title: "AI Model Performance", value: "92%" },
    { id: 2, title: "Execution Speed", value: "Fast" },
    { id: 3, title: "Error Rate", value: "Low" },
  ]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold">AI Insights</h1>

      {/* Insights List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 shadow-lg bg-white rounded-2xl"
          >
            <h2 className="text-xl font-semibold">{insight.title}</h2>
            <p className="text-lg text-blue-500">{insight.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
