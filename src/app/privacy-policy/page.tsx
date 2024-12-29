
"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
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

export default function PrivacyPolicy() {
  const smoothScrollTo = useSmoothScroll();
  const ReadyToInvestSectionRef = useRef<HTMLDivElement>(null);
  const FaqSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname(); // Gets the current route

  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomainName(window.location.hostname);
    }
  }, []);

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
      <h1 className="text-3xl font-bold mb-4 text-center my-5">Privacy Policy</h1>

      <div className="phone:w-[90%] md:w-[70%] xl:w-[60%] xxl:w-[55%] my-10 mx-auto text-md px-6 pb-5 text-justify">

      
      <p className="mb-4">
        This document is an electronic record in terms of Information Technology
        Act, 2000 and rules there under as applicable and the amended provisions
        pertaining to electronic records in various statutes as amended by the
        Information Technology Act, 2000. This electronic record is generated by
        a computer system and does not require any physical or digital
        signature.
      </p>
      <p className="mb-4">
        This document is published in accordance with the provisions of Rule 3
        (1) of the Information Technology (Intermediaries guidelines) Rules,
        2011 that require publishing the rules and regulations, privacy policy
        and Terms of Use for access or usage of domain name <strong>{domainName}</strong> including
        the related mobile site and mobile application (hereinafter referred to
        as “Platform”).
      </p>
      <p className="mb-4">
        This Platform i.e. domain name <strong>{domainName}</strong> including the related mobile
        site and mobile application is owned by Ekarth Ventures Private Limited{" "}
        <strong>(CIN: U62099TN2024PTC169251)</strong> , having its registered
        office at <strong>46 College Road, Nungambakkam, Chennai, </strong>{" "}
        person(s)/entity(ies) associated/connected with it (hereinafter referred
        to as “Altern”/ “We”/”Us”/Our/”) to provide technology solutions for
        financial products and alternate opportunities. Altern values the trust
        You place in Us and recognize the importance of secure transactions and
        information privacy, and is concerned and committed to maintaining
        robust privacy protections for users (hereinafter referred to as &quot;You&quot;
        &quot;Your&quot; &quot;Yourself&quot;) accessing the Platform.
      </p>

      <p className="mb-4">
        Please read the terms of the Policy carefully before using or
        registering on the Platform or accessing any material, information or
        Services through the Platform. Accessing, browsing or otherwise using
        the Platform indicates Your agreement to all the terms and conditions
        under this Policy and consent to Our collection, storage, use and
        disclosure of Your Personal Information and Non-Personal Information as
        described in this Policy.
      </p>

      <p className="mb-4">
        By using Platform and/or registering yourself on Platform You authorize
        Altern to contact You via email, phone call, sms or whatsapp and offer
        You Our services, imparting product knowledge and offer promotional
        offers running on the Platform for which reasons Your information may be
        collected in the manner as detailed under this Policy. You hereby agree
        that You authorize Altern to contact You for the above-mentioned
        purposes even if You have registered yourself under DND or DNC or NCPR
        service(s). Your authorization, in this regard, shall be valid as long
        as Your account is not deactivated by either You or Us.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">General</h2>
      <p className="mb-4">
        The Privacy Policy (“Privacy Policy”) regulates the usage of the Website
        of the Platform (“Website,” “we,” “us”,”our”) and the Services
        (“Services”) offered on the Website. This Privacy Policy details how We
        utilize the information You supply during registration and the upload or
        sync of invoices. This Privacy Policy pertains exclusively to data
        collected by Altern. It does not extend to information disclosed to
        third parties through websites hosted by the Invoice Trading Platform.
        The Company reserves the right to amend its Privacy Policy at any time.
        To protect Your interests, please revisit this page on a regular basis
        to review the most recent version of Our Privacy Policy. By interacting
        with Our website, submitting forms, or using Our Services, You permit Us
        to use the information You provide, including any company information
        and any data We collect from Your transactions.
      </p>

      {/* Continue adding other sections here, structuring it with <p> tags */}
      {/* You can break down long paragraphs for better readability */}

      <h2 className="text-2xl font-bold mt-6 mb-2">Collected Information</h2>
      <p className="mb-4">
        When You register to become a member on Our website, We ask for personal
        information such as Your name, email address, and postal code (“Personal
        Information”). Accurate information lets Us personalize Our Services to
        meet Your needs better. In addition, when You interact with Our website,
        We may collect additional information such as Your IP address, operating
        system, and browser type. This information is collected to protect Your
        privacy and to compile usage statistics. (“Other Information”).
      </p>
      <p className="mb-4">
        Also, for the facilitation of the services on the Platform, we may
        collect some financial information from you such as your financial
        records, Information regarding your transactions on the website
        (including transaction history) and other financial information such as
        bank account information, accounts, audit reports, profit and loss
        accounts etc.We may also take several other master data from you without
        your consent such as bureau reports, credit checks, PAN numbers and
        verification, Account Aggregator Bank account access, GST Details,
        E-Invoice details, Ecommerce or POS sales data where applicable,
        accounting information
      </p>
      <p className="mb-4">
        We may save Your account ID, access token, and other information to keep
        Your account linked to third-party integrations. However, any
        information You provide with third-party integrations is under Your
        control.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Whenever You interact with Us or Our website, Altern may place a
        “cookie” in Your computer&apos;s browser files. Cookies are data files that
        allow Your browser to communicate with the Altern website. By default,
        most browsers accept cookies. However, You can refuse or block cookies
        by altering Your browser settings. Remember that refusing or blocking
        cookies may limit Your ability to use certain features of Our Website
        and Services entirely.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Use of Information Collected
      </h2>
      <p className="mb-4">
        The aim of Altern in acquiring personal information is to identify
        members and send them timely updates and essential notifications by
        postal mail and/or email. In addition, We perform demographic and
        interest research on Our members using the information they supply upon
        registration to improve Our Services. We are committed to protecting
        Your personal information and will not share or transfer it to other
        parties except in accordance with this Privacy Policy. We retain the
        right to disclose or transfer Your personal information under the
        following conditions:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>With Your expressed consent.</li>
        <li>When required to respond to claims.</li>
        <li>
          When obligated to follow the law, legal procedures, or authorities.
        </li>
        <li>
          When it is essential to defend the rights, property, interests, or
          safety of Altern, its employees, users, or the general public.
        </li>
        <li>
          In connection with the purchase, merger, or sale of all or a portion
          of Our business.
        </li>
      </ol>
      <p className="mb-4">
        When registering on the Application/Website, You may choose to provide
        payment information such as credit card, debit card, bank account
        details, and billing address. We prioritize the security of sensitive
        data and only use approved payment gateways that are digitally encrypted
        and provide the highest level of care available with current technology.
      </p>
      <p className="mb-4">
        We will only use Your financial information to complete transactions
        with you.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">
        Use And Retention Of User Information
      </h2>
      <p className="mb-4">
        All Information, Personal Information, Other Information, and
        Automatically Generated Information shall be referred to as “User
        Information.” The information the user provides will be used for
        communication purposes such as newsletters, updates, notifications, and
        other correspondence. We may also contact You by telephone to collect or
        verify the information You have provided. Any recorded communication
        will remain confidential unless required by law to be disclosed to
        governmental authorities.
      </p>

      <p className="mb-4">
        The user information will only be used for Website-related purposes and
        will not be used for additional purposes. This information will be
        retained until the termination of Your membership/listing on the
        Platform or for such other period as We deem necessary for the Website&apos;s
        operation.
      </p>
      <p className="mb-4">
        You have the right to access and update the information You provided.
        You must notify Us of any changes if the information provided is
        incomplete or inaccurate.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Disclosure</h2>
      <p className="mb-4">
        We will use information only in accordance with the Policy under which
        the information was collected unless We have received explicit
        authorization.
      </p>

      <p className="mb-4">
        The user information will only be used for Website-related purposes and
        will not be used for additional purposes. This information will be
        retained until the termination of Your membership/listing on the
        Platform or for such other period as We deem necessary for the Website&apos;s
        operation.
      </p>
      <p className="mb-4">
        We reserve the right to disclose any information We may have about You
        with its third-party service providers for KYC purposes.
      </p>
      <p className="mb-4">
        We reserve the right to disclose any information We may have about You
        (including Your identity) if We determines that such disclosure is
        necessary in connection with any investigation or complaint regarding
        Your use of the Platform, or to identify, contact or bring legal action
        against someone who may be causing injury to or interference with
        (either intentionally or unintentionally) Altern&apos;s rights or property,
        or the rights or property of Users of the Platform, including Altern&apos;s
        contributors.
      </p>
      <p className="mb-4">
        We reserve the right at all times to disclose any information including
        any Personal Information that We deem necessary to comply with any
        applicable law, regulation, legal process or governmental request. We
        also may disclose Your information when We determine that applicable law
        requires or permits such disclosure, including exchanging information
        with other companies and organizations for fraud protection purposes. We
        shall use all reasonable efforts to ensure that such disclosure would be
        in compliance with the applicable laws in force in India. We would use
        reasonable measures to inform You in the event of such disclosure.
      </p>
      <p className="mb-4">
        You acknowledge and agree that We may preserve any communication by You
        with Us through the Platform, and may also disclose such data if
        required to do so by law or if We determine that such preservation or
        disclosure is reasonably necessary to: (1) comply with legal process;
        (2) enforce this Policy; (3) respond to claims that any such data
        violates the rights of others; or (4) protect the rights, property or
        personal safety of Altern, its employees, users of, or visitors to, the
        Platform, and the public. We would use reasonable measures to inform You
        in the event of such disclosure
      </p>
      <p className="mb-4">
        You consent to Altern verifying Your PAN, Mobile, and Bank Account
        details via an Account Aggregator or any other means. The Account
        Aggregator data is fetched in partnership with pee dee finvest NBFC and
        You consent to pee dee finvest processing Your data.
      </p>
      <p className="mb-4">
        You consent to Altern processing Your GST details, Other Financial
        Details, credit ratings, legal proceedings, details of Directors/
        Partners/ POC, Income Tax details and any other information needed to
        make a credit decision.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Third-party Sites</h2>
      <p className="mb-4">
        The Platform and any e-mail sent to You may also contain/display
        third-party advertisements and links to other websites or products and
        services. Altern does not share any Personal Information with these
        third-party websites or agents or advertisers. However, Altern reserves
        the right to share with You the advertisements on behalf of any other
        parties.
      </p>
      <p className="mb-4">
        Altern may provide links to other websites (&quot;Linked Site&quot;) on the
        Platform or any e-mail sent to You. However, Altern has no control over
        such websites nor is Altern affiliated to or associated with such third
        party websites unless expressly specified on the Platform. These Linked
        Sites are solely for advertisement purposes and Altern is not
        responsible for any form of transmission, whatsoever, received by You
        from any Linked Site. Accordingly, Altern does not make any
        representations concerning the privacy practices or policies of such
        third parties or terms of use of such websites, nor does Altern control
        or guarantee the accuracy, integrity, or quality of the information,
        data, text, software, music, sound, photographs, graphics, videos,
        messages or other materials available on such websites. Further, the
        inclusion or exclusion does not imply any endorsement by Altern of the
        website, the website&apos;s provider, or the information on the website. The
        information provided by You to such third party websites shall be
        governed in accordance with the privacy policies of such websites and it
        is recommended that You review the privacy policy on any such websites
        prior to using such websites. Altern shall not be held responsible for
        any violation of Your privacy rights by such Linked Sites nor any loss,
        damage or injury suffered by You on account of action/inaction of such
        Linked Sites.
      </p>
      <p className="mb-4">
        Altern does not have access to or control over cookies or other features
        or technology that such Linked Sites or third party websites and
        advertisers may use to send the advertisements that appear on the
        Website directly to Your browser or to measure the effectiveness of
        their advertisements and to personalize advertising content. The
        information practices of these third-party websites and advertisers are
        not covered by this Policy. You are required to contact the Linked Site
        directly for more information about their privacy practices.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">
        Protection of Personal Information
      </h2>
      <p className="mb-4">
        We are dedicated to protecting Your personal information, including
        billing and credit information, and providing a safe and secure Platform
        for all users. Except as explicitly stated in this Privacy Policy, We
        will not share Your personal information with third parties.
      </p>
      <p className="mb-4">
        We appreciate Your trust in Us by providing Your personal information,
        and We strive to protect it using commercially acceptable measures. Our
        company has implemented reasonable security practices and procedures to
        prevent the loss, misuse, and alteration of information under Our
        control.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Security</h2>
      <p className="mb-4">
        We strive to ensure the security, integrity, and privacy of Your
        personal and sensitive information. In the event of a security breach,
        We will take the necessary precautions to prevent misuse and may attempt
        to notify You electronically so that You can take appropriate action.
        However, despite Our security measures, third parties, such as hackers,
        may gain unauthorized access to personal information. By using Our
        Platform, You acknowledge and agree that We will not be held liable for
        any damages resulting from such unauthorized access.
      </p>
      <p className="mb-4">
        Notwithstanding anything contained in this Privacy Policy or elsewhere,
        We shall not be held responsible for any loss, damage, or misuse of Your
        Personal Information if such loss, damage, or misuse is attributable to
        a Force Majeure Event.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Notifications and Website Updates
      </h2>
      <p className="mb-4">
        We send email notifications to individuals who log into the Website as
        Altern Platform members. In addition, We may send You regular
        newsletters, updates, and promotional information to keep You updated on
        Platform updates.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">User Rights</h2>
      <p className="mb-4">
        We take reasonable steps to ensure that your information is accurate,
        complete, and up to date. However, it is your sole responsibility to
        review the accuracy of the information you provide and to contact us if
        there are any discrepancies or if you wish to discontinue using our
        Services. You have the following rights concerning your information:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Right to access and update the information you provided.</li>
        <li>
          To stop us from using your information, you may revoke or withdraw
          your consent by writing to us at{" "}
          <strong>
            {" "}
            <a href="mailto:blend@nahar.om">blend@nahar.om</a>
          </strong>
          . Please note that if you refuse to allow us to use information we
          deem necessary to provide our Services, we reserve the right to limit
          or refuse to provide our Services to you.
        </li>
        <li>
          You have choices about the types of marketing communications you
          receive from us. You may opt out of receiving marketing emails by
          following the instructions in the email or by contacting us using the
          contact information provided at the end of this policy.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Opt-Out Options and Service Notifications
      </h2>
      <p className="mb-4">
        As a courtesy to Your privacy, We provide the option to opt out of any
        Services offered on the Website. If You do not opt out of any service,
        You agree to receive information about those Services. We only send You
        information if You have consented to receive it. If You wish to
        discontinue any Services, You can do so by selecting the unsubscribe
        option in the emails You receive or by using the Website&apos;s tabs.
        However, please note that You will not be able to opt out of any service
        notification that may be necessary for the website&apos;s operation, or that
        may be important to You as a member of Altern.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Phishing</h2>
      <p className="mb-4">
        Phishing is the name given to attempts to steal personal details and
        financial account details from a website user. &quot;Phishers&quot; use fake or
        &quot;spoof&quot; emails to lead users to counterfeit websites where the user is
        tricked into entering their details, such as card numbers, user names
        and passwords. If you receive such an e-mail or are asked for your
        password by anyone claiming to work for us, please forward the e-mail or
        report the incident by e-mail to our Data Protection Officer.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Modification of the Privacy Policy
      </h2>
      <p className="mb-4">
        The Privacy Policy may be amended, modified, or refined at Our
        discretion. The updated Privacy Policy will be published on the Website,
        and there will be no separate communication. You are responsible for
        informing yourself of changes to the Privacy Policy by regularly
        checking the Website for updates. Your use of the Website&apos;s Services
        following a change in its Privacy Policy constitutes acceptance of the
        updated Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Governing Law and Dispute Resolution
      </h2>
      <p className="mb-4">
        This Policy shall be governed by and construed in accordance with the
        applicable laws in India. Courts at Chennai, India shall have the
        exclusive jurisdiction over the subject matters of this Policy.
      </p>
      <p className="mb-4">
        Any disputes relating to this Policy shall be subject to the award of
        the sole arbitrator to be appointed by the President - Chennai
        Arbitration Centre in accordance with its rules and subject to the
        provisions of the Arbitration and Conciliation Act, 1996 as amended from
        time to time. The venue of such Arbitration shall be the city of
        Chennai, India, and the language of Arbitration shall be English.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Severability</h2>
      <p className="mb-4">
        We endeavour and have made every effort to ensure that this Policy
        adheres with the applicable laws. If, for any reason, a court of
        competent jurisdiction finds any provision of this Policy, or portion
        thereof, to be unenforceable, the invalidity or unenforceability of such
        part of this Policy shall not prejudice or affect the validity or
        enforceability of the remainder of this Policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        You can contact Us at{" "}
        <strong>
          {" "}
          <a href="mailto:blend@nahar.om">blend@nahar.om</a>
        </strong>{" "}
        if You have any feedback or comments, believe We are not following Our
        Privacy Policy, or wish to remove something that violates a specific
        regulation.
      </p>
      </div>

      {/* Continue this structure for each section of your privacy policy */}
      <Footer />
      </ClothUnrollEffect>
    </div>
    
  );
}
