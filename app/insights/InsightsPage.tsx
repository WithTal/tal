'use client'
import MetricCards from "./cards/MetricCards"
import ConsumptionCard from "./cards/ConsumptionCard"
import InsightLeaderboard from "./cards/InsightLeaderboard"



export default function InsightsPage() {
    return (
        <>
            <div className="hidden w-full  flex-col md:flex">
                <div className="w-full flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-5xl text-neutral-200 font-bold tracking-tight">You</h2>
                    </div>
                    <div className="w-full space-y-4">
                        <div className="space-y-4">
                            <MetricCards />
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <ConsumptionCard />
                                <InsightLeaderboard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}