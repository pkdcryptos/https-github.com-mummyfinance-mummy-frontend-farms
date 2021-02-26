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
        href: 'https://master.d3su0wt6vm4zp0.amplifyapp.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://master.d3su0wt6vm4zp0.amplifyapp.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
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
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/mummy-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/mummy-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      }, */
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
