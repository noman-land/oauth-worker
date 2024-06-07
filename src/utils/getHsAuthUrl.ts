import { HS_AUTH_URL, SCOPES } from './constants';

export const getHsAuthUrl = (clientId: string, redirectUri: string) =>
  HS_AUTH_URL +
  `?client_id=${encodeURIComponent(clientId)}` +
  `&scope=${encodeURIComponent(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(redirectUri)}`;
