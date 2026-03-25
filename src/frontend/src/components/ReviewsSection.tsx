import { Star } from "lucide-react";
import { FadeUp } from "./FadeUp";

const reviews = [
  {
    id: "r1",
    platform: "Android User",
    text: "Never seen such a high-quality app that is free. I'm totally in love, it is easy to access and fun. I'll definitely recommend ClearPix to everyone!",
  },
  {
    id: "r2",
    platform: "iOS User",
    text: "IT'S ABSOLUTE MAGIC! The way it restores old photos is just mind-blowing. I've been using ClearPix every single day.",
  },
  {
    id: "r3",
    platform: "iOS User",
    text: "I had an old photo of my grandmother when she was about 25 years old, and ClearPix dramatically improved it. Absolutely incredible.",
  },
  {
    id: "r4",
    platform: "Android User",
    text: "Don't think I've seen a better AI powered photo editing app. Awesome job by the ClearPix team — truly impressive results.",
  },
  {
    id: "r5",
    platform: "iOS User",
    text: "Upload your image, tap one single button, and your photo is enhanced to perfection. ClearPix is absolutely incredible.",
  },
  {
    id: "r6",
    platform: "Android User",
    text: "ClearPix does wonders! Ideal for dark and blurry photos. Doesn't distort the look of the face. I love it!",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">
            Our Users
          </p>
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
            Loved by 20,000+ users
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={r.id} delay={i * 0.06}>
              <div className="bg-[#111111] rounded-2xl border border-white/10 p-6 shadow-lg h-full flex flex-col">
                <StarRating />
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  {r.platform}
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
