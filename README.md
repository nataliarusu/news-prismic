installed

https://www.npmjs.com/package/concurrently

npm install concurrently

allows to run multiple commends

1. Deploy:
   go to https://vercel.com/

2. Add new
3. select project
4. type... Configure githubApp
5. give access to gitrepo
6. select in versel added project
7. click import
8. deploy

whenever you publish content in Prismic, the Vercel project will automatically rebuild and redeploy with the updated content.

1. Webhook-triggered redeployment:
   -- set up a webhook in Prismic to automatically trigger a rebuild on Vercel whenever you publish new content.

a. In your Prismic dashboard, go to the "Settings" tab and click on "Webhooks."
b. Click on the "Create a webhook" button.
c. In Vercel, go to your project's settings, then click on "Git Integrations" under "General."
d. Scroll down to "Deploy Hooks" and click "Create Hook."
e. Give your hook a name and select the branch you want to deploy from. Click "Create Hook" and copy the generated URL.
f. Back in your Prismic dashboard, paste the copied URL into the "URL to notify" field. Select the events you want to trigger the webhook (e.g., "Document published"), and click "Add this webhook."

2. Incremental Static Regeneration (ISR):
   In this project I used this method
   I added revalidate prop to getStaticProps()
