"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
// import { Bu } from "@/registry/new-york/ui/button"
// import { Input } from "@/registry/new-york/ui/input"
// import { Label } from "@/registry/new-york/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Messages from "./Messages"
import { signInWithGoogle , signInWithTwitter} from "./signin"




interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 "
        action="/auth/sign-in"
        method="post"
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            {/* <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            /> */}

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"

              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
          <Messages />
        </div>
      </form>


      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={() => signInWithGoogle()} variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>

      <Button onClick={() => signInWithTwitter()} variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.twitter className=" dark:fill-white mr-2 h-4 w-4" />
        )}{" "}
        Twitter
      </Button>


    </div>
  )
}