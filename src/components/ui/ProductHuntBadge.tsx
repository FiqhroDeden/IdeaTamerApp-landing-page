const POST_ID = 1128910;
const BADGE_HREF = `https://www.producthunt.com/products/ideatamer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-ideatamer`;
const SVG_BASE = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${POST_ID}`;

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export function ProductHuntBadge({ className = "", width = 250, height = 54 }: Props) {
  return (
    <a
      href={BADGE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="IdeaTamer on Product Hunt"
      className={`inline-flex ${className}`}
    >
      <picture>
        <source srcSet={`${SVG_BASE}&theme=dark`} media="(prefers-color-scheme: dark)" />
        <img
          alt="IdeaTamer - Stop collecting ideas. Start finishing one. | Product Hunt"
          src={`${SVG_BASE}&theme=light`}
          width={width}
          height={height}
          className="block dark:hidden"
          loading="lazy"
        />
      </picture>
      <img
        alt=""
        src={`${SVG_BASE}&theme=dark`}
        width={width}
        height={height}
        className="hidden dark:block"
        loading="lazy"
        aria-hidden
      />
    </a>
  );
}
