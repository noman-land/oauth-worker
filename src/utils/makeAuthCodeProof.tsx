import { AuthCodeProof } from './types';

export const makeAuthCodeProof = (env: Env, code: string): AuthCodeProof => {
  return {
    grant_type: 'authorization_code',
    client_id: env.CLIENT_ID,
    client_secret: env.CLIENT_SECRET,
    redirect_uri: env.REDIRECT_URI,
    code,
  };
};
