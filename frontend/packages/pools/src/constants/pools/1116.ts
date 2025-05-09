import {coreTokens} from "@pancakeswap/tokens";

import {PoolCategory, SerializedPool} from '../../types'

export const livePools: SerializedPool[] = [// souceId can be any positive number as long as it is unique and not 0
  // version can't be 3 as that uses the pancake profiles that we did not implement
  {
    sousId: 35,
    stakingToken: coreTokens.core,
    earningToken: coreTokens.core_unstaking_warning,
    contractAddress: '0xFd072F40E17070f975890D1772d6fdC7Cb44a63b',
    poolCategory: PoolCategory.BINANCE_AUTO,
    fixedApr: '26.0',
    version: 2,
  },
  {
    sousId: 68,
    stakingToken: coreTokens.asx,
    earningToken: coreTokens.asx,
    contractAddress: '0x079189e12222b5030d1BF3Bca93b92292F572BB4',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.002314',
    version: 2,
  },
  {
    sousId: 59,
    stakingToken: coreTokens.asx,
    earningToken: coreTokens.asx,
    contractAddress: '0x45Bf1C5fe305eEcBE501fC2BE4F906102b4EFFA3',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.002314',
    version: 2,
  },
  {
    sousId: 65,
    stakingToken: coreTokens.laugh,
    earningToken: coreTokens.laugh,
    contractAddress: '0x39011422e4d333363831bCBfB4A55A29E8530BDc',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '6.134',
    version: 2,
  },
  {
    sousId: 67,
    stakingToken: coreTokens.dogwif,
    earningToken: coreTokens.dogwif,
    contractAddress: '0xc0d8097b6783C9890aA66FEF6B8fe801faD9b759',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '332.75',
    version: 2,
  },
  {
    sousId: 66,
    stakingToken: coreTokens.ice,
    earningToken: coreTokens.laugh,
    contractAddress: '0x11Bb223920a5F0D4d817542BC2117Bd0b1739D0b',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '6.134',
    version: 2,
  },
  {
    sousId: 61,
    stakingToken: coreTokens.pump,
    earningToken: coreTokens.pump,
    contractAddress: '0xD24c62d47229D8F49d7d5365374a951a21679C4C',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '173611.0',
    version: 2,
  },

  {
    sousId: 62,
    stakingToken: coreTokens.asx,
    earningToken: coreTokens.pump,
    contractAddress: '0xf8D0e4C22F52B0FC93bf6Ad2caa57Ae511D1E2C6',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '114056.0',
    version: 2,
  },
  {
    sousId: 64,
    stakingToken: coreTokens.asx,
    earningToken: coreTokens.laugh,
    contractAddress: '0xf9Cde06e56BD48505C02171c828c52D260BcC48D',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '6.154',
    version: 2,
  },
  {
    sousId: 63,
    stakingToken: coreTokens.cctr,
    earningToken: coreTokens.cctr,
    contractAddress: '0x6e8888d763db12B3D3195D10aE41FACFE6D2646F',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.001157',
    version: 2,
  },
  {
    sousId: 60,
    stakingToken: coreTokens.bcore_new,
    earningToken: coreTokens.bcore_new,
    contractAddress: '0xa2cc76a90E2A88783cC060CC323314F18F3b9dDe',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.745',
    version: 2,
  },
  {
    sousId: 58,
    stakingToken: coreTokens.life,
    earningToken: coreTokens.ripple,
    contractAddress: '0xF81c7eCe5390eDd5f9600b7955D8AF2606F3d2cb',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000289',
    version: 2,
  },
  {
    sousId: 57,
    stakingToken: coreTokens.freecore,
    earningToken: coreTokens.freecore,
    contractAddress: '0x2f44ACeca40B91D3852D88afee84e8259d914DfB',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.771',
    version: 2,
  },
  {
    sousId: 56,
    stakingToken: coreTokens.cBTC,
    earningToken: coreTokens.ceth,
    contractAddress: '0xBd0484023667aA5BEA3040ae2F0addeD5C04235A',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000424',
    version: 2,
  },
  {
    sousId: 55,
    stakingToken: coreTokens.ceth,
    earningToken: coreTokens.cBTC,
    contractAddress: '0xc8192Ad3F6c98Bf41447f0C05C71Cf5Bf3Bf3D5e',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000424',
    version: 2,
  },
  {
    sousId: 54,
    stakingToken: coreTokens.koci,
    earningToken: coreTokens.koci,
    contractAddress: '0x2223B01656Be90A1ac4A1b7D60E7D4ae8b7a17a0',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00289',
    version: 2,
  },
  {
    sousId: 52,
    stakingToken: coreTokens.cdao,
    earningToken: coreTokens.ice,
    contractAddress: '0x080dA1910f1A631317A5a665ACaa25e0b2E41a3B',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000289',
    version: 2,
  },
  {
    sousId: 51,
    stakingToken: coreTokens.pipi,
    earningToken: coreTokens.pipi,
    contractAddress: '0x78eD864D5601474408e2e663679fD184CfA3F306',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '45.2660',
    version: 2,
  },
  {
    sousId: 53,
    stakingToken: coreTokens.youngparrot,
    earningToken: coreTokens.youngparrot,
    contractAddress: '0x0cA6CB85Df53705B48147285F6305bb949525BdF',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: ' 1.9290',
    version: 2,
  },
  {
    sousId: 50,
    stakingToken: coreTokens.youngparrot,
    earningToken: coreTokens.youngparrot,
    contractAddress: '0x650963Bcf8e55c0ec811a0604beCABa7237902f9',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.9645',
    version: 2,
  },
  {
  sousId: 49,
    stakingToken: coreTokens.cBTC,
    earningToken: coreTokens.cBTC,
    contractAddress: '0xD7F7A62c9ED504Ce2026034199d0D8718582bA26',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000868',
    version: 2,
  },
].map((p: any) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [
  {
    sousId: 48,
    stakingToken: coreTokens.gator,
    earningToken: coreTokens.gator,
    contractAddress: '0x180216e5a9ea1c8Ec8ddb9F92BF49A8708b33ebF',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '11.574',
    version: 2,
  },
  {
    sousId: 47,
    stakingToken: coreTokens.gator,
    earningToken: coreTokens.gator,
    contractAddress: '0x831d462629c4eb296f497138178B62a71e9EF39f',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '11.574',
    version: 2,
  },
  {
    sousId: 46,
    stakingToken: coreTokens.cBTC,
    earningToken: coreTokens.cBTC,
    contractAddress: '0x96091BE65f1Ed0bD1C431DceaCC656041cC46de6',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000528',
    version: 2,
  },
  {
    sousId: 45,
    stakingToken: coreTokens.cBTC,
    earningToken: coreTokens.cBTC,
    contractAddress: '0xd711A3E33Cba7dB01DA9ABC4e645225d7F06d6c0',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.009259',
    version: 2,
  },
  {
    sousId: 44,
    stakingToken: coreTokens.hice,
    earningToken: coreTokens.kice,
    contractAddress: '0x28DD255b5caD5D04AD397f1A9CddbC1F9093E21d',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.0995',
    version: 2,
  },
  {
    sousId: 43,
    stakingToken: coreTokens.hice,
    earningToken: coreTokens.hice,
    contractAddress: '0x18D2d3Cc7397f6Fb703B7c499F1b7834643245CE',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.17361',
    version: 2,
  },
  {
    sousId: 42,
    stakingToken: coreTokens.kigu,
    earningToken: coreTokens.kigu,
    contractAddress: '0x60f9348289315076a82e67d86b9d5429b21750d9',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00419061',
    version: 2,
  },
  {
    sousId: 40,
    stakingToken: coreTokens.lung,
    earningToken: coreTokens.lung,
    contractAddress: '0x00cb88c63f1f6e2ebd946800930b9f23458ed55f',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.79821',
    version: 2,
  },
  {
    sousId: 39,
    stakingToken: coreTokens.kigu,
    earningToken: coreTokens.kigu,
    contractAddress: '0xd7973da4e8559169ddbd4a5b6abae9a4a5cdc49a',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0115',
    version: 2,
  },
  {
    sousId: 37,
    stakingToken: coreTokens.block,
    earningToken: coreTokens.block,
    contractAddress: '0xdf3ab9de4f88c6cdf922e4e6dd23ea58412d9b1b',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.399106',
    version: 2,
  },
  {
    sousId: 38,
    stakingToken: coreTokens.musk,
    earningToken: coreTokens.musk,
    contractAddress: '0xdf276b139fb7f8637ecdffb2e28c2bc824c4c2eb',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.26340996',
    version: 2,
  },
  {
    sousId: 25,
    stakingToken: coreTokens.ucore,
    earningToken: coreTokens.ucore,
    contractAddress: '0x592feb264e4fc819279f001b5c23efb12d77d78d',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.192',
    version: 2,
  },
  {
    sousId: 36,
    stakingToken: coreTokens.asi,
    earningToken: coreTokens.asi,
    contractAddress: '0x2ddc75c6311640a1482f0a39a11314d2b7690494',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '15817.9',
    version: 2,
  },
  {
    sousId: 32,
    stakingToken: coreTokens.cmct,
    earningToken: coreTokens.but,
    contractAddress: '0x0f3e5fcb8e47e668d03e2f34914cb2ca42827971',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.009625',
    version: 2,
  },
  {
    sousId: 33,
    stakingToken: coreTokens.bliz,
    earningToken: coreTokens.bliz,
    contractAddress: '0xddda927af85ef136ef7fc0821a201d952e0fc6f0',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00578',
    version: 2,
  },
  {
    sousId: 34,
    stakingToken: coreTokens.asi,
    earningToken: coreTokens.asi,
    contractAddress: '0xa98e474e59027c0f1ac46a73a631c3e2c3e40882',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '8101',
    version: 2,
  },
  {
    sousId: 31,
    stakingToken: coreTokens.hobo,
    earningToken: coreTokens.hobo,
    contractAddress: '0x8fda52109c29dacb2e990f8909f1b56b30266dd1',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.868',
    version: 2,
  },
  {
    sousId: 28,
    stakingToken: coreTokens.miidas,
    earningToken: coreTokens.miidas,
    contractAddress: '0xc1a46f6f788bded730fbf275fc04811c5738f04b',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '14.467592',
    version: 2,
  },
  {
    sousId: 29,
    stakingToken: coreTokens.crystal,
    earningToken: coreTokens.crystal,
    contractAddress: '0xc1b3b56b0bcc38805d39bb2c03b40f12812b6d96',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '8.642743055555556',
    version: 2,
  },
  {
    sousId: 30,
    stakingToken: coreTokens.maxi,
    earningToken: coreTokens.maxi,
    contractAddress: '0x5d62ee571e2159d53bcb4374bdfe715d3c45b8e4',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.033101851851851855',
    version: 2,
  },
  {
    sousId: 26,
    stakingToken: coreTokens.bcore_new,
    earningToken: coreTokens.bcore_new,
    contractAddress: '0x2c36b4ff3a77ff44bd335e9e73628b16238d277b',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '115.74074074',
    version: 2,
  },
  {
    sousId: 27,
    stakingToken: coreTokens.woof,
    earningToken: coreTokens.woof,
    contractAddress: '0x60c63d1855ba9b876c39b2f2422d1495caaee7ba',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0347',
    version: 2,
  },
  {
    sousId: 24,
    stakingToken: coreTokens.block,
    earningToken: coreTokens.block,
    contractAddress: '0x920704424e7930e3d133fae25f633b74589d72c3',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.239',
    version: 2,
  },
  {
    sousId: 7,
    stakingToken: coreTokens.kishu,
    earningToken: coreTokens.kishu,
    contractAddress: '0x3A38Ef4f445D0e9546d076506eE1a411cf62f879',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '34722222',
    version: 2,
  },
  {
    sousId: 9,
    stakingToken: coreTokens.word,
    earningToken: coreTokens.word,
    contractAddress: '0xE72c8D91fc12b38D31A091Deff08cf411e062842',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.038',
    version: 2,
  },
].map((p: any) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
