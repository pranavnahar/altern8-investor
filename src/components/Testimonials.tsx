"use client";
import {
  ALTERN8_ASSET_TYPES,
  ALTERN8_CUSTOMER_TESTIMONIALS,
} from "../config/config";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

// Define the shape of testimonial data
interface Testimonial {
  customerName?: string;
  title?: string;
  testimonial?: string;
  description?: string;
  icon?: string;
}

interface TestimonialCarouselProps {
  data: Testimonial[];
}

function TestimonialCarousel({ data }: TestimonialCarouselProps) {
    const plugin = React.useRef(
      AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: false })
    );
  
    const itemsToShow = 2; 
    const duplicatedData = data.length < itemsToShow * 2 ? [...data, ...data] : data;
  
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
        <CarouselContent className="w-full h-[360px] max-h-full ">
          {duplicatedData.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="w-full h-full max-h-full basis-1/2 p-2"
            >
              <div className="w-full h-full">
                <Card className="w-full h-full max-h-full">
                  <CardContent className="w-full h-full flex items-center justify-center p-5 bg-[#F5F5F5] hover:bg-zinc-50">
                    <div className="flex flex-col gap-2 w-full h-full p-1">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-2">
                          <h4 className="text-xl font-semibold">
                            {testimonial.customerName || testimonial.title}
                          </h4>
                        </div>
                      </div>
                      <div className="h-full w-full p-1">
                        <p className="text-sm">
                          {testimonial.testimonial || testimonial.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  

function TestimonialCarousel1({ data }: TestimonialCarouselProps) {
  const plugin = React.useRef(
    // Autoplay({ delay: 2000, stopOnInteraction: true })
    AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: false })
  );

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
      <CarouselContent className="w-full  h-[210px]  max-h-full ">
        {data.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="w-full h-full max-h-full basis-1/3 p-2"
          >
            <div className="w-full h-full   ">
              <Card className=" w-full h-full max-h-full ">
                <CardContent className="w-full h-full flex items-center justify-center p-5 bg-[#F5F5F5]  hover:bg-zinc-50">
                  <div className="flex flex-col gap-2  w-full h-full  p-1">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-xl font-semibold">
                          {testimonial.customerName || testimonial.title}
                        </h4>
                      </div>
                    </div>
                    <div className="h-full w-full p-1">
                      <p className="text-sm">
                        {testimonial.testimonial || testimonial.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

interface TestimonialsProps {
  data: Testimonial[];
  name: string;
  whichTestimonial: number;
}

export const Testimonials = ({
  data,
  name,
  whichTestimonial,
}: TestimonialsProps) => {
  const middleIndex = Math.ceil(data.length / 2); // Find the middle index
  const firstHalf = data.slice(0, middleIndex);
  const secondHalf = data.slice(middleIndex);

  return (
    <div className="w-full px-10 py-10 ">
      <div className="flex mt-5 flex-col gap-3">
        <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">
          {name}
        </h1>
      </div>
      <div className="mt-6 p-1">
        {whichTestimonial === 1 ? (
          <TestimonialCarousel1 data={data} />
        ) : (
          <>
            <TestimonialCarousel data={firstHalf} />
            <br />
            <TestimonialCarousel data={secondHalf} />
          </>
        )}
      </div>
    </div>
  );
};
