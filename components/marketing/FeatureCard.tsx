import DrawerDialogDemo from "../ResizeDialog";

export default function FeatureCard({ Icon, title, description, index }: { Icon: JSX.Element, title: string, description: string, index: number }) {


    return (
        <div>
            <div className="relative py-6 px-7 group border border-neutral-800 rounded-xl "
                style={{
                    background:
                        "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                }}>
                <div className="flex justify-between text-neutral-400">
                    {Icon}
                    <div className="flex items-center justify-center rounded-full w-7 h-7  group-hover:bg-neutral-500 transition-background duration-300 bg-neutral-600">
                        <DrawerDialogDemo index={index}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="w-4 h-4  text-neutral-300"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </DrawerDialogDemo>
                    </div>
                </div>
                {/* <DrawerDialogDemo> */}
                <div className="mt-2 text-4xl text-neutral-200 font-semibold w-full text-left">
                    {title}
                </div>
                <p className="text-sm mt-4 md:mt-4 text-neutral-200">
                    {description}
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
                ></div>
            </div>
        </div>
    )

}


export function TextCard({ Icon, title, description, index }: { Icon: JSX.Element, title: string, description: string, index: number }) {


    return (
        <div>
            <div className="relative max-w-sm py-4 px-6 group border border-neutral-800 rounded-xl "
                style={{
                    background:
                        "linear-gradient(65deg, #2A2625 -21.28%, #070808 97.97%)"
                }}
                >

                {/* <DrawerDialogDemo> */}
                <div className="mt-2 text-xl flex flex-wrap text-neutral-200 font-semibold w-full text-left">
                    {title}
                </div>
                <p className="text-base mt-2  text-wrap flex flex-wrap max-w-full text-neutral-200 overflow-wrap break-word">

                    {description}
                </p>
                {/* </DrawerDialogDemo> */}

                <div style={{
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    width: '100%',
                    height: '100%',
                    border: '10px solid #262626',
                    borderRadius: 'inherit',
                    zIndex: '-1'
                }}
                ></div>
            </div>
        </div>
    )

}

export function ScrollingCard({ Icon, title, description, index }: { Icon: JSX.Element, title: string, description: string, index: number }) {
    return (
        <div>
            <div className="relative w-[225px] py-3 px-5 group border border-neutral-800 rounded-lg "
                style={{
                    background:
                        "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                }}>

                {/* <DrawerDialogDemo> */}
                <div className="mt-2 text-xl flex flex-wrap text-neutral-100 font-semibold w-full text-left">
                    {title}
                </div>
                <p className="text-base mt-0  text-wrap flex flex-wrap max-w-full text-neutral-200 overflow-wrap break-word">

                    {description}
                </p>
                {/* </DrawerDialogDemo> */}

                <div style={{
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    width: '100%',
                    height: '100%',
                    border: '10px solid #262626',
                    borderRadius: 'inherit',
                    zIndex: '-1'
                }}
                ></div>
            </div>
        </div>
    )

}