'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/footer';
import Background from '@/components/background';

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-[#42446e] dark:text-white">
      <Background />
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-[#00d8ff] dark:hover:to-[#E70FAA]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>

      <main className="container mx-auto px-4 pt-12">
        <motion.section
          className="py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          {/* Introduction */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-[#666666] dark:text-[#a7a7a7]">
              Hey, I'm Daksh Arora — a Computer Science student at VIT Chennai with a passion for turning caffeine and curiosity into code.
            </p>
            <p className="text-lg leading-relaxed text-[#666666] dark:text-[#a7a7a7] mt-4">
              Whether it's crafting full-stack web apps, experimenting with AI/ML, or getting hands-on with drones and circuits in the ATOMS team — I live for building stuff that actually works (and looks cool doing it).
            </p>
            <p className="text-lg leading-relaxed text-[#666666] dark:text-[#a7a7a7] mt-4">
              I'm big on tech that solves real problems, and I enjoy learning the 'why' behind the 'how'. Also kinda obsessed with hardware, routers, and anything that connects to the internet.
            </p>
            <p className="text-lg leading-relaxed text-[#666666] dark:text-[#a7a7a7] mt-4">
              Always exploring. Always building. Always ready for what's next.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#e6e6e6] dark:border-[#363636] pb-6">
                <div>
                  <h4 className="text-xl font-semibold">B.Tech/CSE with Specialization in AI and Robotics</h4>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Vellore Institute Technology (VIT)</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#666666] dark:text-[#a7a7a7]">2023 – 2027</p>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Chennai, India</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#e6e6e6] dark:border-[#363636] pb-6">
                <div>
                  <h4 className="text-xl font-semibold">12th Class</h4>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Fortune Convent School</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#666666] dark:text-[#a7a7a7]">2023</p>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Sangrur, Punjab, India</p>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Boards Percentage-91%</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h4 className="text-xl font-semibold">10th Class</h4>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Sacred Heart Sen. Sec. School</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#666666] dark:text-[#a7a7a7]">2021</p>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Ludhiana, Punjab, India</p>
                  <p className="text-[#666666] dark:text-[#a7a7a7]">Boards Percentage-96%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
            <div className="space-y-6">
              <div className="border-b border-[#e6e6e6] dark:border-[#363636] pb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">Robotics Software & Systems Engineer</h4>
                    <p className="text-[#666666] dark:text-[#a7a7a7]">ATOM Robotics</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-[#666666] dark:text-[#a7a7a7]">03/2024</p>
                    <p className="text-[#666666] dark:text-[#a7a7a7]">Chennai, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-[#666666] dark:text-[#a7a7a7]">
                  <li>Designed and programmed embedded systems for robotics using C/C++, integrating sensors, actuators, and wireless modules.</li>
                  <li>Developed automation scripts and control algorithms to enhance the efficiency of robotic movements and response handling.</li>
                  <li>Worked on firmware-level debugging and real-time system optimization to improve performance.</li>
                  <li>Contributed to circuit prototyping and sensor calibration during hardware testing phases.</li>
                  <li>Independently implemented logic for object detection, pathfinding, and signal processing on microcontroller platforms.</li>
                  <li>Documented software flows and collaborated with UI/backend teams to enable seamless data communication.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
} 