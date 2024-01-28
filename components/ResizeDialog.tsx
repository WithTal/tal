
'use client'

import { treadmill } from 'ldrs'


// Default values shown

import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
export function useMediaQuery(query: string) {
    const [value, setValue] = React.useState(false)

    React.useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener("change", onChange)
        setValue(result.matches)

        return () => result.removeEventListener("change", onChange)
    }, [query])

    return value
}
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DrawerDialogDemoProps = {
    children: React.ReactNode;
    index: number
};

const DrawerDialogDemo: React.FC<DrawerDialogDemoProps> = ({ children, index }) => {


    // export function DrawerDialogDemo(<D) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    const [nameValue, setNameValue] = React.useState("")
    const [emailValue, setEmailValue] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)
    const [loading, setLoading] = React.useState(false)



    const addToMailingList = async () => {

        console.log("LOG")
        setLoading(true)
        const d = await fetch("/api/news", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": emailValue, "name": nameValue })
        }).then((response) => response.json())
        setSubmitted(true)
        setLoading(false)

    }

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="dark:bg-transparent bg-transparent" asChild>

                    <Button className="dark:bg-transparent bg-transparent">
                        {children}
                    </Button>
                </DialogTrigger>
                <DialogContent className="  sm:max-w-[425px]">
                    {index == 0 && <DialogHeader>
                        <DialogTitle className='text-2xl'>Tracking</DialogTitle>
                        <DialogDescription>
                            We track measures of your mental wellness across various modes
                        </DialogDescription>
                        <DialogDescription className='  text-neutral-800'>
                            <ul className='gap-y-16 '>
                                <li>
                                    <span className='pt-16 font-bold text-base'>Desktop App</span>: Set up our desktop app to track all your digital consumption across the web
                                </li>
                                <li>
                                    <span className='mt-8 font-bold text-base'>Daily Checkin</span>: Fill out a short daily survey to track your emotions so we can correlate it with other events in your life
                                </li>
                                <li>
                                    <span className='mt-8 font-bold text-base'>Integrations</span>: Connect to Fitbit, Apple Health, your calendar, so we can have more data to track
                                </li>
                            </ul>
                        </DialogDescription>
                    </DialogHeader>}
                    {index == 1 && (
                        <DialogHeader>
                            <DialogTitle className='text-2xl'>Insights Dashboard</DialogTitle>
                            <DialogDescription>
                                Dive into your personal health and mood trends over the last 24 days.
                            </DialogDescription>
                            <DialogDescription className='text-neutral-800'>
                                <ul className='gap-y-16'>
                                    <li>
                                        <span className='pt-16 font-bold text-base'>General Health Signals</span>: Overview of your physical and digital health metrics.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Mood Impact Analysis</span>: Discover how your activities correlate with mood changes.
                                        <ul className='ml-4 mt-2'>
                                            <li>- Likelihood of doomscrolling based on past behavior.</li>
                                            <li>- Other mood-related trends and insights.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Consumption Review</span>: A detailed breakdown of your digital and physical activity in the past 24 days.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Enhance Tracking</span>: Options to connect with apps and devices (Fitbit, Apple Health, etc.) for more comprehensive data.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Daily Emotional Check-In</span>: Record your daily mood and see how it aligns with your activities and health metrics.
                                    </li>
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                    )}

                    {index == 2 && (
                        <DialogHeader>
                            <DialogTitle className='text-2xl'>Interventions</DialogTitle>
                            <DialogDescription>
                                Proactive measures for your mental wellness, focusing on timely interventions and preventive actions.
                            </DialogDescription>
                            <DialogDescription className='text-neutral-800'>
                                <ul className='gap-y-16'>
                                    <li>
                                        <span className='pt-16 font-bold text-base'>Notifications</span>: Automated alerts tailored to your well-being.
                                        <ul className='ml-4 mt-2'>
                                            <li>- Notifies your friends or family in certain scenarios.</li>
                                            <li>- Personal reminders for self-care and wellness checks.</li>
                                            <li>- Direct alerts to your doctor for professional guidance.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Prevention Tips</span>: Gentle nudges to help you avoid unhealthy habits.
                                        <ul className='ml-4 mt-2'>
                                            <li>- Alerts when engaging in activities that are potentially harmful.</li>
                                            <li>- Warnings about excessive doomscrolling or social media use.</li>
                                            <li>- Personalized messages for reassessment of current activities.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Custom Interventions</span>: Set up your own triggers and responses for a tailored experience.
                                    </li>
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                    )}

                    {/* <ProfileForm /> */}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger className="bg-transparent dark:bg-transparent" asChild>
                <Button className="bg-transparent dark:bg-transparent">
                    {children}
                </Button>
                {/* <Button variant="outline">CLICK ME</Button> */}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>More features coming soon!</DrawerTitle>
                    <DrawerDescription>
                        Get updated when we add new things to the platform! Lots more cool stuff
                    </DrawerDescription>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-5 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-5 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Email
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-4" />
                        </div>
                    </div>
                </DrawerHeader>
                {/* <ProfileForm className="px-4" /> */}
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerDialogDemo;