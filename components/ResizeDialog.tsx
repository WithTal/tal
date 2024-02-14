
'use client'


import * as React from "react"

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

type DrawerDialogProps = {
    children: React.ReactNode;
    index?: number
};

const DrawerDialog: React.FC<DrawerDialogProps> = ({ children, index }) => {



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
                            <DialogTitle className='text-2xl'>Secure Insights Dashboard</DialogTitle>
                            <DialogDescription>
                                Your privacy is our priority. Explore your data with the assurance of top-tier security over the last 24 days.
                            </DialogDescription>
                            <DialogDescription className='text-neutral-800'>
                                <ul className='gap-y-16'>
                                    <li>
                                        <span className='pt-16 font-bold text-base'>End-to-End Encryption</span>: All your data is securely encrypted from your device to our servers.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Zero Cloud Exposure</span>: Your data never leaves your device, ensuring no exposure to the cloud.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Private Event Logging</span>: Every interaction is logged securely, with encryption at every step.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Secure Keylogging</span>: Keylogging is fully encrypted, guaranteeing your keystrokes remain private.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Data Integrity Assurance</span>: We ensure the integrity and confidentiality of your data at all times.
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
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    {index == 0 && (
                        <React.Fragment>
                            <DrawerTitle>Tracking</DrawerTitle>
                            <DrawerDescription>
                                We track measures of your mental wellness across various modes
                            </DrawerDescription>
                            <DrawerDescription className='text-neutral-800'>
                                <ul className='gap-y-16'>
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
                            </DrawerDescription>
                        </React.Fragment>
                    )}
                    {index == 1 && (
                        <React.Fragment>
                            <DrawerTitle>Secure Insights Dashboard</DrawerTitle>
                            <DrawerDescription>
                                Your privacy is our priority. Explore your data with the assurance of top-tier security over the last 24 days.
                            </DrawerDescription>
                            <DrawerDescription className='text-neutral-800'>
                                <ul className='gap-y-16'>
                                    <li>
                                        <span className='pt-16 font-bold text-base'>End-to-End Encryption</span>: All your data is securely encrypted from your device to our servers.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Zero Cloud Exposure</span>: Your data never leaves your device, ensuring no exposure to the cloud.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Private Event Logging</span>: Every interaction is logged securely, with encryption at every step.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Secure Keylogging</span>: Keylogging is fully encrypted, guaranteeing your keystrokes remain private.
                                    </li>
                                    <li>
                                        <span className='mt-8 font-bold text-base'>Data Integrity Assurance</span>: We ensure the integrity and confidentiality of your data at all times.
                                    </li>
                                </ul>
                            </DrawerDescription>
                        </React.Fragment>
                    )}
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

export default DrawerDialog