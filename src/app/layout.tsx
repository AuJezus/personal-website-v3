import { type Viewport } from "next";

import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Provider } from "jotai";
import { Toaster } from "sonner";

import { Roboto_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { NavWrapper } from "@/components/nav/nav";
import MyStatus from "@/components/nav/my-status";
import LatestTrack from "@/components/nav/latest-track";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: siteConfig.author,
  description: "Portfolio website of Augustas Vaivada (Aujezus)",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-24">
      <body
        className={cn(
          "dark flex min-h-screen flex-col bg-background font-mono text-foreground antialiased",
          robotoMono.variable,
        )}
      >
        <Provider>
          <TooltipProvider>
            <NavWrapper>
              <MyStatus />
              <LatestTrack className="max-w-64" />
            </NavWrapper>

            {children}

            <Footer />
            {modal}
            <div id="modal-root" />
          </TooltipProvider>
        </Provider>
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "bg-card flex items-center gap-2 border-2 border-border w-full p-4 rounded-md",
              error: "text-destructive",
            },
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
