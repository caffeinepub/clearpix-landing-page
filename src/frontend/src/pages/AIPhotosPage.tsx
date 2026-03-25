import { DownloadButtons } from "../components/DownloadButtons";
import { DownloadCTA } from "../components/DownloadCTA";
import { FadeUp } from "../components/FadeUp";
import { ReviewsSection } from "../components/ReviewsSection";

const LOCAL = "/assets/generated/";

const steps = [
  {
    num: "01",
    title: "Train the AI",
    desc: "Choose 8-12 images to teach the AI what you look like: this will take just a few minutes. After that, you'll be able to generate countless different photos!",
    image: "/assets/uploads/image-019d2418-08fb-703b-bba7-e851a519249f-1.png",
    isUpload: true,
  },
  {
    num: "02",
    title: "Pick a style",
    desc: "Want to see yourself in a professional headshot? Need a new photo for your CV? Choose from dozens of styles to generate photos based on your preferences!",
    image: "/assets/uploads/image-019d2418-0950-718a-9630-ab82df232ea6-3.png",
    isUpload: true,
  },
  {
    num: "03",
    title: "Generate photos of yourself",
    desc: "Generate dozens of stunning photos of yourself in different poses and angles, as if they were taken by a professional photographer!",
    image: `${LOCAL}app-preview-carousel.dim_900x500.jpg`,
    isUpload: false,
  },
];

const photoStyles = [
  {
    label: "Professional",
    image: `${LOCAL}portrait-after.dim_600x400.jpg`,
    desc: "Our AI effortlessly tailors the photo to match your career aspirations.",
  },
  {
    label: "Vintage",
    image: `${LOCAL}oldphoto-after.dim_600x400.jpg`,
    desc: "Explore nostalgic styles with beautiful vintage aesthetics.",
  },
  {
    label: "Artistic",
    image: `${LOCAL}color-after.dim_400x300.jpg`,
    desc: "Vibrant artistic styles that make your photos truly unique.",
  },
  {
    label: "Portrait",
    image: `${LOCAL}face-after.dim_400x300.jpg`,
    desc: "Choose a pose that reflects the look you want to achieve.",
  },
];

const useCases = [
  {
    icon: "👤",
    title: "Profile pictures",
    desc: "Generate picture-perfect photos that highlight your individuality.",
  },
  {
    icon: "📱",
    title: "Social media",
    desc: "Get more likes and followers with unique and captivating AI photos.",
  },
  {
    icon: "💼",
    title: "Curriculum Vitae",
    desc: "Make your CV stand out with an eye-catching professional photo.",
  },
  {
    icon: "✨",
    title: "New looks",
    desc: "See exactly how you'd look with different hair, makeup, and outfits.",
  },
  {
    icon: "📸",
    title: "Professional photos",
    desc: "Create a diverse modeling portfolio without a professional shooting.",
  },
  {
    icon: "🌍",
    title: "Different locations",
    desc: "Capture breathtaking photos of yourself in any location worldwide.",
  },
];

export default function AIPhotosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-black">
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
            {/* Hero showcase using real app screenshot */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <img
                src="/assets/uploads/image-019d2418-09cb-73c2-8ee9-cfd64ac9db20-4.png"
                alt="Enhance Every Snap - ClearPix AI"
                className="w-full object-contain"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* App Feature Showcase - two real screenshots side by side */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              Features
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Powerful AI tools in your pocket
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.08}>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl h-full flex flex-col">
                <img
                  src="/assets/uploads/image-019d2418-08fb-703b-bba7-e851a519249f-1.png"
                  alt="Easy AI Profile Setup"
                  className="w-full object-contain"
                />
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    Easy AI Profile Setup
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Train the AI on your face with just a handful of selfies and
                    unlock endless personalized photo styles.
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl h-full flex flex-col">
                <img
                  src="/assets/uploads/image-019d2418-0950-718a-9630-ab82df232ea6-3.png"
                  alt="AI Magic Filters"
                  className="w-full object-contain"
                />
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    AI Magic Filters
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Apply stunning AI-powered filters that transform your photos
                    with professional-grade quality in seconds.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              How It Works
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
              Three easy steps to your AI photos
            </h2>
          </FadeUp>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeUp key={step.num}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                      <div
                        className={`rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${step.isUpload ? "bg-[#0a0a0a]" : ""}`}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className={`w-full ${step.isUpload ? "object-contain" : "object-cover"}`}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${step.isUpload ? "bg-[#0a0a0a]" : ""}`}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className={`w-full ${step.isUpload ? "object-contain" : "object-cover"}`}
                        />
                      </div>
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

      {/* Styles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
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
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-black">
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
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <img
                src="/assets/uploads/image-019d2418-0910-71e1-bfa9-3e8de204494f-2.png"
                alt="Modeling Shoots & Portraits - ClearPix mobile app"
                className="w-full object-contain"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
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
                  <div className="w-12 h-12 rounded-xl bg-[#FF3A5C]/10 flex items-center justify-center mb-4 text-2xl">
                    {uc.icon}
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
