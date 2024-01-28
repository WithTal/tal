'use client'

import Image from "next/image";
import { useState } from "react";
import SettingsLayout from "./Settingslayout";
import { Comprehendability } from "./Val";
import { Notify } from "./Notify";
import ClincalPortal from "./ClinicalPortal";

export default function Home({ values }: { values: any[] }) {

    const [formIndex, setFormIndex] = useState(0)
    const LayoutItems = [
        // <PeerReview />,
        <Comprehendability />,
        <Notify />,
        <ClincalPortal />
    ]


    return (

        <div className="w-[95%] max-w-6xl mx-auto flex justify-center">
            <SettingsLayout setFormIndex={setFormIndex}>
                {LayoutItems[formIndex]}
            </SettingsLayout>
        </div>
    );
}
