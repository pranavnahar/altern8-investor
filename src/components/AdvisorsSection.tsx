import { ALTERN8_ADVISORS } from '@/config/config'
import React, { forwardRef } from "react";

export const AdvisorsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div  ref={ref} {...props} className="bg-[#FFF8EF] w-full h-[850px] px-10 py-10">
            <div className="flex mt-5 flex-col gap-3 w-full h-full">
                <h1 className="text-31xl font-semibold leading-tight mt-0 mb-2">Board of advisors</h1>

                {/* 6x6 grid */}
                <div className=" mt-3 p-10 grid grid-cols-6 grid-rows-2 gap-5">
                    {ALTERN8_ADVISORS.map((advisor, index) => (
                        <div key={index} className="relative group w-[190px] h-[240px] bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            {/* Image */}
                            <img
                                src={advisor.image}
                                alt="Advisor"
                                className="object-cover w-full h-full"
                            />

                            {/* Always-visible overlay at the bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-2 flex flex-col justify-end">
                                <p className="text-white text-[16px]">{advisor.name}</p>
                                <span className='text-gray-200 text-[12px]'>{advisor.post}</span>
                                <span className='text-[12px]  text-[#BF8EFE]'>{advisor.location}</span>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
});
