import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileEnhanceOpen, setMobileEnhanceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-black/95 shadow-[0_1px_12px_rgba(0,0,0,0.6)]"
          : "bg-black/80 backdrop-blur-md"
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/generated/clearpix-icon-transparent.dim_120x120.png"
            alt="ClearPix"
            className="w-8 h-8"
          />
          <span className="font-display font-bold text-white text-lg tracking-tight">
            ClearPix
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                enhanceLinks.some((l) => pathname === l.to)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setDropdownOpen((v) => !v)}
              data-ocid="nav.toggle"
            >
              Enhance
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[#111111] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/10 py-2 z-50"
                >
                  {enhanceLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      onClick={() => setDropdownOpen(false)}
                      data-ocid="nav.link"
                    >
                      {l.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/ai-photos"
            className={`text-sm font-medium transition-colors ${
              pathname === "/ai-photos"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            data-ocid="nav.link"
          >
            AI Photos
          </Link>
          <a
            href="mailto:support@clearpix.app"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            data-ocid="nav.link"
          >
            Support
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF3A5C] hover:bg-[#e02347] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#FF3A5C]/25"
            data-ocid="nav.primary_button"
          >
            Download App
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <button
                type="button"
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-white"
                onClick={() => setMobileEnhanceOpen((v) => !v)}
                data-ocid="nav.toggle"
              >
                Enhance
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileEnhanceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileEnhanceOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-3 space-y-1"
                  >
                    {enhanceLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                        data-ocid="nav.link"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                to="/ai-photos"
                className="block py-2.5 text-sm font-medium text-white"
                data-ocid="nav.link"
              >
                AI Photos
              </Link>
              <a
                href="mailto:support@clearpix.app"
                className="block py-2.5 text-sm font-medium text-white"
                data-ocid="nav.link"
              >
                Support
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.clearpix.photoenhancer.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FF3A5C] text-white text-sm font-semibold px-5 py-3 rounded-full w-full mt-3"
                data-ocid="nav.primary_button"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
