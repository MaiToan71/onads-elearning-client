import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const token = request.cookies.get('auth_token')
  const userEmail = request.cookies.get('user_email')
  
  const isAdminRoute = request.nextUrl.pathname.startsWith('/ads') || 
                       request.nextUrl.pathname.startsWith('/ai') ||
                       request.nextUrl.pathname.startsWith('/apps') ||
                       request.nextUrl.pathname.startsWith('/dashboard') ||
                       request.nextUrl.pathname.startsWith('/help-support') ||
                       request.nextUrl.pathname.startsWith('/icons') ||
                       request.nextUrl.pathname.startsWith('/sample-page') ||
                       request.nextUrl.pathname.startsWith('/user-profile') ||
                       request.nextUrl.pathname.startsWith('/utilities')
  
  const isAuthRoute = request.nextUrl.pathname.startsWith('/auth/login') ||
                      request.nextUrl.pathname.startsWith('/auth/register')

  // Redirect to login if accessing admin routes without authentication
  if (isAdminRoute && (!token || !userEmail)) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect to dashboard if already authenticated and accessing login page
  if (isAuthRoute && token && userEmail) {
    return NextResponse.redirect(new URL('/ads/link', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/ads/:path*',
    '/ai/:path*',
    '/apps/:path*',
    '/dashboard/:path*',
    '/help-support/:path*',
    '/icons/:path*',
    '/sample-page/:path*',
    '/user-profile/:path*',
    '/utilities/:path*',
    '/auth/login',
    '/auth/register'
  ]
}
