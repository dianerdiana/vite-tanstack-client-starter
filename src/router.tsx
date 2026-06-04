import type { MongoAbility } from '@casl/ability';
import type { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';

import type { UserData } from './types/user-data.type';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  });

  return router;
}

export type RouterContext = {
  queryClient: QueryClient;
  auth: {
    isAuthenticated: boolean;
    isInitialLoading: boolean;
    userData: UserData;
  };
  ability: MongoAbility;
};

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
