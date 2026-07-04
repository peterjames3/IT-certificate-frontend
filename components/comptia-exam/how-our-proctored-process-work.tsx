"use client";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function HowOurProctoredProcessWork() {
  return (
    <section className="bg-primary-50/80 py-16 ">
      <div className="w-full max-w-full lg:max-w-310 mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-lg font-semibold text-secondary-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proctored Process
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How Our Proctored CompTIA Exam Taker Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From booking to results - here&apos;s exactly what happens at every
            step
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service Card 1 */}
          <motion.div
            className="flex gap-2  shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <section className="px-2 w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 1</h3>
                <div className="bg-accent-100 text-secondary text-sm rounded-xl py-2 px-5">
                  Book
                </div>
              </div>

              <p className="text-2xl text-accent-900 font-semibold mb-6">
                Select the exam you need help with
              </p>
              <p className="text-gray-500 mb-6">
                Browse exam type, domain you want hep then click order now
                button.
              </p>
              <p className="flex items-center gap-3 font-medium text-accent-600">
                <Clock /> Takes 2 minutes
              </p>
            </section>
            <figcaption className="h-full  w-1/2">
              <Image
                src="/process-image-3.png"
                alt="expert exam assistance"
                width={300}
                height={400}
                className="object-fill w-full h-full"
              />
            </figcaption>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="  shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <section className=" h-[45%] p-3 ">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 2</h3>
                <div className="bg-accent-100 text-secondary text-sm rounded-xl py-2 px-5">
                  Confirmation and Reaching Out
                </div>
              </div>

              <p className="text-2xl text-accent-900 font-semibold mb-6">
                Confirm you order
              </p>
              <p className="text-gray-500 mb-4">
                In the order page you will be presented with two
                functionalities: To make complete an order or contact us through
                live chat
              </p>
              <p className="flex items-center gap-3 font-medium text-accent-600">
                Same day, usually within 1 hour
                <Clock />
              </p>
            </section>
            <figcaption className="h-[55%]  w-full">
              <Image
                src="/process-image-2.png"
                alt="expert exam assistance"
                width={800}
                height={400}
                className="object-fill h-full w-full"
              />
            </figcaption>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <section className=" h-[45%] p-3 ">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 3</h3>
                <div className="bg-accent-100 text-secondary text-sm rounded-xl py-2 px-5">
                  Exam day
                </div>
              </div>
              <p className="text-2xl text-accent-900 font-semibold mb-6">
                Get Started
              </p>
              <p className="text-gray-500 mb-4">
                Once agreement is set your service will begin to{" "}
                <span className="text-accent-700 font-semibold">
                  {" "}
                  pay someone to take exam for me
                </span>
                . Incase or queries you can connect with us through our email,
                livechat or booking a meeting via caledary
              </p>
              <p className="flex items-center gap-3 font-medium text-accent-600 mb-2">
                <Clock /> Duration of your exam
              </p>
            </section>
            <figcaption className="h-[55%]  w-full">
              <Image
                src="/processimage3.webp"
                alt="expert exam assistance"
                width={800}
                height={400}
                className="object-fill h-full w-full"
              />
            </figcaption>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
