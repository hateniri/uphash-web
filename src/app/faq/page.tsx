import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'よくある質問 (FAQ) | UP HASH',
  description: 'Lixelシリーズに関するよくある質問と回答集。製品仕様、使い方、トラブルシューティングなど。',
}

const faqCategories = [
  {
    category: '製品について',
    questions: [
      {
        q: 'Lixel L2 ProとLixel K1の違いは何ですか？',
        a: 'L2 Proは長距離・高精度スキャンに特化したプロフェッショナルモデルで、最大300mの測定範囲と32チャンネルLiDARを搭載しています。一方、K1は1kg未満の超軽量コンパクトモデルで、40mの測定範囲で手軽に高品質なスキャンが可能です。用途に応じてお選びください。'
      },
      {
        q: 'スキャナーの精度はどの程度ですか？',
        a: 'L2 Proシリーズは相対精度±2cm（100m以内の任意の2点間）、絶対精度±3cm（RTK使用時）を実現しています。K1は相対精度±1.2cm、絶対精度≤3cmです。いずれも測量グレードの高精度を提供します。'
      },
      {
        q: 'バッテリーの持続時間はどのくらいですか？',
        a: 'L2 Proは標準バッテリーで約5時間、K1は約3時間の連続稼働が可能です。追加バッテリーもご用意しており、ホットスワップ対応のため作業を中断することなく交換できます。'
      },
      {
        q: '防水・防塵性能はありますか？',
        a: '両製品ともIP54相当の防塵・防滴性能を持っています。軽い雨や埃の多い環境でも使用可能ですが、完全防水ではないため水没にはご注意ください。'
      }
    ]
  },
  {
    category: '購入・価格について',
    questions: [
      {
        q: '価格を教えてください',
        a: '製品価格は構成やオプションにより異なります。お客様の用途に最適な構成をご提案させていただきますので、お問い合わせフォームよりご連絡ください。見積もりは無料です。'
      },
      {
        q: 'レンタルやリースは可能ですか？',
        a: '短期レンタルおよび長期リースプランをご用意しています。プロジェクト単位でのご利用や、導入前のお試し利用にもご活用いただけます。詳細はお問い合わせください。'
      },
      {
        q: '納期はどのくらいですか？',
        a: '在庫状況により異なりますが、標準構成の場合は通常2-3週間程度でお届けしています。カスタム構成や大量注文の場合は別途ご相談ください。'
      },
      {
        q: '支払い方法は何が利用できますか？',
        a: '銀行振込、クレジットカード（法人カード含む）、リースでのお支払いに対応しています。分割払いのご相談も承っております。'
      }
    ]
  },
  {
    category: '使い方・操作について',
    questions: [
      {
        q: '初心者でも使えますか？',
        a: 'はい、直感的な操作設計により初心者の方でも簡単にご利用いただけます。Lixel GOアプリでワンタッチ操作が可能で、日本語のマニュアルとチュートリアル動画もご用意しています。'
      },
      {
        q: 'スキャンデータの処理にはどんなソフトが必要ですか？',
        a: 'Lixelスキャナーには無料のLixel Studioが付属しており、点群データの表示、編集、エクスポートが可能です。より高度な3D再構築にはLixel Cyber Color Studio（別売）をおすすめします。'
      },
      {
        q: 'スマートフォンやタブレットで操作できますか？',
        a: 'はい、iOS/Android対応のLixel GOアプリを使用して、スマートフォンやタブレットから操作できます。リアルタイムプレビューや設定変更も可能です。'
      },
      {
        q: '他社製ソフトウェアとの互換性はありますか？',
        a: '標準的な点群フォーマット（LAS、LAZ、PLY、E57、PCD等）でエクスポート可能なため、AutoCAD、Revit、CloudCompareなど主要なCAD/BIMソフトウェアで利用できます。'
      }
    ]
  },
  {
    category: 'ファームウェア更新関連',
    questions: [
      {
        q: 'K1のファームウェアをUSB経由で更新するには？',
        a: '1. バッテリーを70%以上充電\n2. 公式サイトからファームウェアをダウンロード（解凍しない）\n3. LixelGoでUSBモードを有効にし、PCと接続\n4. ファイルをUSBドライブのルートにコピー\n5. 安全に取り外し後、再起動 → 赤緑交互点滅でアップデート開始\n6. 緑点灯で完了。LixelGoでバージョン確認'
      },
      {
        q: 'L2 Proのファームウェア更新手順も同様？',
        a: 'はい。手順はK1と共通で、L2 ProでもUSBモード→再起動で更新されます。'
      }
    ]
  },
  {
    category: 'カメラ・解像度関連',
    questions: [
      {
        q: 'K1のカメラ解像度は？',
        a: '• モノクロカメラ：1MP（2基）\n• カラーカメラ：48MP（2基）\n• パノラマ合成画像の解像度：最大56MP'
      },
      {
        q: 'L2 Proのカメラ構成は？',
        a: '• 前方：モノクロ 1MP\n• 両側：カラー 48MP ×2'
      }
    ]
  },
  {
    category: 'デバイス環境仕様・保守',
    questions: [
      {
        q: '使用可能な温度範囲は？',
        a: '-20°C〜50°C の範囲で安定動作します。それ以外は故障・精度劣化の可能性があります。'
      },
      {
        q: '防爆（爆発防止）性能はある？',
        a: '対応していません。'
      },
      {
        q: 'LiDARスキャナの清掃方法は？',
        a: '付属の不織布で、同一方向にやさしく拭いてください。'
      }
    ]
  },
  {
    category: 'LixelGoアプリ仕様・対応端末',
    questions: [
      {
        q: 'アプリ対応OS・端末要件は？',
        a: '• Android：Ver10以上、Snapdragon 8推奨、RAM 8GB以上\n• iOS：iOS 17.5.1以上、iPhone13以降推奨（Type-C推奨）'
      },
      {
        q: 'ホットスポットが頻繁に切れる？',
        a: 'スマホの高温による保護機能で自動切断されることがあります。他機器の干渉、VPN、通信制限にも注意してください。'
      }
    ]
  },
  {
    category: 'RTK設定・運用',
    questions: [
      {
        q: 'RTKの「1+1モード」には対応している？',
        a: '現時点では非対応です。'
      },
      {
        q: 'RTK設定の変更方法は？（L2 Pro）',
        a: '1. LixelGoの「高度な設定」を有効化\n2. RTK種別を「Max RTK」に設定（サーベイ用アンテナ使用時）\n3. 標準アンテナへ戻す場合は「Close」に切り替え'
      },
      {
        q: 'RTKアカウントの取得方法は？',
        a: 'GNSSサービス事業者へ申請し、LixelGo内のRTK設定でログインしてください。'
      }
    ]
  },
  {
    category: 'その他便利なTips',
    questions: [
      {
        q: 'LCCモデルのウォーターマークはどうすれば消える？',
        a: 'LCCやPLY形式でエクスポートすると自動的に消えます。'
      },
      {
        q: '「No LCC Reconstruction Data」エラーの対処法は？',
        a: '結果データを移動した場合、元の位置に戻すか、「Import Capture」で再読み込みしてください。'
      },
      {
        q: 'LCCでクロップ（切り出し）したモデルを他形式に変換可能？',
        a: 'LCC⇔PLYの相互変換が可能です。切り出し後は新規保存が必要です。'
      }
    ]
  },
  {
    category: '電源・スキャン制限に関する注意事項',
    questions: [
      {
        q: 'スキャン中に電池が切れるとどうなる？',
        a: 'バッテリー残量10%で警告が出ます。そのまま継続するとデータが破損し、処理不能になるリスクがあります。'
      },
      {
        q: 'バッテリー寿命の目安は？',
        a: '約300〜500回の充放電で劣化し、容量が70〜80%になると寿命です。使用後は速やかに充電し、長期間使わないときも定期的な充電が必要です。'
      },
      {
        q: 'LCC収録時間に上限はある？',
        a: '最短3分、最長30分。30分を超えると動画が分割されてしまい、復元不可能です。収録は一度で完結させることが重要で、動画のマージ機能はありません。'
      }
    ]
  },
  {
    category: '制御点・測量関連',
    questions: [
      {
        q: '壁面に制御点を取ることは可能？',
        a: '物理的には可能ですが、姿勢警告が出たり精度が落ちる可能性があるため非推奨です。どうしても必要な場合は、丁寧に傾けて振動を避けてください。'
      },
      {
        q: '同じ制御点を複数回取ってもいい？',
        a: '問題ありません。同名で取るとソフト側が自動で認識・統合してくれます。実座標CSVには1回だけ記載すればOKです。'
      }
    ]
  },
  {
    category: 'LCC関連（モデル処理）',
    questions: [
      {
        q: 'LCC Studioでログインしないと使えない？',
        a: 'スタンダード版はオンラインログイン必須です。永久ライセンス版はログイン不要で使用可能です（営業担当にお問い合わせください）。'
      },
      {
        q: 'LCCモデルが「再構築待機中」のまま動かない？',
        a: '保存先ディレクトリに空き容量がない可能性があります。他のパスに変更して再構築を試してください。'
      },
      {
        q: 'LCCでエラーコード 0xc0000409 / 0xc0000005 が出る？',
        a: 'Intel第13/14世代CPUによるオーバークロックの影響があります。CPUのダウンクロック設定を行うか、別PCで試してください。'
      },
      {
        q: 'LCCモデルがぼやける原因は？',
        a: 'カメラ設置方向の誤り、映像と点群が別のものになっている、反射や露出過多、撮影角度不足などが原因です。'
      },
      {
        q: 'LCC Viewerで表示できるブラウザは？',
        a: 'Chrome、Firefox、Edge、Safari に対応しています。'
      },
      {
        q: 'LCCモデルをOBJやOSGBに変換できる？',
        a: 'LCCモデルはメッシュ形式ではないため、変換は非対応です。'
      }
    ]
  },
  {
    category: 'その他技術仕様・用語',
    questions: [
      {
        q: 'Feature Point（特徴点）とは？',
        a: '壁、柵、屋根などの形状的な目印で、アルゴリズムが認識しやすいものです。特徴点が少ない場所では、動きを工夫したり人工物を追加する工夫が必要です。'
      },
      {
        q: 'SLAMとは？',
        a: '同時位置推定と地図作成。点群の重なり部分から姿勢を推定・合成して一つのモデルにまとめる手法です。'
      },
      {
        q: 'Poses.csvとGNSS.csvの内容は？',
        a: '• Poses.csv：タイムスタンプ、XYZ座標、回転の四元数（qw, qx, qy, qz）\n• GNSS.csv：0＝無効、1＝単独、2＝疑似距離差、4＝固定解、5＝浮動解'
      }
    ]
  },
  {
    category: 'アクティベーション関連',
    questions: [
      {
        q: 'ライセンスが失効・認証失敗になるのはなぜ？',
        a: '管理者権限でのインストール＆起動が必要です。Windowsの日時設定を「今すぐ同期」で修正後、再起動してください。'
      },
      {
        q: '「正しいSNを入力してください」と表示される理由は？',
        a: '借用品や未購入機器には試用コードが必要です。SNコードの誤入力にも注意（Oと0、スペース混入など）してください。'
      },
      {
        q: 'バージョン2.5.2から3.0へ切替時の注意点は？',
        a: '新規アクティベーションコードが必要（1台1コード）です。旧バージョンのプロジェクトファイルは開けないため、元データからLASとして再読み込み推奨です。'
      }
    ]
  },
  {
    category: '動作・クラッシュ関連',
    questions: [
      {
        q: 'Windows 11でソフトが開けない/クラッシュする？',
        a: 'UTF-8を有効にし、「WMIC」のインストール（オプション機能から）を行ってください。'
      },
      {
        q: '0xc0000142 エラーの対処法は？',
        a: 'UTF-8の未設定が原因です。設定後に再起動してください。'
      },
      {
        q: '「msvcp140.dll が見つからない」と表示される場合は？',
        a: 'Microsoft公式のランタイム再配布パッケージをインストールしてください。詳細はダウンロードページをご確認ください。'
      }
    ]
  },
  {
    category: 'プロジェクト処理中のエラー',
    questions: [
      {
        q: 'LIO/SLAM/最適化エラーの対処法は？',
        a: '「Robustモード」で再実行してください（精度はやや低下）。初期化時の動き・視野障害に注意し、プロジェクトはCドライブ以外へ配置し、UTF-8を有効にしてください。'
      },
      {
        q: 'メモリ不足/クラッシュが発生する？',
        a: 'RAM 64GB以上推奨です。プロジェクトサイズの5〜465倍の空き容量が必要（L2 Proの場合）です。'
      }
    ]
  },
  {
    category: '地図融合・メッシュ関連',
    questions: [
      {
        q: '地図の結合（Map Fusion）の方法は？',
        a: 'RTK固定・GCP（制御点）・共通制御点・再開スキャンのいずれかを使用し、15～30mの重複軌道を含めることを推奨します。'
      },
      {
        q: 'メッシュ生成できない・失敗する？',
        a: '「パノラマ画像の出力」を有効にし、同じLSバージョンでの処理結果を選んでください。L2 Proではアップサンプリング済みのデータは非対応です。'
      }
    ]
  },
  {
    category: '写真・パノラマ・カラー処理',
    questions: [
      {
        q: '撮影画像の出力方法は？',
        a: 'Lixel Studioでカラー処理後、「panoramicImage」フォルダに保存されます。'
      },
      {
        q: 'パノラマオーバーレイが使えない？',
        a: 'フォルダ名に注意し、処理結果と一致しているか確認してください。'
      },
      {
        q: '「画像と姿勢が見つからない」と表示される？',
        a: 'パノラマ画像の生成忘れ、もしくはディレクトリ選択ミスが原因です。'
      }
    ]
  },
  {
    category: 'ボリューム・測定・RTK関連',
    questions: [
      {
        q: '体積や重量の計算は可能？',
        a: '密度を入力することで自動計算が可能です。'
      },
      {
        q: '高さ異常（ジオイド高）とは？',
        a: '楕円体高と正高の差で、変換時に必要な情報です。'
      },
      {
        q: 'RTK設定が無効になる理由は？',
        a: '設定ミス、または未登録のRTKアカウント使用が原因です。'
      }
    ]
  },
  {
    category: 'その他操作・注意点',
    questions: [
      {
        q: 'AutoCADや3ds Maxに取り込むには？',
        a: 'LAS形式は直接非対応です。RCP形式に変換が必要です。'
      },
      {
        q: 'USBモードが起動できない・青点灯しない？',
        a: '再起動＆再接続後、再度USBモードを有効化してください。'
      },
      {
        q: 'SDカードが認識されない・マウントエラー？',
        a: 'SDカードの再挿入＆再起動を試してください。'
      }
    ]
  },
  {
    category: 'モバイルアプリ（Lixel Go）',
    questions: [
      {
        q: '接続エラーが出る・ホットスポットが切れる？',
        a: '他機器の干渉、スマホの熱暴走、VPN設定に注意してください。iPhoneは「互換性を最大化」をオフにしてください。'
      },
      {
        q: '撮影中に点群や映像が表示されない？',
        a: '表示されなくてもデータは保存済みなので継続OKです。'
      }
    ]
  },
  {
    category: 'ハードウェア仕様・更新',
    questions: [
      {
        q: 'バッテリー寿命・充電管理の注意点は？',
        a: '約90分稼働。300～500回の充放電で劣化します。使用後はすぐ充電し、長期保管時は定期的な再充電を推奨します。'
      },
      {
        q: 'ファームウェアのアップデート方法（USB）',
        a: 'ダウンロード → USBモード → 本体にコピー → 再起動でアップデートされます。'
      }
    ]
  },
  {
    category: 'トラブルシューティング',
    questions: [
      {
        q: 'スキャンデータにノイズが多い場合の対処法は？',
        a: '環境光の影響、反射面、振動などが原因の可能性があります。スキャン速度の調整、IMUキャリブレーション、適切なスキャンパスの選択により改善できます。詳しくはサポートまでご相談ください。'
      },
      {
        q: 'RTKが接続できない場合は？',
        a: 'RTK基地局との通信設定、NTRIP設定、SIMカードの状態を確認してください。また、空が開けた場所での使用を推奨します。設定ガイドはダウンロードページからご覧いただけます。'
      },
      {
        q: 'ファームウェアのアップデート方法は？',
        a: 'Lixel GOアプリまたはPCソフトウェアから簡単にアップデートできます。アップデート前には必ずデータのバックアップを取ることをお勧めします。'
      },
      {
        q: '保証期間と修理について教えてください',
        a: '製品保証期間は購入日から1年間です。延長保証プランもご用意しています。修理は国内サービスセンターで対応し、代替機の貸出サービスも行っています。'
      }
    ]
  },
  {
    category: 'その他',
    questions: [
      {
        q: 'トレーニングやサポートは受けられますか？',
        a: '導入時の初期トレーニング、定期的なウェビナー、オンサイトトレーニングをご提供しています。技術サポートは電話、メール、リモートサポートで対応いたします。'
      },
      {
        q: 'デモンストレーションは可能ですか？',
        a: 'はい、実機でのデモンストレーションを承っています。お客様の現場での実証実験も可能です。オンラインデモもご用意していますので、お気軽にお申し込みください。'
      },
      {
        q: '海外での使用は可能ですか？',
        a: 'はい、世界各国でご利用いただけます。ただし、一部の国では電波法規制により使用が制限される場合があります。詳細はお問い合わせください。'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              よくある質問
            </h1>
            <p className="text-xl text-gray-600">
              お客様から寄せられる質問と回答をまとめました
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-600">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, itemIndex) => (
                    <details
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden group"
                    >
                      <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.q}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ご不明な点がございましたら
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            FAQで解決しない場合は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              チュートリアルを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}