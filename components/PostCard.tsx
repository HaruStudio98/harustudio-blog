import Link from 'next/link'
import Image from 'next/image'
import { PostMeta } from '@/lib/posts'
import { Calendar, Tag } from 'lucide-react'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group">
      <Link
        href={`/posts/${post.slug}`}
        className="block rounded-lg bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 border border-transparent hover:border-brand/30 transition-all duration-300 overflow-hidden"
      >
        {/* Cover image or placeholder */}
        {post.coverImage ? (
          <div className="relative aspect-video">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        ) : (
          <div className="h-32 bg-gradient-to-br from-brand/8 to-brand/3 flex items-center justify-center">
            <svg className="w-8 h-8 text-brand/30" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <rect x="4" y="9" width="2" height="2" rx="0.5" />
              <rect x="7" y="9" width="2" height="2" rx="0.5" />
              <rect x="10" y="9" width="2" height="2" rx="0.5" />
              <rect x="13" y="9" width="2" height="2" rx="0.5" />
              <rect x="16" y="9" width="2" height="2" rx="0.5" />
              <rect x="5" y="12" width="2" height="2" rx="0.5" />
              <rect x="8" y="12" width="6" height="2" rx="0.5" />
              <rect x="15" y="12" width="2" height="2" rx="0.5" />
            </svg>
          </div>
        )}

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">
            {post.title}
          </h2>

          <p className="text-light-text/70 dark:text-dark-text/70 mb-4 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-light-text/50 dark:text-dark-text/50">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>

            {post.tags.length > 0 && (
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <div className="flex gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-brand/10 text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
