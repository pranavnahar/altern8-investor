/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

function NavbarLogo(props: any) {
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
            <div className="w-full  max-h-20 mx-auto px-10 ">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center" prefetch={false}>
                        <NavbarLogo className="h-6 w-6" />
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
                        <Link
                            href="/"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Contact Us
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Login
                        </Link>
                        <Button variant={"outline"}>
                            <Link
                                href="/"
                                className="font-medium flex items-center text-sm transition-colors"
                                prefetch={false}
                            >
                                Reserve Access
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

