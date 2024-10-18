"use client"
import React from 'react'
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
export const FaqSection = () => {
    return (
        <div className="bg-[#F5F5F5] w-full h-[600px] px-10 py-10">
            <div className="flex mt-5  gap-3">
                <div className='w-3/5 flex flex-col gap-5'>
                    <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">FAQ</h1>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" >
                            <AccordionTrigger className='h-[70px] hover:no-underline'>
                                <h4 className='text-lg font-semibold'>
                                    Is it accessible?
                                </h4></AccordionTrigger>
                            <AccordionContent className='h-[70px]' >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" >
                            <AccordionTrigger className='h-[70px] hover:no-underline'>
                                <h4 className='text-lg font-semibold'>
                                    Is it accessible?
                                </h4></AccordionTrigger>
                            <AccordionContent className='h-[70px]' >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" >
                            <AccordionTrigger className='h-[70px] hover:no-underline'>
                                <h4 className='text-lg font-semibold'>
                                    Is it accessible?
                                </h4></AccordionTrigger>
                            <AccordionContent className='h-[70px]' >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" >
                            <AccordionTrigger className='h-[70px] hover:no-underline'>
                                <h4 className='text-lg font-semibold'>
                                    Is it accessible?
                                </h4></AccordionTrigger>
                            <AccordionContent className='h-[70px]' >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" >
                            <AccordionTrigger className='h-[70px] hover:no-underline'>
                                <h4 className='text-lg font-semibold'>
                                    Is it accessible?
                                </h4></AccordionTrigger>
                            <AccordionContent className='h-[70px]' >
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>


                    </Accordion>

                </div>
                <div className='w-2/5 p-5 items-center flex' >
                    <Card className="w-[470px] h-[390px]">
                        <CardHeader>
                            <CardTitle>Do you have any questions?</CardTitle>
                            <CardDescription>You can feel free to ask us any questions and we will answer you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input className='bg-[#F5F5F5]' id="email" placeholder="EMAIL" />
                                        <Input className='bg-[#F5F5F5] h-[100px]' id="question" placeholder="" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="w-3/4 text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    By clicking on the button you agree to the privacy policy
                                </label>
                            </div>
                            <Button className='border text-black border-black bg-[#F5F5F5] hover:text-white w-1/4 rounded-full'>Send</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
