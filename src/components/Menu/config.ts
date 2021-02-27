import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.mummy.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mummy.finance/#/pool',
      },
    ],
  },
  {
    label: 'Cursed Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Sand Pools',
    icon: 'PoolIcon',
    href: '/sandpools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9c5D0C6a3be22B5dbd18275527CC17FB6327d696',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/mummy-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/mummy-finance/',
      }, */
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x5824bbe60efd1b321abb3975f07388d898da5c9f',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Audit by Hacken',
        href: 'https://mummy.finance/files/hackenAudit.pdf',
      }, */
      {
        label: "Github",
        href: "https://github.com/mummyfinance/",
      },
      {
        label: "Docs",
        href: "",
      },
      {
        label: "Blog",
        href: "",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://mummy.finance/files/hackenAudit.pdf',
  }, */
]

export default config
