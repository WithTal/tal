"use client"

import hero from "/public/hero.png";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import Link from "next/link";
import FunctionalitySection from "./Functionality";
import ThemeSwitch from "./theme-switch";
import { useState } from "react";
export const dynamic = "force-dynamic";

export default function HomePage() {
    const RightIcon = () => {
        return (
            <svg className="my-auto inline-block h-4 w-4" width="512" height="512" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
            </svg>
        )
    }

    const [data, setData] = useState("")
    const [selected, setSelected] = useState(false)



    function updateInputValueById(inputId: string, newValue: string): void {
        const inputElement = document.getElementById(inputId) as HTMLInputElement;

        if (inputElement) {
            inputElement.value = newValue;
        } else {
            console.error(`Element with id "${inputId}" not found!`);
        }
    }

    function getImageDimensions(url: string): Promise<{ width: number, height: number }> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.onerror = (error) => {
                reject(error);
            };
        });
    }

    const [dimensions, setDimensions] = useState<{ width: number, height: number } | null>(null);


    const getCard = async () => {
        setLoading(true)
        const inputElement = document.getElementById("url") as HTMLInputElement;

        if (inputElement) {
            const inputValue: string = inputElement.value;
            const data = await fetch("/api/card", {
                "method": "POST",
                "body": JSON.stringify({ url: inputValue })
            })
                .then((res) => res.json())
                .then((res) => res['data'])
            console.log(data)
            const dims = await getImageDimensions(data.image)
            // .then((res) => res.json())
            // console.log(k)

            setDimensions(dims)
            setData(data)


            setSelected(true)
            console.log(data); // Outputs: "Hello, TypeScript!"
        }

    }
    const [loading, setLoading] = useState(false)




    return (
        <>
            <div className="py-4 flex pt-8  flex-col items-center">
                <div className="flex flex-col lg:flex-row items-center  gap-8 p-8 max-w-6xl w-full">
                    <div className="mx-auto flex flex-col space-y-4 w-full">
                        <h1 className="w-full text-5xl text-center font-bold">
                            Make your Twitter Links engaging.
                        </h1>
                        <h2 className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
                            Twitter redesign have you down? Update your tweets to a modern UI without having to re-build your Twitter cards!
                        </h2>


                    </div>

                </div>
                <div className="flex flex-col lg:flex-row items-center  gap-8 p-8 max-w-6xl w-full">
                    <div className="mx-auto flex flex-col space-y-4 w-3/4">
                        <div className="flex flex-col space-y-2">
                            <div className="flex w-full items-center space-x-2">
                                <Input id="url" type="URL" className="py-6" placeholder="Paste a link to your url..." />
                            </div>
                            <motion.div className="flex w-full  items-center space-x-2">

                                <Button onClick={() => getCard()} className="py-6 w-full " type="submit">New Design</Button>

                            </motion.div>
                            <div className="w-full   flex text-sm gap-x-2 text-neutral-500 ">
                                <span className="my-auto ">Sample URL</span>
                                <br className="md:hidden block" />
                                <RightIcon />
                                <button onClick={() => updateInputValueById("url", "https://growthinreverse.com/lenny/")} className="bg-neutral-100 dark:text-neutral-300  hover:bg-neutral-200 dark:bg-neutral-800  dark:hover:bg-neutral-700 p-2 rounded-md">
                                    <span className="hidden md:block">https://growthinreverse.com/lenny/</span>
                                    <span className="md:hidden block">Lenny</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FunctionalitySection loading={loading} data={data} selected={selected} dimensions={dimensions} />
            <div className="flex flex-col items-center pt-10">

                <div className="w-full flex justify-center max-w-6xl">



                </div>
                <ExplainerSection />
                {/* <PricingSection /> */}
            </div>

        </>
    );
}
