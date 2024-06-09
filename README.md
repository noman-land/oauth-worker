# oauth-worker

Simple, non-persistant oauth flow built on Cloudflare Workers and Hono router.

## Local dev

You will need to add a `.dev.vars` file at the root of the project with the following variables.

```env
CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET=yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy
REDIRECT_URI=https://api.example.com/oauth/v1/apps/chat/oauth-callback
```

Run `npm start` and go to [http://localhost:9498/oauth/v1/apps/chat](http://localhost:9498/oauth/v1/apps/chat)

## Deploying

This deploys to Cloudflare Workers upon merge to master.

Use `npx wrangler secret put` to add the above env variables as secrets in the Cloudflare worker.

You will also need two repository variables in the settings of the Github repo for the [deploy action](./.github/workflows/main.yml) to work.


```env
DOMAIN=example.com
CLOUDFLARE_API_TOKEN=xxxxxxxxxxxxxxxxxxxxx
```

Run `npm run deploy`
