import { Metadata } from 'next'
import { Github, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'HaruStudioについて。自作キーボード、ガジェット、デザインが好きなクリエイター。',
}

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-5 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About</h1>

      {/* Profile card */}
      <div className="flex items-center gap-6 mb-12 p-6 rounded-xl bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 border border-brand/10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-2xl">HS</span>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">HaruStudio</h2>
          <p className="text-light-text/60 dark:text-dark-text/60 text-sm mb-3">コンテンツ制作ディレクター・デザイナー</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/haru_y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/haru-y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="prose-custom">
        <section className="mb-12">
          <h2>はじめまして</h2>
          <p>
            HaruStudioとして、コンテンツ制作ディレクター・デザイナーとして活動しています。
            最近は自作キーボードの沼にどっぷりハマっています。
          </p>
          <p>
            このブログでは、自作キーボードやガジェット、デザイン、開発プロジェクトについて発信していきます。
          </p>
        </section>

        <section className="mb-12">
          <h2>やっていること</h2>
          <ul>
            <li>
              <strong>自作キーボード</strong> - ビルドログ、レビュー、ファームウェア関連
            </li>
            <li>
              <strong>ZMKファームウェア生成ツール開発</strong> - 初心者でも簡単に無線キーボードのファームウェアを作成できるツール
            </li>
            <li>
              <strong>ガジェットレビュー</strong> - デスク環境、デバイス、ツールの紹介
            </li>
            <li>
              <strong>デザイン・クリエイティブ</strong> - UI/UX、ロゴ制作など
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>開発中のプロジェクト</h2>
          <h3>ZMKファームウェア生成ツール</h3>
          <p>
            ZMKファームウェアの作成は初心者にとってハードルが高いです。
            環境構築不要、GUIで簡単にファームウェアを生成できるツールを開発中です。
            進捗はこのブログで共有していきます。
          </p>
        </section>

        <section className="mb-12">
          <h2>このブログについて</h2>
          <p>
            Next.js 14 + MDX + Tailwind CSS で構築しています。
            「モダン × 温かみ」をコンセプトに、読みやすさとデザインにこだわりました。
          </p>
          <p>
            AI協働開発（Claude Code）を活用して作成しました。
            技術的なことも今後記事にしていく予定です。
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <div className="flex gap-6 mt-4">
            <a
              href="https://twitter.com/haru_y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/haru-y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
