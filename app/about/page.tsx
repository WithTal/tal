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
        <>
            
            <div className="flex flex-col items-center ">
                <ExplainerSection />
                {/* <PricingSection /> */}
            </div>

        </>
    )
}