import { useState } from "react"
import DrawerDialogDemo from '@/components/ResizeDialog';


export default function SentimentCard() {
    const [videoUrl, setVideoUrl] = useState("k");


    return (
        <div
            className="relative flex flex-col items-center w-full hover:scale-[1.01] transition-scale duration-300 bg-neutral-950  hover:bg-opacity-100  px-8 border border-neutral-800/90 rounded-3xl py-14"

        >

            <p className="text-3xl font-medium text-neutral-300 mb-2.5 text-center">
                Your videos' sentiments
            </p>
            <p className="mb-12 font-medium text-center text-neutral-200">
                Completely free
            </p>


            
            <DrawerDialogDemo >
                <button
                    className="inline-flex items-center justify-center px-4 py-2 rounded cursor-pointer max-w-sm mt-2 hover:text-neutral-200 dark:hover:text-neutral-200 text-neutral-400 dark:text-neutral-400"
                    // href="/auth/sign-in"
                >
                    Want more cool tools?


                </button>
            </DrawerDialogDemo>
            {/* <a
                className="inline-flex items-center justify-center px-4 py-2 rounded cursor-pointer max-w-sm mt-2 hover:text-neutral-200 text-neutral-400"
                href="/auth/sign-in"
            >
                

              
            </a> */}
        </div>
    )
}