import { Link } from "@tanstack/react-router";
import { FadeUp } from "../components/FadeUp";
import { SEOHead } from "../components/SEOHead";
import { blogPosts, categoryColors } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead
        title="ClearPix Blog – AI Photo Enhancement Tips & Guides"
        description="Learn how to enhance blurry photos, upscale images, restore old photos, and get the most out of AI photo editing. Expert tips from the ClearPix team."
        canonical="https://clearpix.app/blog"
      />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Blog
            </p>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.05]">
              AI Photo Enhancement Tips, Guides & Comparisons
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about enhancing, restoring, and
              upscaling photos using AI. From quick how-tos to deep comparisons.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.04}>
                <article className="bg-[#111111] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Thumbnail */}
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          categoryColors[post.category] ??
                          "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-600">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-white text-lg leading-snug mb-3 flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        data-ocid={`blog.item.${i + 1}.link`}
                        className="text-[#FF3A5C] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group"
                      >
                        Read Article
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
