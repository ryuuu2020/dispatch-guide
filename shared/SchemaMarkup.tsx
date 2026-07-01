/**
 * Shared Schema.org JSON-LD structured data component.
 * Supports: FAQPage, Article, BreadcrumbList, WebSite
 *
 * Usage in page.tsx:
 *   <SchemaMarkup type="faq" faqs={[{question: "...", answer: "..."}]} />
 *   <SchemaMarkup type="article" headline="..." datePublished="..." dateModified="..." />
 *   <SchemaMarkup type="breadcrumb" items={[{name: "Home", url: "/"}, {name: "Builds", url: "/builds"}]} />
 */

type FAQItem = { question: string; answer: string };
type BreadcrumbItem = { name: string; url: string };

type SchemaProps =
  | {
      type: "faq";
      faqs: FAQItem[];
    }
  | {
      type: "article";
      headline: string;
      datePublished: string;
      dateModified?: string;
      authorName?: string;
      imageUrl?: string;
    }
  | {
      type: "breadcrumb";
      items: BreadcrumbItem[];
    }
  | {
      type: "website";
      siteName: string;
      siteUrl: string;
      description: string;
    };

export default function SchemaMarkup(props: SchemaProps) {
  const schema = buildSchema(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function buildSchema(props: SchemaProps): Record<string, unknown> {
  switch (props.type) {
    case "faq":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: props.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.headline,
        datePublished: props.datePublished,
        ...(props.dateModified && { dateModified: props.dateModified }),
        author: {
          "@type": "Organization",
          name: props.authorName || "GameGuideHub",
        },
        ...(props.imageUrl && { image: props.imageUrl }),
      };

    case "breadcrumb":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      };

    case "website":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: props.siteName,
        url: props.siteUrl,
        description: props.description,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${props.siteUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };

    default:
      return {};
  }
}
