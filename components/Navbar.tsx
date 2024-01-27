import { AvatarIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./theme-switch";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: credits,
  } = await supabase.from("credits").select("*").eq("user_id", user?.id ?? '').single()

  return (
    <>

      <div className="fixed z-[1000]  bg-gradient-to-b  from-white/[.99] to-white/[.95] dark:from-black/[.99] dark:to-black/[.95] flex w-full px-4 lg:px-40 py-4 items-center border-b  dark:border-neutral-800 text-center gap-8 justify-between">
        <div className="flex gap-2 h-full">
          <Link href="/">
            <img src="/eaxylogo.png" className="border-2 border-neutral-800 dark:border-none rounded-2xl h-12 w-12" />
            {/* <h2 className="font-bold">XLink</h2> */}
          </Link>
        </div>
        {user && (
          <div className="hidden lg:flex flex-row gap-2">
            <Link href="/overview">
              <Button variant={"ghost"}>Home</Button>
            </Link>
            {stripeIsConfigured && (
              <Link href="/get-credits">
                <Button variant={"ghost"}>Get Credits</Button>
              </Link>
            )}
          </div>
        )}
        <div className="flex gap-4 lg:ml-auto">
          <ThemeSwitch />

          {/* <Button variant={"ghost"}></Button> */}
          {/* </Link> */}
          {!user && (
            <Link href="/login">
              <Button variant={"ghost"}>Login / Signup</Button>
            </Link>
          )}
          {user && (
            <div className="flex flex-row gap-4 text-center align-middle justify-center">
              {stripeIsConfigured && (
                <ClientSideCredits creditsRow={credits ? credits : null} />
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <AvatarIcon height={24} width={24} className="text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <form action="/auth/sign-out" method="post">
                    <Button
                      type="submit"
                      className="w-full text-left"
                      variant={"ghost"}
                    >
                      Log out
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
      {/* <div className="bg-black w-full h-32">d

      </div> */}
    </>
  );
}
