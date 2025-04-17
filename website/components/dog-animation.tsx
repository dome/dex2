"use client"

import { motion } from "framer-motion"
import { Dog } from "lucide-react"

export function DogAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-32 h-32 flex items-center justify-center">
            <Dog className="w-24 h-24 text-yellow-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
