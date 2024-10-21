"use client"
import { ALTERN8_ASSET_TYPES } from '@/config/config'
import AutoScroll from 'embla-carousel-auto-scroll'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Badge } from './ui/badge'





function DiverseAssets() {
    const plugin = React.useRef(
        // Autoplay({ delay: 2000, stopOnInteraction: true })
        AutoScroll({ speed: 3, stopOnMouseEnter: true, stopOnInteraction: false })
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
            <CarouselContent className="w-full  h-full max-h-full ">
                {ALTERN8_ASSET_TYPES.map((asset, index) => (
                    <CarouselItem key={index} className="w-full h-full max-h-full basis-[17%]">
                        <div className="w-full h-full p-1   ">
                            <Badge variant="outline" className='h-[45px] w-[185px] flex items-center justify-center border-2 border-black hover:bg-slate-50'>
                                <span className='font-semibold text-sm'>{asset}</span>
                            </Badge>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export const DiverseAssetSection = () => {
    return (
        <div className="bg-[#EEFAFF] w-full h-[450px] px-10 py-10">
            <div className="flex mt-5 flex-col gap-3">
                <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">Diverse asset classes
                    <br /> in real-estate </h1>
                <p>Explore a multitude of asset classes in the real-estate sector,<br /> each meticulously curated for optimal investment opportunity.</p>

                <div className='mt-6 p-1 h-[70px]'>
                    <DiverseAssets />
                </div>
            </div>

        </div>
    )
}
