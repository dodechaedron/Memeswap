import {
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  rinkeby,
  mainnet,
  arbitrum,
  optimism,
  polygon,
} from 'wagmi/chains'
import { Chain } from 'wagmi'

const bscExplorer = { name: 'FTMScan', url: 'https://testnet.ftmscan.com' }

export const bsc: Chain = {
  id: 4002,
  name: 'FTM TARA TestChain',
  network: 'bsc',
  rpcUrls: {
    default: 'https://rpc.ankr.com/fantom_testnet',
    public: 'https://rpc.ankr.com/fantom_testnet',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  multicall: {
    address: '0x1Bfd7bC84Ee3B436890f4491703a6B6107297b6B',
    blockCreated: 10071740,
  },
  nativeCurrency: {
    name: 'TARA',
    symbol: 'tara',
    decimals: 18,
  },
}

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}



export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576',
    blockCreated: 9759845,
  },
  testnet: true,
}

export const CHAINS_TESTNET = [
  bscTest,
  rinkeby,
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  avalandcheFuji,
  fantomTestnet,
]

export const CHAINS_STARGATE_TESTNET = [
  rinkeby,
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  avalandcheFuji,
  fantomTestnet,
]

export const CHAINS = [bsc, mainnet, arbitrum, optimism, polygon, fantomOpera, avalandche]
