import { Metadata } from 'next'
import { Github, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'HaruStudioについて。自作キーボード、ガジェット、クリエイティブが好きなコンテンツディレクター。',
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
          <p className="text-light-text/60 dark:text-dark-text/60 text-sm mb-3">コンテンツディレクター・デザイナー</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/haru_y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/HaruStudio98"
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
          <h2>HaruStudioとは</h2>
          <p>
            自作キーボード、ガジェット、クリエイティブをテーマに活動しているブランドです。
            コンテンツディレクターとして15年以上、Webやアプリのモノづくりに関わってきた経験をベースに、
            好きなものを好きなように発信していく場所として立ち上げました。
          </p>
          <p>
            UIという言葉がまだ一般的でなかった頃から、「使う人のことを考えたモノづくり」を続けてきました。
            その視点は今もブログやプロダクト開発の根っこにあります。
          </p>
        </section>

        <section className="mb-12">
          <h2>やっていること</h2>
          <ul>
            <li>
              <strong>自作キーボード</strong> — ビルドログ、パーツレビュー、ファームウェア関連の発信
            </li>
            <li>
              <strong>ガジェットレビュー</strong> — デスク環境、デバイス、ツールの紹介
            </li>
            <li>
              <strong>プロダクト開発</strong> — 自作キーボード向けツールをはじめ、実用的なWebアプリを開発中
            </li>
            <li>
              <strong>クリエイティブコラム</strong> — UI/UXの話、AIとの協働、モノづくりの裏側
            </li>
            <li>
              <strong>Vtuber活動</strong> — ガジェット・自作キーボードをテーマにした配信（準備中）
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>AIとの向き合い方</h2>
          <p>
            このブログとプロダクトはClaude Codeと一緒に作っています。
            AIをツールとして使うというより、知識を持ったメンバーとして一緒にやっていく感覚で取り組んでいます。
          </p>
          <p>
            「知らないことを知っている相手にはリスペクトを持つ」というシンプルな考え方が、
            自分とAIの関係の出発点にあります。その視点や体験も、このブログで発信していきたいテーマのひとつです。
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>XやGitHubでつながりましょう。</p>
          <div className="flex gap-6 mt-4">
            <a
              href="https://twitter.com/haru_y98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/HaruStudio98"
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
