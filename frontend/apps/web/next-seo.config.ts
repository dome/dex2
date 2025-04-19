import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | UsdogSwap',
  defaultTitle: 'UsdogSwap',
  description:
    'UsdogSwap combines a decentralized exchange(DEX), fun games, and profit-sharing to revolutionize DeFi on KAIA.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@UsdogSwap_xyz',
    site: '@UsdogSwap_xyz',
  },
  openGraph: {
    title: 'UsdogSwap - Gaming and Rewards DeFi',
    description:
      'UsdogSwap combines a decentralized exchange(DEX), fun games, and profit-sharing to revolutionize DeFi on KAIA.',
    images: [{ url: 'https://UsdogSwapxyz.com/logo.png' }],
  },
}
