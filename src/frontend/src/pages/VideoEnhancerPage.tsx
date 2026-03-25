import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DownloadButtons } from "../components/DownloadButtons";

function FadeSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function VideoEnhancerPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="pt-28 pb-10 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeSection>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
              video enhancer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              Transform your videos into stunning HD masterpieces
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Unleash the hidden potential of your videos with AI-Powered
              enhancement and enter the new era of video editing.
            </p>
          </FadeSection>
          <FadeSection>
            <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative w-full" style={{ paddingTop: "64%" }}>
                <iframe
                  title="Hero video"
                  src="https://player.vimeo.com/video/853358496?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0"
                  allow="autoplay"
                  className="absolute top-0 left-0 h-full w-full"
                />
              </div>
            </div>
          </FadeSection>
        </div>
        <div className="max-w-6xl mx-auto mt-6">
          <p className="text-sm text-gray-600 italic">
            All the enhancements shown in the website are{" "}
            <strong className="text-gray-400">100% authentic.</strong>
          </p>
        </div>
      </section>

      {/* SECTION 1 — image left, text right */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeSection>
            <img
              src="/images/prismic/video-enhancer-quality-size.webp"
              alt="Video quality improvement"
              className="w-full rounded-2xl shadow-xl border border-white/10"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/generated/video-enhancer-quality-size.dim_800x450.jpg";
              }}
            />
          </FadeSection>
          <FadeSection>
            <h2 className="text-3xl sm:text-[40px] font-extrabold leading-[1.1] tracking-tight text-white mb-5">
              Improve video quality and size
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Amplify the quality and size of your videos by up to 2x. Say
              goodbye to blurry, old, or low-quality footage. AI can reconstruct
              and enhance every detail. Witness the transformation as your
              videos come to life with remarkable clarity and vibrant visuals.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 2 — text left, video right */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeSection>
            <h2 className="text-3xl sm:text-[40px] font-extrabold leading-[1.1] tracking-tight text-white mb-5">
              Revive your old footage in stunning detail
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Take a nostalgic journey back in time as ClearPix's powerful AI
              technology breathes new life into your old, blurry, and dated
              videos, preserving precious moments with astounding clarity and
              detail.
            </p>
          </FadeSection>
          <FadeSection>
            <div className="relative w-full" style={{ paddingTop: "108%" }}>
              <iframe
                title="Revive old footage video"
                src="https://player.vimeo.com/video/853370860?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0"
                allow="autoplay"
                className="absolute top-0 left-0 h-full w-full rounded-2xl shadow-xl border border-white/10"
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* SECTION 3 — video left, text right */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeSection>
            <div className="relative w-full" style={{ paddingTop: "108%" }}>
              <iframe
                title="Enhance low-quality videos"
                src="https://player.vimeo.com/video/853370887?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0"
                allow="autoplay"
                className="absolute top-0 left-0 h-full w-full rounded-2xl shadow-xl border border-white/10"
              />
            </div>
          </FadeSection>
          <FadeSection>
            <h2 className="text-3xl sm:text-[40px] font-extrabold leading-[1.1] tracking-tight text-white mb-5">
              Enhance low-quality videos with AI Magic
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Say goodbye to blurry, grainy or pixelated videos. Enhance the
              quality of your footage, even in challenging conditions, and watch
              it come to life like never before.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-4 text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <FadeSection>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-5">
              Try ClearPix now!
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              Join the ClearPix community today and discover the transformative
              power of cutting-edge AI technology for yourself.
            </p>
            <DownloadButtons variant="white" />
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
