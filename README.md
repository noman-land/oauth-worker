# oauth-worker

[https://api.example.com/oauth/v1/apps/:appName/install](https://api.example.com/oauth/v1/apps/:appName/install)

## Local dev

You will need a `.dev.vars` file with the following variables

```env
CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET=yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy
REDIRECT_URI=https://api.example.com/oauth/v1/apps/chat/oauth-callback
```

## Deploying

This deploys to Cloudflare workers. You will need two repository variables in the settings of the GitHub repo.

```env
DOMAIN=example.com
CLOUDFLARE_API_TOKEN=xxxxxxxxxxxxxxxxxxxxx
```