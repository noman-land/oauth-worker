export const HS_AUTH_URL = 'https://app.hubspot.com/oauth/authorize';
export const HS_OAUTH_TOKEN_URL = 'https://api.hubapi.com/oauth/v1/token';
export const SCOPES = [
  'crm.objects.contacts.read',
  'conversations.read',
  'crm.objects.appointments.read',
  'crm.objects.services.read',
  'crm.objects.courses.read',
  'crm.objects.listings.read',
].join(' ');
export const basePath = '/oauth/v1/apps/chat';
