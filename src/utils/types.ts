import { jsxRenderer } from 'hono/jsx-renderer';

interface BaseProof {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
}

export interface RefreshTokenProof extends BaseProof {
  grant_type: 'refresh_token';
  refresh_token: string;
}

export interface AuthCodeProof extends BaseProof {
  grant_type: 'authorization_code';
  code: string;
}

export interface Contact {
  status: 'ok';
  properties: {
    firstname: { value: string };
    lastname: { value: string };
  };
}
export interface Error {
  status: 'error';
  message: string;
}

export type Bindings = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
};

export type ComponentWithChildren = Parameters<typeof jsxRenderer>[0];

export interface RefreshToken {
  refresh_token: string;
}

export interface AccessToken {
  access_token: string;
}
