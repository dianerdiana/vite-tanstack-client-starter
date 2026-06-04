import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import type { QueryClient } from '@tanstack/react-query'
import type { UserData } from './types/user-data.type'
import type { MongoAbility } from '@casl/ability'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

export type RouterContext = {
  queryClient: QueryClient
  auth: {
    isAuthenticated: boolean
    isInitialLoading: boolean
    userData: UserData
  }
  ability: MongoAbility
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
