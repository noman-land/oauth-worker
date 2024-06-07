import { Hono } from 'hono';
import { exchangeForTokens } from './utils/exchangeForTokens';
import { getHsAuthUrl } from './utils/getHsAuthUrl';

import { AuthCodeProof, RefreshTokenProof } from './utils/types';

type Bindings = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
};

const basePath = '/oauth/v1/apps/chat';

export const app = new Hono<{ Bindings: Bindings }>({ strict: false })
  .basePath(basePath)
  .get('/', async (c) => {
    return c.html(
      '<a href="/oauth/v1/apps/chat/install"><h3>Install the app</h3></a>'
    );
  })
  .get('/code', async (c) => {
    const refreshTokenProof: RefreshTokenProof = {
      grant_type: 'refresh_token',
      client_id: c.env.CLIENT_ID,
      client_secret: c.env.CLIENT_SECRET,
      redirect_uri: c.env.REDIRECT_URI,
      refresh_token: c.req.query('refresh_token')!,
    };

    const { access_token } = await exchangeForTokens(refreshTokenProof);

    return c.html(`
      <html>
        <h2>App successfully installed</h2>
        <p>
          Head over to the Contacts in your CRM and add the new Extension card to the middle pane.
        </p>
        <script>
          console.log({ accessToken: '${access_token}' })
        </script>
      </html>
    `);
  })
  .get('/oauth-callback', async (c) => {
    const code = c.req.query('code');

    if (!code) {
      return c.redirect(`${basePath}/error?msg=No code in URL`);
    }

    const authCodeProof: AuthCodeProof = {
      grant_type: 'authorization_code',
      client_id: c.env.CLIENT_ID,
      client_secret: c.env.CLIENT_SECRET,
      redirect_uri: c.env.REDIRECT_URI,
      code,
    };

    const token = await exchangeForTokens(authCodeProof);

    if (token.message) {
      return c.redirect(`${basePath}/error?msg=${token.message}`);
    }

    return c.redirect(`${basePath}/code?refresh_token=${token.refresh_token}`);
  })
  .get('/install', async (c) =>
    c.redirect(getHsAuthUrl(c.env.CLIENT_ID, c.env.REDIRECT_URI))
  )
  .get('/error', async (c) => c.html(`<h4>Error: ${c.req.query('msg')}</h4>`))
  .all('*', (c) => c.text('Not Founde', 404));
