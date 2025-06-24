// ブログ記事の画像参照を更新するスクリプト

const fs = require('fs');
const path = require('path');

// 画像の置換マッピング
const imageReplacements = {
  // 静止画像 → WebP
  '/images/blog/3dgs-webinar-1.png': '/images/blog/optimized/3dgs-webinar-1.webp',
  '/images/blog/3dgs-webinar-2.png': '/images/blog/optimized/3dgs-webinar-2.webp',
  '/images/blog/3dgs-webinar-3.png': '/images/blog/optimized/3dgs-webinar-3.webp',
  '/images/blog/3dgs-webinar-4.png': '/images/blog/optimized/3dgs-webinar-4.webp',
  '/images/blog/3dgs-webinar-5.png': '/images/blog/optimized/3dgs-webinar-5.webp',
  '/images/blog/3dgs-webinar-main.jpg': '/images/blog/optimized/3dgs-webinar-main.webp',
  '/images/blog/construction-expo.jpg': '/images/blog/optimized/construction-expo.webp',
  '/images/blog/lcc-for-revit.jpg': '/images/blog/optimized/lcc-for-revit.webp',
  '/images/blog/lidar-innovation.jpg': '/images/blog/optimized/lidar-innovation.webp',
  '/images/blog/lixel-go-119.jpg': '/images/blog/optimized/lixel-go-119.webp',
  '/images/blog/lixel-l1-accuracy.jpg': '/images/blog/optimized/lixel-l1-accuracy.webp',
  '/images/blog/mining-3d-model-1.png': '/images/blog/optimized/mining-3d-model-1.webp',
  '/images/blog/mining-3d-reconstruction.png': '/images/blog/optimized/mining-3d-reconstruction.webp',
  '/images/blog/mining-3d-visualization.png': '/images/blog/optimized/mining-3d-visualization.webp',
  '/images/blog/mining-change-detection.png': '/images/blog/optimized/mining-change-detection.webp',
  '/images/blog/mining-compliance-reporting.png': '/images/blog/optimized/mining-compliance-reporting.webp',
  '/images/blog/mining-dashboard-view.png': '/images/blog/optimized/mining-dashboard-view.webp',
  '/images/blog/mining-digital-twin-hero.png': '/images/blog/optimized/mining-digital-twin-hero.webp',
  '/images/blog/mining-digital-twin-process.png': '/images/blog/optimized/mining-digital-twin-process.webp',
  '/images/blog/mining-environmental-monitoring.png': '/images/blog/optimized/mining-environmental-monitoring.webp',
  '/images/blog/mining-equipment-scan.png': '/images/blog/optimized/mining-equipment-scan.webp',
  '/images/blog/mining-excavation-planning.png': '/images/blog/optimized/mining-excavation-planning.webp',
  '/images/blog/mining-gaussian-splatting.png': '/images/blog/optimized/mining-gaussian-splatting.webp',
  '/images/blog/mining-heatmap-analysis.png': '/images/blog/optimized/mining-heatmap-analysis.webp',
  '/images/blog/mining-lidar-scan.png': '/images/blog/optimized/mining-lidar-scan.webp',
  '/images/blog/mining-mesh-model.png': '/images/blog/optimized/mining-mesh-model.webp',
  '/images/blog/mining-point-cloud-1.png': '/images/blog/optimized/mining-point-cloud-1.webp',
  '/images/blog/mining-point-cloud-2.png': '/images/blog/optimized/mining-point-cloud-2.webp',
  '/images/blog/mining-point-cloud-3.png': '/images/blog/optimized/mining-point-cloud-3.webp',
  '/images/blog/mining-point-cloud-4.png': '/images/blog/optimized/mining-point-cloud-4.webp',
  '/images/blog/mining-progress-tracking.png': '/images/blog/optimized/mining-progress-tracking.webp',
  '/images/blog/mining-resource-mapping.png': '/images/blog/optimized/mining-resource-mapping.webp',
  '/images/blog/mining-safety-zones.png': '/images/blog/optimized/mining-safety-zones.webp',
  '/images/blog/mining-site-overview.png': '/images/blog/optimized/mining-site-overview.webp',
  '/images/blog/mining-site-planning.png': '/images/blog/optimized/mining-site-planning.webp',
  '/images/blog/mining-stockpile-measurement.png': '/images/blog/optimized/mining-stockpile-measurement.webp',
  '/images/blog/mining-terrain-model.png': '/images/blog/optimized/mining-terrain-model.webp',
  '/images/blog/mining-volumetric-analysis.png': '/images/blog/optimized/mining-volumetric-analysis.webp',
  '/images/blog/underground-survey-main.jpg': '/images/blog/optimized/underground-survey-main.webp',
  '/images/blog/underground-survey-screenshot.png': '/images/blog/optimized/underground-survey-screenshot.webp',
  '/images/blog/vietnam-urbanization.jpg': '/images/blog/optimized/vietnam-urbanization.webp',
  '/images/blog/virtual-preproduction-hero.jpg': '/images/blog/optimized/virtual-preproduction-hero.webp',
  
  // 動画 → WebM
  '/images/blog/underground-survey-1.gif': '/images/blog/optimized/underground-survey-1.webm',
  '/images/blog/underground-survey-2.gif': '/images/blog/optimized/underground-survey-2.webm',
  '/images/blog/underground-survey-3.gif': '/images/blog/optimized/underground-survey-3.webm',
  '/images/blog/underground-survey-4.gif': '/images/blog/optimized/underground-survey-4.webm',
  '/images/blog/mining-scan-animation.gif': '/images/blog/optimized/mining-scan-animation.webm',
};

