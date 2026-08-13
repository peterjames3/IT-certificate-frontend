import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navigation/navbar";
import { GoogleTagManager } from "@next/third-parties/google"
import Footer from "@/components/footer/Footer";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import ChatWoot from "@/components/ui/chatwoot";
import ChatwootIllustration from "@/components/ui/chatwoot-illustration";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default:
      "ProctoredExamHelp | IT Certification online exam support & exam taking",
    template: "%s | ProctoredExamHelp",
  },
  description:
    "Need help with live online exams? ProctoredExamHelp lets you pay someone to do your online exam with expert support, guaranteed confidentiality, and reliable results.",
  keywords: [
    "IT certification online exam assistance",
    "IT test preparation services",
    "professional IT exam takers",
    "CompTIA exam support services",
    "Cisco certification exam help",
    "hire someone to take my Microsoft  certification exam",
    "ISC2 certification prep",
    "Google cloud certification training and support",
    "cybersecurity certification training",
    "cloud certification preparation",
    "exam takers for hire",
    "Pay Someone to do my Online Exam for me",
  ],

  robots: "index, follow",
  openGraph: {
    title: {
      default:
        "ProctoredExamHelp | Online Proctored Exam Help, Test prep & End-To-End Exam Support Services",
      template: "%s | ProctoredExamHelp",
    },
    description:
      "Get expert tutoring, targeted exam preparation, and end-to-endcertification  support. ProctoredExamHelp helps students in the US, UK, Canada, and New Zealand excel in their studies and exams.",
    url: "https://proctoredexamhelp.com/",
    type: "website",
    locale: "en_US",
    siteName: "ProctoredExamHelp",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
          >
            <GoogleTagManager gtmId="GTM-KZHSPRPQ" />
       
            <Navbar />
            {children}
            <ScrollToTopBtn />
            <Footer />
            <ChatwootIllustration />
           
            <ChatWoot />
                   
          </body>
    
    </html>
  );
}
