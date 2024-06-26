import { Icons } from "../ui/icons";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import Hero from "./Hero";
import HeroAbout from "./HeroAbout";

export default function AboutHero() {
    return (
        <header className="relative overflow-hidden  ">
            <div className="container pb-12 lg:pb-36">
                <div className="flex items-center justify-center w-full">
                    <div className="z-10 lg:mr-16 mt-12  max-w-3xl">
                        <HeroAbout />
                        {/* <div className="mt-12 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                                <FeatureCard Icon={
                                    <Icons.light className="w-4 h-4 text-neutral-400" />} index={0} title="Tracking" description="Your digital consumption quantified. As much info about yourself as you're willing to give." />
                                <FeatureCard
                                    Icon={
                                        <Icons.privacy className="w-4 h-4 text-neutral-400" />}
                                    index={1} title="Privacy" description="End-to-end encryption (E2EE) and no data ever leaves your hands." />
                            </div>
                            <FeatureCard2 />
                        </div> */}
                    </div>
                </div>
            </div >
        </header >
    )
}