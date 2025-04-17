"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightLeft, TrendingUp } from "lucide-react"
import { FloatingCoins } from "@/components/floating-coins"
import { DogAnimation } from "@/components/dog-animation"
import SwapInterface from "@/components/swap-interface"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating coins background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingCoins count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Swap, Earn, and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {" "}
                Grow
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              The leading DEX on multiple chains with the best rates and lowest fees. Swap tokens, provide liquidity,
              and earn rewards with USDOG.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8">
                <ArrowRightLeft className="mr-2 h-5 w-5" />
                Start Swapping
              </Button>
              <Button size="lg" variant="outline" className="text-white border-yellow-500 hover:bg-yellow-500/20">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Analytics
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            <SwapInterface />
          </motion.div>
        </div>
      </div>

      {/* Animated dog */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DogAnimation />
      </div>
    </div>
  )
}
