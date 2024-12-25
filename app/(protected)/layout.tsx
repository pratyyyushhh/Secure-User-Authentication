'use client'

import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, status } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!isAuthenticated) router.push('/login')
  }, [isAuthenticated, status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return isAuthenticated ? <>{children}</> : null
}

