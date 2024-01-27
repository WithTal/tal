import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "./UserAuthForm"
import { Card } from "@/components/ui/card"

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// }
import { SignUp } from "@clerk/nextjs";




export default function Login({ login }: { login: boolean }) {
    return (
        <>
            <div className="mt-12 w-full flex justify-center  ">
                z
                <SignUp />
z

                <Card className="max-w-[90%] p-8 bg-neutral-950 border-neutral-900">
                    <Link
                        href="/examples/authentication"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "absolute right-4 top-4 md:right-8 md:top-8"
                        )}
                    >
                        {login ? "Login" : "Register"}
                    </Link>

                    <div className="lg:p-8">
                        <div className="text-neutral-500 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[375px]">
                            <div className="flex flex-col space-y-2 text-center">
                                <h1 className="text-neutral-200 text-3xl font-semibold tracking-tight">
                                    {login ? "Log in" : "Create an account"}
                                </h1>
                                <p className=" text-neutral-400">
                                    Enter your email below to    {login ? "log in" : "create your account"}
                                </p>
                            </div>
                            <UserAuthForm login={login} />
                            <p className="px-8 text-center text-sm ">
                                By clicking continue, you agree to our{" "}
                                <Link
                                    href="/terms"
                                    className="underline underline-offset-4 hover:text-neutral-300"
                                >
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy"
                                    className="underline underline-offset-4 hover:text-neutral-300"
                                >
                                    Privacy Policy
                                </Link>
                                .{" "}
                                {login ? <Link
                                    href="/register"
                                    className="underline underline-offset-4 hover:text-neutral-300"
                                >
                                    Register Instead.
                                </Link> :
                                    <Link
                                        href="/login"
                                        className="underline underline-offset-4 hover:text-neutral-300"
                                    >
                                        Login Instead.
                                    </Link>
                                }
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
