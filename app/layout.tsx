import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumeet Powar — AI/ML | Data Analytics | Python",
  description:
    "Portfolio of Sumeet Powar — AI/ML-focused Computer Science graduate with hands-on experience in machine learning, computer vision, NLP, and data analytics. B.Tech from MIT School of Computing, Pune.",
  keywords: [
    "Sumeet Powar",
    "AI ML portfolio",
    "Data Analyst",
    "Machine Learning Engineer",
    "Python Developer",
    "Generative AI Developer",
    "Data Scientist",
    "Computer Vision",
    "NLP",
    "LangChain",
    "YOLO",
  ],
  authors: [{ name: "Sumeet Powar" }],
  openGraph: {
    title: "Sumeet Powar — AI/ML | Data Analytics | Python",
    description:
      "AI/ML-focused Computer Science graduate with hands-on experience in machine learning, computer vision, NLP, and data analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumeet Powar — AI/ML | Data Analytics | Python",
    description:
      "AI/ML-focused Computer Science graduate with hands-on experience in machine learning, computer vision, NLP, and data analytics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
