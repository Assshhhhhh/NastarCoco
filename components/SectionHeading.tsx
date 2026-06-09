type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  warm?: boolean;
  centered?: boolean;
  serif?: boolean;
  className?: string;
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  warm = false,
  centered = false,
  serif = false,
  className = "",
}: Props) {
  const textColor = light ? "text-ivory" : "text-espresso";
  const subtitleColor = light ? "text-ivory/60" : warm ? "text-espresso/60" : "text-espresso/55";
  const badgeBg = light
    ? "bg-ivory/10 text-ivory/80 border border-ivory/20"
    : "bg-green/10 text-green border border-green/20";
  const align = centered ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${align} ${className}`}>
      {badge && (
        <span className={`badge ${badgeBg}`}>{badge}</span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${textColor} ${
          serif ? "font-display" : "font-sans"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      <div className="divider-gold mt-1" />
    </div>
  );
}
