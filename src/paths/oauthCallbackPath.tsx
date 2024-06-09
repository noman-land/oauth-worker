import { Context } from 'hono';
import { basePath } from '../utils/constants';
import { exchangeForToken } from '../utils/exchangeForToken';
import { makeAuthCodeProof } from '../utils/makeAuthCodeProof';
import type { RefreshToken } from '../utils/types';

export const oauthCallbackPath = async (c: Context) => {
  const code = c.req.query('code');
  if (!code) {
    throw new Error('Authorization failed. No code in URL.');
  }

  const { refresh_token } = await exchangeForToken<RefreshToken>(
    makeAuthCodeProof(c.env, code)
  );

  if (!refresh_token) {
    throw new Error('Authorization failed. Missing refresh_token.');
  }

  return c.redirect(`${basePath}/code?refresh_token=${refresh_token}`);
};
