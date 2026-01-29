'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function AdsLinkPage() {
  const router = useRouter()
  const [url, setUrl] = useState('')

  const handleSubmit = () => {
    if (url) {
      // Navigate to analysis page with URL param
      const encodedUrl = encodeURIComponent(url)
      router.push(`/ads/analysis?url=${encodedUrl}`)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-200px)]'>
      <div className='max-w-3xl w-full px-6'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-link dark:text-white mb-4'>
            Enter the link you want to promote
          </h1>
          <p className='text-bodytext dark:text-darklink text-lg'>
            We will use this link to analyze product details
            <br />
            and set up the advertising landing page
          </p>
        </div>

        {/* Input Section */}
        <div className='relative max-w-2xl mx-auto'>
          <input
            type='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://example.com/your-product'
            className='w-full px-6 py-5 pr-32 text-base rounded-full border-2 border-primary/30 dark:border-primary/40 bg-white dark:bg-dark text-link dark:text-darklink placeholder:text-bodytext/50 dark:placeholder:text-darklink/50 focus:outline-none focus:border-primary transition-colors'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}
          />
          <Button
            onClick={handleSubmit}
            disabled={!url}
            className='absolute right-2 top-1/2 -translate-y-1/2 px-8 py-2.5 bg-primary hover:bg-primary-emphasis text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all'>
            Start
          </Button>
        </div>
      </div>
    </div>
  )
}
