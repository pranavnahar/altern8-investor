"use client"
import { ALTERN8_ASSET_TYPES, ALTERN8_CUSTOMER_TESTIMONIALS } from '@/config/config'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Badge } from 'lucide-react'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

function TestimonialCarousel() {

    const plugin = React.useRef(
        // Autoplay({ delay: 2000, stopOnInteraction: true })
        AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full h-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full  h-[330px]  max-h-full ">
                {ALTERN8_CUSTOMER_TESTIMONIALS.map((testimonial, index) => (
                    <CarouselItem key={index} className="w-full h-full max-h-full basis-1/3 p-2">
                        {/* card */}
                        <div className="w-full h-full   ">
                            <Card className=" w-full h-full max-h-full">
                                <CardContent className="w-full h-full flex items-center justify-center p-5 bg-[#F5F5F5]">
                                    <div className='flex flex-col gap-2  w-full h-full  p-1'>
                                        {/* heading */}
                                        <div className='flex items-center gap-4'>
                                            <Avatar className=''>
                                                <AvatarImage className='w-20 rounded-full  h-20' src={testimonial.icon} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className='flex flex-col gap-2'>
                                                <h4 className='text-xl font-semibold'>{testimonial.customerName}</h4>
                                                <p >{testimonial.subHeading}</p>
                                            </div>

                                        </div>
                                        {/* about */}
                                        <div className='h-full w-full p-1'>
                                            <p className="text-sm">{testimonial.testimonial}</p>
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

export const Testimonials = () => {
    return (
        <div className="w-full h-[550px] px-10 py-10 ">
            <div className="flex mt-5 flex-col gap-3">
                <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">Customers about us </h1>
            </div>
            <div className='mt-6 p-1 h-[350px] '>
                <TestimonialCarousel />

            </div>
        </div>
    )
}
