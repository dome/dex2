import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const tchTokens = {
  weth: WETH9[ChainId.TCH],
  usdog: new ERC20Token(ChainId.BASE, '0x08Bc55Ac7B63f4D808D3172D20eD66d6FFeb45e0', 18, 'USDOG', 'USDOG Token'),
}
