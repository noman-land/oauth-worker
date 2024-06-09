import { useRequestContext } from 'hono/jsx-renderer';
import { Success } from './Success';
import { exchangeForToken } from '../utils/exchangeForToken';
import { makeRefreshTokenProof } from '../utils/makeRefreshTokenProof';
import { AccessToken } from '../utils/types';

export const TokenPath = async () => {
  const c = useRequestContext();
  const refresh_token = c.req.query('refresh_token')!;

  if (!refresh_token) {
    throw new Error('Authorization failed. Missing refresh_token.');
  }

  const { access_token } = await exchangeForToken<AccessToken>(
    makeRefreshTokenProof(c.env, refresh_token)
  );

  if (!access_token) {
    throw new Error('Authorization failed. Missing access_token.');
  }

  return <Success />;
};
