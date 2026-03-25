import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { DownloadButtons } from "../components/DownloadButtons";
import { DownloadCTA } from "../components/DownloadCTA";
import { FadeUp } from "../components/FadeUp";
import { ReviewsSection } from "../components/ReviewsSection";
import { Toggle } from "../components/Toggle";
import { WavyUnderline } from "../components/WavyUnderline";

// Using locally generated original images (copyright-safe)
const IMAGES = {
  portrait: {
    before: "/assets/generated/portrait-before.dim_600x400.jpg",
    after: "/assets/generated/portrait-after.dim_600x400.jpg",
  },
  landscape: {
    before: "/assets/generated/landscape-before.dim_600x400.jpg",
    after: "/assets/generated/landscape-after.dim_600x400.jpg",
  },
  oldphoto: {
    before: "/assets/generated/oldphoto-before.dim_600x400.jpg",
    after: "/assets/generated/oldphoto-after.dim_600x400.jpg",
  },
};

type TabKey = keyof typeof IMAGES;

const heroTabs: { key: TabKey; label: string }[] = [
  { key: "portrait", label: "Portrait" },
  { key: "landscape", label: "Landscape" },
  { key: "oldphoto", label: "Old Photo" },
];

const heroFeatures = [
  { id: "face", label: "Face Enhance", desc: "Restore facial details" },
  { id: "glow", label: "Face Glow", desc: "Natural skin glow" },
  { id: "color", label: "Auto Color", desc: "Perfect color balance" },
  { id: "bg", label: "Background Enhance", desc: "Crisp backgrounds" },
];

const industries = [
  {
    icon: "📱",
    title: "Social Platform",
    desc: "Professional-grade content for your audience.",
  },
  {
    icon: "🖼️",
    title: "Heritage",
    desc: "Restore family history in crystal-clear detail.",
  },
  {
    icon: "🖨️",
    title: "Printing Services",
    desc: "Upscale for large-format high-quality prints.",
  },
  {
    icon: "🛍️",
    title: "E-commerce",
    desc: "Enhance product images and boost conversions.",
  },
  {
    icon: "📚",
    title: "Education",
    desc: "Create engaging, high-resolution learning materials.",
  },
  {
    icon: "📰",
    title: "Magazines",
    desc: "Publication-grade quality for every spread.",
  },
];

const solutions = [
  {
    title: "Unblur & Sharpener",
    desc: "Fix blurry photos instantly in a single tap.",
    to: "/unblur-sharpener",
    imageBefore: "/assets/generated/unblur-before.dim_400x300.jpg",
    imageAfter: "/assets/generated/unblur-after.dim_400x300.jpg",
  },
  {
    title: "Old Photo Restorer",
    desc: "Breathe new life into faded, scratched vintage photos.",
    to: "/photo-restorer",
    imageBefore: "/assets/generated/oldphoto-before.dim_600x400.jpg",
    imageAfter: "/assets/generated/oldphoto-after.dim_600x400.jpg",
  },
  {
    title: "Denoiser",
    desc: "Remove noise and grain for studio-clean results.",
    to: "/denoiser",
    imageBefore: "/assets/generated/denoiser-before.dim_400x300.jpg",
    imageAfter: "/assets/generated/denoiser-after.dim_400x300.jpg",
  },
  {
    title: "Face Enhancer",
    desc: "Sharpen facial features and restore natural skin textures.",
    to: "/face-enhancer",
    imageBefore: "/assets/generated/face-before.dim_400x300.jpg",
    imageAfter: "/assets/generated/face-after.dim_400x300.jpg",
  },
  {
    title: "Color Fixer",
    desc: "Restore vivid, accurate colors in any photo.",
    to: "/color-fixer",
    imageBefore: "/assets/generated/color-before.dim_400x300.jpg",
    imageAfter: "/assets/generated/color-after.dim_400x300.jpg",
  },
  {
    title: "Image Enlarger",
    desc: "Upscale your images up to 8× without losing quality.",
    to: "/image-enlarger",
    imageBefore: "/assets/generated/portrait-before.dim_600x400.jpg",
    imageAfter: "/assets/generated/portrait-after.dim_600x400.jpg",
  },
];

