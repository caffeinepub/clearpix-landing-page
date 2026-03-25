import { DownloadButtons } from "../components/DownloadButtons";
import { DownloadCTA } from "../components/DownloadCTA";
import { FadeUp } from "../components/FadeUp";
import { ReviewsSection } from "../components/ReviewsSection";

const B = "https://remini.ai/images/prismic/";

const steps = [
  {
    num: "01",
    title: "Train the AI",
    desc: "Choose 8-12 images to teach the AI what you look like: this will take just few minutes. After that, you'll be able to generate countless different photos!",
    image: `${B}ai-photos-train-ai.webp`,
  },
  {
    num: "02",
    title: "Pick a model image",
    desc: "Want to see yourself as a baby? Need a new photo for your CV? Choose from dozens of model images to generate photos based on its style and pose!",
    image: `${B}ai-photos-pick-a-model.webp`,
  },
  {
    num: "03",
    title: "Generate photos of yourself",
    desc: "Generate dozens of stunning photos of yourself in different poses and angles, as if they were taken by a professional photographer!",
    image: `${B}ai-photos-generate.webp`,
  },
];

const photoStyles = [
  {
    label: "Curriculum",
    image: `${B}ai-photos-curriculum.webp`,
    desc: "Our AI effortlessly tailors the photo to match your career aspirations.",
  },
  {
    label: "Baby me",
    image: `${B}ai-photos-baby-me.webp`,
    desc: "Curious about how you looked as an adorable baby?",
  },
  {
    label: "Maternity",
    image: `${B}ai-photos-maternity.webp`,
    desc: "Get heartfelt photos that capture the love and anticipation of motherhood.",
  },
  {
    label: "Photo shooting",
    image: `${B}ai-photos-photoshoot.webp`,
    desc: "Choose a model image that reflects the pose you want to achieve.",
  },
];

const useCases = [
  {
    icon: `${B}icon-eyes.webp`,
    title: "Profile pictures",
    desc: "Generate picture-perfect photos that highlight your individuality.",
  },
  {
    icon: `${B}icon-smartphone.png`,
    title: "Social media",
    desc: "Get more likes and followers with unique and captivating AI photos.",
  },
  {
    icon: `${B}icon-suitcase.webp`,
    title: "Curriculum Vitae",
    desc: "Make your CV stand out with an eye-catching professional photo.",
  },
  {
    icon: `${B}icon-haircut.webp`,
    title: "New looks",
    desc: "See exactly how you'd look with different hair, makeup, and outfits.",
  },
  {
    icon: `${B}icon-camera.webp`,
    title: "Professional photos",
    desc: "Create a diverse modeling portfolio without a professional shooting.",
  },
  {
    icon: `${B}icon-globe.webp`,
    title: "Different locations",
    desc: "Capture breathtaking photos of yourself in any location worldwide.",
  },
];

export default function AIPhotosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              AI PHOTOS
            </p>
            <h1 className="font-display font-extrabold text-white text-[44px] sm:text-[60px] leading-[1.05] tracking-tight mb-6">
              Experience hyperrealistic photos of yourself
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Generate stunningly realistic photos of yourself that look like
              they were taken by a professional photographer.
            </p>
            <img
              src={`${B}ai-photos-hero-desktop.webp`}
              alt="AI Photos hero"
              className="w-full rounded-3xl shadow-2xl"
            />
          </FadeUp>
        </div>
      </section>

      {/* How It Works — 3 steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              How It Works
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Three easy steps to your AI photos
            </h2>
          </FadeUp>
          <div className="space-y-24">
            {steps.map((step, i) => (
              <FadeUp key={step.num}>
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    i % 2 !== 0 ? "" : ""
                  }`}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div>
                        <span className="font-display font-extrabold text-7xl text-white/10 block mb-4">
                          {step.num}
                        </span>
                        <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full rounded-3xl shadow-2xl object-cover"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full rounded-3xl shadow-2xl object-cover"
                      />
                      <div>
                        <span className="font-display font-extrabold text-7xl text-white/10 block mb-4">
                          {step.num}
                        </span>
                        <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Best version of yourself */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Styles
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Show the best version of yourself
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {photoStyles.map((style, i) => (
              <FadeUp key={style.label} delay={i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={style.image}
                    alt={style.label}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-sm">
                      {style.label}
                    </span>
                    <p className="text-gray-300 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                      {style.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-4">
                Mobile App
              </p>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-6">
                Taking photos has never been so easy
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Available on both iOS and Android. Create flawless AI Photos on
                the go, whenever, wherever.
              </p>
              <DownloadButtons variant="white" />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <img
              src={`${B}ai-photos-mobileapp-desktop.webp`}
              alt="Mobile app"
              className="w-full rounded-3xl shadow-2xl"
            />
          </FadeUp>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Use Cases
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Endless possibilities
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <FadeUp key={uc.title} delay={i * 0.07}>
                <div className="p-6 bg-[#111111] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3A5C]/10 flex items-center justify-center mb-4">
                    <img
                      src={uc.icon}
                      alt={uc.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{uc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <DownloadCTA />
    </div>
  );
}
