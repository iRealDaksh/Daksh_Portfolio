"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <motion.footer
      className="container mx-auto px-4 py-8 border-t border-[#e6e6e6] dark:border-[#363636] mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <motion.div className="text-2xl font-bold mb-2" whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo_for_light_mode.png"
              alt="Logo"
              width={50}
              height={50}
              className="dark:hidden"
            />
            <Image
              src="/logo_for_dark_mode.png"
              alt="Logo"
              width={50}
              height={50}
              className="hidden dark:block"
            />
          </motion.div>
          <p className="text-sm text-[#666666] dark:text-[#a7a7a7]">
            © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Tech Stack", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={item === "Home" ? "/" : item === "About" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                if (item === "Home" || item === "About") {
                  // Let the default link behavior handle navigation
                  return;
                }
                e.preventDefault();
                const element = document.getElementById(item.toLowerCase().replace(" ", "-"));
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-[#00d8ff] dark:hover:to-[#E70FAA] cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {["github", "twitter", "linkedin"].map((social, index) => (
            <motion.a 
              key={social} 
              href={
                social === "github" ? "https://github.com/iRealDaksh" : 
                social === "linkedin" ? "https://www.linkedin.com/in/daksharora-vitc27" : 
                "#"
              } 
              aria-label={social} 
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#42446e] dark:text-white"
              >
                {social === "github" && (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                )}
                {social === "twitter" && (
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                )}
                {social === "linkedin" && (
                  <>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </>
                )}
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-[#666666] dark:text-[#a7a7a7]">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Designed and developed with ❤️ by <span className="text-[#00d8ff]">Daksh Arora</span>
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer
