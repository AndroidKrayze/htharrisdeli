import { site } from "@/lib/site";
import { reviews } from "@/lib/data";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    alternateName: ["H.T. Harris", "HT Harris", "HT Harris Delicatessen"],
    description: site.description,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1600&q=80",
    telephone: "+44-20-7636-4228",
    url: "https://htharris.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    foundingDate: String(site.est.year),
    servesCuisine: "Italian",
    priceRange: "£",
    areaServed: "Fitzrovia",
    hasMap: site.mapsPlace,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.aggregate.google.rating,
      reviewCount: reviews.aggregate.google.count,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
