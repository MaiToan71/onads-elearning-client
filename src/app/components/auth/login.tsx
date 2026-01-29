'use client'

import FullLogo from '@/app/(AdminLayout)/layout/shared/logo/FullLogo'
import CardBox from '../shared/CardBox'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export const Login = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error('Please enter both email and password')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call - Replace with your actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Set authentication cookies
      document.cookie = `auth_token=authenticated_${Date.now()}; path=/; max-age=86400; SameSite=Lax`
      document.cookie = `user_email=${encodeURIComponent(email)}; path=/; max-age=86400; SameSite=Lax`
      
      // Store email in localStorage as well
      localStorage.setItem('user_email', email)
      localStorage.setItem('login_time', new Date().toISOString())

      toast.success('Login successful!')

      // Redirect to the original requested page or dashboard
      const redirectUrl = searchParams.get('redirect') || '/ads/link'
      router.push(redirectUrl)
    } catch (error) {
      toast.error('Login failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center bg-lightprimary'>
        <div className='md:min-w-[450px] min-w-max'>
          <CardBox>
            <div className='flex justify-center mb-4'>
              <FullLogo />
            </div>
            <p className='text-sm text-charcoal text-center mb-6'>
              Your Social Campaigns
            </p>
            <form onSubmit={handleLogin}>
              <div className='mb-4'>
                <div className='mb-2 block'>
                  <Label htmlFor='email1' className='font-medium'>
                    Email
                  </Label>
                </div>
                <Input
                  id='email1'
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className='mb-4'>
                <div className='mb-2 block'>
                  <Label htmlFor='password1' className='font-medium'>
                    Password
                  </Label>
                </div>
                <Input
                  id='password1'
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
             
              <div className='flex flex-wrap gap-6 items-center justify-between mb-6'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='remember' defaultChecked />
                  <Label
                    className='text-link font-normal text-sm'
                    htmlFor='remember'>
                    Remember this device
                  </Label>
                </div>
                <Link
                  href='#'
                  className='text-sm font-medium text-primary hover:text-primaryemphasis'>
                  Forgot Password ?
                </Link>
              </div>
              <Button 
                type='submit' 
                className='w-full'
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
            <div className='flex items-center gap-2 justify-center mt-6 flex-wrap'>
              <p className='text-base font-medium text-link dark:text-darklink'>
                New to Matdash?
              </p>
              <Link
                href='/auth/register'
                className='text-sm font-medium text-primary hover:text-primaryemphasis'>
                Create an account
              </Link>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  )
}
