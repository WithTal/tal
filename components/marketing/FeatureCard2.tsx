import DrawerDialogDemo from "../ResizeDialog";

export default function FeatureCard2() {
    return (
        <div
            className="relative mt-12 max-w-lg mx-auto cursor-pointer hidden pt-5 pb-8 text-neutral-200 px-7 rounded-xl sm:block"
            style={{
                background:
                    "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
            }}
        >
            <DrawerDialogDemo index={2}>

                <svg className="w-4 h-4 text-neutral-400" width="512" height="512" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M992.5 992.5q-31.5 31.5-76 31.5T841 993L608 760q-38-38-30-91L389 480q-76 61-165 96Q77 500 0 352q48-120 140.5-212T353 0q147 77 224 224q-36 90-97 165l189 189q53-8 91 30l233 233q31 31 31 75.5t-31.5 76" />
                </svg>
            </DrawerDialogDemo>
            <div className="ml-6 mt-2 text-4xl text-neutral-200 font-semibold w-full text-left">
                Smart Interventions
            </div>
            <p className="text-sm mt-4 md:mt-4 text-neutral-200">
                Learn when you're heading to a dark place and notify your trusted ones. Get real-time warnings and prevention mechanisms.
            </p>
            {/* </DrawerDialogDemo> */}
            <div style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                width: '100%',
                height: '100%',
                border: '10px solid #262626',
                borderRadius: 'inherit',
                zIndex: '-1'
            }}
            >

            </div>
        </div>
    )


}