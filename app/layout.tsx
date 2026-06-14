import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Phú Huy | Fullstack Developer Portfolio",
  description:
    "Portfolio của Nguyễn Phú Huy - Fullstack Developer với 1+ năm kinh nghiệm xây dựng và tối ưu các hệ thống quản lý doanh nghiệp. Chuyên sâu về React, Vue.js, Node.js, Java Spring Boot.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Vue.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "Portfolio",
    "Nguyễn Phú Huy",
  ],
  openGraph: {
    title: "Nguyễn Phú Huy | Fullstack Developer",
    description:
      "Fullstack Developer với 1+ năm kinh nghiệm xây dựng và tối ưu hệ thống quản lý doanh nghiệp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#0a0a0f] text-slate-200 antialiased min-h-screen relative`}
      >
        {/* Persistent grid overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-grid"
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}