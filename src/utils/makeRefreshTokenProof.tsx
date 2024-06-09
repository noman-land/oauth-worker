import type { RefreshTokenProof } from './types';

export const makeRefreshTokenProof = (env: Env, refresh_token: string): RefreshTokenProof => {
  return {
    grant_type: 'refresh_token',
    client_id: env.CLIENT_ID,
    client_secret: env.CLIENT_SECRET,
    redirect_uri: env.REDIRECT_URI,
    refresh_token,
  };
};
