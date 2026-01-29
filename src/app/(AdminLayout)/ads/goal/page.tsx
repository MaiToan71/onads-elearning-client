'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function AdsGoalPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlParam = searchParams.get('url') || ''
  
  const [activeTab, setActiveTab] = useState('business')
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['facebook', 'instagram'])
  const [selectedGoal, setSelectedGoal] = useState('traffic')
  const [regions, setRegions] = useState(['United States'])
  const [projectName, setProjectName] = useState('New Campaign 2026')
  const [url, setUrl] = useState(urlParam)

  useEffect(() => {
    if (urlParam) {
      setUrl(urlParam)
    }
  }, [urlParam])

  const handleContinue = () => {
    const params = new URLSearchParams({
      url: url,
      projectName: projectName,
      goal: selectedGoal,
      platforms: selectedPlatforms.join(','),
      regions: regions.join(',')
    })
    router.push(`/ads/campaign?${params.toString()}`)
  }

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: 'logos:facebook' },
    { id: 'instagram', name: 'Instagram', icon: 'skill-icons:instagram' },
    { id: 'audience', name: 'Audience Network', icon: 'ph:users-three-fill' },
    { id: 'messenger', name: 'Messenger', icon: 'logos:facebook-messenger' },
    { id: 'threads', name: 'Threads', icon: 'simple-icons:threads' },
  ]

  const goals = [
    {
      id: 'traffic',
      title: 'TRAFFIC',
      description: 'Drive traffic to your website',
    },
    {
      id: 'leads',
      title: 'LEADS',
      description: 'Generate leads for your business',
    },
    {
      id: 'sales',
      title: 'SALES',
      description: 'Increase sales and conversions',
    },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    )
  }

  return (
    <div className='flex gap-6'>
      {/* Left Panel - Business Info */}
      <Card className='w-[680px] p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
        {/* Tabs */}
        <div className='flex border-b border-border dark:border-darkborder mb-6'>
          <button
            onClick={() => setActiveTab('business')}
            className={`flex-1 pb-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'business'
                ? 'text-link dark:text-white'
                : 'text-bodytext dark:text-darklink'
            }`}>
            YOUR BUSINESS
            {activeTab === 'business' && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary'></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`flex-1 pb-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'market'
                ? 'text-link dark:text-white'
                : 'text-bodytext dark:text-darklink'
            }`}>
            MARKET
            {activeTab === 'market' && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary'></div>
            )}
          </button>
        </div>

        {/* Content */}
        <div className='space-y-4 text-bodytext dark:text-darklink'>
          <p className='leading-relaxed'>
            We don't fully understand the page content. Please ensure the website
            is properly accessible and provide detailed brand description (name, concept)
            and clear overview of your product or service.
          </p>
          <div className='space-y-2'>
            <p>
              - For products: Include category, price, features, appearance and target
              audience.
            </p>
            <p>
              - For services: Include service details, target audience and pricing.
            </p>
            <p>
              Also, emphasize key selling points to ensure effective promotion.
            </p>
          </div>
        </div>
      </Card>

      {/* Right Panel - Form */}
      <div className='flex-1 space-y-6'>
        {/* URL Section */}
        <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
          <label className='block mb-3'>
            <span className='text-sm font-semibold text-link dark:text-white flex items-center gap-1'>
              YOUR URL
              <span className='text-error'>*</span>
            </span>
          </label>
          <Input
            type='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://bypilates.vn/tin-tuc/ladder-barrel-pilates-la-gi-vi-sao-thiet-bi-nay-giup-cot-song-k...'
            className='w-full rounded-lg border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink'
          />
        </Card>

        {/* Platform Section */}
        <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
          <label className='block mb-4'>
            <span className='text-sm font-semibold text-link dark:text-white flex items-center gap-1'>
              PLATFORM
              <span className='text-error'>*</span>
            </span>
          </label>
          <div className='flex flex-wrap gap-3'>
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => togglePlatform(platform.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all ${
                  selectedPlatforms.includes(platform.id)
                    ? 'border-primary bg-lightprimary dark:bg-primary/20'
                    : 'border-border dark:border-darkborder hover:border-primary/50'
                }`}>
                <Icon icon={platform.icon} width={20} height={20} />
                <span className='text-sm font-medium text-link dark:text-darklink'>
                  {platform.name}
                </span>
              </button>
            ))}
          </div>
        </Card>

        {/* Project Name Section */}
        <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
          <label className='block mb-3'>
            <span className='text-sm font-semibold text-link dark:text-white flex items-center gap-1'>
              PROJECT NAME
              <span className='text-error'>*</span>
            </span>
          </label>
          <Input
            type='text'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder='Enter project name...'
            className='w-full rounded-lg border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink'
          />
        </Card>

        {/* Goal Section */}
        <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
          <label className='block mb-4'>
            <span className='text-sm font-semibold text-link dark:text-white flex items-center gap-1'>
              ADVERTISING GOAL
              <span className='text-error'>*</span>
            </span>
          </label>
          <div className='grid grid-cols-3 gap-4'>
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedGoal === goal.id
                    ? 'border-primary bg-lightprimary dark:bg-primary/20'
                    : 'border-border dark:border-darkborder hover:border-primary/50'
                }`}>
                <div className='flex items-start justify-between mb-2'>
                  <h4 className='font-semibold text-sm text-link dark:text-white'>
                    {goal.title}
                  </h4>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedGoal === goal.id
                        ? 'border-primary bg-primary'
                        : 'border-border dark:border-darkborder'
                    }`}>
                    {selectedGoal === goal.id && (
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    )}
                  </div>
                </div>
                <p className='text-xs text-bodytext dark:text-darklink'>
                  {goal.description}
                </p>
              </button>
            ))}
          </div>
        </Card>

        {/* Region Section */}
        <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
          <label className='block mb-4'>
            <span className='text-sm font-semibold text-link dark:text-white flex items-center gap-1'>
              TARGET REGION
              <span className='text-error'>*</span>
            </span>
          </label>
          <div className='relative mb-3'>
            <Icon
              icon='ic:outline-search'
              className='absolute left-3 top-1/2 -translate-y-1/2 text-bodytext dark:text-darklink'
              width={20}
            />
            <Input
              type='text'
              placeholder='Search location...'
              className='w-full pl-10 rounded-lg border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink'
            />
          </div>
          <div className='flex flex-wrap gap-2'>
            {regions.map((region, index) => (
              <Badge
                key={index}
                variant='secondary'
                className='px-3 py-1.5 bg-lightprimary dark:bg-primary/20 text-primary border-0'>
                {region}
                <button
                  onClick={() =>
                    setRegions(regions.filter((_, i) => i !== index))
                  }
                  className='ml-2 hover:text-error'>
                  <Icon icon='mdi:close' width={14} />
                </button>
              </Badge>
            ))}
          </div>
        </Card>

        {/* Continue Button */}
        <div className='mt-6 flex justify-end'>
          <Button 
            onClick={handleContinue}
            disabled={!projectName || !url || selectedPlatforms.length === 0}
            className='bg-primary hover:bg-primary/90 text-white px-8 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed'>
            Continue to Campaign
          </Button>
        </div>
      </div>
    </div>
  )
}
