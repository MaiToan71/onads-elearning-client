import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  name?: string
  icon?: any
  children?: ChildItem[]
  item?: any
  url?: any
  color?: string
  disabled?: boolean
  subtitle?: string
  badge?: boolean
  badgeType?: string
  isPro?: boolean
}

export interface MenuItem {
  heading?: string
  name?: string
  icon?: any
  id?: number
  to?: string
  items?: MenuItem[]
  children?: ChildItem[]
  url?: any
  disabled?: boolean
  subtitle?: string
  badgeType?: string
  badge?: boolean
  isPro?: boolean
}

const SidebarContent: MenuItem[] = [
  {
    heading: 'Dashboards',
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/",
        isPro: false
      },

    ],
  },
  {
    heading: 'Ads Management',
    children: [
      {
        name: 'Link Ads',
        icon: 'solar:link-circle-linear',
        id: uniqueId(),
        url: '/ads/link',
      },

      {
        name: 'Home',
        icon: 'solar:home-2-linear',
        id: uniqueId(),
        url: '/ads/home',
      },


    ],
  },
  {
    heading: 'AI Tools',
    children: [
      {
        name: 'Prompt Generator',
        icon: 'solar:magic-stick-3-linear',
        id: uniqueId(),
        url: '/ai/prompt-generator',
      },
    ],
  },
  {
    heading: 'Help & Support',
    children: [
      {
        name: 'Support Tickets',
        icon: 'solar:chat-round-call-linear',
        id: uniqueId(),
        url: '/help-support/ticket',
      },
    ],
  },
  {
    heading: 'Settings',
    children: [
      {
        name: 'My Profile',
        icon: 'solar:user-id-linear',
        id: uniqueId(),
        url: '/user-profile',
      },
      {
        name: 'Logout',
        icon: 'solar:logout-2-linear',
        id: uniqueId(),
        url: '/auth/login',
      },
    ],
  },
]

export default SidebarContent
