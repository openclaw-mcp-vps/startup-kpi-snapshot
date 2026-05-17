import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup KPI Snapshot — Daily Metrics Dashboard in One Screenshot",
  description: "Connect your SaaS tools and get a single dashboard screenshot with key metrics for daily standup sharing. Built for startup founders and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ebc98e1c-d80c-48da-bbb7-f3bd4f332318"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
