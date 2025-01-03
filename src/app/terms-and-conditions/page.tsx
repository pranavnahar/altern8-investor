"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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

interface ClothUnrollEffectProps {
  children: ReactNode;
}

const ClothUnrollEffect = ({ children }: ClothUnrollEffectProps) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "100%",
        opacity: 1,
        transition: {
          duration: 2.5,
          ease: [0.45, 1, 0.59, 1], // Custom easing for smooth unroll
        },
      }}
      style={{
        overflow: "hidden", // Prevents content from being visible until unrolled
        transformOrigin: "top center",
      }}
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function TermsConditions() {
  const router = useRouter();
  const pathname = usePathname(); // Gets the current route
  const smoothScrollTo = useSmoothScroll();
  const ReadyToInvestSectionRef = useRef<HTMLDivElement>(null);
  const FaqSectionRef = useRef<HTMLDivElement>(null);

  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomainName(window.location.hostname);
    }
  }, []);

  const handleContactClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      // Smooth scroll if on the landing page
      smoothScrollTo(FaqSectionRef);
    } else {
      // Redirect to the landing page with hash
      router.push("/#contact-us");
    }
  };

  return (
    <div className="">
      <ClothUnrollEffect>
        <nav className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
          <div className="w-full max-h-20 mx-auto px-10 ">
            <div className="flex justify-between h-20 items-center">
              <Link href="/" className="flex items-center" prefetch={false}>
                <img alt="navbar logo" src="/Alter8_nav_logo.svg" />
              </Link>
              <nav className="hidden md:flex gap-10">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(ReadyToInvestSectionRef);
                  }}
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                >
                  Invest
                </a>
                <a
                  href="/about-us"
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                >
                  About Us
                </a>
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
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(FaqSectionRef);
                    }}
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
        <h1 className="text-3xl font-bold mb-4 text-center my-5">
          Terms and Conditions - Altern8
        </h1>

        <div className="phone:w-[90%] md:w-[70%] xl:w-[60%] xxl:w-[55%] my-10 mx-auto text-sm px-6 pb-5 text-justify">
          <p className="mb-4">
            This document is an electronic record in terms of Information
            Technology Act, 2000 and rules there under as applicable and the
            amended provisions pertaining to electronic records in various
            statutes as amended by the Information Technology Act, 2000. This
            electronic record is generated by a computer system and does not
            require any physical or digital signature.
          </p>

          <p className="mb-4">
            This document is published in accordance with the provisions of Rule
            3 (1) of the Information Technology (Intermediaries guidelines)
            Rules, 2011 that require publishing the rules and regulations,
            Privacy Policy and Terms of Use for access or usage of domain name
            <strong> {domainName}</strong> including the related mobile site and
            mobile application (hereinafter referred to as “Platform”). These
            terms and conditions of use (&quot;Terms of Use&quot;) of the
            Platform between <strong>Ekarth Ventures Private Limited</strong>, a
            private company limited by shares incorporated under the provisions
            of Companies Act, 2013 (Act No. 18 of 2013) with corporate
            identification number <strong>(CIN: U62099TN2024PTC169251)</strong>,
            and having its registered office at{" "}
            <strong>46 College Road, Nungambakkam, Chennai, </strong>{" "}
            (hereinafter referred to as “<strong>Altern8</strong>” which includes the
            person(s)/entity(ies) associated/connected with it) and users
            registering itself/himself on the Platform (&quot;You&quot; or
            &quot;Your&quot; or &quot;Yourself&quot; or &quot;User&quot;)
            describe the terms on which <strong>Altern8</strong> offers You access to the
            Platform and the Services (as defined below) through the Platform.
            Please read the Terms of Use carefully before using or registering
            on the Platform or accessing any material, information or services
            through the Platform. Accessing, browsing or otherwise using the
            Platform indicates Your agreement to all the terms and conditions
            under this Terms of Use and Your agreement to be legally bound by
            them. By implicitly or expressly accepting these Terms of Use, You
            also accept and agree to be bound by all <strong>Altern8</strong> Policies (including
            but not limited to the Privacy Policy available on our Platform as
            amended from time to time). If you do not agree to these terms, you
            agree that your sole and exclusive remedy is to discontinue using
            the Platform. Your compliance with these terms is a condition to
            your right to access the Platform. Your breach of any provision of
            these terms will automatically, without the requirement of notice or
            other action, revoke and terminate your right to access the
            Platform.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">General</h2>
          <p className="mb-4">
            Our platform is essentially an internet based platform operating as
            a technological service provider assisting the NBFC named __________ and
            other such NBFC partners and Qualified Patrons to identify its
            borrowers i.e. real estate companies who will be borrowing. Use of
            the Platform is offered to You conditioned on acceptance of all the
            terms, conditions and notices contained in these Terms along with
            any amendments made by <strong>Altern8</strong> at its sole discretion and posted on
            the Platform, including by way of imposing an additional charge for
            access to or use of a Service.
          </p>

          <b>
            NOTHING CONTAINED ON THE PLATFORM SHOULD BE CONSTRUED AS AN
            AUTHORIZATION BY THE SECURITIES AND EXCHANGE BOARD OF INDIA (“SEBI”)
            TO SOLICIT INVESTMENTS NOR SHOULD THE PLATFORMS BE CONSTRUED AS A
            SEBI AUTHORIZED CROWDFUNDING PLATFORM OR A STOCK EXCHANGE OR A
            COLLECTIVE OR ALTERNATE INVESTMENT SCHEME, OR THEIR EQUIVALENT.THE
            PLATFORM MERELY ACTS AS A Technical Service Provider (TSP) BEING THE
            FACILITATOR BETWEEN THE BORROWERS AND THE RETAIL PATRONS ACTING
            THROUGH THE NBFC.
          </b>

          <h2 className="text-2xl font-bold mt-6 mb-2">Definitions</h2>
          <p className="mb-4">
            &quot;<strong>Altern8</strong>&quot;, &quot;The Company&quot;,
            &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
            &quot;Us&quot;, refers to
            <strong> Ekarth Ventures Private Limited</strong> bearing{" "}
            <strong>CIN: U62099TN2024PTC169251</strong>
          </p>
          <p className="mb-4">
            “<strong>Applicable Law</strong>” means all laws, ordinance,
            statutes, rules, orders, decrees, injunctions, licenses, permits,
            approvals, authorizations, consents, waivers, privileges, agreements
            and regulations of any governmental authority/court of law having
            jurisdiction over the relevant matter including any interpretations
            thereof, in effect.
          </p>

          <p className="mb-4">
            “<strong>Terms and Conditions</strong>” means these Terms of Use,
            Privacy Policy, Transaction Documents (if any) or any other document
            which outlines or governs the relationship between the patron,
            borrower, NBFC and the platform regarding the use and access of
            Platform and its services.
          </p>

          <p className="mb-4">
            “<strong>Patron</strong>” means any patron or lender registered with
            the platform and who is willing to invest his money in the escrow
            account with the NBFC.
          </p>

          <p className="mb-4">
            “<strong>Debenture Trustee</strong>” refers to the person entrusted
            to hold and manage the escrow account on behalf of all the patrons.
          </p>

          <p className="mb-4">
            “<strong>Borrower</strong>” means any real estate company that is
            identified as a borrower by the NBFC.
          </p>

          <p className="mb-4">
            “<strong>Intellectual Property Rights</strong>” means all patents,
            designs and drawings, trademarks, service marks, logos, domain names
            and utility models, copyrights, inventions, brand names and business
            names and any similar rights and the benefit (subject to the burden)
            of any of the foregoing (in each case whether registered or
            otherwise), and includes applications for the grant of any of the
            foregoing and the right to apply for any of the foregoing in any
            part of the world.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Approval of use</h2>
          <p className="mb-4">
            By accessing the Platform, registering as an patron or borrower with
            the Platform, submitting any material to the Platform, or using any
            of the Services, you expressly agree that:
          </p>

          <ul>
            <li>
              - You have read, understood and agreed to these Terms, and
              acknowledge that these Terms shall apply to you and be binding on
              you.
            </li>
            <li>
              {" "}
              You are entering into these Terms out of your own free will and
              consent.
            </li>
            <li>
              - You are either at least eighteen (18) years of age or acting
              through legal guardian and neither you nor your legal guardian are
              disqualified from contracting by law.
            </li>
          </ul>
          <br />
          <p>
            Accordingly, if you wish not to accept the terms of use, you will
            not be able to access the platform or the services available on it.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Services</h2>
          <p className="mb-4">
            The Platform is essentially a technical service provider set up as a
            private limited companythat will assist the NBFC to identify
            borrowers. The main purpose of the platform is to help real estate
            borrowers secure additional funding and provide retail
            patrons/lenders with an opportunity to earn good returns on their
            investments. The user agree and acknowledge that <strong>Altern8</strong>'s role is
            merely to facilitate the transaction between the real estate
            borrowers and the retail patrons backed by the NBFC and is in no way
            involved in the lending or pooling of money. All lending happens
            through the escrow/virtual or nodal account and sometimes the NBFC
            may bring the loans on their books and sell the loans. <strong>Altern8</strong> is in
            no way involved in the flow of funds, repayments, collections etc.
            and the debentures are issued directly by the real estate company to
            the patrons. Role of <strong>Altern8</strong> is customer acquisition, basic due
            diligence of the borrowers and the retail patrons/ lenders, credit
            assessment, customer service etc. with the ultimate responsibility
            being that of the NBFC. The Patron registers itself on the platform
            and invest its money in the escrow that is being jointly managed by
            the borrower and the debenture trustee, the amount is being used by
            the borrower for carrying on its operations. Hence, there is no
            selling or transfer of ownership over the real estate assets but
            merely lending of funds for the real estate companies. In return,
            the companies (borrowers) issues NCDs, OCDs, Secured Notes or other
            eligible products to the patrons directly or through the NBFC, as
            per the relevant provisions of Companies Act, 2013, Companies Issue
            of Share Capital and Debentures Rules,2014 and SEBI Debenture
            Trustee Regulations, 1993.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Eligibility to use</h2>
          <p className="mb-4">
            Any individual, company including a body corporate, LLP (limited
            liability partnership), partnership firm, HUF (Hindu Undivided
            Family), trust &amp; Sole proprietorship who is capable/competent to
            form a binding contract and with a valid Permanent Account Number
            (PAN) registered with the Income Tax authority under the laws of
            India can register as “patron” on the Platform. The Services are not
            available to any patron suspended or removed from <strong>Altern8</strong> system by
            <strong> Altern8</strong> for any reason whatsoever. If You are removed, You shall not
            be permitted to avail the Services or use the Platform.
            Notwithstanding the foregoing, if You are below the age of eighteen
            (18) years, You may avail the Services provided by <strong>Altern8</strong>, through
            Your legal guardian in accordance with the applicable laws. You
            agree and acknowledge that We shall, in no event, be liable to
            verify your age or extent of parental guidance. The services are not
            available to patron who has been restricted or prohibited from
            investing in securities by SEBI, RBI or any other regulatory
            authority under any law for the time being in force. You acknowledge
            that <strong>Altern8</strong> reserves the right to refuse access to use the Services
            offered at the Platform to new Users or to terminate access granted
            to existing Users at any time without according any reasons for
            doing so.
          </p>

          <strong>
            IF YOU DO NOT MEET THE ELIGIBILITY CRITERIA OF THIS TOU (Terms of
            Use), PLEASE DO NOT ATTEMPT TO USE ANY OF OUR SERVICES. USE OF A
            VIRTUAL PRIVATE NETWORK TO CIRCUMVENT THE RESTRICTIONS SET FORTH IN
            THESE TOU IS PROHIBITED.
          </strong>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            User Account, Password and Security
          </h2>
          <p className="mb-4">
            In order to fully avail the services provided by <strong>Altern8</strong>, the patron
            needs to create and account by providing several information like
            name, address. PAN details, mail id, mobile no. (verification though
            OTP) etc. (“Registered User”). Unless otherwise permitted by <strong>Altern8 </strong>
            in writing, You may only possess one account at a time. You
            acknowledge that You will be responsible for maintaining the
            confidentiality of the Account Information, and are fully
            responsible for all activities that occur under Your User Account.
            You agree to (a) immediately notify <strong>Altern8</strong> of any unauthorized use
            of Your Account Information or any other breach of security, and (b)
            ensure that You exit from Your User Account at the end of each
            session. <strong>Altern8</strong> cannot and shall not be liable for any loss or
            damage arising from Your failure to comply with this Section.
            Further, You understand that You may be held liable for losses
            incurred by <strong>Altern8</strong> or any other user of or visitor to the Platform
            due to authorized or unauthorized use of Your Account as a result of
            Your failure in keeping Your Account Information secure and
            confidential. <strong>Altern8</strong> reserves the right to refuse to offer access
            to or use of the Platform to any person or entity at its sole
            discretion including by changing its eligibility criteria at any
            time. If You provide any information that is untrue, inaccurate, not
            current or incomplete (or becomes untrue, inaccurate, not current or
            incomplete), or <strong>Altern8</strong> has reasonable grounds to suspect that such
            information is untrue, inaccurate, not current or incomplete,
            <strong> Altern8</strong> has the right to suspend or terminate Your User Account and
            refuse any and all current or future use of the Platform (or any
            portion thereof) without providing any notice or according reasons
            for the same.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">User Obligations</h2>
          <p className="mb-4">
            You agree to use the platform and avail its services only for lawful
            purposes and in accordance with the applicable rules and
            regulations. Your further agree not to undertake any such activity
            that is prejudicial to the interest of the platform or of other
            users associated with the platform such that it makes the services
            inaccessible for them.
          </p>
          <p className="mb-4">
            You agree and undertake not to reverse engineer, modify, copy,
            distribute, transmit, display, perform, reproduce, publish, license,
            create derivative works from, transfer, or sell any information or
            software obtained from this Website.
          </p>
          <p className="mb-4">
            You undertake that your access to the Services is-(a) not prohibited
            by and does not otherwise violate or assist you to violate any
            domestic or foreign law, rule, statute, regulation, by-law, order,
            protocol, code, decree, or another directive, requirement, or
            guideline, published or in force that applies to or is otherwise
            intended to govern or regulate any person, property, transaction,
            activity, event or other matter, including any rule, order,
            judgment, directive or other requirement or guideline issued by any
            domestic or foreign federal, provincial or state, municipal, local
            or other governmental, regulatory, judicial or administrative
            authority having jurisdiction over <strong>Altern8</strong>, you, the Website or the
            Services, or as otherwise duly enacted, enforceable by law, the
            common law or equity; and (b) does not contribute to or facilitate
            any illegal activity.
          </p>
          <p className="mb-4">
            During the use of the Platform or Services offered on the Platform,
            You shall not post, host, display, upload, modify, publish,
            transmit, update or share any information that:
          </p>
          <ul>
            <li>
              1) Impersonate any person or entity, or falsely state or otherwise
              misrepresent Your affiliation with a person or entity;
            </li>

            <li>
              2) Publish, post, upload, distribute or disseminate any
              inappropriate, profane, defamatory, infringing, obscene, indecent
              or unlawful topic, name, material or information through any
              bookmark, tag or keyword;
            </li>

            <li>
              3) Upload files, material or any information in violation of the
              intellectual property rights of another person;
            </li>

            <li>
              4) Upload files, material or any information in violation of any
              confidentiality agreement with respect to a third party;
            </li>

            <li>
              5) Upload or distribute files that contain viruses, corrupted
              files, or any other similar software or programs that may damage
              the operation of the Platform or another&#39;s computer;
            </li>

            <li>
              6) Engage in any activity that interferes with or disrupts access
              to the Platform or the Services (or the servers and networks which
              are connected to the Platform);
            </li>

            <li>
              7) Attempt to gain unauthorized access to any portion or feature
              of the Platform, any other systems or networks connected to the
              Platform
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Sale and Transfer of Units{" "}
          </h2>
          <p className="mb-4">
            The Platform facilitates the transfer and sale of units of Real
            Estate Debt Instruments of the Borrower entities between the
            borrower and the patron as well as secondary sale of units between
            two patrons also. Only the registered patrons and borrowers are
            eligible to participate in these transactions.
          </p>

          <ol>
            <li>
              <b>Initial Sale of Units:</b> The borrowers intending to borrow
              through issuance of Debt Instrument have to be registered on the
              primary platform. The borrowers are also oblidges to clearly
              specify the terms of issuance including the principal amount,
              interest amount, redemption period and other relevant details. All
              these details shall be available to the patrons on the Platform.
              The Patron is allowed to purchase the units available on the
              platform put forth by the borrowers by following price mechanism
              and money settlement as specified in these terms. Upon execution
              of the order by any patron, a specific contract note shall be
              executed between the borrower and the patronwithin 24 hours via
              e-mail, detailing the specifications about the transaction and
              contractual relationship between the parties. Upon successful
              completion of the transaction, all rights or interest with respect
              to the Instrument in transaction shall stand transfertred to the
              purchaser patron with immediate effect.
            </li>
            <br />
            <li>
              <b>Secondary sale of Units:</b> The Platform also facilitates
              secondary sale and transfer of Debt Instruments among the patrons.
              The selling patron acknowledges that upon successful completion of
              the transfer, all rights, interest and liabilities with respect to
              the Debt shall vest in the hands of the buying patron and he can
              further engage directly with the borrower for his repayments or
              interests. Upon execution of the order by any patron, a specific
              contract note shall be forwardedto both the buyer and the seller
              via e-mail within 24 hours of the execution on the Platform. Both
              selling and buying patron will have to execute a specific contract
              note detailing the specifications about the transactyion and
              contractual relationship between the parties. The buyer of the
              units shall have the right to receive the principal amount and any
              interest payments from the original borrower according to the
              terms of the debt instrument. The selling patron may ask for a
              fixed or auctioned price for the units.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Price Mechanism and Money Settlement{" "}
          </h2>
          <p className="mb-4">
            For any order being placed on the platform, two types of price
            mechanisms could be put forth by the selling patrons i.e. fixed
            price mechanism or auctioned price mechanism.
            <br />
          </p>

          <ol>
            <li>
              <b>Fixed Price: </b>Under this mechanism, a fixed price shall be
              specified by the seller for the sale of any Debt Instrument. The
              purchaser can pay the requisite price along with the applicable
              service and taxation charges and can successfully complete the
              transaction.
            </li>
            <br />
            <li>
              <b>Auction Price and Bidding: </b>The auctioned price shall be the
              price determined by the platform as the final selling price of the
              Debt Instrument put for sale by any particular patron. The
              borrower will provide a starting price for the Debt on the
              platform and each patron willing to purchase can put forth a bid
              amount greater than the starting price as mentioned. After a
              specified period known as auction period, the Platform shall
              determine the highest bid receivedas the final price for the
              transaction and the patron concerned shall be informed to execute
              the contract note with the Seller. The bid amount will be deducted
              from the successful patron's wallet.
            </li>
            <br />

            <li>
              <b>Payment Settlement: </b>The payment settlement for each
              transaction executed through the Platform shall be through the
              approved mode as provided on the platform and no outward
              transaction shall be executed between the parties.
            </li>
            <br />

            <li>
              <b>Escrow Account: </b>Each patron registering on the Platform
              shall have a linked escrow account created with the Partner bank
              through which all the payments related to transactions will be
              facilitated on the Platform. The Patron shall be obliged to
              provide KYC and other details as required by the Partner bank for
              creation of the Escrow Account. A debenture trustee shall be
              appointed for the management of the escrow account in accordance
              with the applicable provisions of Companies Act and other relevant
              laws. The debenture trustee is responsible for the management and
              control of the flow of funds through the escrow account.
            </li>
            <br />
          </ol>

          <h2 className="text-2xl font-bold mt-3 mb-2">Risk Disclosure </h2>
          <p className="mb-4">
            By using this platform, you acknowledge that investing in
            non-convertible debentures (NCDs) , OCDs, Secured Notes and other
            valid instruments and lending to real estate borrowers involves
            significant risks. The value of investments in NCDs can fluctuate
            due to changes in market conditions, interest rates, and economic
            factors. Patrons may experience losses if market conditions
            deteriorate. However, since the platform is merely a Technical
            Service Provider (TSP) and the borrower directly issues the
            instruments to the lenders, the risk involved in those debentures
            must be borne by the patron himself and the platform shall not be
            liable to any loss attributed to the risk in issuance of these NCDs.
            Changes in laws, regulations, and policies can impact the operations
            of the platform, the issuance of NCDs, and the returns on
            investments. Patrons should be aware of the regulatory environment
            and any potential changes that may affect their investments. It
            shall not be the responsibility of the platform to communicate about
            such changes to the patrons.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Intellectual Property Rights{" "}
          </h2>
          <p className="mb-4">
            Unless otherwise expressly provided by the terms of the platform,
            all the Intellectual Property Rights in the Platform and its content
            are owned by <strong>Altern8</strong> and no user is entitled to use these
            intellectual property rights except as consented by the platform
            through these terms or any other policy for the time being. All
            content and materials including but not limited to text, graphics,
            website name, code, images, and logos are the intellectual property
            of <strong>Altern8</strong> and are protected by applicable copyright and trademark
            law. Any inappropriate use or transmission of any content on this
            site is strictly prohibited unless specifically authorized to do so.
            Except as expressly provided herein, You acknowledge and agree that
            You shall not use, in any manner whatsoever, any Content through any
            medium without obtaining the necessary authorization from <strong>Altern8</strong> or
            thirty party owners of such Content. You agree that by use of the
            Platform or by availing the Services You shall not obtain any right
            or interest on the materials and Content. However, <strong>Altern8</strong> may
            assign or license its trademark or other intellectual property
            rights to any third party for promotional or marketing purposes.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Royalty </h2>
          <p className="mb-4">
          <strong>Altern8</strong> reserves exclusive ownership rights over the Intellectual
            Property associated with the platform and the Patron acknowledges
            that they are granted a limited, non-exclusive license to use the
            Platform in accordance with these Terms of Use. This license does
            not transfer any ownership rights of the IP to the users. Users of
            the platform are required to pay specific royalties to the platform
            for using the technical services and the IPs of the platform. The
            royalties are fees for the service of using <strong>Altern8</strong>'s proprietary
            technology and intellectual property, which facilitate the
            transactions between borrowers and patrons. Royalties provided for
            availing the services of the Platform shall be exclusive of any
            taxes since the same is exempted in accordance with the Provisions
            of the Income Tax Act
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Modification of terms{" "}
          </h2>
          <p className="mb-4">
          <strong>Altern8</strong> reserves the rights, at its sole discretion, to amend,
            alter, modify, change, add or remove any portion of the Terms of Use
            or the Privacy Policy, in whole or in part, at any time. The revised
            Terms of Use shall be made available on the Platform. You agree to
            take the responsibility to be aware of the updated terms of use by
            frequently visiting the website and <strong>Altern8</strong> shall not be responsible
            to communicate you about any changes made to the terms and
            conditions of use. Your continued use of the Platform and/or the
            Services made available on or through the Platform after any changes
            to the Terms of Use or the Privacy Policy are posted will be
            considered acceptance of such changes. You can determine when
            <strong>Altern8</strong> last modified the Terms of Use by referring to the
            &quot;Last Updated&quot; legend herein.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Fees and Charges </h2>
          <p className="mb-4">
            The platform does not charge any registration fee from the patrons.
            However, whenever the patron invests in any NCDs through the NBFC,
            the platform may charge commission fee as specified on the platform
            for such transaction for acting as a facilitator between the
            borrower and the patron.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Data Protection and Privacy:{" "}
          </h2>
          <p className="mb-4">
            The User hereby consents, expresses and agrees that they have read
            and fully understands the privacy policy of <strong>Altern8</strong>{" "}
            in respect of access to the platform.
          </p>
          <p className="mb-4">
            You further consent that the terms and contents of such Privacy
            Policy are acceptable to You and the platform reserves the right to
            collect and process user data from you. <strong>Altern8</strong>{" "}
            hereby undertakes to protect your data with integrity and safety
            measures and shall implement and maintain appropriate technical and
            organizational measures to protect personal data against
            unauthorized or unlawful processing, accidental loss, destruction,
            or damage.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Confidentiality </h2>
          <p className="mb-4">
            Subject to the specific permissions in these Terms of Use, both
            parties will protect each other's Confidential Information from
            unauthorized use, access, or disclosure, using at least the same
            level of care as they use to protect their own Confidential
            Information, but no less than a reasonable standard of care. Except
            as expressly allowed by these Terms of Use, each party may use the
            other's Confidential Information only to exercise their rights and
            fulfill their obligations under these Terms of Use.
            &quot;Confidential Information&quot; refers to any information
            labeled as &quot;confidential&quot; (or similarly) or that a
            reasonable person would consider confidential given its nature and
            the circumstances of disclosure. However, Confidential Information
            does not include information that: (a) was already known to the
            receiving party at the time of disclosure; (b) was obtained from a
            third party without an obligation of confidentiality; (c) becomes
            publicly available without breaching these Terms of Use; or (d) is
            independently developed by the receiving party without using the
            disclosing party's Confidential Information.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Governing Law </h2>
          <p className="mb-4">
            These terms and conditions shall be governed by and construed in
            accordance with the laws of India as applicable for the time being
            in force. Subject to the generality of the foregoing, these terms
            and conditions shall be subject to the provisions of Companies Act,
            the Debenture rules, SEBI rules and regulations as well as RBI
            regulations for NBFCs and issuance of NCDs.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Dispute Resolution </h2>
          <p className="mb-4">
            The determination of existence of any disputes, the nature of the
            disputes and how it should be handled relating to these terms and
            conditions shall be decided by <strong>Altern8</strong>. Subject to the above, any
            dispute arising out of the services provided by the platform, be it
            between the patron and the platform or between borrower and the
            platform or between the NBFC and the platform, the dispute shall be
            resolved through award of sole arbitrator to be appointed by both
            the parties in accordance with its rules and subject to the
            provisions of the Arbitration and Conciliation Act, 1996 as amended
            from time to time. The venue of Arbitration shall be at Chennai and
            the language shall be English.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Representation and Warranties{" "}
          </h2>
          <p className="mb-4">
            The user hereby agrees and warrants that the Platform, Services,
            Content and other materials are provided by <strong>Altern8</strong> on an &quot;as
            is&quot; basis without warranty of any kind, express, implied,
            statutory or otherwise, including the implied warranties of
            accuracy, reliability or fitness for a particular purpose. To the
            fullest extent permissible pursuant to applicable law, <strong>Altern8 </strong>
            disclaims all warranties, express or implied, including but not
            limited to, implied warranties of merchantability and fitness for a
            particular purpose. <strong>Altern8</strong> does not warrant that the website or the
            server that makes it available is free from viruses or other harmful
            components. Without limiting the foregoing, <strong>Altern8</strong> makes no
            warranty that (i) the Platform or the Services will meet Your
            requirements or Your use of the Platform or the Services will be
            uninterrupted, timely, secure or error-free; (ii) the results that
            may be obtained from the use of the Platform, Services or materials
            will be effective, accurate or reliable; (iii) the quality of the
            Platform, Services or other materials will meet your expectations;
            or that (iv) any errors or defects in the Platform, Services or
            other materials will be corrected. No advice or information, whether
            oral or written, obtained by You from <strong>Altern8</strong> or through or from use
            of the Services shall create any warranty not expressly stated in
            the Terms of Use.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Limitation of liability{" "}
          </h2>
          <p className="mb-4">
          <strong>Altern8</strong> does not guarantee that the user will get his expected
            returns by investing in any particular venture. The platform merely
            acts as a facilitator between the borrower and the patron and has no
            liability to compensate if the patron is not able to get his
            expected returns through the borrowers. The sole remedy available to
            the patrons is to act in accordance with the Companies Act or the
            SEBI regulations.
            <br />
            <strong>Altern8</strong> will not be liable for any direct, indirect, incidental,
            consequential or exemplary loss or damages which may be incurred by
            you as a result of using our Resources, or as a result of any
            changes, data loss or corruption, cancellation, loss of access, or
            downtime to the full extent that applicable limitation of liability
            laws apply.
            <br />
            To the fullest extent permitted by applicable law, <strong>Altern8</strong> shall not
            be liable to you for any damages arising from (i) errors, mistakes,
            or inaccuracies in content, (ii) personal injury or property damage
            resulting from your access to and use of the services, (iii)
            unauthorized access to or use of our servers and any personal
            information stored therein, (iv) any interruption or cessation of
            transmission to or from our servers, (v) bugs, viruses, trojan
            horses, or similar issues transmitted through the services by any
            third party, (vi) loss of your data or content from the services,
            (vii) errors or omissions in any content or any loss or damage
            resulting from your use of any content posted, transmitted, or made
            available through the services, whether based on warranty, contract,
            tort, or any other legal theory, and whether or not we were advised
            of the possibility of such damages, (viii) disclosure of information
            according to these terms or our privacy policy, (ix) your failure to
            keep your password or account details secure and confidential, or
            (x) loss or damage incurred by you due to reliance on the
            completeness, accuracy, or existence of any advertising, or due to
            any relationship or transaction between you and any advertiser or
            sponsor whose advertising appears on the services. In no event shall
            we be liable to you for any indirect, incidental, special, punitive,
            exemplary, or consequential damages, including but not limited to
            loss of profit, goodwill, business reputation, data, or other
            intangible losses.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Termination</h2>
          <p className="mb-4">
          <strong>Altern8</strong> may terminate your access to all or any part of the platform
            at any time with or without cause, with or without notice, effective
            immediately, which may result in the loss and damage of all the
            information and ongoing transactions you may have in connection with
            the platform. Subject to the generality of the foregoing, <strong>Altern8 </strong>
            may terminate your access to the platform if-
          </p>

          <ol>
            <li>
              (a) You have violated these terms of use or any other policy of
              the platform such as privacy policy.{" "}
            </li>
            <li>
              (b) You have acted in an illegal or unethical manner prejudicial
              to the interest of other users/ sellers or other buyers or
              borrowers on the platform, or against the interest of platform
              itself.
            </li>
            <li>
              (c) You have violated any of the applicable rules and regulations
              regarding issue of NCDs as prescribed under applicable laws such
              as Companies Act, Companies Share Capital and Debenture Rules
              2014, or any SEBI or RBI regulations as applicable from time to
              time.
            </li>

            <li>
              (d) Any suspected illegal, fraudulent or abusive activity through
              your user account shall also be a ground for termination.
            </li>
            <li>
              (e) Any other activity incidental to the above stated activities,
              which in the opinion of <strong>Altern8</strong>, is liable for termination.
            </li>
          </ol>
          <br/>
          <p>
            If you object to any Terms and Conditions, your only recourse is to:
            <br/><br/>
            (a) discontinue use of the Platform or the Services; and <br/>(b) notify
            <strong> Altern8</strong> of such discontinuance. Please note that such termination
            shall only govern Your usage of the Platform and any Services
            offered to You by an affiliate of <strong>Altern8</strong> (be it NBFC) or a third
            party or a borrower shall continue to be governed by the terms
            agreed in such individual service agreements.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Report Abuse</h2>
          <p className="mb-4">
            In the event You come across any abuse or violation of these Terms
            of Use including any Privacy Policy or Additional Terms or if You
            become aware of any objectionable content on the Platform, please
            report immediately to <strong>Altern8</strong> customer support.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Communications</h2>
          <p className="mb-4">
            Upon your express consent by way of clicking on the check box
            provided on the platform for this purpose, You expressly agree to
            receive communications (including promotional materials) by way of
            telephones, WhatsApp, RCS, SMS, e-mails, etc., from <strong>Altern8</strong> relating
            to any Services provided through the Platform.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Third party sites </h2>
          <p className="mb-4">
            The Website or the mails for communication may contain links to
            third-party websites. However, these links are merely for
            advertisement purposes only and the company has no connection or
            affiliation with any of these third party sites or their products.
            The company neither provides for the endorsement of any other
            product or services through its platform. The provision of Third-
            Party Content is for general informational or advertisement purposes
            only. In no event shall <strong>Altern8</strong> be responsible for the information
            contained on any Third-Party Sites or your use of or inability to
            use any Third-Party Sites. You acknowledge and agree that <strong>Altern8 </strong>
            shall not be liable or responsible, directly or indirectly, for any
            damage or loss caused through any third-party website or resource.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Miscellaneous </h2>
          <p className="mb-4">
            Notice: All notices to <strong>Altern8</strong> shall be served by email or by
            general notification on the Platform. Any notice to be provided to
            <strong> Altern8</strong> pursuant to the Terms of Use should be sent to customer
            support <strong>
              {" "}
              <a href="mailto:blend@nahar.om">blend@nahar.om</a>
            </strong>{" "}.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Entire Agreement </h2>
          <p className="mb-4">
            These Terms of Use, together with the Privacy Policy constitute the
            entire agreement between you and <strong>Altern8</strong> in relation to your use of
            the Platform and supersede all previous agreements in respect of
            your use of the Platform. Please note, however, that other aspects
            of your use of Services may be governed by additional agreements. If
            any term of this Terms of Use expressly conflicts with any term of
            any individual service agreement executed between borrower, patron
            or the NBFC, such conflict will be resolved at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Severability</h2>
          <p className="mb-4">
            If for any reason, a court of competent jurisdiction finds any
            provision of the Term of Use, or portion thereof, to be
            unenforceable, that provision shall be enforced to the maximum
            extent permissible so as to give effect to the intent of the parties
            as reflected by that provision, and the remainder of the Terms of
            Use shall continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Waiver </h2>
          <p className="mb-4">
          <strong>Altern8</strong>'s failure to enforce any provision of this Terms of Use
            shall not be deemed to be a waiver of such provision nor of the
            right to enforce such provision.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Contact </h2>
          <p className="mb-4">
            If you have any queries or doubt regarding the terms of use, please
            reach the customer support of <strong>Altern8</strong> at{" "}
            <strong>
              {" "}
              <a href="mailto:blend@nahar.om">blend@nahar.om</a>
            </strong>{" "}
          </p>

        </div>
        <Footer />
      </ClothUnrollEffect>
    </div>
  );
}
