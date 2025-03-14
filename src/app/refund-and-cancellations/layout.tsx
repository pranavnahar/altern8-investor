import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Alter8",
//   description: "Alter8 investor's page",
// };

export const metadata: Metadata = {
  title: "Alter8 Refund & Cancellations",
  description: "Look on Altern8's Refund & Cancellations",
  openGraph: {
    title: "Alter8 Refund & Cancellations",
    description: "Look on Altern8's Refund & Cancellations",
    url: "https://j59d8sfv-3000.inc1.devtunnels.ms/refund-and-cancellations",
    type: "website",
    images: [
      {
        url: "https://j59d8sfv-3000.inc1.devtunnels.ms/Alter8_nav_logo.svg", 
        width: 300,
        height: 300,
        type:'image/png',
        alt: "Alter8",
      },
    ],
  },
};

export default function PrivacyPolicyLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }
