import { DownloadButtons } from "./DownloadButtons";
import { FadeUp } from "./FadeUp";

export function DownloadCTA() {
  return (
    <section className="py-24 px-4 bg-[#FF3A5C]">
      <FadeUp>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-4">
            Start enhancing your photos today
          </h2>
          <p className="text-red-100 text-lg mb-10 leading-relaxed">
            Free to download. AI results in seconds.
          </p>
          <div className="flex justify-center">
            <DownloadButtons variant="white" />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
