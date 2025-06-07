"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Database, LineChart, Settings, Shield } from "lucide-react"

const solutions = [
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms tailored to your business needs",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"]
  },
  {
    title: "Natural Language Processing",
    description: "Advanced text analysis and language understanding systems",
    icon: Code,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation"]
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis for enhanced business insights",
    icon: LineChart,
    features: ["Object Detection", "Image Classification", "Video Analytics"]
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence",
    icon: Database,
    features: ["Real-time Analytics", "Data Visualization", "Business Intelligence"]
  },
  {
    title: "AI Integration",
    description: "Seamless integration of AI into existing systems",
    icon: Settings,
    features: ["API Development", "System Integration", "Custom Solutions"]
  },
  {
    title: "AI Security",
    description: "Robust security measures for AI systems",
    icon: Shield,
    features: ["Threat Detection", "Data Protection", "Compliance"]
  }
]

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              AI Solutions for Modern Business
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence solutions
              designed to drive growth and innovation.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our AI Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Comprehensive AI solutions tailored to meet your specific business needs
              and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Let's discuss how our AI solutions can help you achieve your business goals
            and stay ahead of the competition.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
} 