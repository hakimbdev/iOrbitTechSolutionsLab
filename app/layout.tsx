import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import { Github, Twitter, Linkedin } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iOrbit Tech Solutions Lab',
  description: 'Empowering businesses with cutting-edge AI and machine learning solutions.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} h-full bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-full flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">iOrbit Tech Solutions Lab</h3>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Empowering businesses with cutting-edge AI and machine learning solutions.
                  </p>
                  <div className="mt-6 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">GitHub</span>
                      <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/ai-solutions" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        AI Solutions
                      </a>
                    </li>
                    <li>
                      <a href="/machine-learning" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Machine Learning
                      </a>
                    </li>
                    <li>
                      <a href="/data-analysis" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Data Analysis
                      </a>
                    </li>
                    <li>
                      <a href="/case-studies" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Email: info@iots.com
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Phone: +234 80-6255-8567
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Address: Suite 167 Gwarinpa, Abuja, Nigeria.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} iOrbit Tech Solutions Lab. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "YOUR_CHATBOT_ID"
              }
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
