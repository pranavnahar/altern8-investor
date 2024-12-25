"use client";
// import Footer from "../components/Footerr";
// import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
// import { CardHoverEffectDemo } from "../components/card-section";
import { ExpandableCardDemo } from "../components/our-founder";
import { MarqueeDemo } from "../components/advisors-marque";
import Navbar from "@/components/Navbar";
import { ALTERN8_ADVISORS } from "@/config/config";

const AboutPage: React.FC = () => {
  interface Advisor {
    name: string;
    position: string;
    location: string;
    image: string;
  }

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
    // {
    //   image:
    //     'https://static.wixstatic.com/media/72f1e4_b73148cb8d774b3fbe6f94aab2a726d9~mv2.jpg/v1/fill/w_206,h_200,fp_0.46_0.31,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pranav2.jpg',
    //   name: 'Pranav',
    // },
    // {
    //   image:
    //     'https://static.wixstatic.com/media/72f1e4_98dadaee629c49828fdef1ccc1aebe81~mv2.jpg/v1/fill/w_206,h_200,fp_0.53_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/poonam1.jpg',
    //   name: 'Poonam',
    // },
    // { image: '/images/ketan.png', name: 'Ketan' },
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
        <Navbar />
        <section className="py-16 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Text Section */}

            <div className="md:w-full text-center md:text-left">
              <h2 className="text-4xl text-black text-center font-semibold mb-8">
                Our Mission Is To Infuse{" "}
                <span className="text-gradient">
                  Consciousness In Every Transaction.
                </span>
              </h2>
              <p className="text-lg  text-black  mb-4">
                Ethyx Estate envisions transforming the opaque small real estate
                industry, into creditable, transparent, accessible investment
                opportunities. By harnessing cutting-edge AI and data science,
                we aim to create a seamless, secure marketplace that empowers
                investors with high-yield returns and fosters trust through
                transparency and underbanked small real estate developers with
                finance with ease " Through fractional investments, liquidity
                facilitation, and robust risk engines, Ethyx Estate makes
                complex investments and financing simple and accessible for all.
              </p>
            </div>
          </div>
        </section>

        <section className="py-2 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image Section */}
            <div className="w-full text-center md:text-left">
              <h2 className="text-[50px] font-semibold text-center text-black mb-8">
                Our Esteemed{" "}
                <span className="text-gradient">Advisory Board</span>
              </h2>

              <p className="text-[20px] font-normal text-center text-black mb-12">
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

        <MarqueeDemo />
        {/* <CardHoverEffectDemo /> */}
        <ExpandableCardDemo />

        {/* Mission Section */}
        <section className="py-16 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full text-center ">
              <h2 className=" text-center text-[40px] text-black font-semibold mb-12">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {teams.map((team, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="object-cover w-32 h-32 rounded-full"
                    />
                    <h3 className="text-[13px] font-semibold text-black text-center w-full leading-[18px] mt-2">
                      {team.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default AboutPage;
