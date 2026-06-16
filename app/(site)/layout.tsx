import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navigation/navbar";
import { GoogleTagManager } from "@next/third-parties/google";
//import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer/Footer";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { UIProvider } from "@/context/UIContext";
import QueryProvider from "@/provider/QueryProvider";
//import Chatbot from "../ui/Chatbot";
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
      "Testhelpnow | IT Certification  Proctored   exam support & Training",
    template: "%s | Testhelpnow",
  },
  description:
    "Need help with online exams? TestHelpNow lets you pay someone to do your online exam with expert support, guaranteed confidentiality, and reliable results.",
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
        "Testhelpnow | Academic Tutoring, Test prep & End-To-End Exam Support Services",
      template: "%s | Testhelpnow",
    },
    description:
      "Get expert tutoring, targeted exam preparation, and end-to-endcertification  support. Edusion helps students in the US, UK, Canada, and New Zealand excel in their studies and exams.",
    url: "https://testhelpnow.com/",
    type: "website",
    locale: "en_US",
    siteName: "Testhelpnow",
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
      <QueryProvider>
        <UIProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
          >
            <GoogleTagManager gtmId="GTM-KZHSPRPQ" />
            {/* <!-- Google Tag Manager (noscript) --> */}
            {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KZHSPRPQ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript> */}
            {/* <!-- End Google Tag Manager (noscript) --> */}
            <Navbar />
            {children}
            <ScrollToTopBtn />
            <Footer /> 
            {/* <Chatbot /> */}
            {/* <ToastContainer /> */}
          </body>
        </UIProvider>
      </QueryProvider>
    </html>
  );
}