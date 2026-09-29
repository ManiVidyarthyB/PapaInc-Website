import type { Metadata } from "next";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/700.css";
import "@fontsource/mulish/400.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://pap-inc.com"),
  title: {
    default: "Paragon Advisory Partners - Emergency Management",
    template: "%s - Paragon Advisory Partners",
  },
  description:
    "We are a nationwide professional services organization specializing in risk assurance, emergency management, transaction services, and accounting & finance.",
  openGraph: { siteName: "Paragon Advisory Partners", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
         <ChatWidget />
      </body>
    </html>
  );
}
