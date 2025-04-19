import IceChain from '../ice-chain'

export const bct: IceChain = {
  id: 1190,
  name: 'BCTChain',
  features: ['swap'],
  network: 'bct',
  rpcUrls: {
    public: { http: ['https://rpc.bctchain.com',] },
    default: { http: ['https://rpc.bctchain.com',] },
  },
  blockExplorers: {
    default: { name: 'BCT Explorer', url: 'https://explorer.bctchain.com' },
  },
  nativeCurrency: {
    name: 'BCT',
    symbol: 'BCT',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x6573b90D1b24Dd1740F4fecCecb49b674A118B47',
      blockCreated: 3408875,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0x056330231aEc71fC430F27b527282B0402aEA819',
    decimals: 18,
    symbol: 'wBCT',
    name: 'Wrapped BCT',
  },
  stableToken: {
    address: '0xddddddd48B83EC002970069FA6B7d332339263e7',
    decimals: 18,
    symbol: 'USDDOG',
    name: 'USDOG',
  },
  swap: {
    factoryAddress: "0x4631C59413A0240f902EE5AB89E6065004809F12",
    initCodeHash: "0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100",
    routerAddress: "0x4a2250175C556536a4C65ba10C00A996E2BcA690",
  },
  smartRouterAddress: '0x6c086b4365aC75d71b6be2572e615210B2919220',
}
