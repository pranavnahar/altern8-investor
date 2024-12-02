import React from "react";
import Navbar from "../../components/Navbar";

const AboutPage: React.FC = () => {
    interface Advisor {
        name: string;
        position: string;
        location: string;
        image: string;
      }
    
      const advisors: Advisor[] = [
        {
          image: "/landingPage/advisors/valorie.png",
          name: "Valorie Wagoner",
          position: "Head of Product, Global at Stripe",
          location: "Singapore"
      },
      {
          image: "/landingPage/advisors/yusum.png",
          name: "Yu Sum Simon Ng",
          position: "Economic Foreign Policy Analyst",
          location: "Ontario, Canada"
      },
      {
          image: "/landingPage/advisors/alexandru.png",
          name: "Alexandru Badulescu",
          position: "Strategic Advisor at Change2Scale",
          location: "Dubai, UAE"
      },
      {
          image: "/landingPage/advisors/alain.png",
          name: "Alain S.",
          position: "CAO at QSR Platform",
          location: "Zug, Switzerland"
      },
      {
          image: "/landingPage/advisors/lars.png",
          name: "Laras-Erik Odman",
          position: "Director at Oliver Wyman",
          location: "UAE"
      },
      {
          image: "/landingPage/advisors/bob.png",
          name: "Bob Webster",
          position: "New Investment Lead at DAI",
          location: "Kylv, Ukraine"
      },
      {
          image: "/landingPage/advisors/eugene.png",
          name: "Eugene Prahin",
          position: "Managing Partner aof Sivyxa LLC",
          location: "New York, USA"
      },
      {
          image: "/landingPage/advisors/brandon.png",
          name: "Brandon Peele",
          position: "Co-founder at Unity Lab",
          location: "California, USA"
      },
      {
          image: "/landingPage/advisors/noel.png",
          name: "Noel Connolly",
          position: "Managing Director at The Community",
          location: "UAE"
      },
      {
          image: "/landingPage/advisors/kai.png",
          name: "Kai Roer",
          position: "CEO & Founder at Proxis Security Labs",
          location: "Oslo, Norway"
      },
      {
          image: "/landingPage/advisors/endre.png",
          name: "Endre Opdal",
          position: "CEO & Founder at HotelOnline",
          location: "Kenya"
      },
      {
          image: "/landingPage/advisors/maria.png",
          name: "Maria Hooper",
          position: "Organisational Change Consultant at Arcondis",
          location: "Basel, Switzerland"
      },
      ];



  interface Global {
    title: string;
    description: string;
  }

  const global: Global[] = [
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
  ];

  interface International {
    title: string;
    description: string;
  }

  const international: International[] = [
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
    }
  ];

  interface Technology {
    title: string;
    description: string;
  }

  const technology: Technology[] = [
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
    }
  ];

  interface SocialMedia {
    title: string;
    description: string;
  }

  const socialmedia: SocialMedia[] = [
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
      description:
        "Spearheaded growth for the $200m fashion marketplace.",
    },
    {
      title: "Senior Editor & Anchor, Times Network",
      description:
        "Media powerhouse with a strong understanding of public outreach.",
    }
  ]
    interface Cybersecurity {
      title: string;
      description: string;
    }
  
    const cybersecurity: Cybersecurity[] = [
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
  ];

  interface Entrepreneurs  {
    title: string;
    description: string;
  }

  const entrepreneurs : Entrepreneurs [] = [
    {
      title: "Norwegian Entrepreneur in Kenya",
      description:
        "Expanded operations to 450 partner hotels across 15 countries, including a merger with a Polish hotel booking platform.",
    },
    {
      title: "Chairman & Editor-in-Chief at BW Businessworld",
      description:
        "Leading thinker in business journalism and strategy.",
    },
];

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <section className="py-16 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Text Section */}

            <div className="md:w-full text-center md:text-left">
              <h2 className="text-5xl text-black font-semibold mb-4">Vision</h2>
              <p className="text-lg  text-black  mb-4">
                Ethyx Estate envisions transforming the opaque small real estate
                industry, into creditable, transparent, accessible investment
                opportunities. By harnessing cutting-edge AI and data science,
                we aim to create a seamless, secure marketplace that empowers
                investors with high-yield returns and fosters trust through
                transparency and underbanked small real estate developers with
                finance with ease " Through fractional investments, liquidity
                facilitation, and robust risk engines, Ethyx Estate makes
                complex investments and financing simple and accessible for
                all."
              </p>
            </div>
          </div>
        </section>

   

        <section className="py-2 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Text Section */}

            <div className="md:w-1/2">
              
            <h2 className="text-5xl text-black font-semibold mt-6">
                Our Esteemed Advisory Board
              </h2>
              <p className="text-lg text-black">
                A powerhouse of global leaders and experts driving international
                resilience, regulatory mastery, and market dominance. With
                expertise spanning enforcement, fintech, marketing, and public
                policy, our advisors are equipped to future-proof the company,
                help in debt resolution, and achieve customer growth at
                unprecedentedly low acquisition costs.
              </p>

              <h3 className="text-xl font-semibold mt-6">
                Global Fintech & Regulatory Experts
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {global.map((global, index) => (
                  <li key={index}>
                    <strong>{global.title}:</strong> {global.description}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">
              International Business & Financial Leaders
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {international.map((international, index) => (
                  <li key={index}>
                    <strong>{international.title}:</strong> {international.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mt-6">
              Technology, Construction, and Legal Visionaries
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {technology.map((technology, index) => (
                  <li key={index}>
                    <strong>{technology.title}:</strong> {technology.description}
                  </li>
                ))}
              </ul>

               <h3 className="text-xl font-semibold mt-6">
               Social Media, Marketing & Public Relations Experts
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {socialmedia.map((socialmedia, index) => (
                  <li key={index}>
                    <strong>{socialmedia.title}:</strong> {socialmedia.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mt-6">
              Cybersecurity & Purpose-Driven Leadership
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {cybersecurity.map((cybersecurity, index) => (
                  <li key={index}>
                    <strong>{cybersecurity.title}:</strong> {cybersecurity.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mt-6">
              Entrepreneurs and Change-Makers
              </h3>
              <ul className="list-disc pl-8 text-gray-800 space-y-3 mt-2">
                {entrepreneurs .map((entrepreneur, index) => (
                  <li key={index}>
                    <strong>{entrepreneur.title}:</strong> {entrepreneur.description}
                  </li>
                ))}
              </ul>

            </div>

            {/* Image Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-[50px] font-semibold text-center text-black mb-4">
                Board of <span className="text-gradient">advisors</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 ">
                {advisors.map((advisor, index) => (
                  <div key={index} className="rounded-lg  border ">
                    <div >
                      <img
                        src={advisor.image}
                        //   alt={advisor.name}
                        className=" w-full h-60  rounded-lg"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-semibold text-black leading-[18px]">
                        {advisor.name}
                      </h3>
                      <div className="mt-2 ">
                        <p className="text-[10px]  font-black leading-[13px]">
                          {advisor.position}
                        </p>
                        <p className="text-xs text-gray-900  font-light">
                          {advisor.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}

        <section className="py-16 px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Text Section */}

            <div className="md:w-1/2">
              <img
                src="/paranav.jpg"
                alt="HubSpot Team"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-5xl text-black font-semibold mb-4">
                Our Founders
              </h2>
              <p className="text-lg  text-black  mb-4">
                Pranav is a visionary entrepreneur and a modern-day Renaissance
                Yogi, blending the worlds of finance, technology, and ancient
                wisdom. Starting his first business at 19 in Oslo, Norway, he
                quickly expanded to 32 countries within three years before
                selling it. A Chevening Scholar and Chazen Fellow, Pranav
                graduated with Dean’s List honors from both London Business
                School and Columbia Business School. <br></br>
                <br></br>
                With over $700 million in transactions to his credit, Pranav has
                been instrumental in launching the Indian operations of a €200
                million LSE-listed carbon finance firm and served as Head of
                Asia at the Grassroots Business Fund, a Washington D.C.-based
                social enterprise private equity outfit. <br></br>
                <br></br>
                Passionate about conscious capitalism, Pranav's journey extends
                beyond finance. He has explored Vipassana and various eastern
                practices, dedicating over 8 years to silent meditation and is a
                trained Vipassana teacher. <br></br>
                <br></br>
                Poonam is a seasoned HR professional, entrepreneur, and
                transformative coach. With experience spanning talent
                acquisition, HR policy consulting, and Diversity & Inclusion
                (DNI) initiatives, she has facilitated inclusive workplaces and
                led appraisals for small companies in India. Her corporate
                journey includes roles at Bank of America, Canon India, and
                Amazon India. <br></br>
                <br></br>
                Beyond her corporate career, Poonam has co-led over 20 workshops
                and retreats globally, blending modern coaching with ancient
                practices. Certified in Vipassana and well-versed in healing
                modalities like NLP, hypnotherapy, and Kundalini yoga, she
                guides individuals toward self-realization and transformation.
                Poonam’s holistic approach bridges business acumen with deep
                personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default AboutPage;
