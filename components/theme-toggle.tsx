"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-12 h-6" />
  }

  return (
    <div className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer flex items-center p-1">
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Moon className="h-3 w-3 text-[#42446e]" /> : <Sun className="h-3 w-3 text-[#f5de19]" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
