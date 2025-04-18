import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | USDog',
  defaultTitle: 'USDog',
  description:
    'USDog combines a decentralized exchange(DEX), fun games, and profit-sharing to revolutionize DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@USDog_xyz',
    site: '@USDog_xyz',
  },
  openGraph: {
    title: 'USDog - Gaming and Rewards DeFi',
    description:
      'USDog combines a decentralized exchange(DEX), fun games, and profit-sharing to revolutionize DeFi.',
    images: [{ url: 'https://usdog.fi/logo.png' }],
  },
}
