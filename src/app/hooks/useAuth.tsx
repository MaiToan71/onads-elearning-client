'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export const useAuth = () => {
  const router = useRouter()

  const logout = () => {
    // Clear cookies
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    document.cookie = 'user_email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    
    // Clear localStorage
    localStorage.removeItem('user_email')
    localStorage.removeItem('login_time')

    toast.success('Logged out successfully')
    
    // Redirect to login
    router.push('/auth/login')
  }

  const getUserEmail = () => {
    if (typeof window === 'undefined') return null
    
    // Try to get from localStorage first
    const email = localStorage.getItem('user_email')
    if (email) return email

    // Fallback to cookie
    const cookies = document.cookie.split(';')
    const emailCookie = cookies.find(c => c.trim().startsWith('user_email='))
    if (emailCookie) {
      return decodeURIComponent(emailCookie.split('=')[1])
    }

    return null
  }

  const isAuthenticated = () => {
    if (typeof window === 'undefined') return false

    const cookies = document.cookie.split(';')
    const authToken = cookies.find(c => c.trim().startsWith('auth_token='))
    const userEmail = cookies.find(c => c.trim().startsWith('user_email='))

    return !!(authToken && userEmail)
  }

  return {
    logout,
    getUserEmail,
    isAuthenticated
  }
}

export const LogoutButton = ({ className = '' }: { className?: string }) => {
  const { logout } = useAuth()

  return (
    <Button 
      onClick={logout}
      variant="destructive"
      className={className}
    >
      Logout
    </Button>
  )
}
