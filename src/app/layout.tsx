import LatestTrack from "@/components/latest-track";
import MyStatus from "@/components/my-status";
import Footer from "@/components/ui/footer";
import Nav from "@/components/ui/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Provider } from "jotai";

import { Roboto_Mono } from "next/font/google";
import { Toaster } from "sonner";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Aujezus",
  description: "Portfolio website of Augustas Vaivada (Aujezus)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const revalidate = 30;

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
        <Provider>
          <TooltipProvider>
            <Nav>
              <MyStatus />
              <LatestTrack />
            </Nav>

            <main>{children}</main>

            <Footer />
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
      </body>
    </html>
  );
}
