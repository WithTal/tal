'use client'

import { useState } from "react"
import { useSession } from "@clerk/nextjs"

import WellnessCard from "./dashboard/WellnessCard"
import AppInteractionCard from "./dashboard/AppInteractionCard"
import WearablesCard from "./dashboard/WearablesCard"

import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function TrackingDash() {
    const [wellnessSubmitted, setWellnessSubmitted] = useState(false)

    const session = useSession();

    const getValues = async () => {
        const d = await fetch("/api/top5", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "user_id": session.session?.id })
        }).then((response) => response.json())
        const websiteUrls = d.results.map((result: any) => result.website_url);
        setValues(websiteUrls);
    }

    const [values, setValues] = useState(["Reddit", "Hacker News", "Lobst.ers", "A16Z Crypto", "Twitter"])
    return (
        <>
            <div className=" w-full  flex-col flex">
                <div className="w-full flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-5xl text-neutral-200 font-bold tracking-tight">Data Sources</h2>
                        <div className="flex items-center space-x-2">
                            <Button onClick={() => getValues()}>Refresh</Button>
                        </div>
                    </div>
                    <Tabs defaultValue="main" className="w-full space-y-4">
                        <TabsList>
                            <TabsTrigger value="main">Main</TabsTrigger>
                            <TabsTrigger value="integrations" >
                                Integrations
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="main" className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <WellnessCard wellnessSubmitted={wellnessSubmitted} setWellnessSubmitted={setWellnessSubmitted} />
                                <AppInteractionCard values={values} />
                        </TabsContent>
                        <TabsContent value="integrations" className="w-full space-y-4">
                            <WearablesCard />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}