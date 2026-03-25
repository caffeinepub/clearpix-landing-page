import { motion } from "motion/react";
import { FadeUp } from "../components/FadeUp";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/clearpix-ai-photo-enhancer/id6755960455";

const features = [
  "AI-powered photo enhancement in seconds",
  "Restore old and damaged photos",
  "Unblur and sharpen any image",
  "Face enhance with natural results",
  "Upscale photos up to 8×",
  "Fix colors and remove noise",
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-8">
              <img
                src="/assets/uploads/app_logo_foreground-019d23e0-f255-765b-9983-11d350cc5503-1.png"
                alt="ClearPix"
                className="w-16 h-16 rounded-2xl"
              />
            </div>
            <h1 className="font-display font-extrabold text-white text-[42px] sm:text-[58px] leading-[1.05] tracking-tight mb-4">
              Get ClearPix for free
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              AI photo enhancement in seconds. Available on iOS and Android.
            </p>
          </FadeUp>

          {/* Download Cards */}
          <FadeUp delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              {/* App Store */}
              <motion.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#111111] border border-white/10 hover:border-white/25 rounded-3xl p-8 flex flex-col items-center gap-5 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-9 h-9 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    Download on the
                  </p>
                  <p className="font-display font-bold text-white text-2xl">
                    App Store
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    iOS 14.0 or later
                  </p>
                </div>
                <div className="w-full pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <svg
                        key={n}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-400 text-sm ml-1">4.8</span>
                  </div>
                </div>
              </motion.a>

              {/* Google Play */}
              <motion.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#111111] border border-white/10 hover:border-white/25 rounded-3xl p-8 flex flex-col items-center gap-5 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-9 h-9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.18 23.76c.35.19.75.25 1.14.17l12.16-7.02-2.64-2.64-10.66 9.49zm16.19-9.36L5.97 6.67 3.18.24C2.83.43 2.5.77 2.5 1.32v21.36c0 .55.33.89.68 1.08l13.86-8 2.33-1.36zm1.6-4.47l-2.82-1.63-3.02 3.02 3.02 3.02 2.85-1.65c.81-.47.81-1.29 0-1.76h-.03zM4.32.07L16.48 7.09l-2.64 2.64L3.18.24C3.53.16 3.97.19 4.32.07z"
                      fill="url(#gplay-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="gplay-gradient"
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="24"
                      >
                        <stop offset="0%" stopColor="#00C853" />
                        <stop offset="50%" stopColor="#1565C0" />
                        <stop offset="100%" stopColor="#F57C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    Get it on
                  </p>
                  <p className="font-display font-bold text-white text-2xl">
                    Google Play
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Android 7.0 or later
                  </p>
                </div>
                <div className="w-full pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <svg
                        key={n}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-400 text-sm ml-1">4.7</span>
                  </div>
                </div>
              </motion.a>
            </div>
          </FadeUp>

          {/* Phone preview */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10">
              <img
                src="/assets/generated/download-hero-phones.dim_900x600.png"
                alt="ClearPix app on iOS and Android"
                className="w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features list */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              Everything you need to enhance your photos
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FadeUp key={f} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-[#111111] border border-white/10 rounded-xl px-5 py-4">
                  <div className="w-5 h-5 rounded-full bg-[#FF3A5C] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 6l3 3 5-5"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-sm font-medium">{f}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4">
        <FadeUp>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-500 text-sm mb-6">
              Free to download. AI results in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-black px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FF3A5C] hover:bg-[#e02347] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#FF3A5C]/25"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76c.35.19.75.25 1.14.17l12.16-7.02-2.64-2.64-10.66 9.49zm16.19-9.36L5.97 6.67 3.18.24C2.83.43 2.5.77 2.5 1.32v21.36c0 .55.33.89.68 1.08l13.86-8 2.33-1.36zm1.6-4.47l-2.82-1.63-3.02 3.02 3.02 3.02 2.85-1.65c.81-.47.81-1.29 0-1.76h-.03zM4.32.07L16.48 7.09l-2.64 2.64L3.18.24C3.53.16 3.97.19 4.32.07z" />
                </svg>
                Get on Google Play
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