const stats = [
  { value: "20K+", label: "Happy Users" },
  { value: "100K+", label: "Photos Enhanced" },
  { value: "4.8★", label: "App Store Rating" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("portrait");
  const [enabledFeatures, setEnabledFeatures] = useState<
    Record<string, boolean>
  >({
    face: true,
    glow: false,
    color: true,
    bg: false,
  });

  const toggleFeature = (id: string) => {
    setEnabledFeatures((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <FadeUp>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
                Product Demo
              </p>
              <h1 className="font-display font-extrabold text-white text-[42px] sm:text-[56px] leading-[1.05] tracking-tight mb-6">
                The only photo and video enhancer you&apos;ll ever need
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Transformative AI gives your low-quality photos and videos a
                stunning HD upgrade in seconds.
              </p>
              <DownloadButtons variant="white" />
            </FadeUp>

            {/* Right */}
            <FadeUp delay={0.15}>
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {heroTabs.map((t) => (
                  <button
                    type="button"
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeTab === t.key
                        ? "bg-[#FF3A5C] text-white shadow-md"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                    data-ocid="hero.tab"
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#111111] rounded-2xl p-4 shadow-2xl border border-white/10">
                    <BeforeAfterSlider
                      imageBefore={IMAGES[activeTab].before}
                      imageAfter={IMAGES[activeTab].after}
                      label={activeTab}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Feature toggles */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {heroFeatures.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between bg-[#111111] border border-white/10 rounded-xl p-3"
                  >
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="text-sm font-semibold text-white truncate">
                        {f.label}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{f.desc}</p>
                    </div>
                    <Toggle
                      enabled={enabledFeatures[f.id] ?? false}
                      onChange={() => toggleFeature(f.id)}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-3">
                All the enhancements shown in the website are{" "}
                <strong className="text-gray-400">100% authentic.</strong>
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* AI Photos split */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
                New · AI Photos
              </p>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-6 leading-[1.1]">
                Generate photos of yourself, with AI
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Create stunning, realistic AI-generated portraits in any style.
                Just upload a few selfies and let our AI do the magic.
              </p>
              <Link
                to="/ai-photos"
                className="btn-arrow"
                data-ocid="hero.primary_button"
              >
                Discover AI Photos
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <img
                src="/assets/generated/ai-photos-showcase.dim_800x600.jpg"
                alt="AI Photos showcase by ClearPix"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Industries
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              One product, <WavyUnderline>endless</WavyUnderline> business
              possibilities
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <FadeUp key={ind.title} delay={i * 0.06}>
                <div className="p-6 bg-[#111111] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#FF3A5C]/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {ind.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Video Enhancer split */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <img
                src="/assets/generated/video-enhancer-showcase.dim_800x600.jpg"
                alt="Video enhancer showcase by ClearPix"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
                Video Enhancer
              </p>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-6 leading-[1.1]">
                Transform blurry videos into crystal-clear HD
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our AI video enhancer upscales, denoises, and sharpens your
                videos frame-by-frame for stunning results.
              </p>
              <Link
                to={"/video-enhancer" as any}
                className="btn-arrow"
                data-ocid="hero.secondary_button"
              >
                Discover Video Enhance
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Our Solutions
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Bye-bye blur 👋🏻 Hello <WavyUnderline>high</WavyUnderline>{" "}
              definition
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className="bg-[#111111] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4">
                    <BeforeAfterSlider
                      imageBefore={s.imageBefore}
                      imageAfter={s.imageAfter}
                      label={s.title}
                    />
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {s.desc}
                    </p>
                    <Link
                      to={s.to as any}
                      className="text-white text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group"
                      data-ocid="hero.link"
                    >
                      Discover
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Our Users
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Loved by 20,000+ users
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <p className="font-display font-extrabold text-6xl text-white tracking-tight">
                  {s.value}
                </p>
                <div className="w-8 h-0.5 bg-[#FF3A5C] mx-auto my-3" />
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                  {s.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ClearPix Testimonial - branded */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0a0e] to-[#0d0d0d] border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3A5C]/10 to-transparent pointer-events-none" />
              <div className="relative p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/assets/uploads/app_logo_foreground-019d23e0-f255-765b-9983-11d350cc5503-1.png"
                    alt="ClearPix"
                    className="w-10 h-10 rounded-xl"
                  />
                  <span className="font-display font-bold text-white text-lg">
                    ClearPix
                  </span>
                </div>
                <blockquote className="text-white font-display font-bold text-xl sm:text-2xl lg:text-3xl leading-snug max-w-3xl mb-6">
                  &quot;Look at the before and after. If this doesn&apos;t blow
                  your mind, I don&apos;t know what will! ClearPix is absolute
                  magic!&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <svg
                        key={n}
                        className="w-5 h-5 fill-[#FF3A5C] text-[#FF3A5C]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm font-medium">
                    ClearPix User &mdash; Verified Review
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <ReviewsSection />
      <DownloadCTA />
    </div>
  );
}
