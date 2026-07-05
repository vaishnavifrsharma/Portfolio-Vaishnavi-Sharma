import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi Sharma — Creative Technologist & Engineer",
  description:
    "Portfolio of Vaishnavi Sharma — Computer Science Engineer, Creative Developer, Problem Solver, and Photographer. Explore interactive projects, photography, and creative experiments.",
  keywords: [
    "Vaishnavi Sharma",
    "portfolio",
    "creative developer",
    "photographer",
    "computer science",
    "DTU",
    "web development",
    "UI/UX",
    "creative coding",
  ],
  authors: [{ name: "Vaishnavi Sharma" }],
  openGraph: {
    title: "Vaishnavi Sharma — Creative Technologist & Engineer",
    description:
      "Interactive portfolio blending engineering with visual storytelling.",
    type: "website",
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
        {/* Noise overlay */}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
