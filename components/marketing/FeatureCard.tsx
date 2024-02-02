import DrawerDialogDemo from "../ResizeDialog";

export default function FeatureCard({ title, description, index }: { title: string, description: string, index: number }){


    return (
        <div>
            <div className="relative py-6 px-7 group border border-neutral-800 rounded-xl "
                style={{
                    background:
                        "linear-gradient(65deg, #2A2625 -21.28%, #070808 67.97%)"
                }}>
                <div className="flex justify-between text-neutral-400">
                    <svg width="352" height="512"
                        className="w-4 h-4 text-neutral-400"
                        viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16" />
                    </svg>
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