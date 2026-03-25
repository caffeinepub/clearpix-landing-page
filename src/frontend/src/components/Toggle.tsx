export function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-[#FF3A5C]" : "bg-white/15"
      }`}
      aria-checked={enabled}
      role="switch"
    >
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
          enabled ? "right-0.5" : "left-0.5"
        }`}
      />
    </button>
  );
}
