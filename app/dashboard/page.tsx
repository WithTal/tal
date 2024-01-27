'use client'
import FloatingNavBar from "@/components/FloatingNavBar"
import DrawerDialogDemo from "@/components/ResizeDialog"
import CtaCard from "@/components/cards/cta"
import SentimentCard from "./SentimentCard"


export default function DashboardPage() {


    return (
        <div className="w-[95%] max-w-6xl mx-auto">
            <header className="relative overflow-hidden  ">
                <div className="container pb-12 lg:pb-36">
                    <div className="flex items-center justify-between w-full">
                        <div className="z-10 lg:mr-16 max-w-3xl">
                            <div className="">
                                <p className=" md:visible invisible inline-block py-3 mb-6 text-sm border rounded-full text-neutral-200 border-neutral-100 px-7">
                                    EAXY
                                </p>
                                <h1 className="mt-4 md:mt-0 mb-8 text-5xl sm:text-6xl text-neutral-300">
                                    Your Dashboard{/* */}{" "}
                                    <br />
                                </h1>

                                <a
                                    className="md:block hidden inline-flex items-center justify-center px-4 py-2 rounded cursor-pointer text-white bg-accent-500 hover:bg-accent-550 disabled:bg-accent-400 disabled:hover:bg-accent-400 disabled:text-accent-100 mb-6 lg:hidden"
                                    href="/auth/sign-up"
                                >
                                    Try Eaxy for Free
                                </a>

                            </div>
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                                    <div>
                                        <div className="py-6 px-7 group rounded-xl "
                                            style={{
                                                background:
                                                    "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                                            }}>
                                            <div className="flex justify-between text-neutral-400">
                                                <svg width="352" height="512"
                                                    className="w-6 h-6 text-neutral-400"
                                                    viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16" />
                                                </svg>
                                                <div className="flex items-center justify-center rounded-full w-7 h-7  group-hover:bg-neutral-500 transition-background duration-300 bg-neutral-600">
                                                    <DrawerDialogDemo>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                            className="w-4 h-4  text-neutral-300"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </DrawerDialogDemo>
                                                </div>
                                            </div>
                                            
                                            <p className="text-sm mt-9 md:mt-12 text-neutral-200">
                                                1 click to get video ideas from your audience
                                            </p>
                                            

                                        </div>
                                    </div>
                                    {/* <div className="bg-neutral-900 p-6 max-w-sm mx-auto rounded-lg shadow-lg relative before:content-[''] before:absolute before:-top-2 before:-left-2 before:bg-neutral-950 before:rounded-lg before:w-full before:h-full before:shadow-lg">
                                        <div className="flex justify-between text-neutral-400">
                                            <svg width="352" height="512"
                                                className="w-6 h-6 text-neutral-400"
                                                viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16" />
                                            </svg>
                                            <div className="flex items-center justify-center rounded-full w-7 h-7  group-hover:bg-neutral-500 transition-background duration-300 bg-neutral-600">
                                                <DrawerDialogDemo>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        className="w-4 h-4  text-neutral-300"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </DrawerDialogDemo>
                                            </div>
                                        </div>
                                        
                                        <p className="text-sm mt-9 md:mt-12 text-neutral-200">
                                            1 click to get video ideas from your audience
                                        </p>
                                    </div> */}



                                    <div>
                                        <div className="py-6 px-7 group rounded-xl"
                                            style={{
                                                background:
                                                    "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                                            }}>
                                            <div className="flex justify-between text-neutral-400">


                                                <svg className="w-8 h-8" width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9" />
                                                </svg>
                                                <div className="flex items-center justify-center rounded-full w-7 h-7 group-hover:bg-neutral-500 transition-background duration-300 bg-neutral-600">
                                                    <DrawerDialogDemo>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                            className="w-4 h-4 text-neutral-300"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </DrawerDialogDemo>
                                                </div>

                                            </div>
                                            {/* <DrawerDialogDemo> */}
                                            <p className="text-sm mt-9 md:mt-12 text-neutral-200">
                                                1 click to generate vector embeddings from unstructured
                                                data
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="cursor-pointer hidden pt-5 pb-8 text-neutral-200 px-7 rounded-xl sm:block"
                                    style={{
                                        background:
                                            "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                                    }}
                                >
                                    <DrawerDialogDemo>

                                        <svg className="w-6 h-6 text-neutral-400" width="512" height="512" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M992.5 992.5q-31.5 31.5-76 31.5T841 993L608 760q-38-38-30-91L389 480q-76 61-165 96Q77 500 0 352q48-120 140.5-212T353 0q147 77 224 224q-36 90-97 165l189 189q53-8 91 30l233 233q31 31 31 75.5t-31.5 76" />
                                        </svg>
                                    </DrawerDialogDemo>


                                    <p className="text-sm mt-6 mb-2.5">
                                        With Eaxy, I can get constructive feedback from my community, without having to read through hate comments.

                                    </p>
                                    <p className="text-xs">2+ year tenure Youtuber</p>

                                </div>
                            </div>
                        </div>
                        <div
                            className="relative hidden w-full max-w-xl lg:block"
                        >
                            <SentimentCard />
                        </div>
                    </div>
                </div >
            </header >


            <section className="z-100 overflow-hidden bg-gradient-to-r  text-neutral-200 border-neutral-800 shadow-xl shadow-neutral-600 border from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 rounded-2xl bg-center bg-cover bg-footer-sm sm:bg-footer">
                <div className="container pb-32 mx-auto text-center pt-36">
                    <h2 className="mb-6 text-4xl sm:text-5xl">Get started</h2>
                    <p className="text-base 2xl:text-lg">
                        Ready to understand your audience?
                    </p>
                    <p className="text-base 2xl:text-lg mb-7">
                        Check our tech out! (pls)
                    </p>
                    <a
                        className="inline-flex  border border-stone-700 hover:bg-stone-800 hover:border-cyan-500 bg-stone-900 items-center justify-center px-4 py-2 rounded cursor-pointer text-white  disabled:bg-accent-400 disabled:hover:bg-accent-400 disabled:text-accent-100 !px-16 !py-3 mx-auto rounded-xl max-w-sm"
                        href="/auth/sign-up"
                    >
                        Try it (we're free)
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="ml-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                <footer className="flex flex-col items-center justify-center pb-12">
                    <div className="flex items-center justify-center mb-5 text-base gap-x-8 xs:text-lg">

                        <a href="/about">
                            <p className="hover:text-neutral-300">About</p>
                        </a>
                        <a href="/">
                            <p className="hover:text-neutral-300">Home</p>
                        </a>
                    </div>

                    <div className="flex justify-center mt-4 gap-x-4">
                        <a href="/legal/privacy">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="/legal/terms">
                            <p>Terms &amp; Conditions</p>
                        </a>
                    </div>
                    <p className="mt-2">© 2023 Eaxy Systems, Inc.</p>
                </footer>
            </section>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={1014}
                height={1014}
                fill="none"
                className="w-full absolute z-[-100] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
                <rect
                    width="982.559"
                    height="982.559"
                    x="15.721"
                    y="17.452"
                    stroke="#ECECEC"
                    strokeWidth={2}
                    opacity="0.2"
                    rx="491.279"
                />
                <rect
                    width="823.228"
                    height="823.228"
                    x="95.386"
                    y="97.118"
                    stroke="#ECECEC"
                    strokeWidth={2}
                    opacity="0.2"
                    rx="411.614"
                />
                <circle cx={507} cy={507} r={507} fill="url(#circle-bg_svg__a)" />
                <circle cx="116.9" cy="377.544" r="7.793" fill="#44403C" />
                <circle cx="765.479" cy="188.772" r="7.793" fill="#44403C" />
                <circle cx="671.093" cy="884.977" r="7.793" fill="#44403C" />
                <defs>
                    <radialGradient
                        id="circle-bg_svg__a"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientTransform="rotate(89.968 -.141 507.141) scale(521.204)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0A1010" />
                        <stop offset={1} stopColor="#131415" stopOpacity="0.56" />
                    </radialGradient>
                </defs>
            </svg>
        </div >



    )
}