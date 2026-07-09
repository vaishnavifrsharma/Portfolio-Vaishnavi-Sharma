import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi Sharma | CSE Student & Creative Technologist",
  description:
    "Portfolio of Vaishnavi Sharma, a Computer Science Engineering student at Delhi Technological University building web apps, ML projects, and creative technology experiments.",
  keywords: [
    "Vaishnavi Sharma",
    "Portfolio",
    "Computer Science",
    "Delhi Technological University",
    "DTU",
    "Frontend Developer",
    "Machine Learning",
    "Creative Technologist",
    "Next.js",
    "TypeScript",
    "Photography",
    "UI/UX",
  ],
  authors: [{ name: "Vaishnavi Sharma" }],
  creator: "Vaishnavi Sharma",
  metadataBase: new URL("https://portfolio-vaishnavi-sharma-virid.vercel.app"),
  openGraph: {
    title: "Vaishnavi Sharma | Portfolio",
    description:
      "CSE student at DTU building web apps, ML projects, and creative technology experiments.",
    url: "https://portfolio-vaishnavi-sharma-virid.vercel.app",
    siteName: "Vaishnavi Sharma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Sharma | Portfolio",
    description:
      "CSE student at DTU building web apps, ML projects, and creative technology experiments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
