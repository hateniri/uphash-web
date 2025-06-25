// Test script for analytics report generation (local testing)
// This simulates the analytics report without needing real GA4 data

function formatSlackMessage() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateString = yesterday.toISOString().split('T')[0];
  
  // Sample data for testing
  const sampleData = {
    date: dateString,
    metrics: {
      totalUsers: 342,
      newUsers: 128,
      sessions: 456,
      pageViews: 1234,
      avgSessionDuration: 185.5,
      bounceRate: 0.423,
    },
    topPages: [
      { path: '/', views: 423 },
      { path: '/products/lixel-l2-pro', views: 234 },
      { path: '/products/lixel-k1', views: 189 },
      { path: '/software', views: 156 },
      { path: '/contact', views: 98 },
    ],
    topSources: [
      { source: 'google', sessions: 234 },
      { source: '(direct)', sessions: 156 },
      { source: 'uphash.co.jp', sessions: 45 },
      { source: 'facebook', sessions: 12 },
      { source: 'linkedin', sessions: 9 },
    ],
    devices: [
      { category: 'desktop', sessions: 278 },
      { category: 'mobile', sessions: 156 },
      { category: 'tablet', sessions: 22 },
    ],
  };
  
  const bounceRate = sampleData.metrics.bounceRate * 100;
  const minutes = Math.floor(sampleData.metrics.avgSessionDuration / 60);
  const seconds = Math.floor(sampleData.metrics.avgSessionDuration % 60);
  
  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: `📊 Daily Analytics Report - ${sampleData.date}`,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Total Users:* ${sampleData.metrics.totalUsers}`,
        },
        {
          type: 'mrkdwn',
          text: `*New Users:* ${sampleData.metrics.newUsers}`,
        },
        {
          type: 'mrkdwn',
          text: `*Sessions:* ${sampleData.metrics.sessions}`,
        },
        {
          type: 'mrkdwn',
          text: `*Page Views:* ${sampleData.metrics.pageViews}`,
        },
        {
          type: 'mrkdwn',
          text: `*Avg Session Duration:* ${minutes}m ${seconds}s`,
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
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Top Pages:*\n${sampleData.topPages
          .map((page, i) => `${i + 1}. ${page.path} (${page.views} views)`)
          .join('\n')}`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Traffic Sources:*\n${sampleData.topSources
          .map(source => `• ${source.source}: ${source.sessions} sessions`)
          .join('\n')}`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Device Categories:*\n${sampleData.devices
          .map(device => `• ${device.category}: ${device.sessions} sessions`)
          .join('\n')}`,
      },
    },
  ];
  
  return {
    blocks,
    text: `Daily Analytics Report for ${sampleData.date}`,
  };
}

async function testSlackMessage() {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error('❌ SLACK_WEBHOOK_URL is not set in environment variables');
    console.log('\nTo test locally, run:');
    console.log('SLACK_WEBHOOK_URL="your-webhook-url" node scripts/test-analytics-local.js');
    return;
  }
  
  const message = formatSlackMessage();
  
  console.log('📨 Sending test message to Slack...');
  console.log('Message preview:', JSON.stringify(message, null, 2));
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    
    if (response.ok) {
      console.log('✅ Test message sent successfully!');
      console.log('Check your Slack channel for the analytics report.');
    } else {
      console.error('❌ Failed to send message:', response.statusText);
      const body = await response.text();
      console.error('Response body:', body);
    }
  } catch (error) {
    console.error('❌ Error sending message:', error);
  }
}

// Run test if this script is executed directly
if (require.main === module) {
  testSlackMessage();
}