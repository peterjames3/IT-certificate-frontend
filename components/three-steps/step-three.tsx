// StepThree.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

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
          Expert Coordination & Technical Execution
        </h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Our team validates your certification requirements and assigns a
          technical specialist to your file.
        </p>
        <ul className="p-text text-gray-700 space-y-3">
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" />{" "}
            Validate system environment and baseline configurations
          </li>
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" />{" "}
            Coordinate secure logistics for your testing window
          </li>
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" />{" "}
            Complete your certification objectives securely
          </li>
        </ul>
      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step-3-image.png"
          alt="Technical specialist coordinating exam logistics for professional certification"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
