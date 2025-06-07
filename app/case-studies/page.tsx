"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const caseStudies = [
  {
    title: "AI-Powered Customer Service",
    client: "Global E-commerce Platform",
    description: "Implemented an AI chatbot system that reduced response time by 80% and increased customer satisfaction by 45%.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    results: [
      "80% reduction in response time",
      "45% increase in customer satisfaction",
      "60% cost reduction in customer service"
    ],
    industry: "E-commerce"
  },
  {
    title: "Predictive Maintenance System",
    client: "Manufacturing Giant",
    description: "Developed a machine learning system that predicts equipment failures, reducing downtime by 70%.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    results: [
      "70% reduction in equipment downtime",
      "40% decrease in maintenance costs",
      "85% accuracy in failure prediction"
    ],
    industry: "Manufacturing"
  },
  {
    title: "Data Analytics Platform",
    client: "Financial Services Provider",
    description: "Built a comprehensive data analytics platform that improved decision-making efficiency by 65%.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    results: [
      "65% improvement in decision-making efficiency",
      "50% reduction in data processing time",
      "30% increase in revenue"
    ],
    industry: "Finance"
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how we've helped businesses transform their operations
              with innovative AI and data solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{study.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-600">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business
            with our innovative solutions.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
} 