import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "../components/float-top-button";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Alter8",
//   description: "Alter8 investor's page",
// };

export const metadata: Metadata = {
  title: "Altern8",
  description: "Revolutionizing Lending Through Innovation, AI and Insight with Simplified Lending Stack.",
  twitter: {
    card: "summary_large_image",
    title: "Altern8",
    site: "https://altern8-investor.vercel.app/",
    description: "Invest Ethically, Grow Confidently: Empower Creators, Build Wealth",
    images: [
      {
        url: "https://altern8-investor-git-ayush-pranav-nahars-projects.vercel.app/altern8-investor-og.png",
        width: 1200, // Update to Twitter's recommended size
        height: 675, // Update to Twitter's recommended size
        type: 'image/png',
        alt: "Altern8",
      },
    ], 
  },
  openGraph: {
    title: "Altern8",
    description: "Revolutionizing Lending Through Innovation, AI and Insight with Simplified Lending Stack.",
    url: "https://altern8-investor.vercel.app",
    type: "website",
    images: [
      {
        url: "https://altern8-investor-git-ayush-pranav-nahars-projects.vercel.app/altern8-investor-og.png",
        width: 300,
        height: 300,
        type: 'image/png',
        alt: "Altern8",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        
        <ToastContainer position="bottom-left"/>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
