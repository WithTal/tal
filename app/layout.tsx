
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import Head from "next/head";
import FloatingNavBar from "@/components/FloatingNavBar";



import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';



export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        baseTheme: dark
      }
      }>
        <body className="bg-gradient-to-r overscroll-none w-full relative from-black/[.9] via-neutral-950 to-neutral-950 min-h-screen flex flex-col">
          <FloatingNavBar />

            <main className="pt-32 flex flex-1 flex-col items-center ">
              {children}
            </main>

            <Toaster />

        </body>
      </ClerkProvider>

      {/* </ThemeProviders> */}
    </html >
  );
}
export const revalidate = 0;


