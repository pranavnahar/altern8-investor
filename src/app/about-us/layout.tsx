import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Alter8",
//   description: "Alter8 investor's page",
// };

export const metadata: Metadata = {
  title: "Altern8 About Us",
  description: "Know About Alter8",
  openGraph: {
    title: "Altern8 About Us",
    description: "Know About Altern8",
    url: "https://j59d8sfv-3000.inc1.devtunnels.ms/about-us",
    type: "website",
    images: [
      {
        url: "https://j59d8sfv-3000.inc1.devtunnels.ms/Alter8_nav_logo.svg", 
        width: 300,
        height: 300,
        type:'image/png',
        alt: "Altern8",
      },
    ],
  },
};

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }
