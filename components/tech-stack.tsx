"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

const TechStack = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const technologies = [
    { name: "C", icon: "/logos/c.svg", size: 100 },
    { name: "C++", icon: "/logos/c++.svg", size: 100 },
    { name: "Python", icon: "/logos/python.svg" },
    { name: "Java", icon: "/logos/java.svg" },
    { name: "React", icon: "/logos/react.svg" },
    { name: "HTML", icon: "/logos/html5.svg" },
    { name: "CSS", icon: "/placeholder.svg" },
    { name: "Tailwind", icon: "/logos/tailwind.svg" },
    { name: "Node.js", icon: "/logos/nodejs.svg" },
    { name: "Express", icon: "/logos/express.svg" },
    { name: "MongoDB", icon: "/logos/mongodb.svg" },
    { name: "MySQL", icon: "/logos/mysql.svg" },
    { name: "Git", icon: "/logos/git.svg" },
    { name: "GitHub", icon: "/logos/github.svg" },
    { name: "AWS", icon: "/logos/aws.svg" },
    { name: "Arduino", icon: "/logos/arduino.svg" },
    { name: "Firebase", icon: "/logos/firebase.svg" },
    { name: "Raspberry Pi", icon: "/logos/raspberry_pi.svg" },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div ref={ref} className="relative h-[300px] overflow-hidden">
      <div className="absolute w-full">
        <motion.div
          className="flex space-x-12 py-8"
          animate={{
            x: [0, -1500, 0],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1, y: -5 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: (index * 0.2) % 2,
              }}
            >
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                width={tech.size || 50}
                height={tech.size || 50}
                className="object-contain"
              />
              <span className="mt-2 text-xs text-[#666666] dark:text-[#a7a7a7]">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TechStack
