'use client'
import { useUser } from "@clerk/nextjs";
import DrawerDialogDemo from "./ResizeDialog";
import SignOut from "./auth/SignOutButton";
import { Icons } from "./icons";


export default function FloatingNavBar() {
    const { isLoaded, isSignedIn, user } = useUser();

    // if (!isLoaded || !isSignedIn) {
    //     return null;
    // }


    return (
        <div className="fixed hover:translate-y-[-1px]  transition duration-300 z-[10000] w-full  px-4 flex justify-center">

            <div className=" max-w-[90%] px-4 border-neutral-900 border md:shadow-none shadow-lg shadow-neutral-800 flex items-center justify-center mt-14 text-stone-400 bg-black gap-x-9 px-9 rounded-3xl py-2.5 z-10">
                <a href="/">
                    <p className="font-bold text-lg text-stone-200 hover:text-stone-100">
                        TAL
                    </p>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 176 41"
                    className="w-28 "
                >
                    <g fill="currentColor" clipPath="url(#logo-text_svg__a)">
                        <path d="M42.1 10.52v19.5h9.87V32H39.94V10.52h2.16ZM56.99 32H54.8l7.89-21.48h2.67L73.34 32h-2.25l-2.1-5.7h-9.9l-2.1 5.7Zm6.75-18.45-3.99 10.86h8.55l-4.02-10.86c-.09-.3-.24-.66-.27-.87-.03.18-.15.57-.27.87ZM79.686 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32Zm18.177-19.5v-1.98h15.39v1.98h-6.63V32h-2.16V12.5h-6.6ZM130.296 32h-12.87V10.52h12.84v1.98h-10.68v7.74h9.69v1.95h-9.69v7.83h10.71V32Zm7.746 0h-2.16V10.52h8.01c4.35 0 6.99 2.4 6.99 6.21 0 3.09-1.62 5.25-4.38 6l4.59 9.27h-2.4l-4.38-8.91h-6.27V32Zm0-19.53v8.67h5.91c2.97 0 4.71-1.62 4.71-4.35 0-2.79-1.83-4.32-4.77-4.32h-5.85ZM158.431 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32ZM9.71 11.337l13.694 3.475c.315.08.54.36.54.675l.018 13.388c0 .288.342.45.576.279l2.206-1.594a.704.704 0 0 0 .288-.558l-.01-6.887c-.008-4.358-3.042-8.157-7.409-9.264l-7.22-1.828a.733.733 0 0 0-.612.117l-2.197 1.593a.338.338 0 0 0 .126.604Z" />
                        <path d="M20.955 22.266c0-3.034-2.125-5.681-5.16-6.455l-6.634-1.684-2.827-.72a.734.734 0 0 0-.612.117L2.93 15.55.32 17.44a.704.704 0 0 0-.288.558l.009 6.888c0 4.357 3.043 8.165 7.4 9.264l7.22 1.828a.733.733 0 0 0 .613-.117l2.79-2.026 2.611-1.89a.704.704 0 0 0 .289-.559V28.64l-.01-6.374Zm-3.07-2.386.009 7.428c0 .288-.28.495-.568.423L9.71 25.804a.709.709 0 0 1-.54-.675L9.16 17.7c0-.288.28-.495.568-.423l7.616 1.927c.316.08.54.36.54.675Zm-.55 13.775L3.651 30.189a.709.709 0 0 1-.54-.676l-.018-13.36c0-.288.279-.495.567-.423l2.026.513c.234.063.405.27.405.504v3.736c.009 4.349 3.043 8.157 7.41 9.264l3.996 1.018c.235.063.406.27.406.504v1.963c0 .288-.28.495-.568.423Z" />
                    </g>
                    <defs>
                        <clipPath id="logo-text_svg__a">
                            <path fill="#fff" d="M0 0h175.33v41H0z" />
                        </clipPath>
                    </defs>
                </svg> */}
                </a>
                <a className="md:block hidden hover:text-stone-300" href="/about">
                    About
                </a>

                <a className="md:block hidden hover:text-stone-300">
                    Contact
                </a>
                <a href="https://twitter.com/thepablohansen">
                    <Icons.twitter  className="w-6 h-6 hover:text-stone-300" />

                </a>
                <a href="https://github.com/thepablohansen">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 496 512"
                        className="w-6 h-6 hover:text-stone-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>
                <div className="flex items-center text-sm gap-x-6">
                    {
                        !isLoaded ? <div
                            className="inline-flex items-center hover:border-cyan-500 justify-center px-4 py-2 rounded cursor-pointer px-6 py-2.5 border border-stone-700 hover:bg-stone-800 bg-stone-900 text-neutral-200"
                        // href="/login"
                        >
                            Login
                        </div>
                            :

                            !isSignedIn ? <a
                                className="inline-flex items-center hover:border-cyan-500 justify-center px-4 py-2 rounded cursor-pointer px-6 py-2.5 border border-stone-700 hover:bg-stone-800 bg-stone-900 text-neutral-200"
                                href="/sign-in"
                            >
                                Login
                            </a>

                                :
                                <div
                                    className="inline-flex items-center hover:border-cyan-500 justify-center px-4 py-2 rounded cursor-pointer px-6 py-2.5 border border-stone-700 hover:bg-stone-800 bg-stone-900 text-neutral-200">

                                    <SignOut />
                                    {/* //     <a
                        //     className="inline-flex items-center hover:border-cyan-500 justify-center px-4 py-2 rounded cursor-pointer px-6 py-2.5 border border-stone-700 hover:bg-stone-800 bg-stone-900 text-neutral-200"
                        //     href="/login"
                        // > */}
                                </div>
                        // </a>
                    }
                </div>
            </div >
        </div >


        // <nav className="flex-col items-center hidden pt-14 lg:flex">
        //     <div className="flex items-center justify-center text-neutral-400 bg-black gap-x-9 px-9 rounded-3xl py-2.5 z-10">
        //         <a className="text-white font-bold" href="/">
        //             EAXY
        //             {/* <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 176 41"
        //                 className="w-28 text-neutral-200 hover:text-neutral-100"
        //             >
        //                 <g fill="currentColor" clipPath="url(#logo-text_svg__a)">
        //                     <path d="M42.1 10.52v19.5h9.87V32H39.94V10.52h2.16ZM56.99 32H54.8l7.89-21.48h2.67L73.34 32h-2.25l-2.1-5.7h-9.9l-2.1 5.7Zm6.75-18.45-3.99 10.86h8.55l-4.02-10.86c-.09-.3-.24-.66-.27-.87-.03.18-.15.57-.27.87ZM79.686 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32Zm18.177-19.5v-1.98h15.39v1.98h-6.63V32h-2.16V12.5h-6.6ZM130.296 32h-12.87V10.52h12.84v1.98h-10.68v7.74h9.69v1.95h-9.69v7.83h10.71V32Zm7.746 0h-2.16V10.52h8.01c4.35 0 6.99 2.4 6.99 6.21 0 3.09-1.62 5.25-4.38 6l4.59 9.27h-2.4l-4.38-8.91h-6.27V32Zm0-19.53v8.67h5.91c2.97 0 4.71-1.62 4.71-4.35 0-2.79-1.83-4.32-4.77-4.32h-5.85ZM158.431 32h-2.16V10.52h2.19l11.82 17.88V10.52h2.13V32h-2.13l-11.85-17.88V32ZM9.71 11.337l13.694 3.475c.315.08.54.36.54.675l.018 13.388c0 .288.342.45.576.279l2.206-1.594a.704.704 0 0 0 .288-.558l-.01-6.887c-.008-4.358-3.042-8.157-7.409-9.264l-7.22-1.828a.733.733 0 0 0-.612.117l-2.197 1.593a.338.338 0 0 0 .126.604Z" />
        //                     <path d="M20.955 22.266c0-3.034-2.125-5.681-5.16-6.455l-6.634-1.684-2.827-.72a.734.734 0 0 0-.612.117L2.93 15.55.32 17.44a.704.704 0 0 0-.288.558l.009 6.888c0 4.357 3.043 8.165 7.4 9.264l7.22 1.828a.733.733 0 0 0 .613-.117l2.79-2.026 2.611-1.89a.704.704 0 0 0 .289-.559V28.64l-.01-6.374Zm-3.07-2.386.009 7.428c0 .288-.28.495-.568.423L9.71 25.804a.709.709 0 0 1-.54-.675L9.16 17.7c0-.288.28-.495.568-.423l7.616 1.927c.316.08.54.36.54.675Zm-.55 13.775L3.651 30.189a.709.709 0 0 1-.54-.676l-.018-13.36c0-.288.279-.495.567-.423l2.026.513c.234.063.405.27.405.504v3.736c.009 4.349 3.043 8.157 7.41 9.264l3.996 1.018c.235.063.406.27.406.504v1.963c0 .288-.28.495-.568.423Z" />
        //                 </g>
        //                 <defs>
        //                     <clipPath id="logo-text_svg__a">
        //                         <path fill="#fff" d="M0 0h175.33v41H0z" />
        //                     </clipPath>
        //                 </defs>
        //             </svg> */}
        //         </a>
        //         <a className="hover:text-neutral-300" href="/pricing">
        //             Want more cool stuff?
        //         </a>

        //         <a className="hover:text-neutral-300" href="/about">
        //             About
        //         </a>

        //         <div className="flex items-center text-sm gap-x-6">

        //             <a
        //                 className="inline-flex items-center justify-center px-4 py-2 rounded cursor-pointer px-6 py-2.5 border border-neutral-700 text-neutral-800 hover:bg-neutral-200 bg-neutral-400 shadow-accent"
        //                 href="/auth/sign-up"
        //             >
        //                 Try for Free
        //             </a>
        //         </div>
        //     </div>
        // </nav>
    )
}