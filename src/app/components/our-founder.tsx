"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#ffffff] dark:bg-neutral-100 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start  p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-500 dark:text-neutral-800 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 dark:text-neutral-700 text-base "
                    >
                      {active.description}
                    </motion.p>
                  </div>

                
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-800 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-300 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence> */}
     <div >

     <div className="w-[92%] mx-auto">
        <h2 className="text-black text-center py-8 px-4  text-[40px] font-semibold">Our Founders</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="h-[24.5rem] relative flex items-center justify-center backdrop-brightness-95"
              >
                <DirectionAwareHover imageUrl={card.src}>
                  <div className="text-left">
                    <p className="font-bold text-xl">{card.title}</p>
                    <p className="font-normal text-sm">{card.role}</p>
                  </div>
                </DirectionAwareHover>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div
              onClick={handleOpenModal}
              className="px-10 py-4 cursor-pointer  text-black w-fit mx-auto rounded-md text-base pt-1.5 border border-black hover:bg-[#555555]/30 hover:text-white transition-colors"
            >
              More on our Founders
            </div>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-b bg-white p-6 rounded-md max-w-[40vw] text-black border border-[#6e3050]"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="text-2xl text-left font-bold mb-4">
                    Our Founder's Journey
                  </h2>
                  <p className="text-sm text-left">
                    Our founding team has a proven track record in scaling
                    successful ventures across industries:
                    <br />
                    <br />
                    <strong>Pranav</strong>: At 19, Pranav launched his first
                    business in Oslo, expanding to 32 countries within three
                    years before executing a profitable exit. He has been
                    involved in transactions exceeding $700 million and led the
                    launch of Indian operations for a €200 million carbon
                    finance firm listed on the London Stock Exchange.
                    <br />
                    <br />
                    <strong>Poonam</strong>: With extensive expertise in HR and
                    organizational development, Poonam has implemented talent
                    acquisition strategies, HR policies, and diversity
                    initiatives for startups and large corporations. She
                    co-created 20+ international workshops and retreats that
                    blend contemporary coaching with traditional practices,
                    revolutionizing personal and professional development.
                    <br />
                    <br />
                    <strong>Ketan</strong>: Ketan brings over 20 years of
                    technology leadership experience. He developed a SaaS
                    product generating $10 million in revenue and created
                    fault-tolerant systems ensuring 100% uptime. His technical
                    innovations have contributed to $42 million in total
                    revenue, underscoring his ability to transform technology
                    into tangible business value.
                    <br />
                    <br /> Together, this dynamic team's diverse expertise in
                    business expansion, HR innovation, and technology leadership
                    makes them uniquely equipped to drive growth and create
                    value in their future ventures.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Pranav",
    role: "Investor, Entrepreneur",
    src: "/images/pranav.png",
    fullDescription: () => (
      <p className="text-base text-gray-300">
        Pranav is a visionary entrepreneur with deep expertise in FinTech and
        investment strategies. He brings innovative thinking and strategic
        insights to transform business landscapes.
      </p>
    ),
  },
  {
    title: "Poonam",
    role: "Co-Founder",
    src: "/poonam.avif",
    fullDescription: () => (
      <p className="text-base text-gray-300">
        Poonam is a seasoned HR professional with extensive experience in
        organizational development and strategic human resource management.
      </p>
    ),
  },
  {
    title: "Ketan",
    role: "Co-Founder & CTO",
    src: "/images/ketan.png",
    fullDescription: () => (
      <p className="text-base text-gray-300">
        Ketan brings unique strategic perspectives and leadership skills to the
        team, driving innovation and growth.
      </p>
    ),
  },
];


                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}