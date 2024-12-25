"use client"
import React from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../components/ui/carousel"
import { ALTER8_FEATURES, ALTERN8_INVESTMENMTS, ALTERN8_SERVICES } from '../config/config'
import { Button } from './ui/button'
import Link from 'next/link'

function Alter8Features() {
    const plugin = React.useRef(
        // Autoplay({ delay: 2000, stopOnInteraction: true })
        AutoScroll({ speed: 2, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full h-[190px] max-h-full ">
                {ALTER8_FEATURES.map((feature, index) => (
                    <CarouselItem key={index} className="w-full h-full max-h-full basis-2/5 ">
                        <div className="w-full h-full p-1 ">
                            <Card className=" w-full h-full max-h-full bg-[#FFFFFF] ">
                                <CardContent className="w-full h-full flex items-center justify-center p-5">
                                    <div className='flex flex-col gap-5  w-full h-full'>
                                        {/* heading */}
                                        <div className='flex items-center gap-4'>
                                            <img src={feature.icon} alt='logo' />
                                            <h4 className='text-xl font-semibold'>{feature.text}</h4>
                                        </div>

                                        <p className='pl-2'>{feature.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

function InvestorInput(props: { label: string, amount: string }) {
    return (
        <div className='flex flex-col gap-1 w-[290px] h-[80px]'>
            <span>{props.label}</span>
            <div className='flex items-center w-full h-full justify-between bg-[#F5F5F5] p-2'>
                <div className='flex items-center gap-3'>
                    <img src="/plusIcon.svg" alt="plus" />
                    <span className='font-semibold'>{props.amount}</span>
                </div>
                <img src="/minusIcon.svg" alt="minus" />
            </div>

        </div>
    )
}

type IInvestmentCard = {
    heading: string,
    amount: number,
    investmentRateDescription: string,
    // monthlyReturnDescription: string | null,
    active: boolean
}

function InvestmentCard(props: IInvestmentCard) {
    return (
        <div className='h-[200px] w-[290px]'>
            <Card className={`w-full h-full max-h-full border-4 border-[#F5F5F5] ${props.active ? "bg-[#F5F5F5]" : ""}`}>
                <CardContent className="w-full h-full flex items-center justify-center p-5">
                    <div className='flex justify-between flex-col gap-3  w-[70%] h-full '>
                        <h4 className='text-2xl font-semibold h-72'>{props.heading}</h4>
                        <p className=' text-4xl font-semibold'>{props.amount}</p>
                        <p className='text-lg leading-[10px]'>{props.investmentRateDescription}</p>
                        {/* <p className=' text-sm'>{props.monthlyReturnDescription}</p> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )


}

function InvestorCalculator() {

    return (
        <div className=" w-full h-full px-10 py-5">
            {/* calculator inputs */}
            <div className='p-1 w-3/4 h-2/5 flex items-center gap-10 '>
                <InvestorInput amount='1,000,000' label={"If i invest a sum of"} />
                <InvestorInput amount='5 years' label={"For a period of"} />
                <div className='flex h-[50%] items-end'>
                    <Button className='w-[290px] h-[60px] rounded-full'>Show Me Returns</Button>
                </div>
            </div>
            {/* calculator cards */}
            <div className='mt-2 p-1 w-4/4 h-3/5  flex items-center gap-10 '>
                {ALTERN8_INVESTMENMTS.map((investment, index) => (
                    <InvestmentCard
                        key={index}
                        active={index === 0 ? true : false}
                        heading={investment.heading}
                        // heading={<h3 className="heading w-40 leading-[25px]">{investment.heading}</h3>} 
                        amount={investment.amount}
                        investmentRateDescription={investment.investmentRateDescription}
                    // monthlyReturnDescription={investment.monthlyReturnDescription}
                    />
                ))}
            </div>

        </div>
    )
}

export const WhySection = () => {
    return (
        <div className="bg-[#F7F7FF] w-full h-full px-10 py-10">

            <div className="flex mt-5 flex-col gap-3">
                <h1 className="text-31xl font-semibold leading-tight mt-0 mb-2">Why Altern8</h1>
                <p>At Altern8 Club, our experienced team empower you to invest in real estate through innovative fractional ownership and high-yield fixed-income products tailored to your financial goals. Ensuring you can confidently grow your wealth.</p>

                {/* carousel */}
                <div className='mt-5 h-[190px]'>
                    <Alter8Features />
                </div>
                {/* investor calculator */}
                <div className='mt-10 bg-[#FFFFFF] h-[480px]  p-1'>
                    <InvestorCalculator />
                </div>
                <div className='mt-10 h-[380px] p-1'>
                    <div className='w-full h-full flex flex-col gap-5 '>
                        <h2 className='text-21xl font-semibold'>Real Estate Developer Due Diligence stack with 70+ micro risk factor analysis</h2>

                        <div className='p-2 mt-7 flex gap-10  items-center'>
                            {ALTERN8_SERVICES.map((feature, index) => (
                                <div className='flex justify-between flex-col gap-2 flex-grow' key={index}>
                                    <img className='h-12 w-12' src={feature.icon} alt="logo" />
                                    <p className='text-lg font-semibold'>{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#"
                            className=" hover:underline"
                            prefetch={false}
                        >
                            <div className='mt-5 flex gap-2 items-center'>
                                <p className='text-lg font-semibold'> Learn more</p>
                                <img src="/arrow.svg" className='w-6 h-6' alt="learn more" />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}
