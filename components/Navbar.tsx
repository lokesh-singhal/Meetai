import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-md">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <img width={170} src="/logo.svg" alt="" />
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#features" className="text-md font-medium text-gray-600 hover:text-blue-600">
                        Features
                    </Link>
                    <Link href="#about" className="text-md font-medium text-gray-600 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="#pricing" className="text-md font-medium text-gray-600 hover:text-blue-600">
                        Pricing
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/signin"
                        className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 max-sm:hidden"
                    >
                        Sign in
                    </Link>

                    <Link
                        href="/signup"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
