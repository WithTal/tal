

import { Metadata } from "next"
import InsightsPage from "./InsightsPage"

export const metadata: Metadata = {
    title: "Insights- TAL",
    description: "Use TAL to get insights into your digital mental health.",
}

export default function DashboardPage() {
    return (
        <div className="w-[95%] max-w-6xl mx-auto flex justify-center">
            <InsightsPage />
        </div >
    )
}