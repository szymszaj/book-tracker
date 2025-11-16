"use client";

import { motion } from "framer-motion";
import { BookOpen, BookMarked, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    label: "Books Read",
    value: "24",
    change: "+12%",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookMarked,
    label: "Pages Read",
    value: "6,432",
    change: "+23%",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    label: "Reading Time",
    value: "142h",
    change: "+8%",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    label: "Current Streak",
    value: "12 days",
    change: "Active",
    color: "from-green-500 to-green-600",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
