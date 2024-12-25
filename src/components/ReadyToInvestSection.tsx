"use client";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ALTERN8_INVESTMENT_TYPES } from "@/config/config";
import React, { forwardRef } from "react";

export const ReadyToInvestSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleCarouselMove = (index: number) => {
    setCurrent(index);
    api?.scrollTo(index);
  };

  return (
    <div ref={ref} {...props} className="w-full h-[900px] px-10 py-10">
      <div className="flex gap-1 h-full w-full ">
        {/* Right */}
        <div className="w-1/2 h-fit p-3">
          {/* Heading and Buttons */}
          <div className="w-full flex  mb-10 flex-col">
            <h1 className="text-3xl font-semibold leading-tight mt-0 mb-2">
              Ready to invest in Fractional Real-Estate?
            </h1>
            <p>
              Choose between advancing loans or fractional ownership and start
              building <br /> wealth with Altern8 Club today.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 p-3">
            {ALTERN8_INVESTMENT_TYPES.map((investment, index) => (
              <Button
                key={index}
                className={`w-[510px] h-[75px] rounded-full bg-inherit text-black border-black border hover:bg-slate-100 ${
                  current === index + 1
                    ? "bg-black text-white hover:text-white hover:bg-black"
                    : ""
                }`}
                onClick={() => handleCarouselMove(index)}
              >
                {investment.heading
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Button>
            ))}
          </div>
        </div>
        {/* Left */}
        <div className="w-1/2 h-full p-3">
          {/* Carousel with Navigation */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="w-full h-[730px]">
              {ALTERN8_INVESTMENT_TYPES.map((investment, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full w-[550px] mx-auto">
                    <Card className="border-none h-full">
                      <CardContent className="flex aspect-square h-full p-2">
                        <div className="flex-col w-full h-full p-1">
                          {/* Photo */}
                          <div className="w-full p-1 h-2/5 flex">
                            <img
                              src={investment.image}
                              alt="investment"
                              className="rounded-xl w-[500px] object-cover object-center"
                            />
                          </div>
                          {/* Description */}
                          <div className="flex flex-col w-full h-2/5 p-1">
                            <h3 className="text-2xl font-semibold">
                              {investment.heading}
                            </h3>
                            {investment.description.map((desc, idx) => (
                              <div
                                key={idx}
                                className="flex gap-5 mt-2 h-full w-full p-3"
                              >
                                {/* Description No. */}
                                <div>
                                  <h5 className="font-semibold text-lg mt-2">
                                    0{idx + 1}
                                  </h5>
                                </div>
                                <div className="flex flex-col gap-2 w-[70%] h-full">
                                  <h5 className="font-semibold text-lg">
                                    {desc.heading}
                                  </h5>
                                  <p className="text-sm">{desc.about}</p>
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

            <CarouselPrevious className="absolute left-2 top-[50%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-[50%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
              &#9654;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
});

export default ReadyToInvestSection;
