
// "use client"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero from "/public/hero.png";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import { Input } from "@/components/ui/input";
import HomePage from "@/components/homepage";
import Head from "next/head";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
        <meta name="twitter:card" content="summary_large_image" /> {/* or "summary" */}
        <meta name="twitter:site" content="@thepablohansen" />
        <meta name="twitter:title" content={"TITLE"} />
        <meta name="twitter:description" content={"DESCRIPTION"} />
        <meta name="twitter:image" content="https://growthinreverse.com/wp-content/uploads/lenny-featured.png" /> {/* Make sure this is an absolute URL */}

        <meta property="og:image" content="https://growthinreverse.com/wp-content/uploads/lenny-featured.png" />
        <meta property="og:image:secure_url" content="https://growthinreverse.com/wp-content/uploads/lenny-featured.png" />

      </Head>
      <HomePage />

    </div>

  );
}
