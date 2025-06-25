# Google Analytics & Slack Reporting Setup Guide

This guide will help you set up Google Analytics 4 (GA4) visitor tracking and automated daily Slack reports for the UpHash website.

## Prerequisites

- Google Analytics 4 account
- Google Cloud Project with Analytics Data API enabled
- Slack workspace with webhook permissions
- GitHub repository with Actions enabled

## Step 1: Set up Google Analytics 4

1. **Create a GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Click Admin → Create Property
   - Follow the setup wizard for your website
   - Note your Measurement ID (format: G-XXXXXXXXXX)

2. **Add Measurement ID to Environment**
   - Create a `.env.local` file in your project root
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

## Step 2: Set up Google Analytics Data API

1. **Enable the API**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select or create a project
   - Enable "Google Analytics Data API"

2. **Create Service Account**
   - Go to IAM & Admin → Service Accounts
   - Click "Create Service Account"
   - Name it (e.g., "analytics-reporter")
   - Grant role: "Service Account User"
   - Create and download JSON key

3. **Grant Analytics Access**
   - In Google Analytics, go to Admin → Property Access Management
   - Add the service account email
   - Grant "Viewer" role

4. **Note the Property ID**
   - In Google Analytics, go to Admin → Property Settings
   - Find your Property ID (format: properties/XXXXXXXXX)

## Step 3: Set up Slack Webhook

1. **Create Slack App**
   - Go to [Slack API](https://api.slack.com/apps)
   - Click "Create New App" → "From scratch"
   - Name your app and select workspace

2. **Add Incoming Webhook**
   - In your app settings, go to "Incoming Webhooks"
   - Toggle "Activate Incoming Webhooks" to On
   - Click "Add New Webhook to Workspace"
   - Select the channel for reports
   - Copy the webhook URL

## Step 4: Configure GitHub Secrets

In your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Add the following repository secrets:

   - `GA_PROPERTY_ID`: Your GA4 property ID (properties/XXXXXXXXX)
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Service account email
   - `GOOGLE_PRIVATE_KEY`: Private key from JSON (copy everything between BEGIN/END)
   - `SLACK_WEBHOOK_URL`: Your Slack webhook URL

## Step 5: Deploy and Test

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Test Analytics Tracking**
   - Deploy your site
   - Visit some pages
   - Check Google Analytics Real-time reports

3. **Test Slack Report**
   - Go to GitHub Actions
   - Find "Daily Analytics Report"
   - Click "Run workflow" → "Run workflow"
   - Check your Slack channel for the report

## Report Schedule

The analytics report runs daily at 9:00 AM JST (0:00 UTC). You can modify this in `.github/workflows/daily-analytics-report.yml`.

## Report Contents

The daily report includes:
- Total users and new users
- Sessions and page views
- Average session duration
- Bounce rate
- Top 5 pages by views
- Top 5 traffic sources
- Device breakdown (desktop/mobile/tablet)

## Troubleshooting

### Analytics not tracking
- Check if GA Measurement ID is correct
- Ensure `.env.local` is loaded
- Check browser console for gtag errors
- Verify site is not blocking trackers

### Slack reports not sending
- Verify all GitHub secrets are set correctly
- Check GitHub Actions logs for errors
- Test webhook URL with curl:
  ```bash
  curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"Test message"}' \
    YOUR_WEBHOOK_URL
  ```

### No data in reports
- GA4 may take 24-48 hours to start showing data
- Ensure service account has viewer access to GA property
- Check that Property ID format is correct

## Customization

### Modify Report Metrics
Edit `scripts/send-analytics-report.js` to:
- Add/remove metrics
- Change report format
- Adjust time ranges
- Add custom dimensions

### Change Report Schedule
Edit `.github/workflows/daily-analytics-report.yml`:
- Modify cron expression for different times
- Add multiple schedules
- Change timezone considerations

## Security Notes

- Never commit `.env.local` or any secrets
- Keep service account permissions minimal
- Rotate webhook URLs periodically
- Monitor GitHub Actions usage