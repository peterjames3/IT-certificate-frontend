import { motion } from "motion/react";
import Image from "next/image";
import { CircleCheckBig, Clock, Trophy } from "lucide-react";

export default function StepThree() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full lg:w-1/2 p-6"
      >
        <nav className="mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          3
        </nav>
        <h2 className="headline font-semibold mb-2 text-2xl lg:text-3xl text-secondary">
          Pro Access, Delivery & Final Results
        </h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-secondary-800 mb-4">
          Once your information is processed, you gain access to your assigned certified professional. They handle the execution and ensure your results are delivered.
        </p>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="flex flex-col gap-2 p-3 bg-white/50 rounded border border-gray-100 shadow-sm">
            <div className="flex gap-3 items-center font-semibold text-secondary">
              <Clock size={20} className="text-primary-700" /> Access Your Specialist
            </div>
            <p className="p-text text-sm text-gray-600 pl-8">You are given direct, private access to your professional exam taker. They are matched based on the specific vendor and exam code you provided.</p>
          </div>

          <div className="flex flex-col gap-2 p-3 bg-white/50 rounded border border-gray-100 shadow-sm">
            <div className="flex gap-3 items-center font-semibold text-secondary">
              <CircleCheckBig size={20} className="text-green-600" /> Execute & Deliver
            </div>
            <p className="p-text text-sm text-gray-600 pl-8">Your expert coordinates the logistics, ensures your system environment is ready, and securely completes your certification objectives within your scheduled window.</p>
          </div>

          <div className="flex flex-col gap-2 p-3 bg-white/50 rounded border border-gray-100 shadow-sm">
            <div className="flex gap-3 items-center font-semibold text-secondary">
              <Trophy size={20} className="text-amber-500" /> Receive Your Results
            </div>
            <p className="p-text text-sm text-gray-600 pl-8">Once the examination is successfully completed, your official passing results and certification documentation are delivered directly to you for verification and download.</p>
          </div>
        </div>

      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step3image.webp"
          alt="Professional exam taker executing the test and delivering final certification results"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
