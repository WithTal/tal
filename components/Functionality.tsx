"use client"
import { NewtonsCradle } from '@uiball/loaders'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"


import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import DynamicGraphic from './DynamicGraphic'
import { ProfileForm } from './profile-form'
import DynamicGraphicCopy from './DynamicGraphicCopy'
import clsx from 'clsx';

export default function FunctionalitySection({ data, selected, loading, dimensions }: { data: any, selected: boolean, loading: boolean, dimensions: { width: number, height: number } | null }) {

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
    const [selected2, setSelected2] = useState(false)

    const [alignRight, setAlignRight] = useState(false)

    const [loved, setLoved] = useState(false)
    const [retweet, setRetweet] = useState(false)

    const Layouts = [

        <svg className='h-full w-full' width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="black" d="M3 4h18v2H3V4Zm0 15h14v2H3v-2Zm0-5h18v2H3v-2Zm0-5h14v2H3V9Z" />
        </svg>

        ,

        <svg className="h-full w-full" width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="black" d="M3 4h18v2H3V4Zm4 15h14v2H7v-2Zm-4-5h18v2H3v-2Zm4-5h14v2H7V9Z" />
        </svg>
        ,
        <svg className='w-full h-full' width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="black" d="M3 4h18v2H3V4Zm0 15h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V9Z" />
        </svg>


    ]


    // const [dimensions, setDimensions] = useState<{ width: number, height: number } | null>(null);

    // useEffect(() => {
    //     getImageDimensions(data.image)
    //         .then(setDimensions)
    //         .catch(console.error);  // Handle errors
    //     console.log("DIMENSIONS")
    //     console.log(dimensions)
    // }, [data]);
    const [layout, setLayout] = useState(0)



    const Orientation = ({ svg, index }: { svg: JSX.Element, index: number }) => {
        return (
            <motion.div
                whileHover={{ scale: 1.014 }} className="w-full col-span-1 relative flex-none lg:w-auto w-72">
                {index == 2 ?
                    <button
                        onClick={() => setLayout(index)}
                        className={` ${index == layout && "ring-2 ring-neutral-300 dark:ring-4 dark:ring-neutral-500 "} transition-all duration-[400ms] ease-in bg-neutral-100 rounded-md border  overflow-hidden`}
                        style={{ aspectRatio: "1200/630" }}
                    >
                        {svg}
                    </button> :
                    <button
                        onClick={() => {
                            setLayout(index)
                            setAlignRight(true)
                            setSelected2(true)
                        }}
                        className={` ${index == layout && "ring-2 ring-neutral-300 dark:ring-4 dark:ring-neutral-500"} transition-all duration-[400ms] ease-in bg-neutral-100 rounded-md border  overflow-hidden`}
                        style={{ aspectRatio: "1200/630" }}
                    >
                        {svg}
                    </button>
                }
            </motion.div>

        )
    }


    const TemplateIcon = ({ img, tags, index }: { img: string, tags: string[], index: number }) => {
        return (
            <motion.div
                whileHover={{ scale: 1.014 }} className="relative flex-none lg:w-auto w-72">
                <button
                    onClick={() => setSelectedIndex(index)}
                    className={`${index == selectedIndex && "border-4 border-neutral-400"} transition-all duration-[400ms] ease-in bg-neutral-100 rounded-md border  overflow-hidden`}
                    style={{ aspectRatio: "1200/630" }}
                >
                    <img
                        src={img}
                        alt=""
                    />
                </button>
                <div className="-top-2 right-1 flex flex-wrap gap-1 absolute">
                    {tags.map((tag, index) => {
                        return (<div className="text-xs border px-1 py-0.5 text-neutral-700 shadow-sm bg-white rounded-md">
                            {tag}
                        </div>
                        )
                    })}

                </div>
            </motion.div>

        )
    }
    const DefaultOriginalMedia = () => {
        return (<div
            style={{ aspectRatio: "1200/630" }}
            className="from-neutral-200  to-neutral-50 bg-gradient-to-r overflow-hidden rounded-md relative border"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                {loading ? <NewtonsCradle
                    size={40}
                    speed={1.4}
                    color="black"
                /> :
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400">
                        <path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z" />
                    </svg>
                    // <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     width={24}
                    //     height={24}
                    //     viewBox="0 0 24 24"
                    //     stroke="currentColor"
                    //     fill="none"
                    //     style={{}}
                    //     strokeWidth={2}
                    //     strokeLinecap="round"
                    //     strokeLinejoin="round"
                    //     className="text-neutral-300"
                    // >
                    //     <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    //     <circle cx={9} cy={9} r={2} />
                    //     <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    // </svg>
                    // }
                }
            </div>
        </div >
        )
    }



    const [selectedIndex, setSelectedIndex] = useState(0)

    const TemplateValues = [
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(4)_jSrmT_GmJ.png?updatedAt=1697458230577",
            "tags": ["News", "General"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image_MlJqbQ_18.png?updatedAt=1697458230586",
            "tags": ["Course"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(2)_1CY5rousv.png?updatedAt=1697458230726",
            "tags": ["General", "News"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(5)_p3emdPAL8.png?updatedAt=1697462032285",
            "tags": ["News"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/Generate%20Image%20(2)._2FynLCrzbt.png?updatedAt=1697211422143",
            "tags": ["General", "News"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/the-og_-lcyLE8Cr.png?updatedAt=1697478802996",
            "tags": ["General"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/Generate%20Image%20(3)._brPSnM0Y6.png?updatedAt=1697211421837",
            "tags": ["General"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/Generate%20Image%20(4)._XBTwhbplW.png?updatedAt=1697211422068",
            "tags": ["General"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(8)_ZkQyTWfFA.png?updatedAt=1697478358962",
            "tags": ["Simple"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(11)_LRisyc775.png?updatedAt=1697545687283",
            "tags": ["Creator", "Product"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(15)_jLza4-shu.png?updatedAt=1697545791171",
            "tags": ["Creator", "Product"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(12)_MWklAt-_O.png?updatedAt=1697545687240",
            "tags": ["SaaS"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(13)_yO_e-2Sll.png?updatedAt=1697545687265",
            "tags": ["SaaS"]
        },
        {
            "img": "https://ik.imagekit.io/senja/tr:w-400,f-webp/generate-image%20(14)_ixn0ABrBk.png?updatedAt=1697545687163",
            "tags": ["Creator", "Newsletter"]
        }
    ]

    return (
        <section className="relative w-full max-w-[100vw]">
            <div className="mx-auto  w-full  max-w-screen overflow-hidden  flex relative max-w-6xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-row flex-col gap-8 w-full relative items-start">
                    <div className="lg:w-[420px] w-full lg:flex-none flex lg:flex-col flex-row">

                        <div className="lg:hidden block w-full">
                            <div className="mt-8 flex flex-col gap-2">
                                <h2 className="font-medium" data-svelte-h="svelte-15g7a2y">
                                    <span className='inline-block lg:hidden block'>1. </span>   Image Orientation
                                </h2>

                            </div>
                            <div className=" mt-2  lg:overflow-x-visible w-full">
                                <div className="flex w-full grid mt-4 grid-cols-3 gap-2">
                                    {Layouts.map((layout, index) => {
                                        return (
                                            <Orientation index={index} svg={layout} />

                                        )
                                    })}




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto  w-full  max-w-screen overflow-hidden  flex relative max-w-6xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-row flex-col gap-8 w-full relative items-start">


                    <div className="lg:w-[420px] w-full lg:flex-none flex lg:flex-col flex-row">
                        <div className="lg:block hidden">
                            <h2 className="font-medium mb-4" data-svelte-h="svelte-v2h383">
                                The Original Media
                            </h2>
                            <div className="relative">
                                {!selected ?
                                    <DefaultOriginalMedia /> :
                                    <>
                                        <div
                                            style={{ aspectRatio: "1200/630" }}
                                            className="bg-neutral-100 overflow-hidden rounded-md  relative border"
                                        >
                                            <img
                                                src={data.image}
                                                alt=""
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="right-2 -bottom-2 absolute text-5xl rotate-6" />
                                    </>
                                }
                            </div>

                        </div>
                        <div className="lg:block hidden w-full">
                            <div className="mt-8 flex flex-col gap-2">
                                <h2 className="font-medium" data-svelte-h="svelte-15g7a2y">
                                    <span className='inline-block lg:hidden block'>1. </span>   Image Orientation
                                </h2>

                            </div>
                            <div className=" mt-2  lg:overflow-x-visible w-full">
                                <div className="flex w-full grid mt-4 grid-cols-3 gap-2">
                                    {Layouts.map((layout, index) => {
                                        return (
                                            <Orientation index={index} svg={layout} />

                                        )
                                    })}




                                </div>
                            </div>
                        </div>


                        <div className="w-full">
                            <div className="mt-8 flex flex-col gap-2">
                                <h2 className="font-medium" data-svelte-h="svelte-15g7a2y">
                                    <span className='inline-block lg:hidden block'>2. </span>    Pick a Template
                                </h2>

                            </div>
                            <div className="overflow-x-auto mt-2 overflow-y-hidden lg:overflow-x-visible w-full">
                                <div className="flex w-full lg:grid mt-4 grid-cols-2 gap-2">
                                    {TemplateValues.map((template, index) =>
                                        <TemplateIcon key={index} index={index} img={template.img} tags={template.tags} />


                                    )}


                                </div>
                            </div>
                        </div>

                    </div>
                    <Popover>
                        <div className="w-full flex flex-col sticky top-10">
                            <div className=" flex flex-col">
                                <article
                                    className="bg-neutral-900 dark:border-neutral-600 dark:border-2 dark:md:border-none  relative w-full text-base sm:text-lg lg:text-xl xl:text-2xl sm:gap-6 gap-4 mx-auto x:p-12 md:p-6 px-2 py-6 rounded-md text-white flex items-start cursor-pointer">
                                    <div className="absolute -bottom-3 px-0 rounded-full overflow-hidden inset-x-0">
                                        <div className="progress-bar opacity-0 svelte-1a6mhvy"
                                        >
                                            <div className="progress-bar-value svelte-1a6mhvy"></div>
                                        </div>
                                    </div>
                                    <img alt="" src="https://pbs.twimg.com/profile_images/1707146446678487040/mKK7L5iR_400x400.jpg"
                                        className="rounded-full xl:w-20 xl:h-20 sm:w-16 sm:h-16 h-12 w-12" />

                                    <div className="flex flex-wrap justify-start items-start flex-1">
                                        <div className="flex flex-1 items-center" data-svelte-h="svelte-1x6uf87">
                                            <div className="flex-1 flex items-center">
                                                <h3 className="mr-2 font-bold hover:underline"><a href="https://twitter.com/thepablohansen"
                                                    target="_blank">Pablo
                                                </a></h3> <span className="mr-2"><svg
                                                    className="w-5 h-5 md:w-6 md:h-6" fill="#1da1f2" viewBox="0 0 24 24"
                                                    aria-label="Verified account">
                                                    <g>
                                                        <path
                                                            d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                                        </path>
                                                    </g>
                                                </svg></span> <span className="text-neutral-600 mr-1">@thepablohansen</span> <span
                                                    className="md:block hidden  text-neutral-600 mr-1">·</span> <span className="md:block hidden text-neutral-600">Jan 1</span>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="my-1">I loved "{data.title}"
                                            </p>

                                            <div className="rounded-lg mt-4 relative bg-neutral-800" >
                                                {!selected2 && (selected && <DynamicGraphic alignRight={alignRight} text={data.title} text2={data.firstSentence} imageUrl={data.image} imageWidth={dimensions?.width}
                                                    imageHeight={dimensions?.height}
                                                />)}

                                                {selected2 && <DynamicGraphic alignRight={alignRight} text={data.title} text2={data.firstSentence} imageUrl={data.image} imageWidth={dimensions?.width}
                                                    imageHeight={dimensions?.height}
                                                />}


                                                {/* {selected && <DynamicGraphicCopy text={data.title} text2={data.firstSentence} imageUrl={data.image} imageWidth={dimensions?.width}
                                                    imageHeight={dimensions?.height}
                                                />
                                                } */}
                                                {/* <DynamicGraphic text2='The Byline goes here fo the specific card that exists in the thing...' text="The title of the thing goes right here on the thing for the thing" imageUrl="https://assets.stickpng.com/images/609159e7f9f20800044365b6.png" /> */}
                                            </div>


                                            <div className="flex mt-2 items-center text-base sm:text-lg flex-wrap justify-start py-2"
                                                data-svelte-h="svelte-1l50sz">
                                                <div className="text-neutral-600 flex hover:text-blue-500 items-center mr-8">
                                                    <div className="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500">
                                                        <svg
                                                            viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                                            <g>
                                                                <path
                                                                    d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <span className="ml-1">
                                                        1.5K
                                                    </span>
                                                </div>
                                                <button onClick={() => setRetweet(!retweet)} className={`  flex hover:text-green-500 items-center mr-8 ${retweet ? "text-green-500" : "text-neutral-600"} `}>
                                                    <div
                                                        className={`w-8 h-8 hover:bg-green-200 rounded-full ${retweet && "text-green-500"} flex items-center justify-center hover:text-green-500 `}>
                                                        <svg
                                                            viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                                            <g>
                                                                <path
                                                                    d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <span className="ml-1">6.7K</span>
                                                </button>
                                                <button onClick={() => setLoved(!loved)} className={`text-neutral-600 flex hover:text-red-500 items-center mr-6 ${loved && "text-red-500"}`}>
                                                    <div
                                                        className="w-8 h-8 hover:bg-red-200 rounded-full flex items-center justify-center hover:text-red-500">

                                                        {loved ?
                                                            <svg width="512" height="512" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                                                                <path fill="currentColor" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z" />
                                                            </svg> : <svg width="512" height="512" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                                                                <path fill="currentColor" d="M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z" />
                                                            </svg>}

                                                        {/* <svg
                                                            viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                                            <g>
                                                                <path
                                                                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                                                </path>
                                                            </g>
                                                        </svg> */}
                                                    </div>
                                                    <span className="ml-1">99.9K
                                                    </span>
                                                </button>
                                                <div className="text-neutral-600 sm:block hidden flex hover:text-blue-500 items-center mr-6">
                                                    <div
                                                        className="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500"><svg
                                                            viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                                            <g>
                                                                <path
                                                                    d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">
                                                                </path>s
                                                                <path
                                                                    d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <button
                                    className="px-4 max-w-screen  py-2 text-sm font-medium duration-200 rounded-md border mt-4 text-white bg-black dark:bg-white dark:text-black border-transparent hover:shadow-primary/20 active:scale-[.98] hover:scale-[1.02] hover:shadow-xl"
                                    role="button">
                                    <div className=" flex items-center justify-center gap-2 py-1.5">Share

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor"
                                            fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
                                            <circle cx="18" cy="5" r="3"></circle>
                                            <circle cx="6" cy="12" r="3"></circle>
                                            <circle cx="18" cy="19" r="3"></circle>
                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                        </svg>
                                    </div>
                                </button>


                                <PopoverTrigger className=' w-full'>
                                    <button
                                        className="w-full px-4 py-2 text-sm font-medium duration-200 rounded-md border mt-4 text-white bg-neutral-800 dark:bg-neutral-200 dark:text-black border-transparent hover:shadow-primary/20 active:scale-[.98] hover:scale-[1.02] hover:shadow-xl"
                                        role="button">
                                        <div className="flex items-center justify-center gap-2 py-1.5">Feedback

                                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59l-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" />
                                            </svg>
                                        </div>
                                    </button>
                                </PopoverTrigger>


                                <div className='w-full flex justify-center'>


                                    <PopoverContent className='w-[90%]' >
                                        <ProfileForm />
                                    </PopoverContent>

                                </div>

                            </div>
                        </div>
                    </Popover>

                </div>


            </div>

        </section >

    )
}