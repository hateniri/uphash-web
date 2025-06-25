const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// Initialize the Analytics Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
});

async function getAnalyticsData() {
  const propertyId = process.env.GA_PROPERTY_ID;
  
  // Get yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateString = yesterday.toISOString().split('T')[0];
  
  try {
    // Get basic metrics for yesterday
    const [response] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [
        {
          startDate: dateString,
          endDate: dateString,
        },
      ],
      dimensions: [
        { name: 'date' },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'newUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
    });
    
    // Get top pages
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [
        {
          startDate: dateString,
          endDate: dateString,
        },
      ],
      dimensions: [
        { name: 'pagePath' },
      ],
      metrics: [
        { name: 'screenPageViews' },
      ],
      limit: 5,
      orderBys: [
        {
          metric: {
            metricName: 'screenPageViews',
          },
          desc: true,
        },
      ],
    });
    
    // Get traffic sources
    const [sourcesResponse] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [
        {
          startDate: dateString,
          endDate: dateString,
        },
      ],
      dimensions: [
        { name: 'sessionSource' },
      ],
      metrics: [
        { name: 'sessions' },
      ],
      limit: 5,
      orderBys: [
        {
          metric: {
            metricName: 'sessions',
          },
          desc: true,
        },
      ],
    });
    
    // Get device categories
    const [devicesResponse] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [
        {
          startDate: dateString,
          endDate: dateString,
        },
      ],
      dimensions: [
        { name: 'deviceCategory' },
      ],
      metrics: [
        { name: 'sessions' },
      ],
    });
    
    return {
      date: dateString,
      metrics: response.rows?.[0] || null,
      topPages: pagesResponse.rows || [],
      topSources: sourcesResponse.rows || [],
      devices: devicesResponse.rows || [],
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}

function formatSlackMessage(data) {
  if (!data.metrics) {
    return {
      text: `No analytics data available for ${data.date}`,
    };
  }
  
  const metrics = data.metrics.metricValues;
  const avgSessionDuration = parseFloat(metrics[4].value);
  const bounceRate = parseFloat(metrics[5].value) * 100;
  
  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: `📊 Daily Analytics Report - ${data.date}`,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Total Users:* ${metrics[0].value}`,
        },
        {
          type: 'mrkdwn',
          text: `*New Users:* ${metrics[1].value}`,
        },
        {
          type: 'mrkdwn',
          text: `*Sessions:* ${metrics[2].value}`,
        },
        {
          type: 'mrkdwn',
          text: `*Page Views:* ${metrics[3].value}`,
        },
        {
          type: 'mrkdwn',
          text: `*Avg Session Duration:* ${formatDuration(avgSessionDuration)}`,
        },
        {
          type: 'mrkdwn',
          text: `*Bounce Rate:* ${bounceRate.toFixed(1)}%`,
        },
      ],
    },
    {
      type: 'divider',
    },
  ];
  
  // Add top pages
  if (data.topPages.length > 0) {
    const topPagesText = data.topPages
      .map((row, index) => {
        const path = row.dimensionValues[0].value;
        const views = row.metricValues[0].value;
        return `${index + 1}. ${path} (${views} views)`;
      })
      .join('\n');
    
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Top Pages:*\n${topPagesText}`,
      },
    });
  }
  
  // Add traffic sources
  if (data.topSources.length > 0) {
    const sourcesText = data.topSources
      .map((row) => {
        const source = row.dimensionValues[0].value || '(direct)';
        const sessions = row.metricValues[0].value;
        return `• ${source}: ${sessions} sessions`;
      })
      .join('\n');
    
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Traffic Sources:*\n${sourcesText}`,
      },
    });
  }
  
  // Add device breakdown
  if (data.devices.length > 0) {
    const devicesText = data.devices
      .map((row) => {
        const device = row.dimensionValues[0].value;
        const sessions = row.metricValues[0].value;
        return `• ${device}: ${sessions} sessions`;
      })
      .join('\n');
    
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Device Categories:*\n${devicesText}`,
      },
    });
  }
  
  return {
    blocks,
    text: `Daily Analytics Report for ${data.date}`, // Fallback text
  };
}

async function sendToSlack(message) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    throw new Error('SLACK_WEBHOOK_URL is not set');
  }
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to send Slack message: ${response.statusText}`);
  }
  
  return response;
}

async function main() {
  try {
    console.log('Fetching analytics data...');
    const analyticsData = await getAnalyticsData();
    
    console.log('Formatting Slack message...');
    const slackMessage = formatSlackMessage(analyticsData);
    
    console.log('Sending to Slack...');
    await sendToSlack(slackMessage);
    
    console.log('Analytics report sent successfully!');
  } catch (error) {
    console.error('Error in main:', error);
    
    // Send error notification to Slack
    try {
      await sendToSlack({
        text: `❌ Failed to generate analytics report: ${error.message}`,
      });
    } catch (slackError) {
      console.error('Failed to send error notification to Slack:', slackError);
    }
    
    process.exit(1);
  }
}

// Run the script
main();