"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { ALTERN8_AREA_OF_INTEREST, ALTERN8_FAQ } from "../config/config";
import React, { forwardRef, useState } from "react";

import { toast } from "react-toastify";
type FormValues = {
    firstName: string;
    secondName: string;
    email: string;
    mobileNumber: string;
    areaOfInterest: string[];
    comments: string;
    termsAgreed: boolean;
  };

export const FaqSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    secondName: "",
    email: "",
    mobileNumber: "",
    areaOfInterest: [] as string[],
    comments: "",
    termsAgreed: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    console.log(typeof e, "pppo0");

    // Narrowing for checkboxes
    if (typeof e === "boolean") {
      setFormValues((prev) => ({
        ...prev,
        termsAgreed: e,
      }));
    } else {
      const { id, value } = e.target;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFormValues((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleCheckboxChange = (choice: string) => {
    setFormValues((prev) => {
      const updatedInterest = prev.areaOfInterest.includes(choice)
        ? prev.areaOfInterest.filter((item) => item !== choice) // Remove if already selected
        : [...prev.areaOfInterest, choice]; // Add if not already selected

      return { ...prev, areaOfInterest: updatedInterest };
    });
  };

  const validateForm = () => {
    let isValid = true;

    // Email validation
    const companyEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const personalEmailDomains = ["gmail.com", "yahoo.com", "outlook.com"];
    const emailDomain = formValues.email.split("@")[1];

    if (!companyEmailPattern.test(formValues.email)) {
      toast.error("Invalid email address.");
      isValid = false;
    } else if (personalEmailDomains.includes(emailDomain)) {
      toast.error("Please provide a company email address.");
      isValid = false;
    }else if (formValues.comments.length > 2000) {
      toast.error("Comments and questions maximum be in 2000 characters only.");
      isValid = false;
    }

    // Phone number validation
    const phonePattern = /^\+\d{1,3}\d{7,}$/; // Country code and 7+ digits
    if (!phonePattern.test(formValues.mobileNumber)) {
      toast.error("Phone number must include a valid country code.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.termsAgreed) {
      if (validateForm()) {
        console.log(formValues);
        toast.success("Form submitted successfully!");
      }
    } else {
      toast.error("Please accept our privacy policy.");
    }
  };

  return (
    <div className="bg-[#F5F5F5] w-full h-full px-10 py-10">
      <div className="flex mt-5  gap-3">
        <div className="w-3/5 flex flex-col gap-5">
          <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">
            FAQ
          </h1>
          <Accordion className="pl-2" type="single" collapsible>
            {ALTERN8_FAQ.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionTrigger className=" hover:no-underline">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </AccordionTrigger>
                <AccordionContent className="">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div id="contact-us" ref={ref} {...props} className="w-2/5 p-5 items-center flex">
          <Card className="w-[470px] h-auto">
            <CardHeader>
              <CardTitle>Do you have any questions?</CardTitle>
              {/* <CardDescription>
                                You can feel free to ask us any questions and we will answer you as soon as possible.
                            </CardDescription> */}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  {/* Input Fields */}
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      className="bg-[#F5F5F5]"
                      id="firstName"
                      placeholder="First Name"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    <Input
                      className="bg-[#F5F5F5]"
                      id="secondName"
                      placeholder="Second Name"
                      value={formValues.secondName}
                      onChange={handleInputChange}
                    />
                    <Input
                      className="bg-[#F5F5F5]"
                      id="email"
                      placeholder="Email"
                      type="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <Input
                      className="bg-[#F5F5F5]"
                      id="mobileNumber"
                      placeholder="Mobile no"
                      type="number"
                      value={formValues.mobileNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Area of Interest */}
                  <div className="flex flex-col space-y-2">
                    <label className="block mb-2 text-xs text-gray-400 uppercase">
                      Area of Interest
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {ALTERN8_AREA_OF_INTEREST.map((choice) => (
                        <div
                          key={choice}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={choice}
                            checked={formValues.areaOfInterest.includes(choice)}
                            onCheckedChange={() => handleCheckboxChange(choice)}
                          />
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

                  {/* Comments */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="block mb-2 text-xs text-gray-400 uppercase">
                      Comments, questions, and requests
                    </label>
                    <textarea
                      className="w-full bg-[#F5F5F5] px-3 py-2 text-gray-600 rounded-md"
                      id="comments"
                      placeholder="Your comments or questions or request"
                      rows={4}
                      value={formValues.comments}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="flex justify-between mt-5">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="termsAgreed"
                      checked={formValues.termsAgreed}
                      onCheckedChange={handleInputChange}
                    />
                    <label
                      htmlFor="termsAgreed"
                      className="text-[12px] font-medium leading-none"
                    >
                      By clicking the button you agree to the privacy policy.
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="border text-black border-black bg-[#F5F5F5] hover:text-white w-1/4 rounded-full"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
});

FaqSection.displayName = "FaqSection";