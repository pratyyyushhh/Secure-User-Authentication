import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const { data: session, status } = useSession()
  const isAuthenticated = !!session
  const isAdmin = session?.user?.role === 'ADMIN'

  return {
    session,
    status,
    isAuthenticated,
    isAdmin,
  }
}

