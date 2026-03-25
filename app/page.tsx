import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-12 relative">
      {/* Hero Section */}
      <section className="mb-16 relative">
        <p className="text-sm text-light-text/50 dark:text-dark-text/50 mb-2 font-medium tracking-wide">HaruStudio — コンテンツディレクター・デザイナー</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          HaruStudio Blog
        </h1>
        <div className="w-16 h-1 bg-brand rounded-full mb-4" />
        <p className="text-base text-light-text/70 dark:text-dark-text/70 max-w-2xl">
          自作キーボード、ガジェット、クリエイティブについて発信しています。
        </p>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
          最新の記事
          <span className="text-sm font-normal px-2.5 py-0.5 rounded-full bg-brand/10 text-brand">
            {posts.length}
          </span>
        </h2>

        {posts.length === 0 ? (
          <p className="text-light-text/60 dark:text-dark-text/60">
            まだ記事がありません。
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
