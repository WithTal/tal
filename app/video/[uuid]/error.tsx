
"use client";
import FloatingNavBar from "@/components/FloatingNavBar"
import { AreaChart, Card, Title } from "@tremor/react";
import VideoIdeasSlider from "@/app/section/ideas/VideoSlider";

// const chartdata = [
//     {
//         sentiment: "Extremely Negative",
//         "Average Video": 200,
//         "The Pragmatic Engineer": 2338,
//     },
//     {
//         sentiment: "Negative",
//         "Average Video": 400,
//         "The Pragmatic Engineer": 2103,
//     },
//     {
//         sentiment: "Neutral",
//         "Average Video": 1000,
//                 "The Pragmatic Engineer": 2194,
//     },
//     {
//         sentiment: "Positive",
//         "Average Video": 200,
//         "The Pragmatic Engineer": 2108,
//     },
//     {
//         sentiment: "Extremely Positive",
//         "Average Video": 1000,
//         "The Pragmatic Engineer": 1812,
//     },
//     {
//         sentiment: "Astounding",
//         "Average Video": 20,
//         "The Pragmatic Engineer": 1726,
//     },
// ];
// const chartdata = [{'sentiment': 'Extremely Negative', 'Average Video': 0, 'The Pragmatic Engineer': 2338}, {'sentiment': 'Negative', 'Average Video': 0, 'The Pragmatic Engineer': 2103}, {'sentiment': 'Neutral', 'Average Video': 0, 'The Pragmatic Engineer': 2194}, {'sentiment': 'Positive', 'Average Video': 0, 'The Pragmatic Engineer': 2108}, {'sentiment': 'Extremely Positive', 'Average Video': 0, 'The Pragmatic Engineer': 1812}, {'sentiment': 'Astounding', 'Average Video': 0, 'The Pragmatic Engineer': 1726}]

const chartdata = [{ 'sentiment': 'Extremely Negative', 'Average Video': 0, 'The Pragmatic Engineer': 0.0 }, { 'sentiment': 'Negative', 'Average Video': 0, 'The Pragmatic Engineer': 0.0 }, { 'sentiment': 'Neutral', 'Average Video': 0, 'The Pragmatic Engineer': 1.0 }, { 'sentiment': 'Positive', 'Average Video': 0, 'The Pragmatic Engineer': 86.0 }, { 'sentiment': 'Extremely Positive', 'Average Video': 0, 'The Pragmatic Engineer': 10.0 }, { 'sentiment': 'Astounding', 'Average Video': 0, 'The Pragmatic Engineer': 3.0 }]



export default function ErrorPage() {

    const valueFormatter = function (number: number) {
        return (number).toString() + " %";
    };
    return (
        <div className="w-[95%] max-w-6xl mx-auto">
            <header className="relative overflow-hidden  ">
                {/* <div className="flex items-center container lg:hidden pt-6 xs:pt-9 sm:pt-12 text-neutral-200">
                    <a href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="0"
                            viewBox="0 0 176 41"
                            className="w-28"
                        >
                            <g fill="currentColor" clipPath="url(#logo-text_svg__a)">
                                <path d="M42.1 10.52v19.5h9.87V32H39.94V10.52h2.16ZM56.99 32H54.8l7.89-21.48h2.67L73.34 32h-2.25l-2.1-5.7h-9.9l-2.1 5.7Zm6.75-18.45-3.99 10.86h8.55l-4.02-10.86c-.09-.3-.24-.66-.27-.87-.03.18-.15.57-.27.87ZM79.686 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32Zm18.177-19.5v-1.98h15.39v1.98h-6.63V32h-2.16V12.5h-6.6ZM130.296 32h-12.87V10.52h12.84v1.98h-10.68v7.74h9.69v1.95h-9.69v7.83h10.71V32Zm7.746 0h-2.16V10.52h8.01c4.35 0 6.99 2.4 6.99 6.21 0 3.09-1.62 5.25-4.38 6l4.59 9.27h-2.4l-4.38-8.91h-6.27V32Zm0-19.53v8.67h5.91c2.97 0 4.71-1.62 4.71-4.35 0-2.79-1.83-4.32-4.77-4.32h-5.85ZM158.431 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32ZM9.71 11.337l13.694 3.475c.315.08.54.36.54.675l.018 13.388c0 .288.342.45.576.279l2.206-1.594a.704.704 0 0 0 .288-.558l-.01-6.887c-.008-4.358-3.042-8.157-7.409-9.264l-7.22-1.828a.733.733 0 0 0-.612.117l-2.197 1.593a.338.338 0 0 0 .126.604Z" />
                                <path d="M20.955 22.266c0-3.034-2.125-5.681-5.16-6.455l-6.634-1.684-2.827-.72a.734.734 0 0 0-.612.117L2.93 15.55.32 17.44a.704.704 0 0 0-.288.558l.009 6.888c0 4.357 3.043 8.165 7.4 9.264l7.22 1.828a.733.733 0 0 0 .613-.117l2.79-2.026 2.611-1.89a.704.704 0 0 0 .289-.559V28.64l-.01-6.374Zm-3.07-2.386.009 7.428c0 .288-.28.495-.568.423L9.71 25.804a.709.709 0 0 1-.54-.675L9.16 17.7c0-.288.28-.495.568-.423l7.616 1.927c.316.08.54.36.54.675Zm-.55 13.775L3.651 30.189a.709.709 0 0 1-.54-.676l-.018-13.36c0-.288.279-.495.567-.423l2.026.513c.234.063.405.27.405.504v3.736c.009 4.349 3.043 8.157 7.41 9.264l3.996 1.018c.235.063.406.27.406.504v1.963c0 .288-.28.495-.568.423Z" />
                            </g>
                            <defs>
                                <clipPath id="logo-text_svg__a">
                                    <path fill="#fff" d="M0 0h175.33v41H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <svg
                        stroke="currentColor"
                        fill="0"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        className="w-6 h-6 cursor-pointer ml-auto"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </div> */}
                <div className="container mt-20  pb-12 lg:pb-36">
                    <p className="text-5xl  text-gradient font-semibold text-neutral-200 text-center w-full">
                        Video has not been processed
                    </p>
                    <Card className="mx-auto mt-16 max-w-xl border-neutral-900 ring-neutral-700 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950  rounded-xl">
                        <p className="w-full text-neutral-200 text-center text-4xl font-PoppinsBold">
                         This video is not in the system and is not being processed. Consider submitting it at the <a href="/" className="underline cursor-pointer">home page.</a>

                        </p>
                        {/* <Title className="text-neutral-200">Audience Sentiment</Title>
                        <AreaChart
                            // className=""
                            className="h-72 mt-4 text-neutral-300"
                            data={chartdata}
                            index="sentiment"
                            yAxisWidth={65}
                            categories={["Average Video", "The Pragmatic Engineer"]}
                            colors={["indigo", "cyan"]}
                            valueFormatter={valueFormatter} */}
                        
                    </Card>


                </div>
            </header>


            <section className="z-100 overflow-hidden bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-900/90  text-neutral-200 border-neutral-800 shadow-xl shadow-neutral-600 border  rounded-2xl bg-center bg-cover bg-footer-sm sm:bg-footer">
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
                fill="0"
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
        </div>



    )
}