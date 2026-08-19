"use client";

import { motion } from "motion/react";
import { ExamCompanion } from "../ui/exam-companion";
import { Proctored } from "../ui/proctored-banner";
import {
  CircleArrowRight,
 
} from "lucide-react";
import Link from "next/link";

export default function ItilSeoContent() {
  return (
    <section className="w-full mx-auto max-w-full lg:max-w-310 gap-20 px-6 py-12 md:flex items-start">
      <article className="w-full md:w-[65%]">
        {/* NEW: TOFU - What is ITIL Certification */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            What Is ITIL Certification and Why Does It Matter for IT
            Professionals?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              ITIL (Information Technology Infrastructure Library) is the
              world&apos;s most widely recognized framework for IT service
              management (ITSM). Developed by AXELOS and delivered through
              PeopleCert, ITIL provides a systematic approach to designing,
              delivering, managing, and improving IT services that align with
              business needs.
            </p>
            <p>The ITIL 4 certification scheme offers several levels:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>ITIL 4 Foundation</strong> — Entry-level certification
                covering the Service Value System (SVS), four dimensions of
                service management, and key ITIL practices.
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/take-my-itil-4-foundation-exam-for-me"
                  className="text-primary ml-2 hover:underline"
                >
                  Learn about ITIL 4 Foundation exam help →
                </Link>
              </li>
              <li>
                <strong>ITIL 4 Managing Professional (MP)</strong> — Advanced
                certifications for IT practitioners: CDS, DSV, HVIT, DPI.
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me"
                  className="text-primary ml-2 hover:underline"
                >
                  Learn about Managing Professional exam help →
                </Link>
              </li>
              <li>
                <strong>ITIL 4 Strategic Leader (SL)</strong> — Focuses on
                digital strategy and IT leadership with DITS certification.
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me"
                  className="text-primary ml-2 hover:underline"
                >
                  Learn about Strategic Leader exam help →
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* NEW: MOFU - Exam Difficulty & Study Requirements */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How Hard Are ITIL Exams and How Long Does Preparation Take?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              ITIL exams vary in difficulty depending on the certification
              level. The ITIL 4 Foundation is designed for beginners, while
              Managing Professional and Strategic Leader modules require deep
              understanding of service management frameworks and governance
              practices.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Certification</th>
                    <th className="border p-2 text-left">Questions</th>
                    <th className="border p-2 text-left">Time</th>
                    <th className="border p-2 text-left">Recommended Study</th>
                    <th className="border p-2 text-left">Pass Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">
                      ITIL 4 Foundation
                    </td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">60 mins</td>
                    <td className="border p-2">2-4 weeks</td>
                    <td className="border p-2">~85%</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">CDS (MP)</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">90 mins</td>
                    <td className="border p-2">1-2 months</td>
                    <td className="border p-2">~70%</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">DSV (MP)</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">90 mins</td>
                    <td className="border p-2">1-2 months</td>
                    <td className="border p-2">~70%</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">HVIT (MP)</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">90 mins</td>
                    <td className="border p-2">1-2 months</td>
                    <td className="border p-2">~65%</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">DPI (MP)</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">90 mins</td>
                    <td className="border p-2">1-2 months</td>
                    <td className="border p-2">~70%</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">DITS (SL)</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">90 mins</td>
                    <td className="border p-2">2-3 months</td>
                    <td className="border p-2">~60%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500">
              * Pass rates are approximate and may vary based on exam version
              and candidate experience. Source: PeopleCert candidate reports.
            </p>
          </div>
        </motion.article>

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
            Pay and Pass ITIL v4 Exams No Months Of Prep Needed Through ProctoredExamHelp 
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              You are most likely already convinced of the benefits of getting
              the ITIL certification you need. Whether it is the IT Service
              Management go-to ITIL 4 Foundation, or the advanced Managing
              Professional streams like Create, Deliver and Support (CDS), Drive
              Stakeholder Value (DSV), and High-velocity IT (HVIT). You know
              that these certifications can allow you substantial benefit in
              terms of career advancement. Having ITIL credentials can make you
              more attractive to potential employers, as they demonstrate a
              standardized level of competence in managing enterprise IT
              services and value streams. Many employers and corporate contract
              guidelines require specific ITIL certifications as part of the
              qualification criteria. For example, a job posting for an IT
              service delivery manager or ITSM consultant may list ITIL
              Strategic Leader or Managing Professional credentials as a strict
              requirement. But the problem with these certifications is that for
              you to actually pass them requires months of studying. For passing
              the ITIL 4 Foundation, even a candidate with an IT background
              needs to spend weeks memorizing service value systems, guiding
              principles, and four dimensions of service management. For higher
              tier specialist modules, prep time extends far longer, often
              stretching for several months of specialized training. If you have
              a busy job and want to pass the ITIL certification fast, we offer
              a professional service where you can pay someone to take my ITIL
              exam for me with absolute confidence.
            </p>
            <p>
              How does this work? Well, as you likely know, ITIL exams can be
              taken at home and not just at physical test centers. When taken at
              home, an ITIL exam is proctored online through PeopleCert&apos;s
              platform, where a virtual human proctor monitors your screen,
              webcam video, and microphone. There is also a strict security
              software layer, the ExamShield lockdown browser, which locks down
              your computer, stops you from using external resources, and blocks
              unauthorized applications. Our expert tech team bypasses all the
              security measures deployed by ExamShield to safely connect to your
              device and answer the questions on your ITIL exam for you. This
              allows you to get your credential without having to study. You
              simply pay us, we configure the proxy connection, and our expert
              answers the questions while you maintain standard presence at your
              screen.
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
            Professional Proxy Testing for PeopleCert ExamShield & Online
            Proctored Platforms
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              But won&apos;t ExamShield detect a remote connection during the
              test? No, it will not. We have developed custom, hardware-level
              network routing structures that allow us to bypass lockdown
              security measures seamlessly. When you take a PeopleCert exam from
              home, you are forced to launch ExamShield, which conducts system
              scans to shut down background applications. For our clients who
              wish to bypass these theoretical testing barriers, we have
              designed customized proxy services that operate cleanly without
              the use of detectable virtual machines or clunky software mirrors.
              Our method of taking exams for clients is safe and secure. We do
              not need you to configure secondary monitors or purchase extra
              hardware. Our connection bypass is completely seamless, placing
              our certified specialist in control of the input coordinates to
              answer every question accurately on your behalf.
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
            Why People Hire  Professional ITIL Exam Takers from ProctoredExamHelp
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              ITIL exams are highly conceptual and stressful, particularly when
              corporate deadlines are approaching and study hours are limited.
              If you are wondering whether it is possible to hire an experienced{" "}
              <strong>exam taker</strong> to handle your certification, the
              answer is yes. From foundational service principles to specialist
              strategy modules, our specialists are prepared to deliver
              guaranteed passing results without triggering any platform flags
              or security alerts.
            </p>

            <ul className="py-2 pl-4 space-y-3 list-none">
              <li>
                <span className="font-semibold block text-secondary-600">
                  Demanding Corporate Workloads:
                </span>
                IT managers and service professionals often manage complex,
                round-the-clock operations, SLA commitments, and high-priority
                deployments. Outsourcing your certification deadline ensures you
                keep production environments stable without sacrificing your
                career compliance.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Complex Abstract Concepts:
                </span>
                Even senior IT professionals struggle with the highly
                theoretical, rigid definitions of ITIL value chains, practices,
                and governance patterns. Our subject matter specialists have
                complete mastery over the syllabus framework and can navigate
                the trickiest multiple-choice questions easily.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Guaranteed Compliance & Vendor Safety:
                </span>
                We deploy discrete, non-detectable background proxy
                configurations designed specifically for modern browser
                lockdowns. You can sit back relaxed, knowing your PeopleCert
                candidate profile remains pristine and fully protected.
              </li>
              <li>
                <span className="font-semibold block text-secondary-600">
                  Instant Career & Salary Advancement:
                </span>
                Acquiring high-tier ITIL credentials immediately unlocks
                advanced service manager roles, fits enterprise client
                compliance mandates, and secures your place on senior corporate
                promotion lists.
              </li>
            </ul>

            <p className="mb-3 pt-2">
              After you choose to{" "}
              <strong>pay someone to take my ITIL exam for me</strong> through
              ProctoredExamHelp, you partner with professionals committed to achieving
              a perfect outcome. You simply tell us to manage your ITIL
              verification, and we match you with a specialist who knows the
              exact layout, question formatting, and timing parameters.
            </p>
          </div>
        </motion.article>

        <ExamCompanion />

        {/* Core Domains Segmented for Crawler Intent */}
        <article>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            What Can I Expect When Paying Someone To Take My ITIL Exam
          </h2>
          <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
            <p>
              When you sign up, we connect to your computer ahead of time to
              perform a full system and internet check. This ensures your
              computer meets the technical requirements of the proctoring
              software and our background bypass framework. It is important to
              us that there are no surprises on test day. We will provide
              scheduling slots when our professional tutors are available to
              take the exam for you. You can pick a slot that aligns with your
              schedule. On the test day, approximately 1 hour before your exam,
              we connect to set up the secure link. We will assist you as you go
              through the standard ID verification steps, upload photos of your
              ID, and complete the room scan for the proctor. Once the proctor
              launches the exam, our expert <strong>exam taker</strong> takes
              control of the testing inputs remotely, answering each ITIL
              service management question diligently to lock in a passing score.
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
            Pay Someone to Take My ITIL Exam with Full Privacy Safeguards &
            Guaranteed Proxy Services
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
                Have a PeopleCert voucher or corporate budget expiring within 48
                hours? Our team coordinates instantly to fill last-minute
                testing windows securely.
              </li>
              <li>
                <span className="font-semibold">
                  Pass or First-Time Refund Guarantee:
                </span>
                We hold our service management experts to high standards. In the
                highly unlikely event that a target passing score is not
                achieved, we offer a full refund of your payment.
              </li>
              <li>
                <span className="font-semibold">Hardware-Level Anonymity:</span>
                Your personal data and employer details are completely
                ring-fenced. Every transaction, conversation, and virtual setup
                operates with complete end-to-end encryption.
              </li>
              <li>
                <span className="font-semibold">Secure Payment Pathways:</span>
                All checkouts utilize highly protected, discrete digital
                transactions, ensuring your payment footprint is kept safe and
                quiet.
              </li>
            </ul>
            <p className="py-3">
              Do not let a complex service framework exam stand between you and
              your next career promotion. Hire our elite ITIL{" "}
              <strong>proxy services</strong> today and pass with confidence.
            </p>
          </div>
        </motion.article>
      </article>

      {/* ===== UPDATED ITIL SIDEBAR ===== */}
      <div className="w-full md:w-[35%] space-y-12">
        {/* BOX 1: ITIL Certifications (Current Cluster) */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>ITIL Proctored Exam Help Services</h2>
          </div>
          <div className="px-3 py-6">
            <p className="text-sm text-gray-600 px-2 mb-3">
              Choose your ITIL certification and let our experts handle it:
            </p>
            <ul className="flex flex-col space-y-3 p-2">
              {/* Foundation Level */}
              <li className="border-b border-gray-100 pb-2">
                <span className="text-xs font-semibold uppercase text-gray-400 block mb-2">
                  Foundation Certifications
                </span>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/itil-v4-foundation"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL 4 Foundation
                    </span>
                    <span className="text-xs text-gray-500">
                      IT Service Management Fundamentals
                    </span>
                  </div>
                </Link>
              </li>

              {/* Managing Professional Stream */}
              <li className="border-b border-gray-100 pb-2">
                <span className="text-xs font-semibold uppercase text-gray-400 block mb-2 mt-2">
                  Managing Professional (MP) Stream
                </span>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/cds"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CDS
                    </span>
                    <span className="text-xs text-gray-500">
                      Create, Deliver & Support
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dsv"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      DSV
                    </span>
                    <span className="text-xs text-gray-500">
                      Drive Stakeholder Value
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/hvit"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      HVIT
                    </span>
                    <span className="text-xs text-gray-500">
                      High-velocity IT
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dpi"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      DPI
                    </span>
                    <span className="text-xs text-gray-500">
                      Direct, Plan & Improve
                    </span>
                  </div>
                </Link>
              </li>

              {/* Strategic Leader Stream */}
              <li className="border-b border-gray-100 pb-2">
                <span className="text-xs font-semibold uppercase text-gray-400 block mb-2 mt-2">
                  Strategic Leader (SL) Stream
                </span>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dits"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      DITS
                    </span>
                    <span className="text-xs text-gray-500">
                      Digital & IT Strategy
                    </span>
                  </div>
                </Link>
              </li>

              {/* General Link */}
              <li>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">
                      All ITIL Exams
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Foundation, Managing Professional & Strategic Leader
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 2: Popular Comparisons */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Popular ITIL Comparisons</h2>
          </div>
          <div className="px-3 py-6">
            <p className="text-sm text-gray-600 px-2 mb-3">
              Not sure which ITIL certification or framework is right for you?
              Compare your options:
            </p>
            <ul className="flex flex-col space-y-3 p-2">
              <li>
                <Link
                  href="/tools/compare"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL 4 Foundation vs Managing Professional
                    </span>
                    <span className="text-xs text-gray-500">
                      Compare levels and career paths
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/compare/itil-vs-cobit-vs-iso-20000"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL vs COBIT vs ISO 20000
                    </span>
                    <span className="text-xs text-gray-500">
                      Which ITSM framework fits your needs?
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/compare/itil-vs-pmp-vs-cgeit"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL vs PMP vs CGEIT
                    </span>
                    <span className="text-xs text-gray-500">
                      Governance, service management & project leadership
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/compare/itil-v4-vs-itil-v3"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ITIL 4 vs ITIL v3
                    </span>
                    <span className="text-xs text-gray-500">
                      What changed? Should you upgrade?
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <Link
                href="/tools/compare"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 transition-colors"
              >
                <span>View all comparisons</span>
                <CircleArrowRight className="size-4 text-emerald-500" />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* BOX 3: Related IT Governance & Project Management Certifications */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Related IT Governance & Project Management Certifications</h2>
          </div>
          <div className="px-3 py-6">
            <p className="text-sm text-gray-600 px-2 mb-3">
              Exploring other governance certifications? We can help with these
              too:
            </p>
            <ul className="flex flex-col space-y-3 p-2">
              {/* PMP */}
              <li>
                <Link
                  href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      PMP
                    </span>
                    <span className="text-xs text-gray-500">
                      Project Management Professional
                    </span>
                  </div>
                </Link>
              </li>

              {/* ISACA CGEIT */}
              <li>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cgeit"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CGEIT
                    </span>
                    <span className="text-xs text-gray-500">
                      Certified in the Governance of Enterprise IT
                    </span>
                  </div>
                </Link>
              </li>

              {/* ISACA CISM */}
              <li>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cism"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      CISM
                    </span>
                    <span className="text-xs text-gray-500">
                      Certified Information Security Manager
                    </span>
                  </div>
                </Link>
              </li>

              {/* COBIT */}
              <li>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      COBIT
                    </span>
                    <span className="text-xs text-gray-500">
                      IT Governance Framework
                    </span>
                  </div>
                </Link>
              </li>

              {/* ISO 20000 */}
              <li>
                <Link
                  href="/pay-someone-to-take-itil-v4"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      ISO 20000
                    </span>
                    <span className="text-xs text-gray-500">
                      IT Service Management Standard
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 4: Cloud & Technical Certifications */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Cloud & Technical Certifications</h2>
          </div>
          <div className="px-3 py-6">
            <ul className="flex flex-col space-y-3 p-2">
              {/* AWS */}
              <li>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me"
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  AWS Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-cloud-practitioner-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">
                      AWS Cloud Practitioner
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Foundational cloud
                    </span>
                  </div>
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-associate-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">
                      AWS Solutions Architect
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Cloud architecture
                    </span>
                  </div>
                </Link>
              </li>

              {/* Azure */}
              <li className="mt-2">
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me"
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  Microsoft Azure
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-900"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">AZ-900</span>
                    <span className="text-xs text-gray-500 block">
                      Azure Fundamentals
                    </span>
                  </div>
                </Link>
              </li>

              {/* CompTIA */}
              <li className="mt-2">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me"
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  CompTIA Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="group-hover:text-emerald-600">
                      CompTIA Security+
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Entry-level security
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 5: Why We're #1 for IT Exam Help */}
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
                Certified ITSM & Governance Experts
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

        {/* BOX 6: Proctored Environments */}
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
                PeopleCert / ExamShield
              </li>
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
