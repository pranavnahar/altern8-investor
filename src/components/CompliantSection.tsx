import React from "react";

export const CompliantSection = () => {
  return (
    <div className=" w-full h-[700px] px-10 py-10 ">
      <div className="flex flex-col h-full mt-5 space-y-5">
        <div className="w-full text-center h-full flex flex-col">
          <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">
            Compliant and Regulated
          </h1>
          <p className="text-lg mt-8  w-[70%] m-auto text-center">
            We rigorously adhere to the RBI&apos;s & SEBI&apos;s prudential norms for risk
            management, maintaining robust financial foundations to safeguard
            our firm and contribute to overall financial stability. Our
            investment decisions are guided by the RBI&apos;s & SEBI&apos;s regulations,
            aligning strategically with permissible sectors to support economic
            development responsibly.
          </p>
        </div>

        {/* logos */}
        {/* <div className="w-full h-[75%] pl-18 m-auto flex"> */}
        <div className="w-full h-[75%]  m-auto flex justify-center items-center">
          <div className="bg-[#EFEFEF] h- flex items-center justify-center">
            <div className="w-[320px] h-full">
              <img
                src="/landingPage/altern8/makeInIndia.png"
                alt="make in india"
              />
            </div>
          </div>
          <div className="bg-[#F7F7FF] h- flex items-center justify-center">
            <div className="w-[350px] h-full">
              <img src="./landingPage/altern8/sahamati.png" alt="sahamati" />
            </div>
          </div>
          <div className="bg-[#FFF8EF] h- flex items-center justify-center">
            <div className="w-[350px] h-full">
              <img
                src="/landingPage/altern8/reserveBank.png"
                alt="reserve bank"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
