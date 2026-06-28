import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://chat.blackandi.com"),
  title: {
    default: "BLACK& Intelligence",
    template: "%s | BLACK& Intelligence",
  },
  description:
    "The official AI intelligence assistant of BLACK&. Explore enterprise AI, strategic intelligence, partnerships, investments and technology opportunities.",
  keywords: [
    "BLACK&",
    "BLACK and I",
    "BLACK& Intelligence",
    "Artificial Intelligence",
    "Enterprise AI",
    "AI Platform",
    "Business Intelligence",
    "Strategic Intelligence",
    "CAESAREA Technologies",
    "European Energy Intelligence",
    "EEIL",
    "MURABA by BLACK&",
    "AI Company Builder",
    "Enterprise Software",
    "AI Consulting",
    "Investment Intelligence",
  ],
  authors: [{ name: "BLACK&" }],
  creator: "BLACK&",
  publisher: "BLACK&",
  applicationName: "BLACK& Intelligence",
  alternates: {
    canonical: "https://chat.blackandi.com",
  },
  openGraph: {
    title: "BLACK& Intelligence",
    description:
      "Talk with the official AI intelligence assistant of BLACK&.",
    url: "https://chat.blackandi.com",
    siteName: "BLACK& Intelligence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACK& Intelligence",
    description:
      "Talk with the official AI intelligence assistant of BLACK&.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const LIGHT_THEME_COLOR = "#ffffff";
const DARK_THEME_COLOR = "#000000";

const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geist.variable} ${geistMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: "Required"
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <SessionProvider
            basePath={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api/auth`}
          >
            <TooltipProvider>{children}</TooltipProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
