import { Link } from "@tanstack/react-router";
import { FadeUp } from "../components/FadeUp";
import { SEOHead } from "../components/SEOHead";

const blogPosts = [
  {
    slug: "how-to-enhance-blurry-photos",
    title: "How to Enhance Blurry Photos in 2025 (AI Method)",
    excerpt:
      "Learn the fastest way to fix blurry, out-of-focus, or motion-blurred photos using AI enhancement technology. No desktop software needed.",
    category: "How-To",
    keywords: "how to enhance blurry photos, fix blurry photo, unblur image AI",
    readTime: "5 min read",
  },
  {
    slug: "best-ai-photo-enhancer-apps",
    title: "Best AI Photo Enhancer Apps in 2025 (iOS & Android)",
    excerpt:
      "A ranked comparison of the top AI photo enhancer apps available on mobile. We tested each one for quality, speed, and ease of use.",
    category: "Comparison",
    keywords: "best AI photo enhancer apps, photo enhancer app 2025",
    readTime: "8 min read",
  },
  {
    slug: "how-to-improve-photo-quality-on-iphone",
    title: "How to Improve Photo Quality on iPhone Without a Camera Upgrade",
    excerpt:
      "Your iPhone camera is good. AI makes it great. Here's how to dramatically improve photo quality on any iPhone model.",
    category: "How-To",
    keywords: "improve photo quality iPhone, AI photo enhancer iPhone",
    readTime: "6 min read",
  },
  {
    slug: "ai-image-upscaler-guide",
    title: "AI Image Upscaler: How to Enlarge Photos Without Losing Quality",
    excerpt:
      "Traditional resizing blurs your image. AI upscaling adds real detail. Discover how to upscale any image to HD or 4K with AI.",
    category: "Guide",
    keywords:
      "AI image upscaler, upscale photo without losing quality, image enlarger AI",
    readTime: "7 min read",
  },
  {
    slug: "how-to-restore-old-photos-with-ai",
    title: "How to Restore Old & Damaged Photos with AI (Free)",
    excerpt:
      "Scratches, fading, black-and-white — AI can restore virtually any old photo to HD quality. Here's the step-by-step process.",
    category: "How-To",
    keywords: "restore old photos AI, AI photo restoration, fix damaged photo",
    readTime: "6 min read",
  },
  {
    slug: "how-to-remove-noise-from-photos",
    title: "How to Remove Grain and Noise from Photos with AI",
    excerpt:
      "Dark photos, high-ISO shots, and old scans all suffer from grain. AI denoising removes it without destroying texture.",
    category: "How-To",
    keywords: "remove grain from photo, photo denoiser, reduce image noise AI",
    readTime: "5 min read",
  },
  {
    slug: "ai-face-enhancer-explained",
    title: "AI Face Enhancer: How It Works and Why It's So Accurate",
    excerpt:
      "AI face enhancement goes far beyond filters. Learn how modern AI models detect and reconstruct facial features with stunning precision.",
    category: "Explained",
    keywords: "AI face enhancer, face enhancement app, sharpen faces in photos",
    readTime: "5 min read",
  },
  {
    slug: "photo-quality-improve-android",
    title: "How to Improve Photo Quality on Android (No Root Required)",
    excerpt:
      "Android camera quality varies by device. AI enhancement fixes that. Here's how to get pro-level photos from any Android phone.",
    category: "How-To",
    keywords: "improve photo quality Android, AI photo enhancer Android",
    readTime: "6 min read",
  },
  {
    slug: "what-is-ai-photo-enhancement",
    title: "What Is AI Photo Enhancement? A Beginner's Complete Guide",
    excerpt:
      "New to AI photo enhancement? This guide covers how it works, what it can fix, and what to look for in an AI photo enhancer app.",
    category: "Guide",
    keywords: "what is AI photo enhancement, AI image enhancer explained",
    readTime: "7 min read",
  },
  {
    slug: "free-photo-enhancer-apps",
    title: "5 Free AI Photo Enhancer Apps That Actually Work in 2025",
    excerpt:
      "Not all free photo enhancer apps are equal. We picked the ones that deliver real AI-powered results without a paywall.",
    category: "Comparison",
    keywords: "free AI photo enhancer, best free photo enhancer app 2025",
    readTime: "6 min read",
  },
  {
    slug: "how-to-sharpen-photos",
    title: "How to Sharpen a Blurry Photo in Seconds Using AI",
    excerpt:
      "Manual sharpening in Photoshop takes skill. AI sharpening takes one tap. Here's the fastest way to get sharp photos on mobile.",
    category: "How-To",
    keywords:
      "how to sharpen a photo, AI photo sharpener, sharpen blurry image",
    readTime: "4 min read",
  },
  {
    slug: "ai-photo-enhancer-vs-photoshop",
    title: "AI Photo Enhancer vs. Photoshop: Which One Should You Use?",
    excerpt:
      "Photoshop gives you control. AI gives you speed and simplicity. Here's an honest comparison to help you choose.",
    category: "Comparison",
    keywords:
      "AI photo enhancer vs Photoshop, photo editing app comparison 2025",
    readTime: "7 min read",
  },
  {
    slug: "how-to-colorize-black-and-white-photos",
    title: "How to Colorize Black and White Photos Automatically with AI",
    excerpt:
      "AI colorization adds natural, realistic color to any black-and-white photo. Here's how to do it in under a minute.",
    category: "How-To",
    keywords: "colorize black and white photo AI, AI photo colorization app",
    readTime: "5 min read",
  },
  {
    slug: "upscale-image-for-print",
    title: "How to Upscale an Image for Printing Without Losing Quality",
    excerpt:
      "Printing a low-resolution image results in blur and pixelation. AI upscaling solves this. Here's everything you need to know.",
    category: "How-To",
    keywords: "upscale image for print, enlarge photo for printing AI",
    readTime: "6 min read",
  },
  {
    slug: "how-to-fix-low-quality-photos",
    title: "How to Fix Low-Quality Photos on Your Phone (The AI Way)",
    excerpt:
      "Old photos, screenshots, and compressed images all suffer from poor quality. AI can reconstruct the detail that was lost.",
    category: "How-To",
    keywords:
      "fix low quality photo, improve image quality app, photo quality fixer",
    readTime: "5 min read",
  },
  {
    slug: "best-photo-restoration-apps",
    title: "Best Photo Restoration Apps to Repair Old & Damaged Photos",
    excerpt:
      "Family photos deserve to last forever. These are the best AI-powered apps for restoring, repairing, and reviving old photographs.",
    category: "Comparison",
    keywords: "best photo restoration apps, repair old photos app 2025",
    readTime: "7 min read",
  },
  {
    slug: "ai-photo-quality-enhancer-review",
    title: "ClearPix Review: The AI Photo Enhancer That Does It All",
    excerpt:
      "An in-depth look at ClearPix — covering its AI enhancement engine, feature set, before/after results, and how it compares to alternatives.",
    category: "Review",
    keywords: "ClearPix review, AI photo enhancer app review 2025",
    readTime: "8 min read",
  },
  {
    slug: "e-commerce-product-photo-enhancer",
    title: "How AI Photo Enhancement Can Boost Your E-Commerce Sales",
    excerpt:
      "Product photos directly impact conversion rates. Learn how AI enhancement makes your product images sharper, cleaner, and more compelling.",
    category: "Business",
    keywords: "product photo enhancer AI, improve e-commerce product photos",
    readTime: "6 min read",
  },
  {
    slug: "how-to-enhance-selfies-with-ai",
    title: "How to Enhance Selfies with AI (No Filter Needed)",
    excerpt:
      "Filters alter reality. AI enhancement improves what's actually there. Here's how to get pro-quality selfies from any front camera.",
    category: "How-To",
    keywords: "AI selfie enhancer, enhance selfie app, improve selfie quality",
    readTime: "5 min read",
  },
  {
    slug: "ai-photo-enhancer-for-social-media",
    title: "AI Photo Enhancer for Social Media: Get More Engagement",
    excerpt:
      "High-quality visuals get more likes, shares, and followers. Here's how AI photo enhancement can level up your social media content.",
    category: "Social Media",
    keywords:
      "AI photo enhancer for Instagram, social media photo quality, enhance photo for Instagram",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  "How-To": "bg-blue-500/20 text-blue-400",
  Comparison: "bg-purple-500/20 text-purple-400",
  Guide: "bg-green-500/20 text-green-400",
  Explained: "bg-yellow-500/20 text-yellow-400",
  Review: "bg-[#FF3A5C]/20 text-[#FF3A5C]",
  Business: "bg-orange-500/20 text-orange-400",
  "Social Media": "bg-pink-500/20 text-pink-400",
};

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
                <article className="bg-[#111111] rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-800 text-gray-400"}`}
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
                  <div className="mt-auto">
                    <span className="text-xs text-gray-700 italic">
                      Keywords: {post.keywords}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-[#FF3A5C] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer group">
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
                    </span>
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
