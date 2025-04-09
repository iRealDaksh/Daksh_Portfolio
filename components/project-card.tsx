"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  techStack: string[]
  index: number
}

const ProjectCard = ({ image, title, description, techStack, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-[#363636] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center"
            >
              <a
                href="#"
                className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Preview
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-white hover:text-[#d7ffe0] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <Github className="w-4 h-4 mr-1" />
                View Code
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#42446e] dark:text-white">{title}</h3>
        <p className="text-[#666666] dark:text-[#cccccc] mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs text-[#42446e] dark:text-[#cccccc]"
              whileHover={{ scale: 1.1, color: "#00d8ff" }}
            >
              {tech}
              {index < techStack.length - 1 && <span className="ml-2">•</span>}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
