"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowDown, Settings, Coins } from "lucide-react"

// Define token images with fallbacks
const tokenImages = {
  ETH: "/images/eth-logo.png",
  USDOG: "/images/usdog-token.png",
  // Add more tokens as needed
}

export default function SwapInterface() {
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("USDOG")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFromAmount(value)
    // Simple mock conversion rate
    if (value && !isNaN(Number.parseFloat(value))) {
      setToAmount((Number.parseFloat(value) * 1250).toString())
    } else {
      setToAmount("")
    }
  }

  const handleSwapTokens = () => {
    const tempToken = fromToken
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  // Token icon component with fallback
  const TokenIcon = ({ token }: { token: string }) => {
    return (
      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center">
        <Coins className="w-4 h-4 text-yellow-500" />
      </div>
    )
  }

  return (
    <Card className="w-full bg-black/60 border border-white/10 backdrop-blur-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Swap Tokens</CardTitle>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-white/5 rounded-xl">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 0.42 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={handleFromAmountChange}
              className="bg-transparent border-none text-xl text-white focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            />
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
              <TokenIcon token={fromToken} />
              <span className="text-white font-medium">{fromToken}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/10 rounded-full hover:bg-white/20"
            onClick={handleSwapTokens}
          >
            <ArrowDown className="h-5 w-5 text-white" />
          </Button>
        </div>

        <div className="p-4 bg-white/5 rounded-xl">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 1,337 USDOG</span>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              readOnly
              className="bg-transparent border-none text-xl text-white focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            />
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
              <TokenIcon token={toToken} />
              <span className="text-white font-medium">{toToken}</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-white/5 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Exchange Rate</span>
            <span className="text-white">1 ETH = 1,250 USDOG</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-400">Fee</span>
            <span className="text-white">0.3%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-6 text-lg">Swap</Button>
      </CardFooter>
    </Card>
  )
}
