
import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import { CalendarDateRangePicker } from "./components/date-range-picker"
import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { Search } from "./components/search"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"
import { Badge } from "@/components/ui/badge"
import OnIcon from "./components/onIcon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Dashing() {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden w-full  flex-col md:flex">

                <div className="w-full flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-5xl text-neutral-200 font-bold tracking-tight">You</h2>
                        <div className="flex items-center space-x-2">
                            {/* <CalendarDateRangePicker /> */}
                            {/* <Button>Download</Button> */}
                        </div>
                    </div>
                    <Tabs defaultValue="main" className="w-full space-y-4">

                        <TabsContent value="main" className="space-y-4">
                            <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Doom Scrolling
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">20 hours </div>
                                        <p className="text-red-400 text-xs text-muted-foreground">
                                            +20.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Negative Text
                                        </CardTitle>
                                        <Popover>
                                            <PopoverTrigger>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="h-4 w-4 text-muted-foreground"
                                                >
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                    <circle cx="9" cy="7" r="4" />
                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                                </svg>
                                            </PopoverTrigger>
                                            <PopoverContent className="text-abse">"Negative Text" are words which you type that are profane, insulting, or generally indicative of a negative mental state.</PopoverContent>
                                        </Popover>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">200 words</div>
                                        <p className="text-xs text-green-400">
                                            -40.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Bad Events


                                        </CardTitle>
                                        <Popover >
                                            <PopoverTrigger>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="h-4 w-4 text-muted-foreground"
                                                >
                                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                                    <path d="M2 10h20" />
                                                </svg>
                                            </PopoverTrigger>
                                            <PopoverContent className="text-abse">"Bad events" are events you have labelled as negative, such as stalking your ex or opening a specific website</PopoverContent>
                                        </Popover>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">8 </div>
                                        <p className="text-xs text-green-500">
                                            -19% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Active Now
                                        </CardTitle>
                                        <OnIcon />

                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">+573</div>
                                        <p className="text-xs text-muted-foreground">
                                            +201 since last hour
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader className="">
                                        <CardTitle className="w-full flex justify-between">
                                            <p>
                                                Consumption (hours per day)
                                            </p>
                                            {/* <button className=" animate-bounce hover:underline">
                                                Today's entry!

                                            </button> */}

                                        </CardTitle>

                                    </CardHeader>
                                    <div className="w-full h-[400px]">
                                        {/* <CardContent> */}
                                        {/* <CardContent className="pl-2"> */}
                                        <Overview />
                                        {/* </CardContent> */}
                                    </div>
                                    {/* </CardContent> */}
                                </Card>
                                <Card className="col-span-3">
                                    <CardHeader>
                                        <CardTitle>Recent Events</CardTitle>
                                        <CardDescription>
                                            What you've been up to!
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <RecentSales />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>



                        <TabsContent value="integrations" className="w-full space-y-4">
                            <div className="w-full grid gap-4 md:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Fitbit Integration <Badge className="ml-2 bg-green-700" >Enabled!</Badge>
                                        </CardTitle>

                                        <OnIcon />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">$45,231.89</div>
                                        <p className="text-xs text-muted-foreground">
                                            +20.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Aid Sleep <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                                        </CardTitle>

                                        <OnIcon />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                                        <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Cronometer  <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                                        </CardTitle>

                                        <OnIcon />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                                        <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Tings <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                                        </CardTitle>

                                        <OnIcon />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                                        <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}