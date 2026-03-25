import { Star } from "lucide-react";
import { FadeUp } from "./FadeUp";

const reviews = [
  {
    platform: "Android user",
    text: "Never seen such a high-quality app that is free. I'm totally in love, it is easy to access and fun. I'll definitely recommend this app to everyone!",
  },
  {
    platform: "Web user",
    text: "IT'S ABSOLUTE MAGIC! The way it restores old photos is just mind-blowing. I've been using it every day.",
  },
  {
    platform: "iOS user",
    text: "This app is amazing. I had an old photo of my grandmother when she was about 25 years old, and ClearPix has dramatically improved that.",
  },
  {
    platform: "iOS user (2)",
    text: "Don't think I've seen a better AI powered photo editing app. That's usable, howbeit with ads. Awesome job guys.",
  },
  {
    platform: "iOS user (3)",
    text: "This app is absolutely incredible. Upload your image, tap one single button, and your photo is enhanced to perfection.",
  },
  {
    platform: "Android user (2)",
    text: "This app does wonders! Ideal for dark photos. Doesn't distort the look of the face. I love it!",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="w-4 h-4 fill-purple-500 text-purple-500" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
            Our users
          </p>
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
            Used by millions
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={r.platform} delay={i * 0.06}>
              <div className="bg-[#111111] rounded-2xl border border-white/10 p-6 shadow-lg h-full flex flex-col">
                <StarRating />
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  {r.platform.replace(" (2)", "").replace(" (3)", "")}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
