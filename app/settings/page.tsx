'use client'

import Image from "next/image";
import { useState } from "react";
import SettingsLayout from "./Settingslayout";
import { Intervention } from "./Sections/Intervention";
import { Notifications } from "./Sections/Notifications";
import ClincalPortal from "./Sections/ClinicalPortal";



export default function Home() {
    const values = [{}]

    const [formIndex, setFormIndex] = useState(0)
    const LayoutItems = [
        <Intervention values={values} />,
        <Notifications values={values} />,
        <ClincalPortal values={values} />
    ]

    return (
        <div className="w-[95%] max-w-6xl mx-auto flex justify-center">
            <SettingsLayout setFormIndex={setFormIndex}>
                {LayoutItems[formIndex]}
            </SettingsLayout>
        </div>
    );
}
