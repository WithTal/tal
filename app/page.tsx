'use client'
import Spline from '@splinetool/react-spline';
import DrawerDialogDemo from "@/components/ResizeDialog";
import Hero from '@/components/marketing/Hero';
import FeatureCard from '@/components/marketing/FeatureCard';
import SplineBlock from '@/components/marketing/SplineBlock';
import FeatureCard2 from '@/components/marketing/FeatureCard2';
import FooterCTA from '@/components/marketing/FooterCTA';
import MarketingHeader from '@/components/marketing/MarketingHeader';


{/*

- Page
    - Header
    - Values
    - Spline
- Tracking
- Insights
- Settings
- Sign-in 
- Sign-up


*/}




export default function HomePage() {




    return (
        <div className="w-[95%] max-w-6xl mx-auto">
            <MarketingHeader />
            <SplineBlock />
            <FooterCTA />
        </div >
    )
}