'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type CampaignStatus = 'draft' | 'publishing' | 'running' | 'finished' | 'error'

interface Campaign {
  id: number
  name: string
  status: CampaignStatus
  budget: number
  reach: string
  clicks: number
  conversions: number
  startDate: string
  endDate: string
  adSets: number
}

const demoData: Campaign[] = [
  {
    id: 1,
    name: 'Summer Sale Campaign 2026',
    status: 'draft',
    budget: 45,
    reach: '43.0k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-01-28',
    endDate: '2026-01-31',
    adSets: 3
  },
  {
    id: 2,
    name: 'New Product Launch - Tech Enthusiasts',
    status: 'draft',
    budget: 80,
    reach: '68.7k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-02-01',
    endDate: '2026-02-14',
    adSets: 5
  },
  {
    id: 3,
    name: 'Brand Awareness Q1 2026',
    status: 'publishing',
    budget: 120,
    reach: '98.0k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-01-29',
    endDate: '2026-03-31',
    adSets: 7
  },
  {
    id: 4,
    name: 'Valentine\'s Day Special Offer',
    status: 'running',
    budget: 150,
    reach: '120.0k',
    clicks: 2847,
    conversions: 142,
    startDate: '2026-01-25',
    endDate: '2026-02-14',
    adSets: 9
  },
  {
    id: 5,
    name: 'Winter Collection Clearance',
    status: 'running',
    budget: 95,
    reach: '78.3k',
    clicks: 1956,
    conversions: 89,
    startDate: '2026-01-20',
    endDate: '2026-02-10',
    adSets: 6
  },
  {
    id: 6,
    name: 'Holiday Season Campaign 2025',
    status: 'finished',
    budget: 200,
    reach: '156.0k',
    clicks: 8945,
    conversions: 567,
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    adSets: 9
  },
  {
    id: 7,
    name: 'Black Friday Mega Sale',
    status: 'finished',
    budget: 180,
    reach: '142.0k',
    clicks: 12384,
    conversions: 892,
    startDate: '2025-11-25',
    endDate: '2025-11-30',
    adSets: 9
  },
  {
    id: 8,
    name: 'Spring Collection Preview',
    status: 'draft',
    budget: 60,
    reach: '54.0k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-03-01',
    endDate: '2026-03-15',
    adSets: 4
  },
  {
    id: 9,
    name: 'Customer Loyalty Program Launch',
    status: 'draft',
    budget: 100,
    reach: '83.3k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-02-15',
    endDate: '2026-03-31',
    adSets: 6
  },
  {
    id: 10,
    name: 'Mobile App Download Campaign',
    status: 'error',
    budget: 75,
    reach: '0',
    clicks: 0,
    conversions: 0,
    startDate: '2026-01-28',
    endDate: '2026-02-28',
    adSets: 5
  },
  {
    id: 11,
    name: 'Weekend Flash Sale',
    status: 'draft',
    budget: 35,
    reach: '35.7k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-02-07',
    endDate: '2026-02-09',
    adSets: 2
  },
  {
    id: 12,
    name: 'Influencer Collaboration Campaign',
    status: 'draft',
    budget: 110,
    reach: '90.7k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-02-10',
    endDate: '2026-03-10',
    adSets: 7
  },
  {
    id: 13,
    name: 'Back to School Promotion',
    status: 'draft',
    budget: 90,
    reach: '73.0k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-08-01',
    endDate: '2026-08-31',
    adSets: 6
  },
  {
    id: 14,
    name: 'Email Subscriber Exclusive Deals',
    status: 'publishing',
    budget: 55,
    reach: '50.3k',
    clicks: 0,
    conversions: 0,
    startDate: '2026-01-29',
    endDate: '2026-02-15',
    adSets: 3
  },
  {
    id: 15,
    name: 'Retargeting Campaign - Abandoned Carts',
    status: 'running',
    budget: 65,
    reach: '58.7k',
    clicks: 1234,
    conversions: 98,
    startDate: '2026-01-22',
    endDate: '2026-02-22',
    adSets: 4
  },
  {
    id: 16,
    name: 'Year End Clearance 2025',
    status: 'finished',
    budget: 140,
    reach: '112.0k',
    clicks: 6789,
    conversions: 423,
    startDate: '2025-12-20',
    endDate: '2025-12-31',
    adSets: 8
  },
  {
    id: 17,
    name: 'New Year Resolution Campaign',
    status: 'error',
    budget: 85,
    reach: '0',
    clicks: 0,
    conversions: 0,
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    adSets: 5
  }
]

const statusConfig = {
  draft: {
    label: 'Draft',
    color: 'bg-muted dark:bg-darkmuted text-bodytext dark:text-darklink',
    icon: 'solar:document-text-linear'
  },
  publishing: {
    label: 'Publishing',
    color: 'bg-warning/10 dark:bg-warning/20 text-warning',
    icon: 'solar:upload-linear'
  },
  running: {
    label: 'Running',
    color: 'bg-success/10 dark:bg-success/20 text-success',
    icon: 'solar:play-circle-linear'
  },
  finished: {
    label: 'Finished',
    color: 'bg-primary/10 dark:bg-primary/20 text-primary',
    icon: 'solar:check-circle-linear'
  },
  error: {
    label: 'Error',
    color: 'bg-error/10 dark:bg-error/20 text-error',
    icon: 'solar:danger-circle-linear'
  }
}

