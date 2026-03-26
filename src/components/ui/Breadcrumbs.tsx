import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

interface BreadcrumbsProps {
  crumbs: { name: string; href: string }[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const allCrumbs = [{ name: "Home", href: "/" }, ...crumbs];
  const schemaItems = allCrumbs.map((c) => ({
    name: c.name,
    url: `${SITE_URL}${c.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-sm text-text-light">
          {allCrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-text-light/50">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {i === allCrumbs.length - 1 ? (
                <span className="text-text-mid font-medium">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-hero-blue transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
