import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="flex px-16 items-center justify-between  py-4 w-[100%] m-auto sticky top-0 bg-[#FFFFFF]  z-50">
      {/* Logo */}

      {/* <img src="/logo.png" alt="Company Logo" className="w-28" /> */}
      {/* <div className="w-26 ">
          <h1 className="text-center py-2 font-Azonix font-semibold text-3xl bg-gradient-to-r from-[#491699] via-[#173FB9] to-[#EA3EB2] bg-clip-text text-transparent">
            Ethyx <br />
            Solo
          </h1>
        </div> */}
      <div className="w-26 h-10">
        <Link href="/" legacyBehavior>
          <h1 className="cursor-pointer text-center font-Azonix text-[30px] font-semibold leading-[27px] tracking-[3px] bg-gradient-to-r from-[#491699] via-[#173FB9] to-[#EA3EB2] bg-clip-text text-transparent decoration-skip-ink-none">
            ETHYX <br />
            SOLO
          </h1>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex text-2xl space-x-12 text-gray-900 font-medium">
        <Link href="/" legacyBehavior>
          <a
            className="hover:text-black hover:underline hover:decoration-[#49179A] decoration-2 underline-offset-4"
          >
            Why Invest
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
           
            className="hover:text-black hover:underline hover:decoration-[#49179A] decoration-2 underline-offset-4"
          >
            Process
          </a>
        </Link>
       
        <Link href="/opportunities/" legacyBehavior>
          <a className="hover:text-black hover:underline hover:decoration-[#49179A] decoration-2 underline-offset-4">
            Opportunities
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className="hover:text-black hover:underline hover:decoration-[#49179A] decoration-2 underline-offset-4"
          >
            Categories
          </a>
        </Link>
      </div>

      {/* Button */}
      <div className="flex flex-col">
        <Link href="/" legacyBehavior>
          <a
            className="bg-[#49179A] text-white text-xl p-4 w-26 px-10  rounded-full font-medium hover:bg-purple-800"
          >
            Reserve Access
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
