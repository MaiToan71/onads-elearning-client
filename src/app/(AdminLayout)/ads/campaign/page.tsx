'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'

export default function AdsCampaignPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get params from URL
  const campaignId = searchParams.get('id') || ''
  const urlParam = searchParams.get('url') || ''
  const projectNameParam = searchParams.get('projectName') || 'New Campaign'
  const goalParam = searchParams.get('goal') || 'traffic'
  const platformsParam = searchParams.get('platforms') || 'facebook,instagram'
  const regionsParam = searchParams.get('regions') || 'United States'
  
  const [budget, setBudget] = useState(45)
  const [startDate, setStartDate] = useState<Date>(new Date(2026, 0, 28, 15, 0))
  const [endDate, setEndDate] = useState<Date>(new Date(2026, 0, 31, 18, 0))
  const [selectedAdSet, setSelectedAdSet] = useState(1)
  const [showPreview, setShowPreview] = useState(false)

  // Calculate active ad sets based on budget (max 150 = all 9 active)
  const getActiveAdSetsCount = (budgetValue: number) => {
    const maxBudget = 150
    const totalAdSets = 9
    const ratio = Math.min(budgetValue / maxBudget, 1)
    return Math.max(1, Math.floor(ratio * totalAdSets))
  }

  // Calculate estimated reach based on budget
  const getEstimatedReach = (budgetValue: number) => {
    // Base reach: 10k for $0, up to 120k for $150
    const minReach = 10000
    const maxReach = 120000
    const reach = minReach + (budgetValue / 150) * (maxReach - minReach)
    
    // Format number with k or M
    if (reach >= 1000000) {
      return `${(reach / 1000000).toFixed(1)}M`
    } else if (reach >= 1000) {
      return `${(reach / 1000).toFixed(1)}k`
    }
    return reach.toString()
  }

  const [adSets, setAdSets] = useState([
    { id: 1, name: 'Ad set 01', active: true },
    { id: 2, name: 'Ad set 02', active: true },
    { id: 3, name: 'Ad set 03', active: true },
    { id: 4, name: 'Ad set 04', active: false },
    { id: 5, name: 'Ad set 05', active: false },
    { id: 6, name: 'Ad set 06', active: false },
    { id: 7, name: 'Ad set 07', active: false },
    { id: 8, name: 'Ad set 08', active: false },
    { id: 9, name: 'Ad set 09', active: false },
  ])

  // Update active ad sets when budget changes
  useEffect(() => {
    const activeCount = getActiveAdSetsCount(budget)
    setAdSets((prev) =>
      prev.map((adSet, index) => ({
        ...adSet,
        active: index < activeCount,
      }))
    )
  }, [budget])

  const adSetDetails: Record<number, {
    title: string
    age: string
    gender: string
    location: string
    spend: string
    targetDetails: string
    headline: string
    primaryText: string
  }> = {
    1: {
      title: 'CURIOUS YOUNG PROFESSIONALS',
      age: '18-35',
      gender: 'All',
      location: 'United States',
      spend: '$7.50',
      targetDetails: 'Young professionals who are eager to discover innovative solutions and explore new products online.',
      headline: 'Discover More, Explore Now! ✨',
      primaryText: 'Step into a world of innovation with our latest ad solutions✨ Designed for those who love to learn and explore new possibilities every day😊 Experience advanced technology that makes your online journey effortless and exciting😍 Perfect for anyone ready to discover what\'s next in the digital era🔥 Start your adventure today and see how we can make a difference in your life!💯'
    },
    2: {
      title: 'TECH ENTHUSIASTS',
      age: '25-45',
      gender: 'Male',
      location: 'United States',
      spend: '$12.00',
      targetDetails: 'Technology lovers who constantly seek the latest gadgets and software solutions for their digital lifestyle.',
      headline: 'Upgrade Your Tech Game! 🚀',
      primaryText: 'Join thousands of tech enthusiasts who trust our platform for cutting-edge solutions💻 Get exclusive access to premium features and early releases🎯 Transform your workflow with AI-powered tools that save time and boost productivity⚡'
    },
    3: {
      title: 'CREATIVE ENTREPRENEURS',
      age: '22-40',
      gender: 'All',
      location: 'United States',
      spend: '$9.50',
      targetDetails: 'Creative minds and entrepreneurs building their brands and looking for innovative marketing solutions.',
      headline: 'Build Your Brand Today! 💼',
      primaryText: 'Empower your business with tools designed for creators and entrepreneurs✨ Scale your reach with smart marketing automation🎨 Join our community of successful business owners who are making their dreams reality🌟'
    },
    4: {
      title: 'FITNESS ENTHUSIASTS',
      age: '20-40',
      gender: 'All',
      location: 'United States',
      spend: '$8.75',
      targetDetails: 'Health-conscious individuals passionate about fitness, wellness, and maintaining an active lifestyle.',
      headline: 'Transform Your Fitness Journey! 💪',
      primaryText: 'Achieve your fitness goals with our comprehensive wellness platform🏋️ Track progress, get personalized workout plans, and connect with trainers🎯 Join thousands already seeing amazing results in just weeks!'
    },
    5: {
      title: 'DIGITAL NOMADS',
      age: '24-38',
      gender: 'All',
      location: 'Worldwide',
      spend: '$11.25',
      targetDetails: 'Remote workers and digital nomads seeking flexible solutions for work-life balance while traveling.',
      headline: 'Work From Anywhere! 🌍',
      primaryText: 'Perfect for digital nomads who value freedom and flexibility✈️ Collaborate seamlessly with teams across time zones🌐 Manage projects, communicate, and stay productive from any corner of the world🚀'
    },
    6: {
      title: 'PARENTS & FAMILIES',
      age: '28-50',
      gender: 'All',
      location: 'United States',
      spend: '$10.00',
      targetDetails: 'Parents and families looking for products and services that make daily life easier and more enjoyable.',
      headline: 'Make Family Life Easier! 👨‍👩‍👧‍👦',
      primaryText: 'Designed with busy families in mind - save time and reduce stress with our family-friendly solutions🏠 Trusted by thousands of parents nationwide for quality and reliability💝 Make memories, not messes with our easy-to-use products!'
    }
  }

  const currentAdSetData = adSetDetails[selectedAdSet] || adSetDetails[1]

  return (
    <div className='space-y-6'>
      {/* Campaign Info from URL params */}
      {urlParam && (
        <Card className='p-4 bg-lightprimary/30 dark:bg-primary/10 border border-primary/20'>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-wrap items-center gap-4'>
              {campaignId && (
                <div className='flex items-center gap-2'>
                  <Icon icon='solar:hashtag-linear' className='text-primary' width={20} />
                  <span className='font-semibold text-bodytext dark:text-darklink'>Campaign ID:</span>
                  <span className='text-primary font-medium'>#{campaignId}</span>
                </div>
              )}
              <div className='flex items-center gap-2'>
                <Icon icon='solar:document-text-linear' className='text-primary' width={20} />
                <span className='font-semibold text-bodytext dark:text-darklink'>Campaign:</span>
                <span className='text-link dark:text-white font-medium'>{projectNameParam}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='solar:link-circle-linear' className='text-primary' width={20} />
                <span className='font-semibold text-bodytext dark:text-darklink'>URL:</span>
                <span className='text-primary font-medium truncate max-w-[300px]'>{urlParam}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='solar:target-linear' className='text-primary' width={20} />
                <span className='font-semibold text-bodytext dark:text-darklink'>Goal:</span>
                <Badge className='bg-primary/10 text-primary border-0 uppercase'>{goalParam}</Badge>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='solar:smartphone-linear' className='text-primary' width={20} />
                <span className='font-semibold text-bodytext dark:text-darklink'>Platforms:</span>
                <span className='text-link dark:text-white font-medium'>{platformsParam.split(',').join(', ')}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='solar:global-linear' className='text-primary' width={20} />
                <span className='font-semibold text-bodytext dark:text-darklink'>Regions:</span>
                <span className='text-link dark:text-white font-medium'>{regionsParam}</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              {!campaignId && (
                <Button 
                  variant='outline'
                  onClick={() => {
                    const params = new URLSearchParams({
                      url: urlParam,
                      projectName: projectNameParam,
                      goal: goalParam,
                      platforms: platformsParam,
                      regions: regionsParam
                    })
                    router.push(`/ads/goal?${params.toString()}`)
                  }}
                  className='flex items-center gap-2 border-bodytext/30 hover:bg-muted/50 text-bodytext dark:text-darklink whitespace-nowrap'>
                  <Icon icon='solar:arrow-left-linear' width={20} />
                  Back
                </Button>
              )}
              <Button 
                variant='outline'
                onClick={() => router.push('/ads/home')}
                className='flex items-center gap-2 border-primary/30 hover:bg-primary/10 text-primary whitespace-nowrap'>
                <Icon icon='solar:arrow-left-linear' width={20} />
                Back to Home
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Daily Budget Section */}
      <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
        <div className='flex items-center gap-2 mb-6'>
          <Icon
            icon='solar:calculator-linear'
            className='text-primary'
            width={24}
          />
          <h2 className='text-xl font-bold text-link dark:text-white'>
            DAILY BUDGET
          </h2>
        </div>

        <div className='grid grid-cols-12 gap-6 mb-6'>
          {/* Budget Input */}
          <div className='col-span-3'>
            <label className='block text-sm font-medium text-bodytext dark:text-darklink mb-2'>
              DAILY AMOUNT
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-link dark:text-darklink font-semibold'>
                $
              </span>
              <Input
                type='number'
                value={budget}
                onChange={(e) => {
                  const value = Math.min(Number(e.target.value), 150)
                  setBudget(value)
                }}
                min={0}
                max={150}
                className='pl-8 text-lg font-semibold border-border dark:border-darkborder'
              />
              <button className='absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-emphasis'>
                <Icon icon='solar:info-circle-linear' width={20} />
              </button>
            </div>
          </div>

          {/* Date Range */}
          <div className='col-span-6'>
            <label className='block text-sm font-medium text-bodytext dark:text-darklink mb-2'>
              TIME PERIOD
            </label>
            <div className='flex items-center gap-3'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className='flex-1 justify-start text-left font-normal border-border dark:border-darkborder bg-white dark:bg-dark'>
                    <Icon
                      icon='solar:calendar-linear'
                      className='mr-2 text-bodytext dark:text-darklink'
                      width={18}
                    />
                    {startDate ? format(startDate, 'yyyy-MM-dd hh:mm a') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={startDate}
                    onSelect={(date) => date && setStartDate(date)}
                    initialFocus
                  />
                  <div className='p-3 border-t border-border dark:border-darkborder'>
                    <label className='text-xs text-bodytext dark:text-darklink mb-1 block'>
                      Time
                    </label>
                    <div className='flex gap-2'>
                      <Input
                        type='number'
                        min='1'
                        max='12'
                        value={parseInt(format(startDate, 'hh'))}
                        onChange={(e) => {
                          const newDate = new Date(startDate)
                          const isPM = newDate.getHours() >= 12
                          const hours = parseInt(e.target.value)
                          newDate.setHours(isPM ? (hours === 12 ? 12 : hours + 12) : (hours === 12 ? 0 : hours))
                          setStartDate(newDate)
                        }}
                        placeholder='HH'
                        className='w-16 border-border dark:border-darkborder text-center'
                      />
                      <span className='flex items-center text-bodytext dark:text-darklink'>:</span>
                      <Input
                        type='number'
                        min='0'
                        max='59'
                        value={format(startDate, 'mm')}
                        onChange={(e) => {
                          const newDate = new Date(startDate)
                          newDate.setMinutes(parseInt(e.target.value))
                          setStartDate(newDate)
                        }}
                        placeholder='MM'
                        className='w-16 border-border dark:border-darkborder text-center'
                      />
                      <select
                        value={startDate.getHours() >= 12 ? 'PM' : 'AM'}
                        onChange={(e) => {
                          const newDate = new Date(startDate)
                          const currentHour = newDate.getHours()
                          const isPM = e.target.value === 'PM'
                          if (isPM && currentHour < 12) {
                            newDate.setHours(currentHour + 12)
                          } else if (!isPM && currentHour >= 12) {
                            newDate.setHours(currentHour - 12)
                          }
                          setStartDate(newDate)
                        }}
                        className='px-3 py-2 rounded-lg border border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink text-sm'>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>
                      </select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <span className='text-bodytext dark:text-darklink'>-</span>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className='flex-1 justify-start text-left font-normal border-border dark:border-darkborder bg-white dark:bg-dark'>
                    <Icon
                      icon='solar:calendar-linear'
                      className='mr-2 text-bodytext dark:text-darklink'
                      width={18}
                    />
                    {endDate ? format(endDate, 'yyyy-MM-dd hh:mm a') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={endDate}
                    onSelect={(date) => date && setEndDate(date)}
                    initialFocus
                  />
                  <div className='p-3 border-t border-border dark:border-darkborder'>
                    <label className='text-xs text-bodytext dark:text-darklink mb-1 block'>
                      Time
                    </label>
                    <div className='flex gap-2'>
                      <Input
                        type='number'
                        min='1'
                        max='12'
                        value={parseInt(format(endDate, 'hh'))}
                        onChange={(e) => {
                          const newDate = new Date(endDate)
                          const isPM = newDate.getHours() >= 12
                          const hours = parseInt(e.target.value)
                          newDate.setHours(isPM ? (hours === 12 ? 12 : hours + 12) : (hours === 12 ? 0 : hours))
                          setEndDate(newDate)
                        }}
                        placeholder='HH'
                        className='w-16 border-border dark:border-darkborder text-center'
                      />
                      <span className='flex items-center text-bodytext dark:text-darklink'>:</span>
                      <Input
                        type='number'
                        min='0'
                        max='59'
                        value={format(endDate, 'mm')}
                        onChange={(e) => {
                          const newDate = new Date(endDate)
                          newDate.setMinutes(parseInt(e.target.value))
                          setEndDate(newDate)
                        }}
                        placeholder='MM'
                        className='w-16 border-border dark:border-darkborder text-center'
                      />
                      <select
                        value={endDate.getHours() >= 12 ? 'PM' : 'AM'}
                        onChange={(e) => {
                          const newDate = new Date(endDate)
                          const currentHour = newDate.getHours()
                          const isPM = e.target.value === 'PM'
                          if (isPM && currentHour < 12) {
                            newDate.setHours(currentHour + 12)
                          } else if (!isPM && currentHour >= 12) {
                            newDate.setHours(currentHour - 12)
                          }
                          setEndDate(newDate)
                        }}
                        className='px-3 py-2 rounded-lg border border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink text-sm'>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>
                      </select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Estimated Reach */}
          <div className='col-span-3 text-right'>
            <label className='block text-sm font-medium text-bodytext dark:text-darklink mb-2'>
              ESTIMATED REACH
            </label>
            <div className='text-2xl font-bold text-primary'>{getEstimatedReach(budget)}</div>
          </div>
        </div>

        {/* Slider with tabs */}
        <div className='mb-4'>
          <div className='flex border-b border-border dark:border-darkborder mb-4'>
            <button className='px-4 py-2 text-sm font-semibold text-primary border-b-2 border-primary'>
              Budget
            </button>
            <button className='px-4 py-2 text-sm font-semibold text-bodytext dark:text-darklink hover:text-primary'>
              Continue Reach
            </button>
            <button className='px-4 py-2 text-sm font-semibold text-bodytext dark:text-darklink hover:text-primary'>
              Double Previous Results
            </button>
          </div>

          {/* Slider */}
          <input
            type='range'
            min='0'
            max='150'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className='w-full h-2 bg-muted dark:bg-darkmuted rounded-lg appearance-none cursor-pointer accent-primary'
          />
        </div>

        {/* Warning message */}
        <div className='flex items-start gap-3 p-4 bg-error/10 dark:bg-error/20 rounded-lg mb-6'>
          <Icon
            icon='solar:danger-circle-linear'
            className='text-error flex-shrink-0 mt-0.5'
            width={20}
          />
          <p className='text-sm text-error'>
            Budget is too low to get the best results
          </p>
        </div>

        {/* Chart Section */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='text-center'>
            <h3 className='text-sm font-semibold text-primary mb-4'>
              EXPLORE
            </h3>
            <div className='h-40 relative'>
              {/* Simple line chart representation */}
              <svg
                className='w-full h-full'
                viewBox='0 0 400 160'
                preserveAspectRatio='none'>
                <polyline
                  points='0,120 60,100 120,80 180,70 240,60 300,50 360,40 400,30'
                  fill='none'
                  stroke='currentColor'
                  className='text-primary/30'
                  strokeWidth='3'
                />
                <polyline
                  points='0,120 60,100 120,80 180,70 240,60 300,50 360,40 400,30'
                  fill='none'
                  stroke='currentColor'
                  className='text-primary'
                  strokeWidth='2'
                />
              </svg>
              {/* X-axis labels */}
              <div className='flex justify-between text-xs text-bodytext dark:text-darklink mt-2'>
                <span>1/28</span>
                <span>2/2</span>
                <span>2/7</span>
                <span>2/12</span>
                <span>2/17</span>
                <span>2/22</span>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-sm font-semibold text-bodytext dark:text-darklink mb-4'>
              GROW
            </h3>
            <div className='h-40 relative'>
              <svg
                className='w-full h-full'
                viewBox='0 0 400 160'
                preserveAspectRatio='none'>
                <polyline
                  points='0,140 60,135 120,130 180,120 240,115 300,105 360,95 400,90'
                  fill='none'
                  stroke='currentColor'
                  className='text-bodytext/30'
                  strokeWidth='3'
                />
                <polyline
                  points='0,140 60,135 120,130 180,120 240,115 300,105 360,95 400,90'
                  fill='none'
                  stroke='currentColor'
                  className='text-bodytext/50'
                  strokeWidth='2'
                />
              </svg>
              <div className='flex justify-between text-xs text-bodytext dark:text-darklink mt-2'>
                <span>1/28</span>
                <span>2/2</span>
                <span>2/7</span>
                <span>2/12</span>
                <span>2/17</span>
                <span>2/22</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Ad Sets Section */}
      <Card className='p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <Icon
              icon='solar:layers-linear'
              className='text-primary'
              width={24}
            />
            <h2 className='text-xl font-bold text-link dark:text-white'>
              AD GROUPS
            </h2>
          </div>

          <div className='flex items-center gap-3'>
            <button className='text-sm text-bodytext dark:text-darklink hover:text-primary font-medium'>
              Change ad content
            </button>
            <select className='px-4 py-2 rounded-lg border border-border dark:border-darkborder bg-white dark:bg-dark text-link dark:text-darklink text-sm'>
              <option>Register now</option>
            </select>
            <Button className='bg-primary hover:bg-primary-emphasis text-white px-6'>
              Create AI video
            </Button>
            <Button
              variant='outline'
              className='border-primary text-primary hover:bg-lightprimary px-6'>
              <Icon icon='solar:add-circle-linear' width={18} />
              Add option
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-6'>
          {/* Left - Ad Sets List */}
          <div className='col-span-3 space-y-2'>
            {adSets.map((adSet) => (
              <button
                key={adSet.id}
                onClick={() => setSelectedAdSet(adSet.id)}
                disabled={!adSet.active}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  selectedAdSet === adSet.id
                    ? 'bg-lightprimary dark:bg-primary/20 border-l-4 border-primary'
                    : adSet.active
                    ? 'border-l-4 border-transparent hover:bg-muted dark:hover:bg-darkmuted'
                    : 'opacity-50 cursor-not-allowed border-l-4 border-transparent'
                }`}>
                <Icon
                  icon={
                    adSet.active
                      ? 'solar:check-circle-bold'
                      : 'solar:close-circle-linear'
                  }
                  className={
                    adSet.active
                      ? 'text-primary'
                      : 'text-bodytext dark:text-darklink'
                  }
                  width={20}
                />
                <span
                  className={`font-medium ${
                    selectedAdSet === adSet.id
                      ? 'text-primary'
                      : adSet.active
                      ? 'text-link dark:text-darklink'
                      : 'text-bodytext dark:text-darklink'
                  }`}>
                  {adSet.name}
                </span>
              </button>
            ))}
          </div>

          {/* Middle - Ad Details */}
          <div className='col-span-5 space-y-6'>
            <div>
              <h3 className='text-2xl font-bold text-link dark:text-white mb-4'>
                {currentAdSetData.title}
              </h3>

              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div>
                  <label className='text-xs text-bodytext dark:text-darklink block mb-1'>
                    AGE
                  </label>
                  <div className='font-semibold text-link dark:text-white'>
                    {currentAdSetData.age}
                  </div>
                </div>
                <div>
                  <label className='text-xs text-bodytext dark:text-darklink block mb-1'>
                    GENDER
                  </label>
                  <div className='font-semibold text-link dark:text-white'>
                    {currentAdSetData.gender}
                  </div>
                </div>
                <div>
                  <label className='text-xs text-bodytext dark:text-darklink block mb-1'>
                    TARGET LOCATION
                  </label>
                  <div className='font-semibold text-link dark:text-white'>
                    {currentAdSetData.location}
                  </div>
                </div>
              </div>

              <div className='text-right mb-6'>
                <label className='text-xs text-bodytext dark:text-darklink block mb-1'>
                  AD GROUP SPEND
                </label>
                <div className='text-2xl font-bold text-link dark:text-white'>
                  {currentAdSetData.spend}
                </div>
              </div>
            </div>

            {/* Target Details */}
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold text-link dark:text-white mb-3 pb-2 border-b-2 border-primary'>
                  TARGET DETAILS
                </h4>
                <p className='text-sm text-bodytext dark:text-darklink leading-relaxed'>
                  {currentAdSetData.targetDetails}
                </p>
              </div>

              <div>
                <h4 className='font-semibold text-link dark:text-white mb-3 pb-2 border-b-2 border-primary'>
                  AD CONTENT
                </h4>
                <div className='space-y-2'>
                  <div>
                    <p className='text-xs text-bodytext dark:text-darklink mb-1'>
                      HEADLINE
                    </p>
                    <p className='text-sm text-link dark:text-white'>
                      {currentAdSetData.headline}
                    </p>
                  </div>
                  <div>
                    <p className='text-xs text-bodytext dark:text-darklink mb-1'>
                      PRIMARY TEXT
                    </p>
                    <p className='text-sm text-bodytext dark:text-darklink leading-relaxed line-clamp-6'>
                      {currentAdSetData.primaryText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Preview Card */}
          <div className='col-span-4'>
            <div className='bg-white dark:bg-dark rounded-xl border border-border dark:border-darkborder p-4 shadow-sm'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <Icon icon='solar:user-linear' className='text-primary' width={20} />
                </div>
                <div>
                  <div className='font-semibold text-link dark:text-white text-sm'>
                    Name
                  </div>
                  <div className='text-xs text-bodytext dark:text-darklink'>
                    Sponsored
                  </div>
                </div>
                <button className='ml-auto'>
                  <Icon
                    icon='solar:menu-dots-linear'
                    className='text-bodytext dark:text-darklink'
                    width={20}
                  />
                </button>
              </div>

              <p className='text-sm text-bodytext dark:text-darklink mb-3 line-clamp-2'>
                {currentAdSetData.primaryText.substring(0, 80)}...
              </p>

              {/* Image placeholder */}
              <div className='bg-muted dark:bg-darkmuted rounded-lg aspect-video flex items-center justify-center mb-3'>
                <div className='text-center'>
                  <Icon
                    icon='solar:gallery-add-linear'
                    className='text-bodytext dark:text-darklink mx-auto mb-2'
                    width={40}
                  />
                  <p className='text-sm text-bodytext dark:text-darklink'>
                    Upload Images & videos
                  </p>
                  <p className='text-xs text-bodytext dark:text-darklink mt-1'>
                    AI generated image in about 30 seconds
                  </p>
                  <div className='flex justify-center mt-3'>
                    <div className='animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent'></div>
                  </div>
                </div>
              </div>

              {/* Link preview */}
              <div className='bg-muted dark:bg-darkmuted p-3 rounded-lg mb-3'>
                <div className='text-xs text-bodytext dark:text-darklink mb-1 truncate'>
                  https://bypilates.vn/tin-tuc/ladde...
                </div>
                <div className='text-sm font-semibold text-link dark:text-white mb-1'>
                  {currentAdSetData.headline}
                </div>
              </div>

              {/* CTA Button */}
              <Button className='w-full bg-primary hover:bg-primary-emphasis text-white'>
                APPLY NOW
              </Button>

              {/* Action buttons */}
              <div className='flex items-center justify-between mt-4 pt-3 border-t border-border dark:border-darkborder'>
                <div className='flex items-center gap-4 text-sm text-bodytext dark:text-darklink'>
                  <button className='flex items-center gap-1 hover:text-primary'>
                    <Icon icon='solar:like-linear' width={18} />
                    Like
                  </button>
                  <button className='flex items-center gap-1 hover:text-primary'>
                    <Icon icon='solar:chat-round-linear' width={18} />
                    Comment
                  </button>
                  <button className='flex items-center gap-1 hover:text-primary'>
                    <Icon icon='solar:share-linear' width={18} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className='flex justify-between mt-6 pt-6 border-t border-border dark:border-darkborder'>
          <Button
            variant='outline'
            className='border-border dark:border-darkborder text-bodytext dark:text-darklink'>
            Back
          </Button>
          <Button className='bg-primary hover:bg-primary-emphasis text-white px-8'>
            Publish
          </Button>
        </div>
      </Card>
    </div>
  )
}
