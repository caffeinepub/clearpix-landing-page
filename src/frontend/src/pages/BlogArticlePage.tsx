import { Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FadeUp } from "../components/FadeUp";
import { SEOHead } from "../components/SEOHead";
import { blogPosts, categoryColors } from "../data/blogPosts";

export default function BlogArticlePage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <p className="text-[#FF3A5C] font-bold text-sm tracking-widest uppercase mb-4">
          404 – Not Found
        </p>
        <h1 className="font-display font-extrabold text-white text-4xl mb-6 text-center">
          Article not found
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          The article you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="text-[#FF3A5C] font-semibold hover:underline inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const heroImage = post.image;

  return (
    <div className="min-h-screen bg-black">
      <SEOHead
        title={`${post.title} | ClearPix Blog`}
        description={post.excerpt}
        canonical={`https://clearpix.app/blog/${post.slug}`}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <motion.img
          src={heroImage}
          alt={post.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Back link */}
        <div className="absolute top-6 left-6 sm:left-10">
          <Link
            to="/blog"
            data-ocid="blog.back.link"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 transition-all hover:bg-black/60"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 8H3M7 12l-4-4 4-4" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Title overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  categoryColors[post.category] ?? "bg-gray-800 text-gray-400"
                }`}
              >
                {post.category}
              </span>
              <span className="text-white/50 text-sm">{post.readTime}</span>
            </div>
            <motion.h1
              className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {post.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="px-6 sm:px-10 lg:px-16 py-14">
        <div className="max-w-3xl mx-auto">
          {post.content.map((paragraph) => (
            <FadeUp
              key={paragraph.slice(0, 32)}
              delay={post.content.indexOf(paragraph) * 0.08}
            >
              <p className="text-gray-300 text-lg leading-[1.85] mb-7">
                {paragraph}
              </p>
            </FadeUp>
          ))}

          {/* Divider */}
          <div className="border-t border-white/10 my-12" />

          {/* Keywords badge row */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-12">
              {post.keywords.split(", ").map((kw) => (
                <span
                  key={kw}
                  className="text-xs text-gray-500 border border-white/10 rounded-full px-3 py-1"
                >
                  {kw}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#FF3A5C] mb-3">
                Try It Free
              </p>
              <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-4">
                See the difference AI makes on your photos
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Download ClearPix free and enhance your first photo in under 10
                seconds — no account required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="blog.article.cta.button"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF3A5C] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e02e4e] transition-colors text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.18 23.76a2 2 0 0 1-.97-1.74V1.98A2 2 0 0 1 3.18.22l12.37 11.77-12.37 11.77zM20.4 13.54l-2.88 1.67-2.82-2.68 2.82-2.68 2.88 1.67a1.5 1.5 0 0 1 0 2.02zM4.63 23.07l10.47-6.07-2.34-2.23L4.63 23.07zm10.47-13.97L4.63.93l8.13 8.3 2.34-2.23z" />
                  </svg>
                  Get on Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/clearpix-ai-photo-enhancer/id6755960455"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="blog.article.cta.secondary_button"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm border border-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on App Store
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Back to blog */}
          <FadeUp>
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                data-ocid="blog.bottom.link"
                className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13 8H3M7 12l-4-4 4-4" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </FadeUp>
        </div>
      </article>
    </div>
  );
}
