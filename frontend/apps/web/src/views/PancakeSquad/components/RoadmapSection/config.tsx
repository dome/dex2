import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '🚀',
    title: t('USDog dApp + NFT Launching'),
    description: [
      t('USDog Dex launching'),
      t('Farm launching'),
      t('Launchpad Launching'),
      t('USDog NFT Launching'),
      t('USDog NFT DAO Establishment'),
      t('USDog NFT Game Launching'),
      t('USDog Mobile Game Development'),
    ],
    reached: 'Q1 2025',
  },
  {
    title: t('USDog Mobile Game'),
    icon: '‍📱',
    description: [
      t('Mobile Game Beta Test'),
      t('Mobile Game Alpha Test'),
      t('Mobile Game Launching'),
      t('Mermaid Realms PC Game Development'),
    ],
    reached: 'Q2 2025',
  },
  {
    title: t('Sneak Peek Mermaid Realms PC Game'),
    icon: '💻',
    description: [
      t('Introducing Mermaid Realms'),
      t('Introducing Mermaid Realms Characters, items and Mobs'),
      t('Introducing Mermaid Realms Gameplay'),
      t('Marketing with our mobile game platform'),
      t('Marketing with Steam Platform for pre registration'),
    ],
    reached: 'Q3 2025',
  },
  {
    title: t('Launching Mermaid Realms'),
    icon: '🎮',
    description: [
      t('Beta Testing for Mermaid Realms'),
      t('Alpha Test for Mermaid Realms'),
      t('Mermaid Realms official launching'),
    ],
    reached: 'Q4 2025',
  },
]
export default config
