import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('What is UsdogSwap 🧜‍♀️ different from other DEX on #KAIA?'),
    description: [
      t(
        'UsdogSwap 🧜‍♀️ is not just a DEX while DEX is just our base where UsdogSwap 🧜‍♀️ connecting people around the globe whether users are from blockchain itself or non cryptocurrency users through our entire ecosystem from DeFi to Gaming Apps.',
      ),
    ],
  },
  {
    title: t('Where will be UsdogSwap 🧜‍♀️ launching?'),
    description: [
      t(
        '#KAIA chain of course, low gas fees, lightning fast transactions⚡️, blockchain full of gaming development opportunities and future blockchain for gamers. 🎮',
      ),
    ],
  },
  {
    title: t('When will UsdogSwap 🧜‍♀️ launching?'),
    description: [t('January 2025, very soon we will be setting up our appearance on #KAIA chain. 🔜🔜🔜')],
  },
  {
    title: t('Why should we invest in UsdogSwap 🧜‍♀️?'),
    description: [
      t(
        "When you invest in $TRI, UsdogSwap 🧜‍♀️ token. You are not just a token holder, a yield farmer, a trader, a gamer 🎮 but also a shareholder of UsdogSwap's Games 🎮 Revenue Sharing System.",
      ),
    ],
  },
  {
    title: t('How many games UsdogSwap 🧜‍♀️ will have and how are they benefits 💸 to holders/investors?'),
    description: [
      t(
        'UsdogSwap 🧜‍♀️ will have at least 2 games 🎮🎮 where one will be on global mobile Appstore and another "Mermaid Survivor Game" is going to be Global PC Games Platform. Both games able to generate revenues and then profit sharing with UsdogSwap 🧜‍♀️ Holders through our Staking System later on. 📈',
      ),
    ],
  },
]

export default config
