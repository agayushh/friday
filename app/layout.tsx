import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushg.live'),
  title: {
    default: "Ayush Goyal - Software Engineer Portfolio",
    template: "%s | Ayush Goyal"
  },
  description:
    "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs. Specializing in Full Stack Development, DevOps, and Cloud Computing.",
  keywords: [
    "Ayush Goyal",
    "Software Engineer",
    "DevOps Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Web Development",
    "UI/UX",
    "Cloud Computing",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Software Architecture",
    "API Development",
    "Responsive Design",
  ],
  authors: [{ name: "Ayush Goyal", url: "https://ayushg.live" }],
  creator: "Ayush Goyal",
  publisher: "Ayush Goyal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ayush Goyal - Software Engineer Portfolio",
    description:
      "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.",
    type: "website",
    locale: "en_US",
    url: "https://ayushg.live",
    siteName: "Ayush Goyal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Goyal - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Goyal - Software Engineer Portfolio",
    description:
      "Software Engineer with a passion for creating high-performance, user-centric software solutions.",
    creator: "@agayushh",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://ayushg.live',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        {/* Prevent flash of light mode - runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // Default to dark mode if localStorage is not available
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} font-sans antialiased min-h-screen w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
