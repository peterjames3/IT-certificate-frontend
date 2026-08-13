import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StepOne() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 p-6"
      >
        <nav className="mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          1
        </nav>
         
        <h2 className="headline font-semibold mb-2">
          Browse Exams or <span className="text-accent-700">Consult</span> Our Team.
        </h2>
         
        <p className="text-[1rem] lg:text-[1.3rem] text-secondary mb-4">
          Start your journey by exploring our extensive exam library. Whether
          you need support for{" "}
          <Link
            href="/pay-someone-to-take-itil-exam-for-me"
            className="text-primary-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            ITIL 4
          </Link>
          ,{" "}
          <Link
            href="/pay-someone-to-take-aws-exam-for-me"
            className="text-primary-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            AWS
          </Link>
          ,{" "}
          <Link
            href="/pay-someone-to-take-comptia-exam-for-me"
            className="text-primary-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            CompTIA
          </Link>
          ,{" "}
          <Link
            href="/pay-someone-to-take-cisco-ccna-exam-for-me"
            className="text-primary-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Cisco
          </Link>
          , or{" "}
          <Link
            href="/pay-someone-to-take-azure-exam-for-me"
            className="text-primary-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Azure
          </Link>
          , simply place your order through our secure checkout.
        </p>

        <div className="bg-accent2 p-4 rounded mb-4 border-l-4 border-primary-700">
          <h4 className="font-bold text-secondary">Not sure which service fits?</h4>
          <p className="p-text text-secondary-500">
            Use our <span className="font-semibold text-primary-700 underline decoration-2 cursor-pointer">Live Chat</span> feature to speak with a real exam advisor instantly. We will guide you to the best support package for your specific certification goals.
          </p>
        </div>
        
        <article className="flex gap-4 text-start">
          <article className="bg-white/50 p-4 rounded w-1/2 shadow-sm border border-gray-100">
            <h3 className="text-secondary font-bold text-2xl">150+</h3>
            <p className="p-text text-secondary-500 mb-2">
              Different professional exams supported across IT, Cybersecurity, Cloud, and Project Management.
            </p>
          </article>
           
          <div className="bg-white/50 p-4 rounded w-1/2 shadow-sm border border-gray-100">
            <h3 className="text-secondary font-bold text-2xl">24/7</h3>
            <p className="p-text text-secondary-500">
              Live consultation availability. Get answers and place your order at any hour, in any time zone.
            </p>
          </div>
        </article>
      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step 1 image.png"
          alt="Student browsing different professional exams and consulting via live chat on a laptop"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
