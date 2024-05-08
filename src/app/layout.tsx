import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Provider } from "jotai";
import { Toaster } from "sonner";

import { Roboto_Mono } from "next/font/google";

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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-24">
      <body
        className={cn(
          "dark flex min-h-screen flex-col bg-background font-mono antialiased",
          robotoMono.variable,
        )}
      >
        <Provider>
          <TooltipProvider>
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
      </body>
    </html>
  );
}
