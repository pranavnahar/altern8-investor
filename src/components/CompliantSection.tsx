import React from "react";

export const CompliantSection = () => {
    return (
        <div className=" w-full h-[600px] px-10 py-10 ">
            <div className="flex h-full mt-5">
                <div className="w-1/2 h-full flex flex-col">
                    <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">
                        Compliant <br />
                        and Regulated
                    </h1>
                    <p className="text-lg w-[420px]">
                        We rigorously adhere to the RBI's prudential norms for risk
                        management, maintaining robust financial foundations to safeguard
                        our firm and contribute to overall financial stability. Our
                        investment decisions are guided by the RBI's regulations, aligning
                        strategically with permissible sectors to support economic
                        development responsibly.
                    </p>
                </div>
                {/* logos */}
                <div className="w-1/2 h-[95%] flex flex-col ">
                    <div className="bg-[#EFEFEF] h-1/3 flex items-center justify-center">
                        <div className="w-[218px] h-full">
                            <img src="/landingPage/altern8/makeInIndia.png" alt="make in india" />
                        </div>
                    </div>
                    <div className="bg-[#F7F7FF] h-1/3 flex items-center justify-center">
                        <div className="w-[218px] h-full">
                            <img src="./landingPage/altern8/sahamati.png" alt="sahamati" />
                        </div>
                    </div>
                    <div className="bg-[#FFF8EF] h-1/3 flex items-center justify-center">
                        <div className="w-[218px] h-full">
                            <img src="/landingPage/altern8/reserveBank.png" alt="reserve bank" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
