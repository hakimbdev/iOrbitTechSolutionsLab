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
          <h2 className="text-3xl font-bold mb-4">About iOrbit Labs</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Founded in 2019, iOrbit Labs has been at the forefront of artificial intelligence innovation, helping
            businesses transform their operations through cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
              To democratize artificial intelligence and make advanced technology accessible to businesses of all sizes,
              driving innovation and creating positive impact across industries.
            </p>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg">
              To be the global leader in AI-powered solutions, fostering a future where intelligent technology enhances
              human potential and creates sustainable value for society.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Why Choose iOrbit Labs?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Expert team with proven track record in AI and ML</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Cutting-edge technology stack and methodologies</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Customized solutions tailored to your business needs</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>24/7 support and ongoing maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
