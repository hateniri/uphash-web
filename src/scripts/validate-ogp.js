#!/usr/bin/env node

/**
 * OGP (Open Graph Protocol) Validation Script
 * 
 * Usage: node src/scripts/validate-ogp.js <url>
 * 
 * This script helps validate OGP tags for your blog posts.
 * You can also use these online tools:
 * - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
 * - Twitter Card Validator: https://cards-dev.twitter.com/validator
 * - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
 * - Open Graph Debugger: https://www.opengraph.xyz/
 */

const https = require('https');
const http = require('http');
const url = require('url');

function fetchHTML(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(targetUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    
    protocol.get(targetUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function extractOGPTags(html) {
  const ogpTags = {};
  const twitterTags = {};
  
  // Extract OGP tags
  const ogpRegex = /<meta\s+property=["']og:([^"']+)["']\s+content=["']([^"']+)["']/gi;
  let match;
  while ((match = ogpRegex.exec(html)) !== null) {
    ogpTags[match[1]] = match[2];
  }
  
  // Extract Twitter Card tags
  const twitterRegex = /<meta\s+name=["']twitter:([^"']+)["']\s+content=["']([^"']+)["']/gi;
  while ((match = twitterRegex.exec(html)) !== null) {
    twitterTags[match[1]] = match[2];
  }
  
  // Extract page title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const pageTitle = titleMatch ? titleMatch[1] : 'No title found';
  
  // Extract meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const metaDescription = descMatch ? descMatch[1] : 'No description found';
  
  return { ogpTags, twitterTags, pageTitle, metaDescription };
}

async function validateOGP(targetUrl) {
  console.log(`\n🔍 Validating OGP tags for: ${targetUrl}\n`);
  
  try {
    const html = await fetchHTML(targetUrl);
    const { ogpTags, twitterTags, pageTitle, metaDescription } = extractOGPTags(html);
    
    console.log('📄 Page Information:');
    console.log(`   Title: ${pageTitle}`);
    console.log(`   Description: ${metaDescription}\n`);
    
    console.log('🔖 Open Graph Tags:');
    if (Object.keys(ogpTags).length === 0) {
      console.log('   ❌ No OGP tags found!');
    } else {
      Object.entries(ogpTags).forEach(([key, value]) => {
        console.log(`   og:${key}: ${value}`);
      });
    }
    
    console.log('\n🐦 Twitter Card Tags:');
    if (Object.keys(twitterTags).length === 0) {
      console.log('   ❌ No Twitter Card tags found!');
    } else {
      Object.entries(twitterTags).forEach(([key, value]) => {
        console.log(`   twitter:${key}: ${value}`);
      });
    }
    
    // Validation checks
    console.log('\n✅ Validation Results:');
    const requiredOGP = ['title', 'type', 'image', 'url'];
    const missingOGP = requiredOGP.filter(tag => !ogpTags[tag]);
    
    if (missingOGP.length > 0) {
      console.log(`   ⚠️  Missing required OGP tags: ${missingOGP.join(', ')}`);
    } else {
      console.log('   ✓ All required OGP tags present');
    }
    
    if (ogpTags.image) {
      console.log(`   ✓ Image URL: ${ogpTags.image}`);
    }
    
    if (twitterTags.card) {
      console.log(`   ✓ Twitter Card type: ${twitterTags.card}`);
    } else {
      console.log('   ⚠️  Missing Twitter Card type');
    }
    
    console.log('\n📱 Test your tags with these tools:');
    console.log('   - Facebook: https://developers.facebook.com/tools/debug/');
    console.log('   - Twitter: https://cards-dev.twitter.com/validator');
    console.log('   - LinkedIn: https://www.linkedin.com/post-inspector/');
    console.log('   - General: https://www.opengraph.xyz/\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Main execution
const targetUrl = process.argv[2];

if (!targetUrl) {
  console.log('Usage: node validate-ogp.js <url>');
  console.log('Example: node validate-ogp.js https://xgrids.uphash.net/blog/underground-utility-corridor');
  process.exit(1);
}

validateOGP(targetUrl);