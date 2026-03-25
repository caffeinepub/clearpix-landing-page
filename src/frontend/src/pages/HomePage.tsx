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

const B = "https://remini.ai/images/prismic/";

const IMAGES = {
  portrait: {
    before: `${B}usecase-face-enhancer-before.webp`,
    after: `${B}usecase-face-enhancer-after.webp`,
  },
  landscape: {
    before: `${B}usecase-image-enlarger-before.webp`,
    after: `${B}usecase-image-enlarger-after.webp`,
  },
  oldphoto: {
    before: `${B}usecase-photo-restorer-before.webp`,
    after: `${B}usecase-photo-restorer-after.webp`,
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
    icon: `${B}icon-smartphone.png`,
    title: "Social Platform",
    desc: "Professional-grade content for your audience.",
  },
  {
    icon: `${B}icon-old-lady.png`,
    title: "Heritage",
    desc: "Restore family history in crystal-clear detail.",
  },
  {
    icon: `${B}icon-paint.png`,
    title: "Printing Services",
    desc: "Upscale for large-format high-quality prints.",
  },
  {
    icon: `${B}icon-shopping-bag.png`,
    title: "E-commerce",
    desc: "Enhance product images and boost conversions.",
  },
  {
    icon: `${B}icon-books.png`,
    title: "Education",
    desc: "Create engaging, high-resolution learning materials.",
  },
  {
    icon: `${B}icon-sunset.png`,
    title: "Magazines",
    desc: "Publication-grade quality for every spread.",
  },
];

const solutions = [
  {
    title: "Unblur & Sharpener",
    desc: "Fix blurry photos instantly in a single tap.",
    to: "/unblur-sharpener",
    imageBefore: `${B}usecase-unblur-before.webp`,
    imageAfter: `${B}usecase-unblur-after.webp`,
  },
  {
    title: "Old Photo Restorer",
    desc: "Breathe new life into faded, scratched vintage photos.",
    to: "/photo-restorer",
    imageBefore: `${B}usecase-photo-restorer-before.webp`,
    imageAfter: `${B}usecase-photo-restorer-after.webp`,
  },
  {
    title: "Denoiser",
    desc: "Remove noise and grain for studio-clean results.",
    to: "/denoiser",
    imageBefore: `${B}usecase-denoiser-before.webp`,
    imageAfter: `${B}usecase-denoiser-after.webp`,
  },
  {
    title: "Face Enhancer",
    desc: "Sharpen facial features and restore natural skin textures.",
    to: "/face-enhancer",
    imageBefore: `${B}usecase-face-enhancer-before.webp`,
    imageAfter: `${B}usecase-face-enhancer-after.webp`,
  },
  {
    title: "Color Fixer",
    desc: "Restore vivid, accurate colors in any photo.",
    to: "/color-fixer",
    imageBefore: `${B}usecase-color-fixer-before.webp`,
    imageAfter: `${B}usecase-color-fixer-after.webp`,
  },
  {
    title: "Image Enlarger",
    desc: "Upscale your images up to 8× without losing quality.",
    to: "/image-enlarger",
    imageBefore: `${B}usecase-image-enlarger-before.webp`,
    imageAfter: `${B}usecase-image-enlarger-after.webp`,
  },
];

const stats = [
  { value: "100M", label: "Monthly Active Users" },
  { value: "15M", label: "Monthly Downloads" },
  { value: "5B", label: "Enhanced Photos & Videos" },
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
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
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
                src={`${B}homepage-ai-photos.webp`}
                alt="AI Photos showcase"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
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
                  <div className="w-10 h-10 bg-[#FF3A5C]/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={ind.icon}
                      alt={ind.title}
                      className="w-6 h-6 object-contain"
                    />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <img
                src={`${B}homepage-video-enhancer.webp`}
                alt="Video enhancer showcase"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Our Users
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Used by millions
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

      {/* PiXimperfect Testimonial */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={`${B}PiXimperfect.png`}
                alt="PiXimperfect"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
                <img
                  src={`${B}PiXimperfect-logo.png`}
                  alt="PiXimperfect Logo"
                  className="h-10 object-contain mb-6 self-start"
                />
                <blockquote className="text-white font-display font-bold text-xl sm:text-2xl lg:text-3xl leading-snug max-w-3xl mb-4">
                  &quot;Look at the before and after. If this doesn&apos;t blow
                  your mind, I don&apos;t know what will! This is absolute
                  magic!&quot;
                </blockquote>
                <a
                  href="https://www.youtube.com/watch?v=Q8HFN4y1WVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm font-semibold hover:text-white transition-colors"
                >
                  @PiXimperfect — Unmesh Dinda
                </a>
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
