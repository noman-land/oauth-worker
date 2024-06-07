export const HS_AUTH_URL = 'https://app.hubspot.com/oauth/authorize';
export const HS_OAUTH_TOKEN_URL = 'https://api.hubapi.com/oauth/v1/token';
export const HS_CONTACTS_URL =
  'https://api.hubapi.com/contacts/v1/lists/all/contacts/all?count=1';

export const SCOPES = ['crm.objects.contacts.read', 'conversations.read'].join(
  ' '
);

export const getHsAuthUrl = (clientId: string, redirectUri: string) =>
  HS_AUTH_URL +
  `?client_id=${encodeURIComponent(clientId)}` +
  `&scope=${encodeURIComponent(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(redirectUri)}`;
