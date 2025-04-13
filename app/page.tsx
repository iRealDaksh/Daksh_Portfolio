"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import TechStack from "@/components/tech-stack"
import Footer from "@/components/footer"
import { useTheme } from "next-themes"
import { Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import MobileMenu from "@/components/mobile-menu"
import Background from "@/components/background"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "tech-stack", "projects", "contact"]
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if the section is in view (with some offset for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            // Convert section ID to display name
            const displayName = section === "home" ? "Home" : 
                               section === "tech-stack" ? "Tech Stack" : 
                               section.charAt(0).toUpperCase() + section.slice(1)
            setActiveSection(displayName)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-[#42446e] dark:text-white relative">
      <Background />
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        activeSection={activeSection} 
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-[#191919]/30 backdrop-blur-md border-b border-white/20 dark:border-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo_for_light_mode.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="dark:hidden md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                />
                <Image
                  src="/logo_for_dark_mode.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="hidden dark:block md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Tech Stack", "Projects", "About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    href={item === "Home" ? "/" : item === "About" ? "/about" : item === "Contact" ? "/contact" : `#${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-[#00d8ff] dark:hover:to-[#E70FAA] ${
                      activeSection === item ? "text-[#1e0e62] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#00d8ff] dark:to-[#E70FAA]" : ""
                    }`}
                  >
                    {item}
                  </Link>
                  {activeSection === item && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
              
              {/* Resume Download Button */}
              <motion.a
                href="/daksh_resume.pdf"
                download
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#666666] dark:text-[#a7a7a7]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>

            {/* Right Side - Social Links and Theme Toggle */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.a 
                  href="https://github.com/iRealDaksh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-[#00d8ff]"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Github size={20} />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/daksharora-vitc27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-[#00d8ff]"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
              
              {/* Theme Toggle Slider */}
              <div className="relative w-12 md:w-14 h-6 md:h-7">
                <input
                  type="checkbox"
                  id="theme-toggle"
                  className="sr-only"
                  checked={theme === "dark"}
                  onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <label
                  htmlFor="theme-toggle"
                  className="block w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-colors duration-300"
                >
                  <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform dark:translate-x-7 flex items-center justify-center">
                    {theme === "light" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-24">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Hi 👋<br />
                I'm <span className="gradient-text">Daksh Arora</span>
              </h1>
              <p className="text-base md:text-lg text-[#666666] dark:text-[#a7a7a7] mb-4">
                a future-ready computer science mind building smart solutions with code, hardware, and a hint of chaos.
              </p>
            </motion.div>
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-full rounded-full border-4 border-[#13B0F5] dark:border-[#00d8ff] overflow-hidden">
                <Image
                  src="/daksh.jpg"
                  alt="Daksh Arora"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-12 md:py-24">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Tech Stack
          </motion.h2>
          <TechStack />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#363636] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 md:h-48 overflow-hidden relative">
                <Image
                  src="/snazzify.png"
                  alt="Snazzify"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href="https://snazzify.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        Live Preview
                      </a>
                      <a
                        href="https://github.com/iRealDaksh/snazzify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2 text-[#42446e] dark:text-white">Snazzify</h3>
                <p className="text-[#666666] dark:text-[#cccccc] mb-4 text-sm">AI & Crypto-Integrated E-commerce</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">React</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Node.js</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">MongoDB</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Dialogflow</span>
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#363636] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 md:h-48 overflow-hidden relative">
                <Image
                  src="/teletrack.png"
                  alt="TeleTrack"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href="https://tele-sable.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        Live Preview
                      </a>
                      <a
                        href="https://github.com/iRealDaksh/teletrack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2 text-[#42446e] dark:text-white">TeleTrack</h3>
                <p className="text-[#666666] dark:text-[#cccccc] mb-4 text-sm">AI-powered Fleet Management System</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">React</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Node.js</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Express</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">MongoDB</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Google Maps API</span>
                </div>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-[#363636] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 md:h-48 overflow-hidden relative">
                <Image
                  src="/venuetrack.jpg"
                  alt="VenueTrack"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href="https://venuetrack123.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        Live Preview
                      </a>
                      <a
                        href="https://github.com/iRealDaksh/venuetrack123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2 text-[#42446e] dark:text-white">VenueTrack</h3>
                <p className="text-[#666666] dark:text-[#cccccc] mb-4 text-sm">Campus Venue Booking Platform</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">MongoDB</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Express</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">React</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Node.js</span>
                  <span className="ml-2">•</span>
                  <span className="text-xs text-[#42446e] dark:text-[#cccccc]">Firebase Auth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 