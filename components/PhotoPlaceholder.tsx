type Props = {
  label?: string;
  aspectRatio?: string;
  className?: string;
  rounded?: string;
};

export default function PhotoPlaceholder({
  label,
  aspectRatio = "aspect-square",
  className = "",
  rounded = "rounded-2xl",
}: Props) {
  return (
    <div className={`photo-placeholder ${aspectRatio} ${rounded} ${className}`}>
      <svg
        className="w-8 h-8 opacity-25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1F5A34"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="text-xs font-medium text-green/40 tracking-wide">
        {label ?? "Photo coming soon"}
      </span>
      <span className="text-[10px] text-green/30">Updated July</span>
    </div>
  );
}
