export const config = {
  id: 'Edgeware',
  name: 'Edgeware',
  tokenSymbol: 'EDG',
  tokenDecimals: 18,
  ss58Format: 7,
  coinGeckoDenom: 'edgeware',
  nodeWs: 'wss://edgeware.jelliedowl.net',
  backendWs: 'wss://kusama.polkastats.io/graphql',
  backendHttp: 'https://kusama.polkastats.io/graphql',
  backendAPI: 'https://kusama.polkastats.io',
  googleAnalytics: 'UA-172854168-1',
  theme: '@/assets/scss/themes/polkastats.scss',
  // ranking
  historySize: 84, // 21 days
  erasPerDay: 4,
  validatorSetSize: 24,
}

export const links = {
  account: [
    {
      name: 'Dotscanner',
      path: 'https://dotscanner.com/kusama/account/',
      icon: 'dotscanner.png',
    },
    {
      name: 'Kodadot',
      path: 'https://kodadot.xyz/rmrk/u/',
      icon: 'kodadot.png',
    },
    {
      name: 'Polkascan',
      path: 'https://polkascan.io/kusama/account/',
      icon: 'polkascan.png',
    },
    {
      name: 'Singular (NFTs)',
      path: 'https://singular.rmrk.app/space/',
      icon: 'singular.svg',
    },
    {
      name: 'SubID',
      path: 'https://sub.id/',
      icon: 'subid.svg',
    },
    {
      name: 'Subscan',
      path: 'https://kusama.subscan.io/account/',
      icon: 'subscan.svg',
    },
  ],
  validator: [
    {
      name: 'Polkadot JS Apps',
      path: 'https://polkadot.js.org/apps/?rpc=wss://kusama-rpc.polkadot.io#/staking/query/',
      icon: 'polkadot-js.png',
    },
    {
      name: 'Subscan',
      path: 'https://kusama.subscan.io/validator/',
      icon: 'subscan.svg',
    },
  ],
}

export const paginationOptions = [10, 20, 50, 100]
