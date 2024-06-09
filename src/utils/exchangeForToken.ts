import { HS_OAUTH_TOKEN_URL } from './constants';
import type {
  AccessToken,
  AuthCodeProof,
  RefreshToken,
  RefreshTokenProof,
} from './types';

export const exchangeForToken = async <O extends AccessToken | RefreshToken>(
  exchangeProof: RefreshTokenProof | AuthCodeProof
) => {
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

  return await response.json<O>();
};
