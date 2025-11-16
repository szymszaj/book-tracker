import DashboardSidebar from '@/components/dashboard/sidebar'
import DashboardStats from '@/components/dashboard/stats'
import ReadingCharts from '@/components/dashboard/charts'
import BookCard from '@/components/dashboard/book-card'
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'

// Sample books data
const recentBooks = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    progress: 75,
    rating: 5,
    coverColor: 'from-blue-400 to-blue-600',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    progress: 45,
    rating: 4,
    coverColor: 'from-green-400 to-green-600',
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    progress: 90,
    rating: 5,
    coverColor: 'from-purple-400 to-purple-600',
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Navigation Bar */}
        <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Welcome back! Here&apos;s your reading overview
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Book
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Stats Cards */}
            <DashboardStats />

            {/* Charts */}
            <ReadingCharts />

            {/* Recent Books */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Currently Reading
                </h2>
                <Button variant="ghost">View All</Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentBooks.map((book, index) => (
                  <BookCard key={index} book={book} index={index} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Ready to add more books?
              </h3>
              <p className="text-blue-100 mb-6">
                Keep your reading momentum going by tracking new books
              </p>
              <Button variant="secondary">
                <Plus className="h-4 w-4 mr-2" />
                Add New Book
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
