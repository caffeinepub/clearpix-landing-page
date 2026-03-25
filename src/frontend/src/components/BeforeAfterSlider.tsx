import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  gradientBefore?: string;
  gradientAfter?: string;
  imageBefore?: string;
  imageAfter?: string;
  label?: string;
}

export function BeforeAfterSlider({
  gradientBefore,
  gradientAfter,
  imageBefore,
  imageAfter,
  label = "",
}: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
    );
    setPos(pct);
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragging.current = false;
    };
    const onMove = (e: MouseEvent) => {
      if (dragging.current) move(e.clientX);
    };
    const onTouch = (e: TouchEvent) => {
      if (dragging.current) move(e.touches[0].clientX);
    };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [move]);

  const useImages = !!(imageBefore && imageAfter);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        move(e.touches[0].clientX);
      }}
      aria-label={`Before and after comparison${label ? ` for ${label}` : ""}`}
    >
      {/* AFTER */}
      {useImages ? (
        <img
          src={imageAfter}
          alt="After enhancement"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: gradientAfter }}
        />
      )}

      {/* BEFORE clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {useImages ? (
          <img
            src={imageBefore}
            alt="Before enhancement"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: gradientBefore }}
          />
        )}
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${pos}%` }}
      />
      {/* Handle */}
      <div
        className="slider-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center z-20"
        style={{ left: `${pos}%` }}
      >
        <ChevronLeft className="w-3 h-3 text-gray-600" />
        <ChevronRight className="w-3 h-3 text-gray-600" />
      </div>
      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 text-xs font-bold text-white bg-[#FF3A5C]/90 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
        AFTER
      </span>
    </div>
  );
}
