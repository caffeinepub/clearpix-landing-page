import { Star } from "lucide-react";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { DownloadButtons } from "../components/DownloadButtons";
import { DownloadCTA } from "../components/DownloadCTA";
import { FadeUp } from "../components/FadeUp";
import { ReviewsSection } from "../components/ReviewsSection";
import { WavyUnderline } from "../components/WavyUnderline";

interface FeatureSection {
  tagline: string;
  heading: string;
  body: string;
  image: string;
  imageRight: boolean;
}

interface FeaturePageProps {
  name: string;
  headline: string;
  body: string;
  imageBefore: string;
  imageAfter: string;
  sections: FeatureSection[];
}

export function FeaturePage({
  name,
  headline,
  body,
  imageBefore,
  imageAfter,
  sections,
}: FeaturePageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              {name}
            </p>
            <h1 className="font-display font-extrabold text-white text-[44px] sm:text-[60px] leading-[1.05] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {body}
            </p>
            {/* Before/After card */}
            <div className="bg-[#111111] rounded-2xl p-4 shadow-2xl border border-white/10 max-w-2xl mx-auto">
              <BeforeAfterSlider
                imageBefore={imageBefore}
                imageAfter={imageAfter}
                label={name}
              />
            </div>
            <p className="text-xs text-gray-600 mt-3">
              All the enhancements shown in the website are{" "}
              <strong className="text-gray-400">100% authentic.</strong>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Alternating feature sections */}
      {sections.map((sec, i) => (
        <section
          key={sec.tagline}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-black"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {!sec.imageRight && (
                <FadeUp>
                  <img
                    src={sec.image}
                    alt={sec.heading}
                    className="w-full aspect-[4/3] rounded-3xl shadow-2xl object-cover"
                  />
                </FadeUp>
              )}
              <FadeUp delay={0.1}>
                <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
                  {sec.tagline}
                </p>
                <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-5 leading-[1.1]">
                  {sec.heading}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {sec.body}
                </p>
              </FadeUp>
              {sec.imageRight && (
                <FadeUp delay={0.15}>
                  <img
                    src={sec.image}
                    alt={sec.heading}
                    className="w-full aspect-[4/3] rounded-3xl shadow-2xl object-cover"
                  />
                </FadeUp>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Integrations */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Integrations
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-6">
              Start enhancing with an API <WavyUnderline>easy</WavyUnderline>{" "}
              integration
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Integrate ClearPix into your workflow with our simple REST API.
              Enhance photos at scale with just a few lines of code.
            </p>
            <img
              src="/assets/generated/api-integrations.dim_800x400.webp"
              alt="API integrations"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl mb-8"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <DownloadButtons variant="white" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Used by users mini */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Our Users
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className="w-6 h-6 fill-purple-500 text-purple-500"
                />
              ))}
            </div>
            <p className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              20K+ happy users worldwide
            </p>
          </FadeUp>
        </div>
      </section>

      <ReviewsSection />
      <DownloadCTA />
    </div>
  );
}