// ブログ記事ファイルのパス
const blogFilePath = path.join(__dirname, 'src/app/blog/[slug]/page.tsx');

// ファイルの読み込み
let content = fs.readFileSync(blogFilePath, 'utf8');

// 画像参照の更新
let updateCount = 0;
for (const [oldPath, newPath] of Object.entries(imageReplacements)) {
  const regex = new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, newPath);
    updateCount += matches.length;
    console.log(`✓ ${oldPath} → ${newPath} (${matches.length}箇所)`);
  }
}

// GIF/MP4をvideo要素に変換する関数
function convertToVideoTag(match, src) {
  const webmSrc = src.replace('.gif', '.webm').replace('.mp4', '.webm');
  return `<video autoPlay loop muted playsInline className="w-full rounded-lg my-8">
        <source src="${webmSrc}" type="video/webm" />
        <img src="${src}" alt="Animation" />
      </video>`;
}

// GIFとMP4の画像タグをvideoタグに変換
content = content.replace(/<img\s+src="\${getImagePath\('([^']+\.(gif|mp4))'\)}"\s+alt="([^"]+)"\s+class="([^"]+)"\s*\/>/g, 
  (match, p1) => {
    const webmPath = p1.replace('.gif', '.webm').replace('.mp4', '.webm');
    const optimizedPath = webmPath.replace('/images/blog/', '/images/blog/optimized/');
    return `<video autoPlay loop muted playsInline className="w-full rounded-lg my-8">
        <source src={\`\${getImagePath('${optimizedPath}')}\`} type="video/webm" />
        動画を再生できない場合は、ブラウザをアップデートしてください。
      </video>`;
  }
);

// ファイルの書き込み
fs.writeFileSync(blogFilePath, content, 'utf8');

console.log(`\n✅ 更新完了: ${updateCount}箇所の画像参照を更新しました。`);

// 欠損ファイルのチェック
console.log('\n🔍 欠損ファイルのチェック...');
const missingFiles = [];
for (const [oldPath, newPath] of Object.entries(imageReplacements)) {
  const filePath = path.join(__dirname, 'public', newPath);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(newPath);
  }
}

if (missingFiles.length > 0) {
  console.log('\n⚠️  以下のファイルが見つかりません:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
} else {
  console.log('✅ すべての変換ファイルが存在します。');
}