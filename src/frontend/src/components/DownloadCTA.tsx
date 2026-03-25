import { motion } from "motion/react";
import { FadeUp } from "./FadeUp";

const LOGO =
  "/assets/uploads/app_logo_foreground-019d2426-c686-71cf-adab-6b85833910d7-1.png";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/clearpix-ai-photo-enhancer/id6755960455";

export function DownloadCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF3A5C]/20 rounded-full blur-[120px]" />
      </div>

      <FadeUp>
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
              <img
                src={LOGO}
                alt="ClearPix"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-4 leading-tight">
            Start enhancing your photos today
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Free to download. AI results in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-black px-7 py-4 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </motion.a>
            <motion.a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#FF3A5C] hover:bg-[#e02347] text-white px-7 py-4 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg shadow-[#FF3A5C]/30"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.18 23.76c.35.19.75.25 1.14.17l12.16-7.02-2.64-2.64-10.66 9.49zm16.19-9.36L5.97 6.67 3.18.24C2.83.43 2.5.77 2.5 1.32v21.36c0 .55.33.89.68 1.08l13.86-8 2.33-1.36zm1.6-4.47l-2.82-1.63-3.02 3.02 3.02 3.02 2.85-1.65c.81-.47.81-1.29 0-1.76h-.03zM4.32.07L16.48 7.09l-2.64 2.64L3.18.24C3.53.16 3.97.19 4.32.07z" />
              </svg>
              Google Play
            </motion.a>
          </div>

          {/* Subtle stats */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <div className="text-center">
              <p className="font-display font-extrabold text-white text-xl">
                20K+
              </p>
              <p className="text-gray-600 text-xs tracking-wider uppercase mt-0.5">
                Users
              </p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-display font-extrabold text-white text-xl">
                4.8★
              </p>
              <p className="text-gray-600 text-xs tracking-wider uppercase mt-0.5">
                App Store
              </p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-display font-extrabold text-white text-xl">
                Free
              </p>
              <p className="text-gray-600 text-xs tracking-wider uppercase mt-0.5">
                To Download
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
