export function WavyUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,3 C20,0 40,6 60,3 C80,0 100,6 100,3"
          stroke="#FF3A5C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
