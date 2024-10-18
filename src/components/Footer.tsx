import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-[#262626] w-full h-[450px] px-20 py-20">
            <div className="flex mt-2 h-full w-full gap-3  p-1">

                <div className='w-1/2 flex gap-5 p-2 '>
                    <div className='w-1/3 flex flex-col p-2  gap-3'>
                        <h4 className='text-2xl mb-3 font-semibold text-white'>Company</h4>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Our Team
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Careers
                        </Link>
                    </div>
                    {/* 2 */}
                    <div className='w-1/3 flex flex-col p-2 gap-3'>
                        <h4 className='text-2xl mb-3 font-semibold text-white'>Altern8</h4>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Resources
                        </Link>
                    </div>
                    {/* 3 */}
                    <div className='w-1/3 flex flex-col p-2  gap-3'>
                        <h4 className='text-2xl mb-3 font-semibold text-white'>Get Started</h4>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex items-center text-sm transition-colors hover:underline"
                            prefetch={false}
                        >
                            Sign Up
                        </Link>

                    </div>

                </div>

                <div className='w-1/2 flex items-start justify-end'>
                    <Link
                        href="#"
                        className="text-white flex items-center text-sm transition-colors hover:underline"
                        prefetch={false}
                    >
                        <img src="/alter8_footer.svg" alt="Altern8" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
