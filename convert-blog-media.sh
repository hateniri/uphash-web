#!/bin/bash

# 画像・動画変換スクリプト
# 静止画像 → WebP (最大幅1100px)
# GIF/MP4動画 → WebM

# 色の定義
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 出力ディレクトリ
OUTPUT_DIR="public/images/blog/optimized"
mkdir -p "$OUTPUT_DIR"

# 変換ログファイル
LOG_FILE="conversion-log.txt"
echo "=== 画像・動画変換ログ $(date) ===" > "$LOG_FILE"

# ブログ記事で使用されている画像を記録
declare -A USED_IMAGES

# ブログ記事から使用画像を抽出
echo -e "${YELLOW}ブログ記事から使用画像を抽出中...${NC}"
grep -r "src=.*\/images\/blog\/" src/app/blog/ | \
  sed -E 's/.*src="([^"]*\/images\/blog\/[^"]+)".*/\1/' | \
  sed -E "s/.*src='([^']*\/images\/blog\/[^']+)'.*/\1/" | \
  sed 's/^\/images\/blog\///' | \
  sort | uniq | while read -r img; do
    USED_IMAGES["$img"]=1
    echo "使用画像: $img" >> "$LOG_FILE"
done

# PNG/JPG/JPEG → WebP変換
echo -e "${GREEN}静止画像をWebPに変換中...${NC}"
find public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
    filename=$(basename "$file")
    name="${filename%.*}"
    dirname=$(dirname "$file" | sed 's/public\/images\/blog//')
    
    # ブログ記事名に基づいて適切な名前を生成
    case "$dirname" in
        *) prefix=$(echo "$dirname" | sed 's/\///g');;
    esac
    
    # 新しいファイル名を生成
    if [[ -n "$prefix" ]]; then
        new_name="${prefix}-${name}"
    else
        new_name="$name"
    fi
    
    output_file="$OUTPUT_DIR/${new_name}.webp"
    
    echo "変換中: $file → $output_file"
    
    # 画像サイズを取得
    dimensions=$(file "$file" | grep -oE '[0-9]+ x [0-9]+' | head -1)
    width=$(echo "$dimensions" | cut -d' ' -f1)
    
    # 幅が1100pxより大きい場合はリサイズ、それ以外はそのまま変換
    if [[ -n "$width" ]] && [[ "$width" -gt 1100 ]]; then
        cwebp -q 85 -resize 1100 0 "$file" -o "$output_file" 2>> "$LOG_FILE"
        echo "  リサイズ: ${width}px → 1100px" | tee -a "$LOG_FILE"
    else
        cwebp -q 85 "$file" -o "$output_file" 2>> "$LOG_FILE"
        echo "  変換のみ（幅: ${width}px）" | tee -a "$LOG_FILE"
    fi
    
    # ファイルサイズを比較
    original_size=$(ls -lh "$file" | awk '{print $5}')
    new_size=$(ls -lh "$output_file" | awk '{print $5}')
    echo "  サイズ: $original_size → $new_size" | tee -a "$LOG_FILE"
done

# GIF → WebM変換
echo -e "${GREEN}GIFアニメーションをWebMに変換中...${NC}"
find public/images/blog -type f -name "*.gif" | while read -r file; do
    filename=$(basename "$file")
    name="${filename%.*}"
    dirname=$(dirname "$file" | sed 's/public\/images\/blog//')
    
    # ブログ記事名に基づいて適切な名前を生成
    if [[ -n "$dirname" ]] && [[ "$dirname" != "." ]]; then
        prefix=$(echo "$dirname" | sed 's/\///g')
        new_name="${prefix}-${name}"
    else
        new_name="$name"
    fi
    
    output_file="$OUTPUT_DIR/${new_name}.webm"
    
    echo "変換中: $file → $output_file"
    
    # GIFをWebMに変換（VP9コーデック使用）
    ffmpeg -i "$file" -c:v libvpx-vp9 -crf 30 -b:v 0 -pix_fmt yuva420p "$output_file" -y 2>> "$LOG_FILE"
    
    # ファイルサイズを比較
    original_size=$(ls -lh "$file" | awk '{print $5}')
    new_size=$(ls -lh "$output_file" | awk '{print $5}')
    echo "  サイズ: $original_size → $new_size" | tee -a "$LOG_FILE"
done

# MP4 → WebM変換（もし存在すれば）
echo -e "${GREEN}MP4動画をWebMに変換中...${NC}"
find public/images/blog -type f -name "*.mp4" | while read -r file; do
    filename=$(basename "$file")
    name="${filename%.*}"
    dirname=$(dirname "$file" | sed 's/public\/images\/blog//')
    
    # ブログ記事名に基づいて適切な名前を生成
    if [[ -n "$dirname" ]] && [[ "$dirname" != "." ]]; then
        prefix=$(echo "$dirname" | sed 's/\///g')
        new_name="${prefix}-${name}"
    else
        new_name="$name"
    fi
    
    output_file="$OUTPUT_DIR/${new_name}.webm"
    
    echo "変換中: $file → $output_file"
    
    # MP4をWebMに変換
    ffmpeg -i "$file" -c:v libvpx-vp9 -crf 30 -b:v 0 "$output_file" -y 2>> "$LOG_FILE"
    
    # ファイルサイズを比較
    original_size=$(ls -lh "$file" | awk '{print $5}')
    new_size=$(ls -lh "$output_file" | awk '{print $5}')
    echo "  サイズ: $original_size → $new_size" | tee -a "$LOG_FILE"
done

echo -e "${GREEN}変換完了！${NC}"
echo "変換されたファイルは $OUTPUT_DIR に保存されています。"
echo "詳細なログは $LOG_FILE を確認してください。"

# 変換結果のサマリー
echo -e "\n=== 変換結果サマリー ===" | tee -a "$LOG_FILE"
echo "WebPファイル数: $(find "$OUTPUT_DIR" -name "*.webp" | wc -l)" | tee -a "$LOG_FILE"
echo "WebMファイル数: $(find "$OUTPUT_DIR" -name "*.webm" | wc -l)" | tee -a "$LOG_FILE"
echo "合計サイズ: $(du -sh "$OUTPUT_DIR" | cut -f1)" | tee -a "$LOG_FILE"