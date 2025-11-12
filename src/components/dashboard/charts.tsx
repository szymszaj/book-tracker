'use client'

import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Sample data for reading progress
const readingProgressData = [
  { month: 'Jan', pages: 450 },
  { month: 'Feb', pages: 620 },
  { month: 'Mar', pages: 580 },
  { month: 'Apr', pages: 720 },
  { month: 'May', pages: 650 },
  { month: 'Jun', pages: 890 },
]

// Sample data for books by category
const categoryData = [
  { name: 'Fiction', value: 12, color: '#3b82f6' },
  { name: 'Non-Fiction', value: 8, color: '#8b5cf6' },
  { name: 'Science', value: 5, color: '#ec4899' },
  { name: 'History', value: 4, color: '#10b981' },
  { name: 'Biography', value: 3, color: '#f59e0b' },
]

// Sample data for reading activity
const activityData = [
  { day: 'Mon', books: 2 },
  { day: 'Tue', books: 3 },
  { day: 'Wed', books: 1 },
  { day: 'Thu', books: 4 },
  { day: 'Fri', books: 2 },
  { day: 'Sat', books: 5 },
  { day: 'Sun', books: 3 },
]

export default function ReadingCharts() {
  return (
    <div className="space-y-6">
      {/* Reading Progress Chart */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Reading Progress Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={readingProgressData}>
            <defs>
              <linearGradient id="colorPages" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="pages"
              stroke="#8b5cf6"
              fillOpacity={1}
              fill="url(#colorPages)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Books by Category */}
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Books by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Activity */}
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Weekly Reading Activity
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="books" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Reading Goals Progress */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Monthly Reading Goal
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            18 / 25 books
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500"
            style={{ width: '72%' }}
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          You&apos;re 72% towards your goal! Keep it up! 🎉
        </p>
      </div>
    </div>
  )
}
