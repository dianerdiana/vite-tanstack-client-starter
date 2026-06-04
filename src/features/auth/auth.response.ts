import type { UserData } from '#/types/user-data.type';

export type LoginResponse = {
  accessToken: string;
  user: UserData;
};
