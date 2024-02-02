export default function FooterCTA() {
    return (
        <section className="z-[10000] overflow-hidden bg-gradient-to-r  text-neutral-200 border-neutral-800 shadow-xl shadow-neutral-600 border from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 rounded-2xl bg-center bg-cover bg-footer-sm sm:bg-footer">
            <div className="container pb-12 mx-auto text-center pt-16">
                <h2 className="mb-6 text-4xl sm:text-5xl">Get started</h2>
                <p className="text-base 2xl:text-lg">
                    Ready to understand yourself?
                </p>
                <p className="text-base 2xl:text-lg mb-7">
                    Get quantified
                </p>
                <a
                    className="inline-flex  border border-stone-700 hover:bg-stone-800 hover:border-cyan-500 bg-stone-900 items-center justify-center px-4 py-2 rounded cursor-pointer text-white  disabled:bg-accent-400 disabled:hover:bg-accent-400 disabled:text-accent-100 !px-16 !py-3 mx-auto rounded-xl max-w-sm"
                    href="/auth/sign-up"
                >
                    Try us out
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="ml-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
            <footer className="flex flex-col items-center justify-center pb-12">
                <div className="flex justify-center mt-4 gap-x-4">
                    <a href="/legal/privacy">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="/legal/terms">
                        <p>Terms &amp; Conditions</p>
                    </a>
                </div>
                <p className="mt-2">© 2024 TAL</p>
            </footer>
        </section>
    )
}