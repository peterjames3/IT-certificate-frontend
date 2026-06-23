// StepTwo.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function StepTwo() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step-2-image.png"
          alt="Submitting exact technical exam codes and vendor details"
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
          Provide Your Certification Details
        </h2>

        <div className="text-[1rem] lg:text-[1.15rem] text-secondary mb-4 leading-relaxed">
          Fill out our brief form with the exact parameters of your upcoming technical evaluation. This allows us to align your project with a specialist matching your stack:
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>
              <strong>Vendor & Exact Exam Code</strong> (e.g., AWS SAA-C03, Microsoft AZ-104, CompTIA Security+ SY0-701, Red Hat EX200)
            </li>
            <li>
              <strong>Testing Schedule Window</strong> (Your target dates and specific time zone requirements)
            </li>
            <li>
              <strong>System Environment</strong> (The baseline platform infrastructure or testing delivery engine used)
            </li>
          </ul>
          
          <p className="mt-4 text-sm text-gray-500 italic">
            The more specific your exam code, the faster our technical coordination team can review your setup requirements.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] p-4 rounded-md shadow-sm border border-emerald-100">
          <h4 className="title font-bold text-secondary-800 text-sm">
            — Marcus D., Systems Administrator, Cloud Ops
          </h4>
          <p className="label-text text-amber-500 font-medium text-xs mb-1">
            ⭐⭐⭐⭐• Verified Solutions Architect
          </p>
          <p className="p-text text-gray-600 italic text-sm">
            &quot;I submitted my specific cloud infrastructure exam code along with my timeline. The team matched me with a technical expert who understood the exact practical environments, and everything went smoothly.&quot;
          </p>
        </div>
      </motion.div>
    </div>
  );
}