import TrackingDash from "./TrackingDash"

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tracking- TAL",
    description: "Set up your tracking for TAL.",
}

export default function page() {
    return (
        <div className="w-[95%] max-w-6xl mx-auto flex justify-center">
            <TrackingDash />
        </div >
    )
}