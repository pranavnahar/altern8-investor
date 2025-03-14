import Link from "next/link"

import { Button } from "../components/ui/button"

// Remove the unused `props` parameter
function NavbarLogo() {
    return (
        <Link href="/" className="flex items-center">
            <img
                className="h-8 w-auto"
                alt="navbar logo"
                src="/Alter8_nav_logo.svg"
            />
        </Link>
    )
}

export default function Navbar() {
    return (
        <nav className="z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-h-20 mx-auto px-10 ">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center" prefetch={false}>
                        <NavbarLogo />
                    </Link>
                    <nav className="hidden md:flex gap-10">
                        <Link
                            href="#"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Invest
                        </Link>
                        <Link
                            href="/"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            About Us
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    )
}