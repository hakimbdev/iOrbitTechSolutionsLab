import { Code, Database, Brain, Cloud, Shield, Zap } from 'lucide-react'

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, scalable, and user-friendly solutions.",
    icon: Code,
    features: [
      "Full-stack development",
      "Progressive Web Apps",
      "E-commerce solutions",
      "CMS development"
    ]
  },
  {
    title: "Data Analysis",
    description: "Transform your data into actionable insights with our advanced analytics solutions. We help you make data-driven decisions.",
    icon: Database,
    features: [
      "Business intelligence",
      "Data visualization",
      "Predictive analytics",
      "Real-time dashboards"
    ]
  },
  {
    title: "AI Solutions",
    description: "Leverage the power of artificial intelligence to automate processes, enhance decision-making, and create intelligent applications.",
    icon: Brain,
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "AI integration"
    ]
  },
  {
    title: "Cloud Services",
    description: "Secure, scalable, and reliable cloud infrastructure solutions to power your business applications and services.",
    icon: Cloud,
    features: [
      "Cloud migration",
      "Serverless architecture",
      "DevOps automation",
      "Cloud optimization"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security solutions and best practices implementation.",
    icon: Shield,
    features: [
      "Security assessment",
      "Threat detection",
      "Compliance management",
      "Security training"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Enhance your application's performance and user experience with our optimization services.",
    icon: Zap,
    features: [
      "Load time optimization",
      "Database optimization",
      "Code optimization",
      "Performance monitoring"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Key Features:
                </h4>
                <ul className="mt-2 space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 