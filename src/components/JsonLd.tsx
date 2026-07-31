import {
  FAQ_ITEMS,
  SERVICE_TYPES,
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
} from "@/lib/seo";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: "support@trutalktherapy.com",
    description: DEFAULT_DESCRIPTION,
    image: `${SITE_URL}/banner.png`,
    areaServed: [
      {
        "@type": "City",
        name: "Toronto",
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area",
      },
      {
        "@type": "State",
        name: "Ontario",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    serviceType: [...SERVICE_TYPES],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ABA therapy and family support services",
      itemListElement: SERVICE_TYPES.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Center-based therapy",
        serviceType: "Center-Based",
      },
      {
        "@type": "ServiceChannel",
        name: "In-home therapy",
        serviceType: "In-Home",
      },
      {
        "@type": "ServiceChannel",
        name: "Telehealth",
        serviceType: "Telehealth",
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
