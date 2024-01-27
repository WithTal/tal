import { useState } from "react"
import DrawerDialogDemo from "../ResizeDialog";

export default function CtaCard() {
    const [videoUrl, setVideoUrl] = useState("k");


    return (
        <div
            className="relative flex flex-col items-center w-full hover:scale-[1.01] transition-scale duration-300 bg-neutral-950  hover:bg-opacity-100  px-8 border border-neutral-800/90 rounded-3xl py-14"

        >

            <p className="text-3xl font-medium text-neutral-300 mb-2.5 text-center">
                Analyze video's comments
            </p>
            <p className="mb-12 font-medium text-center text-neutral-200">
                Completely free
            </p>
            <input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Youtube video URL"
                type="url"
                className="w-full rounded-lg  bg-neutral-900 focus:border-neutral-700 border-neutral-800 placeholder-neutral-500 disabled:text-neutral-500 text-neutral-100 focus:outline-none border disabled:border-0 px-4 py-3 max-w-sm mb-2 !px-5 !py-2.5"
                name="Youtube video URL"
            />

            <input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                type="text"
                placeholder="Phone"
                className="w-full rounded bg-neutral-50 focus:border-neutral-200 border-neutral-150 placeholder-neutral-400 disabled:text-neutral-400 focus:outline-none border disabled:border-0 px-4 py-1.5 hidden"
                name="phone"
            />
            <pre className="w-full max-w-sm text-right error" />
            <button
                onClick={async () => {
                    console.log("CALLING API")

                    const d = await fetch("/api/uuidify", {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "videoID": videoUrl }) // body data type must match "Content-Type" header
                    }).then((response) => response.json())
                    window.open("/video/" + d['uuid'])
                }
                }
                type="submit"
                className="inline-flex hover:border-cyan-500 items-center justify-center px-4 rounded cursor-pointer w-full max-w-sm py-3 mt-4 mb-2 bg-black border rounded-lg border-neutral-700 text-neutral-100"
            >
                Analyze
            </button>
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