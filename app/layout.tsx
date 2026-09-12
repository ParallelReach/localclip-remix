import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalClip Remix — one idea, ten clips",
  description: "one idea → Core-10 short-form packs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