export default function AdsHomePage() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState<CampaignStatus | 'all'>('all')

  const filteredCampaigns = selectedTab === 'all' 
    ? demoData 
    : demoData.filter(campaign => campaign.status === selectedTab)

  const getStatusCount = (status: CampaignStatus | 'all') => {
    if (status === 'all') return demoData.length
    return demoData.filter(campaign => campaign.status === status).length
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-link dark:text-white'>Campaigns</h1>
          <p className='text-bodytext dark:text-darklink mt-1'>Manage all your advertising campaigns</p>
        </div>
        <Link href='/ads/link'>
          <Button className='bg-primary hover:bg-primary/90 text-white'>
            <Icon icon='solar:add-circle-linear' className='mr-2' width={20} />
            Create Campaign
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <Card className='bg-white dark:bg-darkgray rounded-2xl shadow-sm overflow-hidden'>
        <div className='flex border-b border-border dark:border-darkborder'>
          <button
            onClick={() => setSelectedTab('all')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'all'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'all' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              All
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'all' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('all')}
            </span>
          </button>

          <button
            onClick={() => setSelectedTab('draft')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'draft'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'draft' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              Draft
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'draft' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('draft')}
            </span>
          </button>

          <button
            onClick={() => setSelectedTab('publishing')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'publishing'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'publishing' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              Publishing
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'publishing' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('publishing')}
            </span>
          </button>

          <button
            onClick={() => setSelectedTab('running')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'running'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'running' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              Running
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'running' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('running')}
            </span>
          </button>

          <button
            onClick={() => setSelectedTab('finished')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'finished'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'finished' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              Finished
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'finished' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('finished')}
            </span>
          </button>

          <button
            onClick={() => setSelectedTab('error')}
            className={`flex flex-col items-center gap-1 px-8 py-4 min-w-[120px] transition-colors ${
              selectedTab === 'error'
                ? 'bg-lightprimary dark:bg-primary/20 border-b-2 border-primary'
                : 'hover:bg-muted/50 dark:hover:bg-darkmuted/50'
            }`}>
            <span className={`text-sm font-semibold ${
              selectedTab === 'error' ? 'text-primary' : 'text-bodytext dark:text-darklink'
            }`}>
              Error
            </span>
            <span className={`text-2xl font-bold ${
              selectedTab === 'error' ? 'text-primary' : 'text-link dark:text-white'
            }`}>
              {getStatusCount('error')}
            </span>
          </button>
        </div>

        {/* Campaign List */}
        <div className='p-6'>
          {filteredCampaigns.length === 0 ? (
            <div className='text-center py-12'>
              <Icon icon='solar:inbox-linear' className='mx-auto text-muted dark:text-darkmuted mb-4' width={64} />
              <h3 className='text-lg font-semibold text-link dark:text-white mb-2'>No campaigns found</h3>
              <p className='text-bodytext dark:text-darklink'>Create your first campaign to get started</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className='p-6 bg-lightprimary/30 dark:bg-dark border border-border dark:border-darkborder hover:shadow-md transition-shadow'>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-3'>
                        <h3 className='text-lg font-bold text-link dark:text-white'>{campaign.name}</h3>
                        <Badge className={`${statusConfig[campaign.status].color} border-0`}>
                          <Icon icon={statusConfig[campaign.status].icon} className='mr-1' width={16} />
                          {statusConfig[campaign.status].label}
                        </Badge>
                      </div>

                      <div className='grid grid-cols-6 gap-6'>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Budget</div>
                          <div className='text-base font-bold text-link dark:text-white'>${campaign.budget}/day</div>
                        </div>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Est. Reach</div>
                          <div className='text-base font-bold text-primary'>{campaign.reach}</div>
                        </div>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Clicks</div>
                          <div className='text-base font-bold text-link dark:text-white'>{campaign.clicks.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Conversions</div>
                          <div className='text-base font-bold text-success'>{campaign.conversions.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Ad Sets</div>
                          <div className='text-base font-bold text-link dark:text-white'>{campaign.adSets}</div>
                        </div>
                        <div>
                          <div className='text-xs text-bodytext dark:text-darklink mb-1'>Period</div>
                          <div className='text-xs font-semibold text-link dark:text-white'>
                            {campaign.startDate} to {campaign.endDate}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-2 ml-6'>
                      <Button 
                        variant='outline' 
                        size='sm' 
                        className='border-border dark:border-darkborder'
                        onClick={() => {
                          const params = new URLSearchParams({
                            id: campaign.id.toString(),
                            url: 'https://example.com/product',
                            projectName: campaign.name,
                            goal: 'traffic',
                            platforms: 'facebook,instagram',
                            regions: 'United States'
                          })
                          router.push(`/ads/campaign?${params.toString()}`)
                        }}>
                        <Icon icon='solar:eye-linear' width={18} />
                      </Button>
                      <Button variant='outline' size='sm' className='border-border dark:border-darkborder'>
                        <Icon icon='solar:pen-linear' width={18} />
                      </Button>
                      <Button variant='outline' size='sm' className='border-border dark:border-darkborder text-error hover:text-error'>
                        <Icon icon='solar:trash-bin-trash-linear' width={18} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
