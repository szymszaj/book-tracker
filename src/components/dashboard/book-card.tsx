"use client";

import { motion } from "framer-motion";
import { MoreVertical, Star, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: {
    title: string;
    author: string;
    progress: number;
    rating?: number;
    coverColor: string;
  };
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex gap-4">
        <div
          className={`w-20 h-28 rounded-lg bg-gradient-to-br ${book.coverColor} flex-shrink-0 shadow-md`}
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                {book.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {book.author}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>

          {book.rating && (
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < book.rating!
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300 dark:text-gray-700"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {book.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${book.progress}%` }}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
