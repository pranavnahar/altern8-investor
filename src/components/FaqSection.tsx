"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { ALTERN8_AREA_OF_INTEREST, ALTERN8_FAQ } from "../config/config";
import React, { forwardRef, useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type FormValues = {
  firstName: string;
  secondName: string;
  email: string;
  mobileNumber: string;
  areaOfInterest: string[];
  comments: string;
  termsAgreed: boolean;
  investmentAppetite: string;
};

const investmentOptions = [
  "5 lakh - 10 lakh",
  "10 lakh - 15 lakh",
  "15 lakh - 20 lakh",
  "20 lakh - 30 lakh",
  "30 lakh - 50 lakh",
  "50 lakh - 1 crore",
  "Above 1 crore",
];

const phoneInputCustomStyles = `
  .PhoneInput {
    background-color: #F5F5F5;
    border-radius: 0.375rem;
  }
  .PhoneInputInput {
    background-color: #F5F5F5;
    border: none;
    padding: 0.5rem;
    width: 100%;
    outline: none;
    font-size: 1rem;
     border-radius: 0.375rem;
  }
  .PhoneInputInput:focus {
    outline: none;
    ring: none;
  }
  .PhoneInputCountry {
    padding-left: 0.5rem;
  }
`;

export const FaqSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    secondName: "",
    email: "",
    mobileNumber: "",
    areaOfInterest: [] as string[],
    comments: "",
    termsAgreed: true,
    investmentAppetite: "",
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

  const handlePhoneChange = (value: string | undefined) => {
    setFormValues((prev) => ({
      ...prev,
      mobileNumber: value || "", // Provide empty string as fallback
    }));
  };

  const handleInvestmentChange = (option: string) => {
    setFormValues((prev) => ({
      ...prev,
      investmentAppetite: option,
    }));
  };
  const validateForm = () => {
    let isValid = true;

    // Check for empty required fields
    if (!formValues.firstName.trim()) {
      toast.error("Please enter your first name");
      isValid = false;
      return;
    }

    if (!formValues.secondName.trim()) {
      toast.error("Please enter your second name");
      isValid = false;
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      toast.error("Please enter your email address");
      isValid = false;
      return;
    } else if (!emailPattern.test(formValues.email)) {
      toast.error("Please enter a valid email address");
      isValid = false;
      return;
    }

    if(!formValues.investmentAppetite){
      toast.error("Please select your investment appetite range.");
      isValid = false;
      return;
    }

    // Phone validation
    if (!formValues.mobileNumber) {
      toast.error("Please enter your phone number");
      isValid = false;
      return;
    } else if (!isPossiblePhoneNumber(formValues.mobileNumber)) {
      toast.error("Please enter a valid phone number with country code");
      isValid = false;
      return;
    }

    if (!isValidPhoneNumber(formValues.mobileNumber)) {
      toast.error("Invalid phone number for the selected country");
      isValid = false;
      return isValid;
    }

    // Area of Interest validation
    if (formValues.areaOfInterest.length === 0) {
      toast.error("Please select at least one area of interest");
      isValid = false;
      return;
    }

    // Comments validation
    if (!formValues.comments.trim()) {
      toast.error("Please enter your comments or questions");
      isValid = false;
      return;
    } else if (formValues.comments.length > 2000) {
      toast.error("Comments must not exceed 2000 characters");
      isValid = false;
      return;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValues.termsAgreed) {
      toast.error("Please accept our privacy policy to continue");
      return;
    }

    try {
      if (validateForm()) {
        // Show loading toast
        const loadingToast = toast.loading("Submitting your form...");

        // Simulate API call - replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Update loading toast to success
        toast.update(loadingToast, {
          render: "Form submitted successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        // Optional: Reset form
        setFormValues({
          firstName: "",
          secondName: "",
          email: "",
          mobileNumber: "",
          areaOfInterest: [],
          comments: "",
          termsAgreed: false,
          investmentAppetite: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] w-full h-full px-10 py-10">
      <style>{phoneInputCustomStyles}</style>
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
        <div
          id="contact-us"
          ref={ref}
          {...props}
          className="w-2/5 p-5 items-center flex"
        >
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
                    {/* <Input
                      className="bg-[#F5F5F5]"
                      id="mobileNumber"
                      placeholder="Mobile no"
                      type="number"
                      value={formValues.mobileNumber}
                      onChange={handleInputChange}
                    /> */}

                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={formValues.mobileNumber}
                      onChange={handlePhoneChange}
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

                  <div className="relative">
                    <label
                      htmlFor="investment"
                      className="block text-gray-400 text-sm mb-1"
                    >
                      Investment Appetite*
                    </label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="w-full justify-between bg-transparent text-sm border-0 border-b border-gray-500 text-gray-500 rounded-none text-left hover:bg-transparent py-2"
                        >
                          {formValues.investmentAppetite ||
                            "Select an investment range"}
                          <ChevronDown className="h-4 w-4 opacity-50 float-right" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] bg-white text-sm">
                        {investmentOptions.map((option) => (
                          <DropdownMenuItem
                            key={option}
                            onClick={() => handleInvestmentChange(option)}
                            className="cursor-pointer hover:bg-gray-100"
                          >
                            {option}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
                      className="text-[11px] font-medium leading-none"
                    >
                      By clicking the button you agree to our terms, privacy
                      policy and refund policy.
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
