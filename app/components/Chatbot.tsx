"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send } from "lucide-react"

const knowledgeBase = {
  services:
    "We offer services in Artificial Intelligence, Machine Learning, GenAI, AI-For-Education Advocacy, Data Analysis Services, Web Application Development, Website Development, and Business Emails Platform.",
  "artificial intelligence":
    "We develop cutting-edge AI solutions that automate processes, enhance decision-making, and drive innovation across various industries.",
  "machine learning":
    "Our ML solutions transform data into intelligent insights, enabling predictive analytics and automated learning systems for your business.",
  genai:
    "We harness the power of Generative AI to create content, automate workflows, and build intelligent systems that generate human-like outputs.",
  "data analysis":
    "We provide comprehensive data analysis services, turning raw data into actionable insights that drive strategic business decisions.",
  "web development":
    "We build scalable, responsive web applications and websites using modern technologies, ensuring optimal performance and user experience.",
  portfolio:
    "Our portfolio includes an AI-Powered Learning Management System, Machine Learning Fraud Detection System, GenAI Content Creation Platform, and Enterprise Email Marketing Platform.",
  founders:
    "Our leadership team includes Abdulhakim Ahmad (CEO), Adamu Abdullahi (CTO), and Ilham Maaruf (Chief Data Scientist), with combined decades of experience from top tech companies.",
  partners:
    "We collaborate with industry-leading technology partners including Google Cloud, AWS, Microsoft Azure, NVIDIA, OpenAI, Anthropic, Vercel, and MongoDB.",
  about:
    "Founded in 2019, iOrbit Labs has been at the forefront of artificial intelligence innovation, helping businesses transform their operations through cutting-edge technology solutions.",
  contact: "You can contact us through the form on our website or by sending an email to info@iorbitlabs.com.",
  mission:
    "Our mission is to democratize artificial intelligence and make advanced technology accessible to businesses of all sizes.",
  vision:
    "Our vision is to be the global leader in AI-powered solutions, fostering a future where intelligent technology enhances human potential.",
}

function findAnswer(question: string): string {
  const lowerQuestion = question.toLowerCase()
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lowerQuestion.includes(key)) {
      return value
    }
  }
  return "I'm sorry, I don't have specific information about that. Is there anything else I can help you with regarding our services, portfolio, or contact information?"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput("")
      setTimeout(() => {
        const answer = findAnswer(input)
        setMessages((prev) => [...prev, { text: answer, isUser: false }])
      }, 500)
    }
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 h-96 shadow-xl">
          <CardHeader>
            <CardTitle>iOrbit Assistant</CardTitle>
          </CardHeader>
          <CardContent className="overflow-y-auto h-64">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
