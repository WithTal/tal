'use client'

import Image from "next/image";
import { useState } from "react";
import SettingsLayout from "./Settingslayout";
import { Comprehendability } from "./Val";

export default function Home() {

  const [formIndex, setFormIndex] = useState(0)
  const LayoutItems = [
    // <PeerReview />,
    <Comprehendability />
  ]


  return (

    <div className="w-[95%] max-w-6xl mx-auto flex justify-center">
      <SettingsLayout setFormIndex={setFormIndex}>
        {LayoutItems[formIndex]}
      </SettingsLayout>
    </div>
  );
}
