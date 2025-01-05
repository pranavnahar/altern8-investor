"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";


export const Footer = () => {
  const text = "Hey have a look at Altern8 site.";
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
    { id: "facebook", Icon: FaFacebook, onClick: shareOnFacebook },
    { id: "twitter", Icon: FaTwitter, onClick: shareOnTwitter },
    { id: "email", Icon: FaEnvelope, onClick: shareViaEmail },
    { id: "whatsapp", Icon: FaWhatsapp, onClick: shareOnWhatsapp },
    { id: "linkedin", Icon: FaLinkedin, onClick: shareOnLinkedIn },
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
      <div className="flex gap-5 mb-5">
        <p className="text-gray-200 text-sm font-bold">Share on:</p> {icons.map(({ id, Icon, onClick }) => (
          <div key={id} onClick={onClick} className="cursor-pointer">
            <Icon size={18} color="white" />
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
