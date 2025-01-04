"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { ReactNode, useRef } from "react";
import { ALTERN8_ADVISORS } from "../../config/config";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

interface ClothUnrollEffectProps {
  children: ReactNode;
}

const ClothUnrollEffect = ({ children }: ClothUnrollEffectProps) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: '100%',
        opacity: 1,
        transition: {
          duration: 2.5,
          ease: [0.45, 1, 0.59, 1], // Custom easing for smooth unroll
        },
      }}
      style={{
        overflow: 'hidden', // Prevents content from being visible until unrolled
        transformOrigin: 'top center',
      }}
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{
          y: 0,
          transition: {
            duration: 0.7,
            ease: 'easeOut',
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const useSmoothScroll = () => {
  const smoothScrollTo = (targetRef: React.RefObject<HTMLElement>) => {
    if (targetRef && targetRef.current) {
      const targetPosition =
        targetRef.current.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration in milliseconds
      let startTime: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
      };

      const ease = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return smoothScrollTo;
};
const AboutUsPage: React.FC = () => {
  interface Advisor {
    name: string;
    position: string;
    location: string;
    image: string;
  }

  const smoothScrollTo = useSmoothScroll();
  const ReadyToInvestSectionRef = useRef<HTMLDivElement>(null);
  const FaqSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname(); // Gets the current route

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (pathname === '/') {
      // Smooth scroll if on the landing page
      smoothScrollTo(FaqSectionRef);
    } else {
      // Redirect to the landing page with hash
      router.push('/#contact-us');
    }
  };

  const handleInvestClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
      // Redirect to the landing page with hash
      router.push('/#invest');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const advisors: Advisor[] = [
    {
      image: "/advisors/Valorie-min.png",
      name: "Valorie Wagoner",
      position: "Head of Product, Global at Stripe",
      location: "Singapore",
    },
    {
      image: "/advisors/Simon_Ng_Yu_Sum.png",
      name: "Yu Sum Simon Ng",
      position: "Economic Foreign Policy Analyst",
      location: "Ontario, Canada",
    },
    {
      image: "/advisors/alexandru-min.png",
      name: "Alexandru Badulescu",
      position: "Head Digital Lending, Saudi National Bank",
      location: "Riyadh, Saudi Arabia",
    },
    {
      image: "/advisors/alain-min.png",
      name: "Alain S",
      position: "CFO, Burger King Europe",
      location: "Zug, Switzerland",
    },
    {
      image: "/advisors/lars-min.png",
      name: "Lars-Erik Odman",
      position: "Director at Oliver Wyman",
      location: "UAE",
    },
    {
      image: "/advisors/bob-min.png",
      name: "Bob Webster",
      position: "New Investment Lead at DAI",
      location: "Kyiv, Ukraine",
    },
    {
      image: "/advisors/eugene-min.png",
      name: "Eugene Prahin",
      position: "Managing Partner of Sivyxa LLC",
      location: "New York, USA",
    },
    {
      image: "/advisors/brandon-peele-in.png",
      name: "Brandon Peele",
      position: "Co-founder at Unity Lab",
      location: "California, USA",
    },
    {
      image: "/advisors/noel-min.png",
      name: "Noel Connolly",
      position: "Managing Director at The Community",
      location: "UAE",
    },
    {
      image: "/advisors/kai_roer-min.png",
      name: "Kai Roer",
      position: "CEO & Founder at Praxis Security Labs",
      location: "Oslo, Norway",
    },
    {
      image: "/advisors/endre_opdal-min.png",
      name: "Endre Opdal",
      position: "CEO & Founder at HotelOnline",
      location: "Kenya",
    },
    {
      image: "/advisors/maria-hooper-min.png",
      name: "Maria Hooper",
      position: "Change Management Consultant, Arcondis",
      location: "Basel, Switzerland",
    },
  ];
  interface Team {
    name: string;
    image: string;
  }

  const teams: Team[] = [
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_b73148cb8d774b3fbe6f94aab2a726d9~mv2.jpg/v1/fill/w_206,h_200,fp_0.46_0.31,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pranav2.jpg',
      name: 'Pranav',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_98dadaee629c49828fdef1ccc1aebe81~mv2.jpg/v1/fill/w_206,h_200,fp_0.53_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/poonam1.jpg',
      name: 'Poonam',
    },
    { image: '/images/ketan.png', name: 'Ketan' },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_39b0b240d24b4ffd91197ab14d69bf35~mv2.jpeg/v1/fill/w_206,h_200,fp_0.47_0.42,lg_1,q_80,enc_avif,quality_auto/vivek.jpeg',
      name: 'Vivek',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_d6768e6f04884b01a633866bd1330d68~mv2.jpg/v1/fill/w_206,h_200,fp_0.60_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/oeuvars-20240702-0002-modified.jpg',
      name: 'Anurag',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_9259a742103c4217af9e0305f293f53c~mv2.jpeg/v1/fill/w_206,h_200,fp_0.49_0.51,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/himanshu.jpeg',
      name: 'Himanshu',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_8d8406ec65334acab5d1084751151f32~mv2.jpeg/v1/fill/w_206,h_200,fp_0.48_0.49,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/kumar.jpeg',
      name: 'Raj',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_cfd2705c74b0474bbe1c4ffa89f670bc~mv2.jpeg/v1/fill/w_206,h_200,fp_0.50_0.52,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ajith.jpeg',
      name: 'Ajith',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_f603e07ef6af4e4b8a6bcddbe70c0044~mv2.jpeg/v1/fill/w_206,h_200,fp_0.57_0.38,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sheriff.jpeg',
      name: 'Sherriff',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_daf686d18dc243d8923d608138395036~mv2.jpg/v1/fill/w_206,h_200,fp_0.49_0.43,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ayudh_edited.jpg',
      name: 'Ayudh',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_5cae7b59c3bd4bc7bf7a143d5e31d6b5~mv2.jpeg/v1/fill/w_206,h_200,fp_0.48_0.35,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/raghav1.jpeg',
      name: 'Raghav',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_f6f580a3106445adabaa7117221b3dc6~mv2.jpeg/v1/fill/w_206,h_200,fp_0.54_0.48,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Arunkumar.jpeg',
      name: 'Arunkumar',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_9d83bb604c86425f8ef85dfd39f25360~mv2.jpg/v1/fill/w_206,h_200,fp_0.48_0.36,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/kishwar.jpg',
      name: 'Kishwar',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_2f4e4b2e45ff485182c84658591d1d16~mv2.jpg/v1/fill/w_206,h_200,fp_0.49_0.18,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jinith-modified.jpg',
      name: 'Jinith',
    },
    {
      image:
        'https://static.wixstatic.com/media/72f1e4_44c554a0fa304fb286a7542fec0c6857~mv2.jpg/v1/fill/w_206,h_200,fp_0.43_0.36,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/daksh-modified.jpg',
      name: 'Daksh',
    },
  ]

  return (
    <>
      <div className="bg-[#ffffff]">
      <ClothUnrollEffect>

      <nav className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-h-20 mx-auto px-10 ">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <img alt="navbar logo" src="/Alter8_nav_logo.svg" />
            </Link>
            <nav className="hidden md:flex gap-10">
              <a
                href="#invest"
                onClick={handleInvestClick}
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Invest
              </a>
              <Link
                href="/about-us"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                About Us
              </Link>
              <a
                  href="/#contact-us"
                  onClick={handleContactClick}
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Contact Us
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Login
              </a>
              <Button variant={"outline"}>
                <a
                  href="/#contact-us"
                  onClick={handleContactClick}
                  className="font-medium flex items-center text-sm transition-colors"
                >
                  Reserve Access
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-start ml-14 mt-10 space-x-2">
          <Link href="/">
            <button className="flex items-center text-gray-400 text-[13.5px] font-medium hover:underline hover:text-black">
              <ArrowLeftCircle className="w-4 h-4" /> {/* Adjusted icon size */}
              <span>&nbsp;back to home</span>
            </button>
          </Link>
        </div>



        <ClothUnrollEffect>
      
        <section className="py-10 px-4 md:px-14">
            <div className="max-w-7xl mx-auto relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-gray-600">
              {/* Background Image with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/about-us-bg.jpg')",
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-40"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-40 p-8 rounded-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                  About Us&#xff0d;Altern8
                </h1>
               
              </div>
            </div>
          </section>
        </ClothUnrollEffect>

        <section className="py-10 px-14">
        <ClothUnrollEffect>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Column */}
            <div className="flex justify-center items-center">
              <img
                src="/altern8Main.svg"
                alt="Our Vision"
                className="w-full h-auto"
              />
            </div>

            {/* Text Column */}
            <div className="text-center md:text-left">
              <h2 className="mt-32 text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-sm text-gray-800 mb-6 text-justify">
                At Altern8, our mission is to infuse consciousness in every transaction.{' '}
                <br />
                Altern8 envisions transforming the opaque small real estate industry, into creditable, transparent, accessible investment opportunities. <br/><br/>By harnessing cutting-edge AI and data science, we aim to create a seamless, secure marketplace that empowers investors with high-yield returns and fosters trust through transparency and underbanked small real estate developers with finance with ease. Through fractional investments, liquidity facilitation, and robust risk engines, Altern8 makes complex investments and financing simple and accessible for all.
              </p>
            </div>
          </div>
          </ClothUnrollEffect>
        </section>

        <div className="mt-14 relative w-full py-4">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>

        <section className="py-2 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image Section */}
            <div className="w-full text-center md:text-left">
              <h2 className="text-4xl font-semibold text-center mb-8 mt-20">
                Our Esteemed{" "}
                <span className="text-gradient">Advisory Board</span>
              </h2>

              <p className="text-sm font-normal text-center text-black mb-16 leading-relaxed mx-auto max-w-3xl">
                A powerhouse of global leaders and experts driving international
                resilience, regulatory mastery, and market dominance. With
                expertise spanning fintech, marketing, public policy and
                enforcement, our advisors are equipped to future-proof the
                company, help in debt resolution, and achieve customer growth at
                unprecedentedly low acquisition costs.
              </p>
              <div className=" mt-3 p-10 grid grid-cols-6 grid-rows-2 gap-5">
                {ALTERN8_ADVISORS.map((advisor, index) => (
                  <div
                    key={index}
                    className="relative group w-[190px] h-[240px] bg-gray-100 rounded-lg shadow-md overflow-hidden"
                  >
                    {/* Image */}
                    <img
                      src={advisor.image}
                      alt="Advisor"
                      className="object-cover w-full h-full"
                    />

                    {/* Always-visible overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-2 flex flex-col justify-end">
                      <p className="text-white text-[16px]">{advisor.name}</p>
                      <span className="text-gray-200 text-[12px]">
                        {advisor.post}
                      </span>
                      <span className="text-[12px]  text-[#BF8EFE]">
                        {advisor.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="mt-14 relative w-full py-4">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full text-center ">
              <h2 className=" text-center text-[40px] text-black font-semibold mb-5">
               Meet Our Team
              </h2>
              <p className="text-sm font-normal text-center text-black mb-16 leading-relaxed mx-auto max-w-xl">
              A group of passionate individuals committed to pushing the boundaries of conscious capitalism, blending purpose with profit, and driving positive impact in everything we do.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {teams.map((team, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.45 }}
                      className="flex flex-col items-center"
                    >
                    <img
                      src={team.image}
                      alt={team.name}
                      className="object-cover w-32 h-32 rounded-full"
                    />
                    <h3 className="text-[13px] font-semibold text-black text-center w-full leading-[18px] mt-2">
                      {team.name}
                    </h3>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-5 mb-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className=""
              >
                Get to know our Founding Team
              </Button>
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-[625px] bg-gradient-to-b bg-white p-6 rounded-md max-w-[40vw] text-black border border-[#6e3050]"
              
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 mb-5">
                  Our Founding Team&apos;s Journey
                </DialogTitle>
                <DialogDescription className="text-gray-700">
                <p className="mb-4">
                    The Team has Expertise in Financial Acumen, Technology, Human Resources,
                    Organizational Transformation, Innovation, Sustainability, Conscious Growth,
                    Entrepreneurship, Transformative initiates.
                    <br />
                    <br />
                    The team's entrepreneurial vision has seen the successful launch and expansion
                    of businesses across 32 countries, with over $700 million in transactions. Their
                    efforts have included establishing operations for a €200 million LSE-listed
                    carbon finance firm and leading social enterprise private equity initiatives in
                    Asia. With a passion for conscious capitalism, they have combined modern
                    business strategies with ancient practices, dedicating significant time to
                    meditation and personal growth.
                    <br /> <br />
                    In the realm of HR and coaching, the team has extensive experience in talent
                    acquisition, policy consulting, and fostering Diversity & Inclusion initiatives.
                    They have created inclusive workplaces, facilitated performance appraisals for
                    organizations of varying scales, and led over 20 workshops and retreats
                    globally. By integrating modern coaching techniques with practices like NLP,
                    hypnotherapy, and meditation, they address complex analytical, operational, and
                    relational challenges effectively.
                    <br /> <br />
                    On the technology front, the team brings 24 years of collective expertise in
                    developing scalable solutions, including SaaS products generating $10 million in
                    revenue and modernizing tech platforms. They specialize in building
                    fault-tolerant systems with 100% uptime and delivering high-traffic websites,
                    B2B applications, and CRM systems that have collectively achieved $42 million in
                    revenue. By leveraging technology and strategic roadmaps, they address key
                    business challenges and capitalize on emerging opportunities while cultivating
                    high-performing, globally distributed teams.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        {/* <Footer /> */}
        </ClothUnrollEffect>  
      </div>
      <Footer />
      
    </>
  );
};

const AboutPage: React.FC = () => {
  return (
    <ClothUnrollEffect>
      <AboutUsPage />
    </ClothUnrollEffect>
  );
}

export default AboutPage;
