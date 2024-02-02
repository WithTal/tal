import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import Hero from "./Hero";

export default function MarketingHeader() {
    return (
        <header className="relative overflow-hidden  ">
            <div className="container pb-12 lg:pb-36">
                <div className="flex items-center justify-center w-full">
                    <div className="z-10 lg:mr-16 mt-12  max-w-3xl">
                        <Hero />
                        <div className="mt-12 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                                <FeatureCard index={0} title="Tracking" description="Your digital consumption quantified. As much info about yourself as you're willing to give." />
                                <FeatureCard index={0} title="Insights" description="Deep analysis of your habits, catching warning signs before risks appear." />
                            </div>
                            <FeatureCard2 />
                        </div>
                    </div>
                </div>
            </div >
        </header >
    )
}