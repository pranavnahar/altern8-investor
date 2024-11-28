"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { ALTERN8_AREA_OF_INTEREST, ALTERN8_FAQ } from '@/config/config'
import React, { forwardRef } from "react";
export const FaqSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="bg-[#F5F5F5] w-full h-full px-10 py-10">
            <div className="flex mt-5  gap-3">
                <div className='w-3/5 flex flex-col gap-5'>
                    <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">FAQ</h1>
                    <Accordion className='pl-2' type="single" collapsible>
                        {ALTERN8_FAQ.map((item, index) => (
                            <AccordionItem key={index} value={item.value}>
                                <AccordionTrigger className=' hover:no-underline'>
                                    <h4 className='text-lg font-semibold'>{item.title}</h4>
                                </AccordionTrigger>
                                <AccordionContent className=''>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
                <div  ref={ref} {...props} className="w-2/5 p-5 items-center flex">
                    <Card className="w-[470px] h-auto">
                        <CardHeader>
                            <CardTitle>Do you have any questions?</CardTitle>
                            {/* <CardDescription>
                                You can feel free to ask us any questions and we will answer you as soon as possible.
                            </CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                    <Input className="bg-[#F5F5F5]" id="first_name" placeholder="First Name" />
                                    <Input className="bg-[#F5F5F5]" id="Second_name" placeholder="Second Name" />
                                        <Input className="bg-[#F5F5F5]" id="company_name" placeholder=" Name" />
                                        <Input className="bg-[#F5F5F5]" id="company_email" placeholder="Email" type="email" />
                                        <Input className="bg-[#F5F5F5]" id="number" placeholder="Mobile no" type="number" />
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <label className="block mb-2 text-xs text-gray-400 uppercase">Area of Interest</label>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            {ALTERN8_AREA_OF_INTEREST.map((choice) => (
                                                <div key={choice} className="flex items-center space-x-2">
                                                    <Checkbox id={choice} />
                                                    <label
                                                        htmlFor={choice}
                                                        className="text-sm font-medium leading-none text-gray-600 cursor-pointer"
                                                    >
                                                        {choice}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="block mb-2 text-xs text-gray-400 uppercase">
                                            Comments, questions and requests.
                                        </label>
                                        <textarea
                                            className="w-full bg-[#F5F5F5] px-3 py-2 text-gray-600 rounded-md"
                                            id="company_query"
                                            placeholder="Your comments or questions or request"
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-[12px] font-medium leading-none"
                                >
                                    By clicking the button you agree to the privacy policy.
                                </label>
                            </div>
                            <Button className="border text-black border-black bg-[#F5F5F5] hover:text-white w-1/4 rounded-full">
                                Send
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
});
