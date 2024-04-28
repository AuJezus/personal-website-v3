import LatestTrack from "@/components/latest-track";
import Footer from "@/components/ui/footer";
import Nav from "@/components/ui/nav";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { Roboto_Mono } from "next/font/google";
import { BiCircle } from "react-icons/bi";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Aujezus",
  description: "Portfolio website of Augustas Vaivada (Aujezus)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background dark min-h-screen font-mono antialiased",
          robotoMono.variable,
        )}
      >
        <Nav>
          <p className="flex items-center gap-2 text-sm">
            <BiCircle className="text-green-500" /> ONLINE
          </p>
          <LatestTrack />
        </Nav>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
