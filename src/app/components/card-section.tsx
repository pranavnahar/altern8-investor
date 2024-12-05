import { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const categories = [
  {
    title: "Global Fintech & Regulatory Experts",
    data: [
      {
        title: "Former Lead Product Manager at Stripe",
        description:
          "Played a key role in building a $70 billion USD company with successful entrepreneurial exits to Twitter and Intuit. Fortune’s Top 40 Under 40 and Stanford Alumnus.",
      },
      {
        title: "Ex-Executive Director at the Reserve Bank of India",
        description:
          "Directed supervision and fintech strategy; oversaw 5,000 NBFCs, collaborated with global regulatory bodies, and contributed to the Basel Committee on Banking Supervision.",
      },
      {
        title: "Deputy Legal Advisor at Enforcement Directorate, India",
        description:
          "Expert in legal and investigative actions for money laundering (PMLA) and foreign exchange violations (FEMA).",
      },
      {
        title: "Retired Deputy Director, Enforcement Directorate, India",
        description:
          "Specialist in handling high-stakes financial investigations, ensuring strict adherence to compliance laws.",
      },
      {
        title:
          "Senior Officer, Economic Affairs, Consulate General of Canada in Hong Kong",
        description:
          "Extensive experience in foreign policy and economic strategy across international markets.",
      },
    ],
  },
  {
    title: "International Business & Financial Leaders",
    data: [
      {
        title: "20+ Year Veteran of Western Union",
        description:
          "Former Global Head of Digital Payments, driving business across 200 countries. Advisor to Saudi National Bank, LBS, and INSEAD Alumnus.",
      },
      {
        title: "Director at Oliver Wyman",
        description:
          "Expert in public sector transformation and large-scale government initiatives in GCC nations.",
      },
      {
        title: "Emerging Markets Investor",
        description:
          "Two decades of experience raising capital from top global financial institutions, including DFC, IFC, and USAID.",
      },
    ],
  },
  {
    title: "Technology, Construction, and Legal Visionaries",
    data: [
      {
        title: "Chartered Quantity Surveyor (MRICS) and Arbitrator (MCIArb)",
        description:
          "Managed $5bn+ in construction projects across Europe, the Middle East, and Asia.",
      },
      {
        title: "Chief Administrative Officer & CFO",
        description:
          "Part of the executive leadership at a European QSR platform managing brands like Burger King and Dunkin’.",
      },
      {
        title: "Fintech Co-Founder and Strategic Sales Leader",
        description:
          "Proven record of SaaS monetization ($0-$10m), enterprise sales ($5m-$100m), and commercial market growth of $300m+ annually.",
      },
    ],
  },
  {
    title: "Social Media, Marketing & Public Relations Experts",
    data: [
      {
        title: "Former Group Chief Marketing Officer at Nykaa",
        description:
          "Drove branding for the $7.4 billion beauty e-commerce giant and served as CMO at L’Oréal India.",
      },
      {
        title: "Co-Founder of a Premier Digital Marketing Agency",
        description:
          "Expertise in leveraging social media to drive customer acquisition at scale.",
      },
      {
        title: "Chief Marketing Officer of Myntra",
        description: "Spearheaded growth for the $200m fashion marketplace.",
      },
      {
        title: "Senior Editor & Anchor, Times Network",
        description:
          "Media powerhouse with a strong understanding of public outreach.",
      },
    ],
  },

  {
    title: "Cybersecurity & Purpose-Driven Leadership",
    data: [
      {
        title: "CEO and Founder of a Cybersecurity Culture Company",
        description:
          "25+ years in information security, bestselling author of The Security Culture Playbook and Build a Security Culture.",
      },
      {
        title: "A Visionary Coach and Trainer",
        description:
          "Passionate about empowering individuals and organizations to achieve purpose-driven goals.",
      },
    ],
  },

  {
    title: "Entrepreneurs and Change-Makers",
    data: [
      {
        title: "Norwegian Entrepreneur in Kenya",
        description:
          "Expanded operations to 450 partner hotels across 15 countries, including a merger with a Polish hotel booking platform.",
      },
      {
        title: "Chairman & Editor-in-Chief at BW Businessworld",
        description: "Leading thinker in business journalism and strategy.",
      },
    ],
  },
];

export function CardHoverEffectDemo() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleNext = () => {
    if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-8 mt-6">
      <div className="flex  justify-between items-center mb-4">
        <button
        className="text-white text-[40px]"
         onClick={handlePrev} disabled={currentCategoryIndex === 0}>
           &#8592;
        </button>
        <button
        className="text-white text-[40px]"
          onClick={handleNext}
          disabled={currentCategoryIndex === categories.length - 1}
        >
           &#8594;
        </button>
      </div>
      <div className="text-gray-50 text-center">
        <h2 className="text-[40px] font-semibold mb-2">{categories[currentCategoryIndex].title}</h2>
        <HoverEffect items={categories[currentCategoryIndex].data} />
      </div>
    </div>
  );
}
