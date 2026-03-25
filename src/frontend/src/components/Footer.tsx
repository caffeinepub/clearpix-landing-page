import { Link } from "@tanstack/react-router";

const LOGO =
  "/assets/uploads/app_logo_foreground-019d2426-c686-71cf-adab-6b85833910d7-1.png";

const enhanceLinks = [
  { label: "Unblur & Sharpener", to: "/unblur-sharpener" },
  { label: "Denoiser", to: "/denoiser" },
  { label: "Old Photos Restorer", to: "/photo-restorer" },
  { label: "Image Enlarger", to: "/image-enlarger" },
  { label: "Color Fixer", to: "/color-fixer" },
  { label: "Face Enhancer", to: "/face-enhancer" },
  { label: "Background Enhancer", to: "/background-enhancer" },
  { label: "Low Quality Enhancer", to: "/low-quality-enhancer" },
  { label: "Video Enhancer", to: "/video-enhancer" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO}
                alt="ClearPix Logo"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="font-display font-bold text-white text-lg">
                ClearPix
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered photo enhancement for everyone. Restore, upscale, and
              beautify your memories in seconds.
            </p>
          </div>

          {/* Enhance */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Enhance</h4>
            <ul className="space-y-3">
              {enhanceLinks.slice(0, 5).map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">More</h4>
            <ul className="space-y-3">
              {enhanceLinks.slice(5).map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-photos"
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  AI Photos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} ClearPix. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF3A5C] hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
