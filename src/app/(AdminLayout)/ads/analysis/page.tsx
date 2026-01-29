'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AdsAnalysisPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const url = searchParams.get('url') || ''
  
  const [activeStep, setActiveStep] = useState(1)
  const [expandedStep, setExpandedStep] = useState<number | null>(1)
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  // Simulate AI analysis
  useEffect(() => {
    if (url) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false)
        setAnalysisComplete(true)
        
        // Auto navigate to goals after analysis completes
        setTimeout(() => {
          const encodedUrl = encodeURIComponent(url)
          router.push(`/ads/goal?url=${encodedUrl}`)
        }, 1500) // Wait 1.5 seconds to show success message
      }, 3000) // 3 seconds for demo
      return () => clearTimeout(timer)
    }
  }, [url, router])

  const handleContinue = () => {
    const encodedUrl = encodeURIComponent(url)
    router.push(`/ads/goal?url=${encodedUrl}`)
  }

  const steps = [
    {
      id: 1,
      title: 'Business Analysis',
      items: [
        'URL Analysis',
        'Product Information Identification',
        'Sales Points Analysis',
        'Ad Strategy Objectives Summary',
      ],
    },
    {
      id: 2,
      title: 'Market Research',
      items: [
        'Top Competitors Identification',
        'Search Keywords Identification',
        'Current Ad Market Analysis',
        'User Reviews and Community Discussion Analysis',
        'Regional Ad Strategy Analysis',
      ],
    },
  ]

  return (
    <div className='flex gap-6 h-full'>
      {/* Left Sidebar - Steps */}
      <Card className='w-[400px] p-6 bg-white dark:bg-darkgray rounded-2xl shadow-sm'>
        <h2 className='text-xl font-bold mb-6 text-link dark:text-darklink'>
          Analysis Steps
        </h2>

        <div className='space-y-4'>
          {steps.map((step, index) => (
            <div key={step.id} className='space-y-2'>
              {/* Step Header */}
              <div
                className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-colors ${
                  activeStep === step.id
                    ? 'bg-lightprimary dark:bg-primary/20'
                    : 'hover:bg-muted dark:hover:bg-darkmuted'
                }`}
                onClick={() => {
                  setActiveStep(step.id)
                  setExpandedStep(expandedStep === step.id ? null : step.id)
                }}>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    activeStep === step.id
                      ? 'bg-primary text-white'
                      : 'bg-muted dark:bg-darkmuted text-bodytext dark:text-darklink'
                  }`}>
                  {index + 1}
                </div>
                <h3
                  className={`flex-1 font-semibold ${
                    activeStep === step.id
                      ? 'text-primary'
                      : 'text-link dark:text-darklink'
                  }`}>
                  {step.title}
                </h3>
                <Icon
                  icon={
                    expandedStep === step.id
                      ? 'tabler:chevron-up'
                      : 'tabler:chevron-down'
                  }
                  className={`transition-colors ${
                    activeStep === step.id
                      ? 'text-primary'
                      : 'text-bodytext dark:text-darklink'
                  }`}
                  width={20}
                />
              </div>

              {/* Step Items */}
              {expandedStep === step.id && (
                <div className='ml-11 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200'>
                  {step.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className='text-sm text-bodytext dark:text-darklink py-1.5 hover:text-primary cursor-pointer transition-colors'>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Right Content - Main Area */}
      <div className='flex-1 flex flex-col items-center justify-center'>
        {/* Display URL */}
        {url && (
          <Card className='mb-6 p-4 bg-lightprimary/30 dark:bg-primary/10 border border-primary/20'>
            <div className='flex items-center gap-2 text-sm'>
              <Icon icon='solar:link-circle-linear' className='text-primary' width={20} />
              <span className='font-semibold text-bodytext dark:text-darklink'>Analyzing URL:</span>
              <span className='text-primary font-medium'>{url}</span>
            </div>
          </Card>
        )}

        <div className='text-center space-y-6'>
          {isAnalyzing ? (
            <>
              {/* Loading Spinner */}
              <div className='flex justify-center'>
                <div className='relative'>
                  <div className='w-16 h-16 border-4 border-lightprimary dark:border-primary/20 rounded-full'></div>
                  <div className='w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0'></div>
                </div>
              </div>

              {/* Loading Text */}
              <div className='space-y-2'>
                <h1 className='text-2xl font-bold text-primary'>
                  Preparing customized ad details
                </h1>
                <div className='flex justify-center gap-1'>
                  <span className='w-2 h-2 bg-primary rounded-full animate-bounce'></span>
                  <span className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]'></span>
                  <span className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]'></span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Analysis Complete */}
              <div className='flex justify-center'>
                <div className='w-16 h-16 bg-success/10 rounded-full flex items-center justify-center'>
                  <Icon icon='solar:check-circle-bold' className='text-success' width={40} />
                </div>
              </div>
              <div className='space-y-4'>
                <h1 className='text-2xl font-bold text-success'>
                  Analysis Complete!
                </h1>
                <p className='text-bodytext dark:text-darklink'>
                  Your product link has been analyzed successfully.
                </p>
                <Button 
                  onClick={handleContinue}
                  className='mt-4 bg-primary hover:bg-primary/90 text-white px-8 py-2'>
                  Continue to Goals
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
