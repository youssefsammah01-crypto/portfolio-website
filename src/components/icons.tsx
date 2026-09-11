import type { SVGProps } from "react";
import type { SocialIcon } from "@/content/profile";

type IconProps = SVGProps<SVGSVGElement>;

/** Brand marks are filled paths; UI icons are 1.6px strokes on a 24px grid. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.16 8.98 7.54 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.01-2.05-2.78.51-3.5-.68-3.72-1.3-.12-.31-.66-1.28-1.13-1.54-.38-.21-.93-.72-.01-.73.86-.01 1.48.79 1.68 1.12.98 1.65 2.55 1.19 3.18.9.1-.71.38-1.19.7-1.46-2.46-.28-5.04-1.23-5.04-5.47 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.41.11-2.93 0 0 .92-.29 3.03 1.14a10.2 10.2 0 0 1 2.76-.37c.94 0 1.87.13 2.75.37 2.11-1.44 3.03-1.14 3.03-1.14.6 1.52.22 2.65.11 2.93.7.78 1.13 1.76 1.13 2.98 0 4.26-2.59 5.19-5.05 5.47.4.35.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.75.53A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.13 5.42a1.6 1.6 0 0 0 1.74 0L21 7" />
    </svg>
  );
}

/** Flipped in RTL so it always points "outward". */
export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}

const socialIcons: Record<SocialIcon, (props: IconProps) => React.ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

/** Accessible names for the social links — same in both locales. */
export const socialLabels: Record<SocialIcon, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  mail: "Email",
};

export function SocialIconFor({ icon, ...props }: IconProps & { icon: SocialIcon }) {
  const Component = socialIcons[icon];
  return <Component {...props} />;
}
