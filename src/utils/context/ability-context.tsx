import { createContext } from 'react';

import type { CanProps } from '@casl/react';
import { Can as CaslCan } from '@casl/react';

import { ability } from '#/configs/acl/initial-ability';

import type { AppAbility } from '#/types/ability-rule.type';

export const AbilityContext = createContext<AppAbility>(ability);
export const Can = (props: CanProps<AppAbility>) => <CaslCan {...props} />;
