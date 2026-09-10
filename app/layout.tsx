import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { ogSandwich } from "@/lib/images";
import { JsonLd } from "@/components/JsonLd";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title =
  "H.T. Harris | Italian deli Fitzrovia · sandwiches on Great Titchfield Street";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL("https://htharris.co.uk"),
  title: {
    default: title,
    template: "%s · H.T. Harris",
  },
  description,
  keywords: [
    "Italian deli Fitzrovia",
    "sandwich Great Titchfield Street",
    "H.T. Harris",
    "HT Harris Delicatessen",
    "ciabatta near BBC",
    "best sandwich Fitzrovia",
    "Italian sandwiches Oxford Circus",
    "Goodge Street deli",
    "family Italian delicatessen London",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://htharris.co.uk",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: ogSandwich,
        width: 1200,
        height: 800,
        alt: "Italian sandwich — appetising still for H.T. Harris, Fitzrovia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogSandwich],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-linen text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
