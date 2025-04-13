import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Background = () => {
  const { theme } = useTheme();
  const [elements, setElements] = useState<{ x: number; y: number; size: number; type: string }[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      // For light mode: clouds and birds
      if (theme !== "dark") {
        // Add sun
        newElements.push({
          x: 20,
          y: 15,
          size: 100,
          type: "sun"
        });
        // Add clouds
        for (let i = 0; i < 6; i++) {
          newElements.push({
            x: Math.random() * 100,
            y: Math.random() * 30 + 10,
            size: Math.random() * 60 + 40,
            type: "cloud"
          });
        }
        // Add birds
        for (let i = 0; i < 8; i++) {
          newElements.push({
            x: Math.random() * 100,
            y: Math.random() * 40 + 5,
            size: Math.random() * 15 + 10,
            type: "bird"
          });
        }
      } else {
        // For dark mode: stars and planets
        // Add stars
        for (let i = 0; i < 50; i++) {
          newElements.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            type: "star"
          });
        }
        // Add planets
        for (let i = 0; i < 3; i++) {
          newElements.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 40 + 20,
            type: "planet"
          });
        }
      }
      setElements(newElements);
    };

    generateElements();
  }, [theme]);

  const renderElement = (element: typeof elements[0], index: number) => {
    switch (element.type) {
      case "sun":
        return (
          <motion.div
            key={`sun-${index}`}
            className="absolute rounded-full bg-yellow-500"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              boxShadow: "0 0 60px #fbbf24, 0 0 120px #fbbf24",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      case "cloud":
        return (
          <motion.div
            key={`cloud-${index}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size * 0.6,
              filter: "blur(8px)",
              opacity: 0.8,
            }}
            animate={{
              x: [0, element.size * 2, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      case "bird":
        return (
          <motion.div
            key={`bird-${index}`}
            className="absolute text-gray-600"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: element.size,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ∽
          </motion.div>
        );
      case "star":
        return (
          <motion.div
            key={`star-${index}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              boxShadow: "0 0 4px #fff",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      case "planet":
        return (
          <motion.div
            key={`planet-${index}`}
            className="absolute rounded-full bg-gradient-to-br from-[#00d8ff] to-[#E70FAA]"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              boxShadow: "0 0 20px rgba(0, 216, 255, 0.3)",
            }}
            animate={{
              x: [0, element.size, 0],
              y: [0, element.size/2, 0],
              rotate: 360,
            }}
            transition={{
              duration: 40 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className={`absolute inset-0 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" 
            : "bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"
        }`}
      />

      {/* Elements */}
      {elements.map((element, index) => renderElement(element, index))}

      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === "dark"
            ? "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)"
            : "radial-gradient(circle at 50% 50%, transparent 0%, rgba(255,255,255,0.1) 100%)"
        }}
      />
    </div>
  );
};

export default Background; 