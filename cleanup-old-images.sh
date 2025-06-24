#!/bin/bash

# 元の重い画像を削除するスクリプト
# 注意: 最適化済みの画像が正しく表示されることを確認してから実行してください

echo "=== ブログ用の古い画像を削除します ==="
echo "削除対象:"
echo "- PNG/JPG/JPEG画像（最適化済みWebPが存在）"
echo "- GIFアニメーション（WebMに変換済み）"
echo ""

# 削除対象のファイルをリストアップ
echo "削除予定のファイル:"
echo "===================="

# ブログ記事で使用されている画像のみを削除
declare -a DELETE_FILES=(
  "public/images/blog/3dgs-webinar-1.png"
  "public/images/blog/3dgs-webinar-2.png"
  "public/images/blog/3dgs-webinar-3.png"
  "public/images/blog/3dgs-webinar-4.png"
  "public/images/blog/3dgs-webinar-5.png"
  "public/images/blog/3dgs-webinar-main.jpg"
  "public/images/blog/construction-expo.jpg"
  "public/images/blog/lcc-for-revit.jpg"
  "public/images/blog/lidar-innovation.jpg"
  "public/images/blog/lixel-go-119.jpg"
  "public/images/blog/lixel-l1-accuracy.jpg"
  "public/images/blog/mining-3d-model-1.png"
  "public/images/blog/mining-3d-reconstruction.png"
  "public/images/blog/mining-3d-visualization.png"
  "public/images/blog/mining-change-detection.png"
  "public/images/blog/mining-compliance-reporting.png"
  "public/images/blog/mining-dashboard-view.png"
  "public/images/blog/mining-digital-twin-hero.png"
  "public/images/blog/mining-digital-twin-process.png"
  "public/images/blog/mining-environmental-monitoring.png"
  "public/images/blog/mining-equipment-scan.png"
  "public/images/blog/mining-excavation-planning.png"
  "public/images/blog/mining-gaussian-splatting.png"
  "public/images/blog/mining-heatmap-analysis.png"
  "public/images/blog/mining-lidar-scan.png"
  "public/images/blog/mining-mesh-model.png"
  "public/images/blog/mining-point-cloud-1.png"
  "public/images/blog/mining-point-cloud-2.png"
  "public/images/blog/mining-point-cloud-3.png"
  "public/images/blog/mining-point-cloud-4.png"
  "public/images/blog/mining-progress-tracking.png"
  "public/images/blog/mining-resource-mapping.png"
  "public/images/blog/mining-safety-zones.png"
  "public/images/blog/mining-site-overview.png"
  "public/images/blog/mining-site-planning.png"
  "public/images/blog/mining-stockpile-measurement.png"
  "public/images/blog/mining-terrain-model.png"
  "public/images/blog/mining-volumetric-analysis.png"
  "public/images/blog/underground-survey-main.jpg"
  "public/images/blog/underground-survey-screenshot.png"
  "public/images/blog/vietnam-urbanization.jpg"
  "public/images/blog/virtual-preproduction-hero.jpg"
  "public/images/blog/underground-survey-1.gif"
  "public/images/blog/underground-survey-2.gif"
  "public/images/blog/underground-survey-3.gif"
  "public/images/blog/underground-survey-4.gif"
  "public/images/blog/mining-scan-animation.gif"
)

# ファイルサイズの合計を計算
TOTAL_SIZE=0
for file in "${DELETE_FILES[@]}"; do
  if [ -f "$file" ]; then
    SIZE=$(ls -la "$file" | awk '{print $5}')
    TOTAL_SIZE=$((TOTAL_SIZE + SIZE))
    ls -lh "$file"
  fi
done

echo ""
echo "削除されるファイル数: ${#DELETE_FILES[@]}"
echo "削除される合計サイズ: $(echo "scale=2; $TOTAL_SIZE/1048576" | bc) MB"
echo ""

read -p "本当に削除しますか？ (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "削除を開始します..."
  
  for file in "${DELETE_FILES[@]}"; do
    if [ -f "$file" ]; then
      rm "$file"
      echo "削除: $file"
    fi
  done
  
  echo ""
  echo "✅ 削除完了"
  
  # 削除後のディレクトリサイズを表示
  echo ""
  echo "=== 削除後のディレクトリサイズ ==="
  du -sh public/images/blog/
  du -sh public/images/blog/optimized/
else
  echo "❌ 削除をキャンセルしました"
fi