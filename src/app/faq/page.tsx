'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqCategories = [
  {
    category: '製品について',
    icon: '📦',
    accent: 'blue' as const,
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
    icon: '💰',
    accent: 'orange' as const,
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
        a: '銀行振込でのお支払いに対応しています。分割払いやリース契約のご相談も承っております。'
      }
    ]
  },
  {
    category: '使い方・操作について',
    icon: '🎮',
    accent: 'silver' as const,
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
      },
      {
        q: 'RTKアカウントの取得方法',
        a: 'RTK機能を利用するには、GNSSサービスプロバイダーと別途契約し、RTKアカウントを取得する必要があります。取得したアカウント情報は、LixelGoのRTK設定ページでログインして使用します。'
      }
    ]
  },
  {
    category: 'ファームウェア更新関連',
    icon: '🔧',
    accent: 'blue' as const,
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
    category: 'アクティベーション',
    icon: '🔑',
    accent: 'purple' as const,
    questions: [
      {
        q: 'アクティベーション時にソフトウェアが「アクティベートに失敗しました」または「ライセンスの有効期限が切れました」と表示されるのはなぜですか？',
        a: 'コンピュータに管理者権限のないユーザーが複数います。ソフトウェアを管理者権限で再インストールし、管理者権限でLS3.0を開いてアクティベートする必要があります。\nアクティベーション後もソフトウェアが「ライセンスの有効期限が切れました」と表示される場合は、コンピュータのシステム設定を開き、「日付と時刻」に移動し、「今すぐ同期」をクリックして時計を同期してください。これを完了したら、ソフトウェアを再起動してください。'
      },
      {
        q: 'アクティベーションコードを申請する際に「正しいSNを入力してください」というメッセージが表示されるのはなぜですか？',
        a: '購入済みのデバイスであることを確認してください。購入されていない借り物のテストデバイスの場合は、営業担当者から試用版のアクティベーションコードを入手する必要があります。\n入力されたSNコードが完全であること（Lixel Goにデバイスを接続すると確認できます）、文字に誤りがないこと（文字「o」と数字「0」に注意）、余分なスペースや文字がないことを確認してください。\nSN番号が申請に使用できない場合は、営業担当者または公式の技術サポートスタッフに連絡してください。'
      },
      {
        q: '2.5.2から3.0に切り替える際に注意すべきことは何ですか？',
        a: '元のソフトウェアドングルは、このバージョンとは互換性がありません。LixelStudio 3.0.1.0をアクティベートして使用を開始するには、機器のSNを使用して新しいアクティベーションコードを申請してください。デバイスには3つのアクティベーションコードが付属しています（1つのアクティベーションコードは1台のコンピュータのみをアクティベートでき、アクティベーションコードは使用後に無効になります）。\n完全なSNを使用してアクティベーションコードを申請するようにしてください。LixelGoアプリを使用してデバイスを接続し、完全なSNを表示してください。\n3.0は完全に新しいファイル構造であり、バージョン2.5以前の作業プロジェクトファイルを開くことはできません。以前に処理したファイルを使用する必要がある場合は、元のフォルダから手動で再インポートする必要があります。\nバージョン2.5.2で既に処理済みだが保存されていない作業ファイル（たとえば、クリッピング結果が保存されていないなど）にアクセスしたい場合は、まずバージョン2.5を使用してすべてのデータをLAS形式でエクスポートし、次にバージョン3.0にインポートする必要があります。または、ファイルを3.0に再インポートして編集をやり直すこともできます。\nソフトウェアを閉じた後に再度開くと、既に開いているタスクがあることを示すプロンプトが表示される場合、操作が速すぎてバックグラウンドがプログラムをまだ解放していないことが原因である可能性があります。この場合、しばらく待つか、タスクマネージャーを使用してLixelStudioタスクを終了することができます。\nコンピュータのシステムを再インストールした後、以前にアクティベートされたアクティベーションコードは無効になり、新しいアクティベーションコードが必要になります。'
      },
      {
        q: 'Windows 11コンピュータで開くときにソフトウェアが実行に失敗したりクラッシュしたりするのはなぜですか？',
        a: 'まず、コンピュータでUTF-8設定を有効にしてみてください：\n\n時間と言語 > 言語と地域 > 管理言語設定 > 管理 > システムロケールの変更 > ベータ版：ワールドワイド言語サポートにUnicode UTF8を使用する をチェック\n\nこれで問題が解決しない場合は、システムにWMICツールが不足している可能性があります：\n\n設定を開き、「システム」タブを選択し、右側で「オプション機能」を選択します。検索ボックスに「WMIC」と入力し、「インストール」をクリックします。完了後、コンピュータを再起動する必要があります。'
      },
      {
        q: 'LixelStudioを起動する際にWin11で0xc0000142エラーが表示されるのはなぜですか？',
        a: 'これは、コンピュータでUTF-8が有効になっていなかったためです。'
      },
      {
        q: 'ソフトウェアをサーバーコンピュータまたは仮想マシンにインストールできますか？',
        a: 'どちらもサポートされていません。'
      },
      {
        q: 'ソフトウェアを実行しようとすると「msvcp140.dllが見つかりません」と表示されるのはなぜですか？',
        a: 'この種の問題は、新しいコンピュータや、長時間インターネットに接続されておらず、一部のシステムライブラリファイルが不足しているコンピュータでよく発生します。この問題が発生した場合は、Microsoftの公式サイトから必要なファイルをダウンロードしてインストールできます。\n\nhttps://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170'
      }
    ]
  },
  {
    category: 'SLAMマッピング',
    icon: '🗺️',
    accent: 'green' as const,
    questions: [
      {
        q: 'なぜプロジェクト処理中に「LIO Too Few, Please Try Robust Mode」というエラーが表示されるのですか？',
        a: 'プロジェクト処理時に「Robust Mode（ロバストモード）」を選択し、データを再処理してください。このエラーが発生する主な原因は以下のとおりです：\n開けた場所や劣化した環境で点群データがドリフトしている。\n初期化時にデバイスが完全に静止していなかった（不適切な初期化）。\n初期化中にレーダーの視野が遮られていた、または前方に動く物体が多かった（不適切な初期化）。\nロバストモードはマッピング成功率を高めますが、精度がやや低下する場合があります。'
      },
      {
        q: 'なぜプロジェクト処理中に「HBC Read Error」または「HBC Failed to Parse」というエラーが表示されるのですか？',
        a: 'デバイスからコピーしたデータが完全であること、コピー中にエラーが発生していないことを確認してください。\nクラウドドライブとのアップロードやダウンロード中に、元のデータが欠損している、またはサイズが不完全な可能性があります。\n記録中に中断があった、またはデバイスが自動停止した可能性があります。\nデータ保存が完了する前に電源が切られた可能性があります。\nL1 または L2 のファームウェアが v1.3.2 以下の場合、収録時にアプリでデータの遅延が発生し、アプリ上の軌跡が実際の位置に戻る前に記録が終了されてしまうことがあります。\nL1 または L2 のファームウェア v1.4 以降で収録されたデータを、LS バージョン 2.4.5 以下で処理した場合、バージョンの互換性による問題が発生する可能性があります。'
      },
      {
        q: 'なぜプロジェクト処理時に「SLAM Failed to Start」というエラーが表示されるのですか？',
        a: '元データをCドライブ上に置いたり、Cドライブパス上に新しいプロジェクトを作成しないようにしてください。\n一度ログアウトするか、バックグラウンドプロセスを終了してPCリソースを確保した上で、Lixel Studioを管理者権限で起動してください。\nコンピューターの「UTF-8設定」を有効にしてください。「地域設定（Region settings）」を検索し、「ベータ：Unicode UTF-8の使用」にチェックを入れてください。'
      },
      {
        q: 'なぜプロジェクト処理中に「LIO Internal Error」が発生するのですか？',
        a: 'レーダーの視野が遮られている（例：0.5メートル以内に物体がある、または0.5メートル以下の狭い空間での収録）。これは不適切な収録と見なされます。\nデータ収録中に「レーダー周波数異常」の警告が繰り返し表示される場合は、テクニカルサポートにお問い合わせください。'
      }
    ]
  },
  {
    category: 'サポート・保証について',
    icon: '🛡️',
    accent: 'silver' as const,
    questions: [
      {
        q: '保証期間はどのくらいですか？',
        a: 'メーカー保証は1年です。購入時に延長保証プログラムについてご説明させていただきます。'
      },
      {
        q: '技術サポートは受けられますか？',
        a: '日本語による技術サポートを提供しています。電話、メール、リモートサポートに対応しており、導入後も安心してご利用いただけます。'
      },
      {
        q: 'トレーニングは提供されますか？',
        a: 'トレーニングを提供しています。オンラインでの基本トレーニングは無料ですが、オフライン（現地）でのトレーニングは有料となります。お客様のレベルに合わせたカリキュラムを提供します。'
      },
      {
        q: '故障時の対応は？',
        a: '購入時に延長保証プログラムについてご説明させていただきます。メーカー保証は1年です。'
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions)
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId)
    } else {
      newOpenQuestions.add(questionId)
    }
    setOpenQuestions(newOpenQuestions)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              よくある質問
            </h1>
            <p className="text-xl text-brand-silver-300">
              製品やサービスに関するお客様からのよくある質問をまとめました
            </p>
          </div>
        </div>
      </section>


      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((cat, catIndex) => {
              const accentColor = cat.accent === 'silver' ? 'silver' : cat.accent
              
              return (
                <div key={cat.category} className={catIndex > 0 ? 'mt-16' : ''}>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="text-4xl">{cat.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-brand-black">{cat.category}</h2>
                      <div className={`w-20 h-1 bg-brand-${accentColor}-600 mt-2`}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {cat.questions.map((item, index) => {
                      const questionId = `${cat.category}-${index}`
                      const isOpen = openQuestions.has(questionId)
                      
                      return (
                        <div
                          key={index}
                          className={`
                            bg-white border-2 rounded-xl overflow-hidden transition-all
                            ${isOpen 
                              ? `border-brand-${accentColor}-500 shadow-lg` 
                              : 'border-brand-silver-200 hover:border-brand-silver-400'
                            }
                          `}
                        >
                          <button
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full px-8 py-6 text-left flex items-start gap-4 hover:bg-brand-silver-50 transition-colors"
                          >
                            <div className={`
                              flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all
                              ${isOpen 
                                ? `bg-brand-${accentColor}-600 text-white` 
                                : 'bg-brand-silver-200 text-brand-silver-600'
                              }
                            `}>
                              <svg 
                                className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-brand-black">
                                {item.q}
                              </h3>
                            </div>
                          </button>
                          
                          {isOpen && (
                            <div className="px-8 pb-6 ml-12">
                              <div className={`border-l-4 border-brand-${accentColor}-200 pl-6`}>
                                <p className="text-brand-silver-700 whitespace-pre-line">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            お探しの答えが見つかりませんでしたか？
          </h2>
          <p className="text-xl text-brand-silver-300 mb-12 max-w-2xl mx-auto">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-black transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              サポートセンター
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}