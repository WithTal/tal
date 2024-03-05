import App from "@/app/about/download/app";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import FeatureCard, { ScrollingCard, TextCard } from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";


export default function HeroAbout() {
    return (
        <>
            <div className="px-4 py-2">
                <h1 className="text-neutral-200 text-center text-3xl lg:text-5xl font-semibold">
                    What is tal?


                </h1>
                <p className="mt-6 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto">
                    In an era where mental health is increasingly impacted by digital interactions,
                    Tal emerges as a pioneering desktop application that objectively tracks 12 crucial
                    metrics of your mental well-being.
                </p>
                <p className="mt-4 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto">
                    Designed for the young adult professional and high-tier student, Tal serves as
                    your personal mental health and productivity wearable. It logs each digital action
                    to provide insights into behaviors affecting your mental health, empowering you
                    to make informed decisions and cultivate a healthier digital lifestyle.
                </p>
                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto  ">
                    Tal is available as a native desktop and mobile app:
                </h2>

                <ul className="grid   mt-4 text-left text-base lg:text-xl max-w-2xl w-[90%] md:grid-cols-2 gap-x-2 mx-auto">
                    {/* <Button>
                        Desktop App
                    </Button> */}
                    <App />

                </ul>

                <h2 className=" mt-12 text-neutral-200 font-bold  text-left text-2xl lg:text-3xl max-w-2xl w-[90%] mx-auto  ">
                    How does it work?
                </h2>

                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto  ">
                    Tal installs to your computer or phone and securely logs your actions. You can trust Tal with your data as it is open source and end-to-end encrypts your data.
                </h2>

                <ul className="grid   mt-4 text-left text-base lg:text-xl max-w-2xl w-[90%] md:grid-cols-2 gap-x-2 mx-auto">
                    <TextCard Icon={
                        <Icons.light className="w-4 h-4 text-neutral-400" />} index={0} title="E2E Encrypted" description="Your digital consumption quantified. As much info about yourself as you're willing to give." />

                    <TextCard Icon={
                        <Icons.light className="w-4 h-4 text-neutral-400" />} index={0} title="Open Source" description="Your digital consumption quantified. As much info about yourself as you're willing to give." />
                    {/* <li>Open source.</li>
                    <li>End to end encrypted.</li>
                    <li>Dockerized.</li>
                    <li>Supported by peer-reviewed literature.</li> */}
                </ul>

                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto  ">
                    It turns that information into 12 new biomarkers
                </h2>
                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto  ">
                    3 are volume based:
                </h2>
                <ScrollArea className="w-full whitespace-nowrap rounded-md mt-4 text-left text-base lg:text-xl max-w-2xl gap-x-2 mx-auto ">
                    <div className="flex w-full space-x-4 p-4">
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={0} title="PSV" description="Post Seen Volume" />
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={1} title="SIV" description="Social Images Volume" />
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={2} title="MV" description="Message Volume" />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto ">
                   2 are time based:
                </h2>
                <ScrollArea className="w-full whitespace-nowrap rounded-md mt-4 text-left text-base lg:text-xl max-w-2xl gap-x-2 mx-auto ">
                    <div className="flex w-full space-x-4 p-4">
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={3} title="THO" description="Total Hours Online" />
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={4} title="MHO" description="Media Hours Online" />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto ">
                    2 are gradient based:
                </h2>
                <ScrollArea className="w-full whitespace-nowrap rounded-md mt-4 text-left text-base lg:text-xl max-w-2xl gap-x-2 mx-auto ">
                    <div className="flex w-full space-x-4 p-4">
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={5} title="CSP" description="Content Seen Positivity" />
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={6} title="CWP" description="Content Written Positivity" />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <h2 className=" mt-8 text-neutral-200 text-left text-lg lg:text-xl max-w-2xl w-[90%] mx-auto ">
                    And 2 are experimental leading indicators:
                </h2>
                <ScrollArea className="w-full whitespace-nowrap rounded-md mt-4 text-left text-base lg:text-xl max-w-2xl gap-x-2 mx-auto ">
                    <div className="flex w-full space-x-4 p-4">
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={7} title="DSM" description="Doom Scroll Measure" />
                        <ScrollingCard Icon={<Icons.light className="w-4 h-4 text-neutral-400" />} index={8} title="SAS" description="Social App Switches" />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                

            </div >


        </>


    )
}