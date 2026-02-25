 
import type { Metadata, Viewport } from "next";
import "../styles/index.scss";

const siteName = "Hybrid One Digital";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Hybrid One Digital is a digital agency delivering Social Media Marketing, PPC, SEO, Web Development, Design and Video services to grow your business.",
  keywords: [
    "Hybrid One Digital",
    "Digital Agency",
    "Social Media Marketing",
    "PPC",
    "SEO",
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Marketing Agency",
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description:
      "Hybrid One Digital is a digital agency delivering Social Media Marketing, PPC, SEO, Web Development, Design and Video services to grow your business.",
    siteName,
    images: [
      {
        url: "/assets/img/dm_banner.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Hybrid One Digital is a digital agency delivering Social Media Marketing, PPC, SEO, Web Development, Design and Video services to grow your business.",
    images: ["/assets/img/dm_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/assets/img/favicon.svg",
    apple: "/assets/img/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );}
