import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "gold" | "secondary" | "ghost-light";

type BaseProps = {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type AsLink = BaseProps & { href: string; target?: string; rel?: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps | "href"
  >;

type AsButton = BaseProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

type Props = AsLink | AsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-green-dark text-ivory border-green-dark hover:bg-green hover:border-green",
  gold:
    "bg-gold text-green-dark border-gold hover:bg-gold-soft hover:border-gold-soft",
  secondary:
    "bg-transparent text-green-dark border-green hover:bg-green hover:text-ivory",
  "ghost-light":
    "bg-transparent text-ivory border-ivory/50 hover:border-ivory hover:bg-ivory/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export default function CTAButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full border-2 transition-all duration-200 cursor-pointer whitespace-nowrap";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, target, rel, ...anchorRest } = rest as AsLink;
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");
    return (
      <Link
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
        {...(anchorRest as object)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
