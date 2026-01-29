'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { User, LogOut, Settings, LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const UserMenu = () => {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      // Check localStorage first
      const email = localStorage.getItem('user_email')
      if (email) {
        setUserEmail(email)
        setIsLoading(false)
        return
      }

      // Fallback to cookie
      const cookies = document.cookie.split(';')
      const emailCookie = cookies.find(c => c.trim().startsWith('user_email='))
      if (emailCookie) {
        const cookieEmail = decodeURIComponent(emailCookie.split('=')[1])
        setUserEmail(cookieEmail)
        setIsLoading(false)
        return
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogout = () => {
    // Clear cookies
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    document.cookie = 'user_email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    
    // Clear localStorage
    localStorage.removeItem('user_email')
    localStorage.removeItem('login_time')

    toast.success('Logged out successfully')
    setUserEmail(null)
    
    // Redirect to home
    router.push('/')
    router.refresh()
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-20 h-9 bg-gray-200 animate-pulse rounded"></div>
        <div className="w-20 h-9 bg-gray-200 animate-pulse rounded-full"></div>
      </div>
    )
  }

  // If user is authenticated, show user menu
  if (userEmail) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium max-w-[150px] truncate">
              {userEmail}
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-2">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {userEmail}
            </p>
          </div>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem asChild>
            <Link
              href="/ads/link"
              className="flex items-center gap-3 px-3 py-2 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link
              href="/user-profile"
              className="flex items-center gap-3 px-3 py-2 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Profile Settings</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link
              href="/ads/link"
              className="flex items-center gap-3 px-3 py-2 cursor-pointer"
            >
              <Settings className="w-4 h-4" />
              <span>Account Settings</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 text-red-600 cursor-pointer focus:text-red-600 focus:bg-red-50"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // If not authenticated, show sign in/sign up buttons
  return (
    <>
      <Link href="/auth/login">
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
          Sign in
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 rounded-full">
          Sign up
        </Button>
      </Link>
    </>
  )
}
