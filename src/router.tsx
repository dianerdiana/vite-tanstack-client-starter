import type { MongoAbility } from '@casl/ability';
import type { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';

import { UserRole } from '#/types/enums/user-role.enum';

import { ability } from './configs/acl/initial-ability';
import { queryClient } from './integrations/tanstack-query/root-provider';
import type { ErrorResponse } from './types/api-response.type';
import type { UserData } from './types/user-data.type';
import { routeTree } from './routeTree.gen';

export type RouterContext = {
  queryClient: QueryClient;
  auth: {
    isAuthenticated: boolean;
    isInitialLoading: boolean;
    userData: UserData;
  };
  ability: MongoAbility;
};

const defaultRouterContext: RouterContext = {
  queryClient,
  auth: {
    isAuthenticated: false,
    isInitialLoading: true,
    userData: {
      id: '',
      name: '',
      role: UserRole.CLIENT_STAFF,
      email: '',
      permissions: [],
    },
  },
  ability,
};

export const router = createRouter({
  routeTree,
  context: defaultRouterContext,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ErrorResponse;
  }
}
