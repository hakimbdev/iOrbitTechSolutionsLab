import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Founders from "./components/Founders"
import TechPartners from "./components/TechPartners"
import Contact from "./components/Contact"
import Chatbot from "./components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Founders />
      <TechPartners />
      <Contact />
      <Chatbot />
    </main>
  )
}
