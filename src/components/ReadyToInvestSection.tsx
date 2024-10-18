"use client"
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from './ui/button'
import { ALTERN8_INVESTMENT_TYPES } from '@/config/config'


function InvsestmentTypes(props: {
    setApi: CarouselApi
}) {
    const plugin = React.useRef(
        // Autoplay({ delay: 2000, stopOnInteraction: true })
        // AutoScroll({ speed: 2, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            // @ts-ignore
            setApi={props.setApi}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full h-full "
        >
            <CarouselContent className='w-full h-[730px]'>
                {ALTERN8_INVESTMENT_TYPES.map((investment, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 h-full">
                            <Card className='border-none h-full'>
                                <CardContent className="flex aspect-square h-full  p-2">
                                    <div className='flex-col w-full h-full p-1'>
                                        {/* photo */}
                                        <div className='w-full p-1 h-2/5 flex '>
                                            <img src={investment.image} alt="investment" className=' object-contain ' />
                                        </div>
                                        {/* descripton */}
                                        <div className='flex flex-col w-full h-2/5 p-1  '>
                                            <h3 className='text-2xl font-semibold'>{investment.heading}</h3>

                                            {investment.description.map((desc, idx) => (
                                                <div key={idx} className="flex gap-5 mt-2  h-full w-full p-3">
                                                    {/* desrciption sno. */}
                                                    <div className=''>
                                                        <h5 className='font-semibold text-lg mt-2'>0{idx + 1}</h5>
                                                    </div>

                                                    <div className='flex flex-col gap-2  w-full h-full'>
                                                        <h5 className='font-semibold text-lg'>{desc.heading}</h5>
                                                        <p className='text-sm' >{desc.about}</p>
                                                    </div>

                                                </div>
                                            ))}

                                        </div>

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


export const ReadyToInvestSection = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    const handleCarouselMove = (index: number) => {
        setCurrent(index)
        api?.scrollTo(index)
    }

    return (
        <div className="w-full h-[900px] px-10 py-10">
            <div className="flex gap-1  h-full w-full ">
                {/* right */}
                <div className='w-1/2 h-full p-1 '>
                    {/* heading and buttons */}
                    <div className='h-1/3 w-full flex flex-col '>
                        <h1 className="text-31xl font-semibold leading-tight mt-0 mb-2">Ready to invest <br /> in Real-Estate?</h1>
                        <p>Choose between advancing loans or <br /> fractional ownership and start building <br /> wealth with Altern8 Club today.</p>

                    </div>
                    <div className='h-2/3 w-full gap-5 flex flex-col p-3'>

                        {ALTERN8_INVESTMENT_TYPES.map((investment, index) => (
                            <Button key={index} className={`w-[510px] h-[75px] rounded-full bg-inherit text-black border-black border hover:bg-slate-100 
                                ${current === index + 1 ? 'bg-black text-white hover:text-white hover:bg-black' : ""}
                                `} onClick={() => handleCarouselMove(index)}> {investment.heading} </Button>

                        ))}

                    </div>

                </div>
                {/* left */}
                <div className='w-1/2 h-full   p-3'>
                    {/* @ts-ignore */}
                    <InvsestmentTypes setApi={setApi} />
                </div>

            </div>
        </div>

    )
}
