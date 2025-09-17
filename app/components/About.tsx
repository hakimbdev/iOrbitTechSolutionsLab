import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Award, label: "Projects Completed", value: "200+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Zap, label: "Years of Experience", value: "10+" },
]

export default function About() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About IORBIT LAB Africa</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Founded in 2019 and incoperated in 2025, IORBIT LAB Africa (also known as iOrbit Tech Solutions Lab) has been at the forefront of artificial intelligence innovation, helping
            brands transform their operations through cutting-edge technology solutions.
          </p>
        </div>

        <diImplement Privacy Policy page along with Cybersecurity Compliance
        v className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg mb-6">
              To empower forward-thinking brands across Africa with comprehensive cybersecurity, data analysis, and software engineering solutions,
              while providing strategic partnership services that drive digital product success and sustainable growth.
            </p>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg">
              To be Africa's leading software agency, fostering digital transformation and innovation through secure,
              data-driven solutions that create lasting value for businesses and communities.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Why Choose IORBIT LAB Africa?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Expert team specializing in cybersecurity, data analysis, and software engineering</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Comprehensive partnership services for digital product marketing</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Data-driven insights and strategic market growth solutions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Dedicated support for launching and scaling digital products</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
