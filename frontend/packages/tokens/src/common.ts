import { ChainId, ERC20Token } from '@pancakeswap/sdk'
import { chains } from '@icecreamswap/constants'

export const USD: Record<ChainId, ERC20Token> = chains.reduce((acc, chain) => {
  if (!chain.stableToken) return acc
  return {...acc, [chain.id]: new ERC20Token(
    chain.id,
    chain.stableToken.address,
    chain.stableToken.decimals,
    chain.stableToken.symbol,
    chain.stableToken.name
  )}
}, {})
export const STABLE_COIN = USD

export const ICE: Record<ChainId, ERC20Token> = chains.reduce((acc, chain) => {
  if (!chain.iceAddress) return acc
  return {...acc, [chain.id]: new ERC20Token(
      chain.id,
      chain.iceAddress,
      18,
      'ICE',
      'IceCream',
      'https://icecreamswap.com'
    )}
}, {})