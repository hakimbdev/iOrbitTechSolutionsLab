import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative">
        {/* Main logo */}
        <div className="relative flex items-center justify-center rounded-full bg-blue-600 p-3 leading-none">
          {/* Text */}
          <div className="flex items-baseline space-x-0.5">
            <span className="text-2xl font-bold text-white">i</span>
            <span className="text-2xl font-bold text-white">
              Ots
            </span>
          </div>
        </div>
      </div>
      
      {/* Company name */}
      <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-300 sm:block">
        
      </span>
    </Link>
  )
} 