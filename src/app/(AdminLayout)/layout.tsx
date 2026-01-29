'use client'

import Header from './layout/header/Header'
import Topbar from './layout/header/Topbar'
import Sidebar from './layout/sidebar/Sidebar'
import { Toaster } from '@/components/ui/sonner'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      const cookies = document.cookie.split(';')
      const authToken = cookies.find(c => c.trim().startsWith('auth_token='))
      const userEmail = cookies.find(c => c.trim().startsWith('user_email='))

      if (!authToken || !userEmail) {
        // Not authenticated, redirect to login
        router.push('/auth/login')
        return
      }

      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-lightgray dark:bg-dark">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render admin layout if not authenticated
  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <Topbar />
      <div className='flex w-full min-h-screen'>
        <div className='page-wrapper flex w-full'>
          {/* Header/sidebar */}
          <div className='xl:block hidden'>
            <Sidebar />
          </div>

          <div className='body-wrapper w-full'>
            {/* Top Header  */}
            <Header />
            {/* Body Content  */}
            <div className="bg-lightgray dark:bg-dark mr-3 rounded-3xl min-h-[90vh]">
              <div className={`container mx-auto px-6 py-30`}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}
