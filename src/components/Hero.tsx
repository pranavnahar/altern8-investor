"use client"
import * as React from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"



export const Hero = () => {
    return (
        <div
            className="w-full px-10 py-10 min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] bg-cover  bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(270deg, rgba(255, 255, 255, 0) -0.62%, rgba(255, 255, 255, 0.6) 100.14%), url('/hero.png')`,
            }}
        >
            <div className="w-full h-full flex flex-col justify-between ">
                {/* main heading container*/}
                <div className="flex flex-col mt-32  m-5 w-full">

                    <h1 className="text-32xl font-semibold leading-tight mt-0 mb-2">
                        Invest in Reliable Real-Estate
                    </h1>
                    <p className="text-xl font-normal">
                        Grow your wealth with premium assets by investing in fractional ownership or by advancing loan.
                    </p>

                </div>
                {/* search bar */}
                <div className="w-2/3 h-2/3 m-5 flex items-center ">
                    <Select>
                        <SelectTrigger className="w-[230px] h-[60px] rounded-l-full border-none focus:outline-none focus:ring-0">
                            <SelectValue placeholder="Asset Value" className="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[230px] h-[60px] border-none focus:outline-none focus:ring-0">
                            <SelectValue placeholder="Target IRR" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-[230px] h-[60px] rounded-r-full ">Search now</Button>
                </div>

            </div>

        </div>


    )
}
