"use client";

import { motion } from "framer-motion";
import { ExamCompanion } from "../ui/exam-companion";
import { Proctored } from "../ui/proctored-banner";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComptiaSeoContent() {
  return (
    <section className="w-full mx-auto max-w-full lg:max-w-310 gap-20 px-6 py-12 md:flex items-start">
      <article className="w-full md:w-[65%]">
        {/* Main SEO Header - High Intent Keyword targeting IT industry */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Pay and Pass CompTIA Exams No Months Of Prep Needed
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              You are most likely already convinced of the benefits of getting
              the CompTIA certification you need. Whether it is the IT
              Technician go to A+, Network+ (N+), and Security+ (S+) or the
              Cybersecurity Analyst+ (CySA+). You know that these certifications
              can allow you substantial benefit in terms of career advancement.
              Having the CompTIA certifications can make you more attractive to
              potential employers, as they demonstrate a standardized level of
              competence in specific IT skills. Many employers and job roles may
              require specific CompTIA certifications as a part of the
              qualification criteria. For example, a job posting for a network
              administrator may list Network+ as a required or preferred
              qualification. But the problem with these certifications is that
              for you to actually pass them requires months of studying. For
              passing the A+ typically a candidate who has a basic grasp over IT
              needs to prep for 4 months straight spending at least 2-3 hours a
              day. And for a CompTIA certification such as the Cybersecurity
              Analyst+ (CySA+) the prep time extends far longer, sometimes
              stretching for over 2 years for some candidates. If you have a
              busy job and want to pass the CompTIA certification fast we offer
              a “Take My CompTIA Exam For Me” service. Whereby you basically pay
              us and we take the CompTIA certification exam for you.
            </p>
            <p>
              How does this work? Well as you likely know CompTIA exams can be
              taken at home and not just test centers. When taken at home a
              CompTIA exam is typically proctored or protected by a virtual
              human proctor who monitors your screen and monitors you using
              webcam video and microphone. But there&apos;s a second component,
              the OnVUE browser which locks down your computer and stops you
              from being able to use any other resources during the test and
              blocks all unauthorized applications from running. We can bypass
              all the security measures deployed by OnVUE and basically connect
              into your computer and answer the questions on your CompTIA exam
              for you. Allowing you to get the CompTIA certification you need
              without having to study. You simply pay us, we connect into your
              computer and answer the questions while you pretend to answer the
              questions yourself.
            </p>
          </div>
        </motion.article>

        {/* Niche Specific Focus - Proctored Software and Targets */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Professional Proxy Testing for OnVUE, Honorlock, & Pearson VUE
            Platforms
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              But won’t OnVUE detect your remote connecting during the test? No
              it will not. We have developed custom software that allows us to
              completely bypass OnVUE security measures. A reminder: OnVUE
              browser is the secure lock down browser that is used by CompTIA to
              protect the integrity of CompTIA exams such as A+, N+, S+ and the
              CySA+. So when you take a CompTIA exam from home you are forced to
              use the OnVUE browser which locks down your computer and stops you
              from being able to use any other application typically. But for
              HackOnlineClass.com clients who wish to cheat on CompTIA exams we
              have expended substantial effort to figure out how to bypass OnVUE
              without the use of Virtual Machines and certainly without clients
              having to take pictures of their screens. Our method of taking
              CompTIA exams for clients is safe and secure allowing us to take
              control of your computer and answer the questions on the CompTIA
              exam you want passed. We also do not need clients to use secondary
              monitors or any extra hardware. Our OnVUE bypass is seamless and
              allows us to be in full control of a clients computer as we take
              the exam for you.
            </p>
          </div>
        </motion.article>

        {/* Pivot Pain Points towards IT Careers & Compliance */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Why People Hire Professional CompTIA Exam Takers
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              CompTIA exams are stressful, particularly when exam dates are
              approaching and preparation time is running out. If you are
              wondering whether it is possible to hire someone to take my
              CompTIA exam the answer is yes. Whether it is a foundational
              certification like CompTIA Tech+ or an advanced credential like
              CompTIA Security+ or PenTest+, our exam specialists are prepared
              to deliver your results without triggering any flags or alerts.
            </p>

            <ul className="py-2 pl-4 space-y-3 list-none">
              <li>
                <span className="font-semibold block text-secondary-600">
                  Demanding Corporate Workloads:
                </span>
                Engineers often work on 24/7 on-call rotations or intense sprint
                cycles. Delegating your upcoming certification deadline ensures
                you don&apos;t sacrifice production code for testing compliance.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Complex Technical Lab Dynamics:
                </span>
                Even highly experienced sysadmins struggle with confusing
                multiple-choice wording or timed sandbox lab instances. Our
                domain specialists possess deep hands-on expertise to navigate
                tricky test architectures perfectly.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Guaranteed Compliance & Vendor Safety:
                </span>
                We employ secure, non-detectable background configurations
                designed specifically for modern browser lockdowns. You can sit
                back relaxed, knowing your candidate profile remains pristine
                and protected.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Instant Career & Salary Advancement:
                </span>
                Acquiring high-tier cloud or security certifications immediately
                unlocks higher tier payroll bands, client compliance mandates,
                and enterprise-grade promotion tracking.
              </li>
            </ul>

            <p className="mb-3 pt-2">
              After you hire someone to take the CompTIA exam for me through
              TestHelpNow, you work with professionals who are committed to
              achieving the best possible outcome. You just need to say do my
              CompTIA exam for me, and we match you with a verified specialist
              who holds that specific certification and understands every
              question format, simulation type, and time constraint.
            </p>
          </div>
        </motion.article>

        <ExamCompanion />

        {/* Core Domains Segmented for Crawler Intent */}
        <article>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            What Can I Expect When Paying Someone To Take My CompTIA Exam
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              When you sign up we will connect to your computer and perform a
              system and internet check to confirm that your computer and
              internet meet the requirements of OnVUE proctored CompTIA exams as
              well as our software. It is important to us that there are no
              surprises on test day. We will give you scheduling slots when our
              tutors and test support professionals are available to help you
              take the CompTIA exam you want us to take for you. You can pick
              one of scheduling slots and book the CompTIA exam you want to book
              for a time that works for you. On the scheduled test day 1 hour
              before the scheduled test time we will connect to you and set up
              your computer so we can bypass OnVUE and take the CompTIA exam you
              want us to take for you. We will start the ID verification
              process, you will upload pictures of your ID and the room to OnVUE
              using your phone, then the OnVUE proctor will ask you some
              questions and ask you to show the room. Then launch the exam. At
              this point we will take control of your computer and our expert IT
              tutor will answer each question on the CompTIA exam for you
              diligently.
            </p>
          </div>
        </article>

        {/* Safeguards / Assurances geared towards working pros */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Pay Someone to Take My CompTIA Exam with Full Privacy Safeguards &
            Guaranteed CompTIA Exam Proxy Service
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              Partnering with us means securing absolute transparency and
              premium delivery safeguards. We understand the high stakes
              involved with your professional profile, which is why we implement
              strict enterprise-grade privacy standards throughout our delivery
              workflows:
            </p>

            <ul className="py-2 pl-4 space-y-2">
              <li>
                <span className="font-semibold">Urgent Exam Scheduling:</span>
                Have a corporate voucher expiring in 48 hours? Our team
                coordinates instantly to fill last-minute testing windows
                securely.
              </li>
              <li>
                <span className="font-semibold">
                  Pass or First-Time Refund Guarantee:
                </span>
                We hold our engineering experts to high delivery standards. In
                the highly unlikely event that a target passing score isn&apos;t
                achieved, we offer a full policy refund.
              </li>
              <li>
                <span className="font-semibold">Hardware-Level Anonymity:</span>
                Your personal data and active employer details are entirely
                ring-fenced. Every transaction, conversation, and virtual setup
                operates with complete end-to-end encryption.
              </li>
              <li>
                <span className="font-semibold">Secure Payment Pathways:</span>
                All checkouts utilize highly protected, discrete digital
                transactions ensuring your payment footprint is kept safe and
                quiet.
              </li>
            </ul>
            <p className="py-3">
              Don&apos;t let a grueling technical exam stand between you and
              your next promotion. Hire our elite IT exam proxy services today
              and pass with confidence.
            </p>
          </div>
        </motion.article>
      </article>

      {/* ===== UPDATED COMPTIA SIDEBAR ===== */}
      <div className="w-full md:w-[35%] space-y-12">
        {/* BOX 1: CompTIA Certifications (Current Cluster) */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>CompTIA Proctored Exam Help Services</h2>
          </div>
          <div className="px-3 py-6">
            <p className="text-sm text-gray-600 px-2 mb-3">
              Choose your CompTIA certification and let our experts handle it:
            </p>
            <ul className="flex flex-col space-y-3 p-2">
              {/* Core CompTIA Certifications */}
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-a-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA A+
                    </span>
                    <span className="text-xs text-gray-500">
                      IT Technician & Support
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-network-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Network+
                    </span>
                    <span className="text-xs text-gray-500">
                      Network Administration
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Security+
                    </span>
                    <span className="text-xs text-gray-500">
                      Entry-level Security
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cysa-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA CySA+
                    </span>
                    <span className="text-xs text-gray-500">
                      Security Analytics
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-pentest-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA PenTest+
                    </span>
                    <span className="text-xs text-gray-500">
                      Penetration Testing
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-linux-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Linux+
                    </span>
                    <span className="text-xs text-gray-500">
                      Linux Administration
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cloud-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Cloud+
                    </span>
                    <span className="text-xs text-gray-500">
                      Cloud Computing
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-server-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Server+
                    </span>
                    <span className="text-xs text-gray-500">
                      Server Administration
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-data-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CompTIA Data+
                    </span>
                    <span className="text-xs text-gray-500">
                      Data Analytics
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 2: Related Security Certifications */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Related Security & IT Certifications</h2>
          </div>
          <div className="px-3 py-6">
            <p className="text-sm text-gray-600 px-2 mb-3">
              Exploring other certifications? We can help with these too:
            </p>
            <ul className="flex flex-col space-y-3 p-2">
              {/* EC-Council Family */}
              <li>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me"
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  EC-Council Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">CEH</span>
                    <span className="text-xs text-gray-500 block">
                      Ethical Hacking
                    </span>
                  </div>
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/chfi"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">CHFI</span>
                    <span className="text-xs text-gray-500 block">
                      Computer Forensics
                    </span>
                  </div>
                </Link>
              </li>

              {/* ISACA Family */}
              <li className="mt-2">
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me"
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  ISACA Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cisa"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">CISA</span>
                    <span className="text-xs text-gray-500 block">
                      IT Audit & Control
                    </span>
                  </div>
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cism"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">CISM</span>
                    <span className="text-xs text-gray-500 block">
                      Security Management
                    </span>
                  </div>
                </Link>
              </li>

              {/* CISSP - Blog Link */}
              <li className="mt-2">
                <Link
                  href="/blog/isaca-vs-isc2"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CISSP
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Certified Information Systems Security Professional
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 3: Cloud & Networking Certifications */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Cloud & Networking Certifications</h2>
          </div>
          <div className="px-3 py-6">
            <ul className="flex flex-col space-y-3 p-2">
              {/* AWS Cloud Practitioner */}
              <li>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-cloud-practitioner-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      AWS Cloud Practitioner
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Foundational cloud
                    </span>
                  </div>
                </Link>
              </li>

              {/* AWS Solutions Architect */}
              <li>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-associate-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      AWS Solutions Architect
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Cloud architecture
                    </span>
                  </div>
                </Link>
              </li>

              {/* AWS Security Specialty */}
              <li>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-security-specialty-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      AWS Security Specialty
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Cloud security
                    </span>
                  </div>
                </Link>
              </li>

              {/* Azure AZ-900 */}
              <li>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-900"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      Azure AZ-900
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Azure Fundamentals
                    </span>
                  </div>
                </Link>
              </li>

              {/* Azure AZ-104 */}
              <li>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-104"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      Azure AZ-104
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Azure Administrator
                    </span>
                  </div>
                </Link>
              </li>

              {/* Azure AZ-500 */}
              <li>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-500"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      Azure AZ-500
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Azure Security Engineer
                    </span>
                  </div>
                </Link>
              </li>

              {/* Cisco CCNA */}
              <li>
                <Link
                  href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      Cisco CCNA
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Network administration
                    </span>
                  </div>
                </Link>
              </li>

              {/* ITIL & PMP */}
              <li className="mt-2 pt-2 border-t border-gray-100">
                <Link
                  href="/pay-someone-to-take-itil-v4"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL v4
                    </span>
                    <span className="text-xs text-gray-500 block">
                      IT Service Management
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      PMP
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Project Management Professional
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 4: Why We're #1 for IT Exam Help */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="border overflow-hidden border-gray-300 rounded-lg space-y-2"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Why We&apos;re #1 for IT Exam Help</h2>
          </div>
          <div className="px-4 py-6">
            <ul className="flex flex-col space-y-3 font-medium">
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Certified Subject Matter Experts
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Advanced Proctor Bypass Frameworks
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                100% Undetectable Profile Security
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                On-Time Passing Scores Guaranteed
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Dedicated 24/7 Enterprise Support
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 5: Proctored Environments */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="border overflow-hidden border-gray-300 rounded-lg space-y-2"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Proctored Environments Handled</h2>
          </div>
          <div className="px-4 py-6">
            <ul className="flex flex-col space-y-3 font-medium">
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Pearson VUE / OnVUE
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Prometric Assessments
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                LockDown Browsers & OEM Software
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Honorlock & Proctorio Exams
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                ExamSoft & Examity
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Respondus & ProctorTrack
              </li>
            </ul>
          </div>
        </motion.article>

        <article className="border overflow-hidden border-gray-300 rounded-lg space-y-2">
          <Proctored />
        </article>
      </div>
    </section>
  );
}
