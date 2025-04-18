import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('What is USDog 🧜‍♀️ different from other DEX'),
    description: [
      t(
        'USDog 🧜‍♀️ is not just a DEX while DEX is just our base where USDog 🧜‍♀️ connecting people around the globe whether users are from blockchain itself or non cryptocurrency users through our entire ecosystem from DeFi to Gaming Apps.',
      ),
    ],
  },
  {
    title: t('Where will be USDog 🧜‍♀️ launching?'),
    description: [
      t(
        '#Multi chain of course, low gas fees, lightning fast transactions⚡️, blockchain full of gaming development opportunities and future blockchain for gamers. 🎮',
      ),
    ],
  },
  {
    title: t('When will USDog 🧜‍♀️ launching?'),
    description: [t('January 2025, very soon we will be setting up our appearance on Multi chain. 🔜🔜🔜')],
  },
  {
    title: t('Why should we invest in USDog 🧜‍♀️?'),
    description: [
      t(
        "When you invest in $TRI, USDog 🧜‍♀️ token. You are not just a token holder, a yield farmer, a trader, a gamer 🎮 but also a shareholder of USDog's Games 🎮 Revenue Sharing System.",
      ),
    ],
  },
  {
    title: t('How many games USDog 🧜‍♀️ will have and how are they benefits 💸 to holders/investors?'),
    description: [
      t(
        'USDog 🧜‍♀️ will have at least 2 games 🎮🎮 where one will be on global mobile Appstore and another "Mermaid Survivor Game" is going to be Global PC Games Platform. Both games able to generate revenues and then profit sharing with USDog 🧜‍♀️ Holders through our Staking System later on. 📈',
      ),
    ],
  },
]

export default config
