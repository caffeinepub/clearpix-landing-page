const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app";
const APP_STORE_URL =
  "https://apps.apple.com/app/clearpix-ai-photo-enhancer/id123456789";

export function DownloadButtons({
  variant = "dark",
}: { variant?: "dark" | "white" }) {
  const base =
    variant === "dark"
      ? "bg-[#1D1D1F] hover:bg-[#2d2d2f] text-white border border-[#1D1D1F]"
      : "bg-white hover:bg-gray-50 text-[#1D1D1F] border border-white/30";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 ${base} px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg`}
        data-ocid="hero.primary_button"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          role="img"
        >
          <title>App Store</title>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        App Store
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 ${base} px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg`}
        data-ocid="hero.secondary_button"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          role="img"
        >
          <title>Google Play</title>
          <path d="M3.18 23.76c.35.19.75.25 1.14.17l12.16-7.02-2.64-2.64-10.66 9.49zm16.19-9.36L5.97 6.67 3.18.24C2.83.43 2.5.77 2.5 1.32v21.36c0 .55.33.89.68 1.08l13.86-8 2.33-1.36zm1.6-4.47l-2.82-1.63-3.02 3.02 3.02 3.02 2.85-1.65c.81-.47.81-1.29 0-1.76h-.03zM4.32.07L16.48 7.09l-2.64 2.64L3.18.24C3.53.16 3.97.19 4.32.07z" />
        </svg>
        Google Play
      </a>
    </div>
  );
}
