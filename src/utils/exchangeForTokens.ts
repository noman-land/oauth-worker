import { HS_OAUTH_TOKEN_URL } from './constants';
import { AuthCodeProof, RefreshTokenProof } from './types';

export const exchangeForTokens = async (
  exchangeProof: RefreshTokenProof | AuthCodeProof
) => {
  try {
    const formData = new URLSearchParams();

    Object.entries(exchangeProof).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(HS_OAUTH_TOKEN_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    return await response.json<{ access_token: string }>();
  } catch (e: any) {
    console.error(
      `> Error exchanging ${exchangeProof.grant_type} for access token`,
      e
    );
    return JSON.parse(e);
  }
};
