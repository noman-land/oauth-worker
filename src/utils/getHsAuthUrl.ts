import { HS_AUTH_URL, SCOPES } from './constants';

export const getHsAuthUrl = (env: Env) =>
  HS_AUTH_URL +
  `?client_id=${encodeURIComponent(env.CLIENT_ID)}` +
  `&scope=${encodeURIComponent(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(env.REDIRECT_URI)}`;
