"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
}

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const menuItems = ["Home", "Tech Stack", "Projects", "About", "Contact"]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 md:hidden"
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-[#191919] shadow-xl"
          >
            <div className="flex flex-col p-6">
              <button
                onClick={onClose}
                className="self-end p-2 text-[#666666] dark:text-[#a7a7a7]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="mt-8">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <Link
                        href={item === "Home" ? "/" : item === "About" ? "/about" : item === "Contact" ? "/contact" : `#${item.toLowerCase().replace(" ", "-")}`}
                        className={`text-[#666666] dark:text-[#a7a7a7] text-lg ${
                          activeSection === item ? "text-[#1e0e62] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#00d8ff] dark:to-[#E70FAA]" : ""
                        }`}
                        onClick={onClose}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.a
                href="/daksh_resume.pdf"
                download
                className="mt-8 px-4 py-2 rounded-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-white font-medium text-center hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 