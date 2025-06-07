"use client"

import Link from "next/link"
import { Code, Database, Brain } from "lucide-react"
import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dc5qncppu/image/upload/v1749319567/technology-human-touch-background-modern-remake-creation-adam_zdxm59.jpg"
            alt="Technology background"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              iOrbit Tech Solutions Lab
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-200">
              Empowering businesses with cutting-edge AI and machine learning solutions. Transform your data into actionable insights and drive innovation.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/solutions"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore Solutions
              </Link>
              <Link
                href="/case-studies"
                className="rounded-md bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {/* First Set */}
              <div className="flex space-x-8">
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Solutions</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Cutting-edge artificial intelligence for your business needs</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Machine Learning</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Advanced algorithms to drive your business forward</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analytics</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Transform your data into actionable insights</p>
                  </div>
                </div>
              </div>
              {/* Duplicate Set for Infinite Scroll Effect */}
              <div className="flex space-x-8">
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Solutions</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Cutting-edge artificial intelligence for your business needs</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Machine Learning</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Advanced algorithms to drive your business forward</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analytics</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Transform your data into actionable insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
