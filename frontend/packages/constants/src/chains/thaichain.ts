import IceChain from '../ice-chain'

export const thaichain: IceChain = {
  id: 7,
  name: 'ThaiChain',
  features: ['swap'],
  network: 'tch',
  rpcUrls: {
    public: { http: ['https://rpc.dome.cloud',] },
    default: { http: ['https://rpc.dome.cloud',] },
  },
  blockExplorers: {
    default: { name: 'ThaiChain Explorer', url: 'https://exp.thaichain.org' },
  },
  nativeCurrency: {
    name: 'TCH',
    symbol: 'TCH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x958Cd81e0f472675eF7738c3FB42763c2C39b92c',
      blockCreated: 325387,
    },
  },
  blockInterval: 12,
  wrappedNative: {
    address: '0x67a11f6Ea5352F58FEbF580F7E84E33405638c1C',
    decimals: 18,
    symbol: 'TCH',
    name: 'TCH',
  },
  stableToken: {
    address: '0x08Bc55Ac7B63f4D808D3172D20eD66d6FFeb45e0',
    decimals: 18,
    symbol: 'USDOG',
    name: 'USDOG Token',
  },
  swap: {
    factoryAddress: '0x3D9FFBD2b25eA3Dc8BC958ffbd115f6902e0bdd6',
    initCodeHash: '0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100',
    routerAddress: '0xbcaf1Df346e53DDbedAa6BfEf00C5D548Ae73C89',
  },
  smartRouterAddress: '0xB68B86186281ddD503d213c115f8adf9089404dC',
}