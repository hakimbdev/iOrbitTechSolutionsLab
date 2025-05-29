"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Target, Play } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Interactive Glow Effect */}
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-slide-in-left">
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-white">
            <span className="block">Innovating</span>
            <span className="block">with</span>
            <span className="gradient-text-animated text-shadow">Artificial Intelligence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-2xl">
            Transforming businesses through cutting-edge GenAI, Data Analysis, Web Development, and Cybersecurity
            Services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 neon-glow">
              <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              Start Your AI Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-6 text-lg font-bold shadow-2xl backdrop-blur-sm transition-all duration-300">
              <Play className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "500+", label: "AI Projects", icon: Target },
              { number: "98%", label: "Success Rate", icon: Zap },
              { number: "50+", label: "Global Clients", icon: Sparkles },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-blue-400 mr-2 group-hover:animate-pulse" />
                  <div className="text-3xl lg:text-4xl font-black text-white">{stat.number}</div>
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - 3D Image */}
        <div className="lg:w-1/2 animate-slide-in-right perspective-1000">
          <div className="relative transform-style-3d hover:rotate-y-12 transition-transform duration-700">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-40 animate-pulse-slow"></div>

            {/* Main Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI and Data Science Innovation"
                width={700}
                height={500}
                className="rounded-3xl shadow-2xl border border-white/20 hover-lift"
              />

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-float shadow-xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center animate-float shadow-xl"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 text-center">Scroll to explore</p>
      </div>
    </section>
  )
}
