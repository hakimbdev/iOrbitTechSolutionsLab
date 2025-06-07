import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iOrbit Tech Solutions Lab',
  description: 'Engaging with AGI, Data Science, Web Apps, Games & Generative Arts',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">iOrbit Tech Solutions</h3>
                <p className="text-gray-400 text-sm">
                  Empowering businesses with innovative AI and data solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/ai-solutions" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a></li>
                  <li><a href="/data-analysis" className="text-gray-400 hover:text-white transition-colors">Data Analysis</a></li>
                  <li><a href="/machine-learning" className="text-gray-400 hover:text-white transition-colors">Machine Learning</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Email: info@iorbittech.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Tech Street, Silicon Valley, CA</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} iOrbit Tech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: 'cHJiNxm8fLiEz0IwfrNXR',
                name: 'iOrbit Assistant'
              };
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }
                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="cHJiNxm8fLiEz0IwfrNXR";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                if(document.readyState==="complete"){
                  onLoad()
                }else{
                  window.addEventListener("load",onLoad)
                }
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
