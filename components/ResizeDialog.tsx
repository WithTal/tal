
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
};

const DrawerDialogDemo: React.FC<DrawerDialogDemoProps> = ({ children }) => {


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
                    <DialogHeader>
                        <DialogTitle>More features coming soon!</DialogTitle>
                        <DialogDescription>
                            Get updated when we add new things to the platform! Lots more cool stuff
                        </DialogDescription>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" onChange={e => setNameValue(e.target.value)} value={nameValue} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Email
                                </Label>
                                <Input id="username" onChange={e => setEmailValue(e.target.value)} value={emailValue} className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter >
                            <Button onClick={addToMailingList} type="submit">{!loading ? submitted ? "Submitted" : "Save changes" : <l-treadmill
                                size="70"
                                speed="1.25"
                                color="black"
                            ></l-treadmill>

                            }</Button>
                        </DialogFooter>
                    </DialogHeader>
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