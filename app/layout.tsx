import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import Head from "next/head";
import FloatingNavBar from "@/components/FloatingNavBar";
import { ThemeProvider } from "@/components/theme-provider";

// export const metadata = {
//   title: "Eaxy Links",
//   description: "Beautiful Social Link Previews",
//   twitter: {
//     card: "summary_large_image",
//     site: "@thepablohansen",
//     title: "Eaxy Links",
//     description: "Beautiful Social Link Previews",
//     image: "https://scrollprize.org/img/data/07000.jpg"
//   }

// };
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';



export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        baseTheme: dark
      }
      }>
        <body className="bg-gradient-to-r overscroll-none w-full relative from-neutral-950 via-neutral-900 to-neutral-950 min-h-screen flex flex-col">
          <FloatingNavBar />

          <ThemeProvider
            attribute="class"
            // defaultTheme="system"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <main className="pt-32 flex flex-1 flex-col items-center ">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </ClerkProvider>

      {/* </ThemeProviders> */}
    </html >
  );
}
export const revalidate = 0;
