"use client";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const text = "Revolutionizing Lending Through Innovation, AI and Insight with Simplified Lending Stack.";
  const url = "https://j59d8sfv-3001.inc1.devtunnels.ms/";
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/000/457/141/original/landing-page-template-of-website-design-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg";
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}&media=${imageUrl}`,
      "_blank"
    );
  };

  const shareViaEmail = () => {
    window.open(
      `mailto:?subject=Check this out!&body=${text} ${url} ${imageUrl}`,
      "_blank"
    );
  };

  const shareOnWhatsapp = () => {
    window.open(`https://wa.me/?text=${text} ${url} ${imageUrl}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}&summary=${text}&source=${imageUrl}`,
      "_blank"
    );
  };

  const icons = [
    {
      id: "facebook",
      src: "/facebook.png", // Replace with your actual path
      alt: "Facebook",
      onClick: shareOnFacebook,
    },
    {
      id: "twitter",
      src: "/x1.png", // Replace with your actual path
      alt: "Twitter",
      onClick: shareOnTwitter,
    },
    {
      id: "email",
      src: "/email.png", // Replace with your actual path
      alt: "Email",
      onClick: shareViaEmail,
    },
    {
      id: "whatsapp",
      src: "/whatsapp.png", // Replace with your actual path
      alt: "WhatsApp",
      onClick: shareOnWhatsapp,
    },
    {
      id: "linkedin",
      src: "/linkedin.png", // Replace with your actual path
      alt: "LinkedIn",
      onClick: shareOnLinkedIn,
    },
  ];

  return (
    <div className="bg-[#262626] w-full h-[450px] px-20 py-20">
      <div className="flex mt-2 h-full w-full gap-3  p-1">
        <div className="w-1/2 flex gap-5 p-2 ">
          <div className="w-1/3 flex flex-col p-2  gap-3">
            <h4 className="text-2xl mb-3 font-semibold text-white">Altern8</h4>
            <Link
              href="/about-us"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
          {/* 3 */}
          {/* <div className="w-1/3 flex flex-col p-2  gap-3">
            <h4 className="text-2xl mb-3 font-semibold text-white">
              Get Started
            </h4>
            <Link
              href="#"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div> */}
          {/* 2 */}
          <div className="w-1/3 flex flex-col p-2 gap-3">
            <h4 className="text-2xl mb-3 font-semibold text-white">
              Legal & Policies
            </h4>
            <Link
              href="/privacy-policy"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Terms And Conditions
            </Link>
            <Link
              href="/refund-and-cancellations"
              className="text-white flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Refund and cancellation
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-end">
          <Link
            href="#"
            className="text-white flex items-center text-sm transition-colors hover:underline"
            prefetch={false}
          >
            <img src="/alter8_footer.svg" alt="Altern8" />
          </Link>
        </div>
      </div>
      <div className="flex gap-5 mb-2">
        {icons.map(({ id, src, alt, onClick }) => (
          <div key={id} onClick={onClick} className={`cursor-pointer `}>
            <img src={src} alt={alt} className="h-10 w-10" />
          </div>
        ))}
      </div>
      <p className="text-white">
        © Copyright 2023 <span className="font-bold">Altern8</span>. All Rights
        Reserved.
      </p>
    </div>
  );
};
