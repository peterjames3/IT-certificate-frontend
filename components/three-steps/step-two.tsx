import { motion } from "motion/react";
import Image from "next/image";

export default function StepTwo() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step2image.webp"
          alt="Consultant discussing exam requirements and gathering detailed student information"
          width={700}
          height={200}
          className="rounded-md object-cover"
        />
      </figcaption>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-1/2 p-6"
      >
        <div className="mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          2
        </div>
        
        <h2 className="headline font-semibold mb-2 text-2xl lg:text-3xl text-secondary">
          Discuss Your Needs & Share Details
        </h2>

        <div className="text-[1rem] lg:text-[1.15rem] text-secondary mb-4 leading-relaxed">
          Once your order is placed (or via chat), our coordination team reaches out to ensure we have your specific requirements. We collect the exact data needed to ensure a perfect match:
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>
              <strong>Exact Vendor & Exam Code</strong> (e.g., AWS SAA-C03, ITIL-4-DSV, CompTIA SY0-701, PMP, or any other specific test).
            </li>
            <li>
              <strong>Exam Schedule & Time Zone</strong> (Your exact testing window to ensure availability).
            </li>
            <li>
              <strong>Verification & Environmental Preferences</strong> (Testing platform details, system requirements, or any special instructions needed for your specific test).
            </li>
          </ul>
          
          <p className="mt-4 text-sm text-gray-500 italic">
            All details are securely stored and handled confidentially. Your information is shared only with your assigned specialist to facilitate a seamless process.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] p-4 rounded-md shadow-sm border border-emerald-100">
          <h4 className="title font-bold text-secondary-800 text-sm">
            — Sarah M., IT Project Manager
          </h4>
          <p className="label-text text-amber-500 font-medium text-xs mb-1">
            ⭐⭐⭐⭐⭐ • Verified PMP Candidate
          </p>
          <p className="p-text text-gray-600 italic text-sm">
            &quot;The intake process was incredibly thorough. They didn&#39;t just ask for my exam code; they discussed my timeline, my preferred testing center, and even my time zone concerns. I felt completely prepared before the specialist even started.&quot;
          </p>
        </div>
      </motion.div>
    </div>
  );
}
