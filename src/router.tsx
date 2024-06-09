import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import { ErrorPath } from './components/ErrorPath';
import { HtmlWrapper } from './components/HtmlWrapper';
import { InstallTheApp } from './components/InstallTheApp';
import { TokenPath } from './components/TokenPath';
import { basePath } from './utils/constants';
import { getHsAuthUrl } from './utils/getHsAuthUrl';
import { Bindings } from './utils/types';
import { oauthCallbackPath } from './paths/oauthCallbackPath';

export const app = new Hono<{ Bindings: Bindings; }>({ strict: false })
  .basePath(basePath)
  .use('*', jsxRenderer(HtmlWrapper, { docType: true }))
  .get('/', async (c) => c.html(<InstallTheApp />))
  .get('/install', async (c) => c.redirect(getHsAuthUrl(c.env)))
  .get('/oauth-callback', oauthCallbackPath)
  .get('/code', async (c) => c.render(<TokenPath />))
  .get('/error', async (c) => c.render(<ErrorPath />))
  .onError(async (error, c) => c.redirect(`${basePath}/error?msg=${error.message}`));