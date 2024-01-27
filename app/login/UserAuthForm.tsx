"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    login: boolean
}

export function UserAuthForm({ className, login, ...props }: UserAuthFormProps) {
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
            <form onSubmit={onSubmit}>
                <div className=" grid gap-2">
                    <div className="grid gap-1">
                        <Label className="text-xltext-neutral-500 sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input className="text-base text-neutral-200 placeholder:text-neutral-500 border-[.1rem]  border-neutral-800 rounded-sm"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button className=" bg-neutral-900 border-[.1rem]  border-neutral-800" disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {!login ? "Register " : "Sign In "} with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-neutral-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-neutral-950 px-2 text-neutral-500">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button className="rounded-sm border-[.1rem] bg-neutral-900 border-neutral-800 text-neutral-200" variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
            </Button>
        </div>
    )
}