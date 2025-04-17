"use client"

import { Button } from "@/components/ui/button"
import { Menu, Dog } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
          <Dog className="w-6 h-6 text-yellow-500" />
        </div>
        <span className="text-white font-bold text-xl">USDOG</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/swap">Swap</NavLink>
        <NavLink href="/pool">Pool</NavLink>
        <NavLink href="/farm">Farm</NavLink>
        <NavLink href="/stake">Stake</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-yellow-400">
          Connect Wallet
        </Button>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">Launch App</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
    </Link>
  )
}
