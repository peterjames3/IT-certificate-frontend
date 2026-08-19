import { ExamCompanion } from "./exam-companion";
import { Proctored } from "./proctored-banner";
import { CircleArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { POPULAR_COMPARISONS, buildCompareSlug } from "@/lib/compareSlugs";

export default function ProctoredSeoContent() {
  const comparisonLinks = POPULAR_COMPARISONS.map((pair) => {
    const slug = buildCompareSlug(pair);
    const label = pair
      .map((s) =>
        s
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "),
      )
      .join(" vs ");
    return { slug, label, certs: pair };
  });

  return (
    <>
      <section className="w-full mx-auto max-w-full lg:max-w-310 gap-20 px-6 py-12 md:flex items-start">
        <article className="w-full md:w-[65%]">
          {/* Main SEO Header - High Intent Keyword targeting IT industry */}
          <article>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Pay Someone to Take My Proctored IT Exams – Be It Cloud, Linux,
              CompTIA, CCNA, EC-Council etc
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                <strong>ProctoredExamHelp</strong> is the leading
                professional proxy testing partner where enterprise engineers
                and subject matter experts take your online IT certifications on
                your behalf. We guarantee total privacy, compliance safety, and
                a passing score on the first attempt. If you have ever wondered,{" "}
                <em>
                  &apos;Can I pay someone to take my IT certification
                  exam?&apos;
                </em>{" "}
                we provide the ultimate secure solution.
              </p>
              <p>
                Our services are specifically designed for busy system
                administrators, developers, and tech professionals balancing
                heavy work shifts with strict corporate training windows.
                Whether you need to pass an associate-level cloud test or an
                expert enterprise engineering lab, we handle the technical
                delivery seamlessly.
              </p>
              {/* Internal Link to Order Page */}
              <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="text-sm">
                  <strong>Ready to get started?</strong>{" "}
                  <Link
                    href="/order"
                    prefetch={true}
                    className="text-emerald-700 font-semibold hover:underline"
                  >
                    Book your proctored exam help now →
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* NEW: What is Proctored Exam Help? */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              What Is Proctored Exam Help and How Does It Work?
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                <strong>Proctored exam help</strong> is a professional service
                where certified subject matter experts take your online
                proctored exams on your behalf. These exams are monitored
                remotely using specialized software like{" "}
                <strong>Pearson VUE</strong>, <strong>Honorlock</strong>,
                <strong>ProctorU</strong>, and <strong>Examity </strong> to
                verify the test-taker&apos;s identity and environment.
              </p>
              <p>
                Our expert test-takers are trained to handle the strictest
                proctoring environments while maintaining complete anonymity. We
                utilize advanced screen-sharing configurations, secure browser
                setups, and identity verification protocols to ensure a
                seamless, undetectable experience.
              </p>
              <ul className="py-2 pl-4 space-y-2 list-disc">
                <li>
                  <span className="font-semibold">Live Proctoring:</span>{" "}
                  Real-time monitoring with webcam, microphone, and screen
                  recording.
                </li>
                <li>
                  <span className="font-semibold">Recorded Proctoring:</span>{" "}
                  Session recordings reviewed after the exam for compliance.
                </li>
                <li>
                  <span className="font-semibold">Automated Proctoring:</span>{" "}
                  AI-based monitoring that flags suspicious behavior.
                </li>
                <li>
                  <span className="font-semibold">Browser Lockdown:</span>{" "}
                  Restricted access to external applications and websites.
                </li>
              </ul>
              {/*  Internal Link to Proctored Services Page */}
              <div className="mt-3">
                <Link
                  href="/blog/pay-to-pass-my-online-proctored-exam-safe-guaranteed-and-verified-certification-assistance"
                  prefetch={true}
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Learn more about our proctored exam services →
                </Link>
              </div>
            </div>
          </article>

          {/* NEW: Comprehensive Online Exam Help */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Comprehensive Online Exam Help – Your Ultimate Test-Taking
              Solution
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                <strong>Online exam help </strong> has become the go-to solution
                for busy professionals and students alike. Whether you&apos;re
                pursuing an IT certification, a college degree, or a
                professional credential, our <Link className="font-bold" href="/online-exam-helper" prefetch={true}>online exam helper </Link>
                services ensure you achieve your desired scores without the
                stress and time commitment of traditional preparation.
              </p>
              <p>
                We cover a wide range of online exams across multiple platforms,
                including
                 <strong> Canvas</strong>, <strong>Blackboard</strong>,{" "}
                <strong>Moodle</strong>, <strong> Pearson MyLab</strong>,{" "}
                <strong>McGraw-Hill Connect</strong>, and more. Our experts are
                proficient in navigating these platforms and handling the unique
                challenges they present.
              </p>
              {/* ✅ Internal Link to Online Exam Help Page */}
              <div className="mt-3">
                <Link
                  href="/online-exam-helper"
                  prefetch={true}
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Explore our online exam help services →
                </Link>
              </div>
            </div>
          </article>

          {/* Niche Specific Focus - Proctored Software and Targets */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Professional Proxy Testing for OnVUE, Honorlock, & Pearson VUE
              Platforms
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                Modern IT certifications require stringent remote monitoring
                software. Passing these assessments requires advanced knowledge
                combined with seamless system architecture setups. Hiring a
                professional <strong>IT exam taker</strong> lets you secure your
                next career milestone without the stress of rigid online
                proctoring environments.
              </p>
              <p>
                Our technical team is equipped to handle the latest proctoring
                software including <strong>Respondus LockDown Browser</strong>,
                <strong>ProctorTrack</strong>, <strong>ExamSoft</strong>, and
                <strong>Proctorio</strong>. We stay ahead of every update to
                ensure your exam is delivered without detection.
              </p>
              {/* Internal Link to Specific Proctoring Page */}
              <div className="mt-3">
                <Link
                  href="/online-exam-helper"
                  prefetch={true}
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Learn more about our online exam help →
                </Link>
              </div>
            </div>
          </article>

          {/* Types of Online Exams We Help With */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Types of Online Exams We Cover – From IT Certifications to
              Academic Tests
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                Our <strong>online exam help</strong> services cover a diverse
                range of assessment types across multiple domains:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-secondary">
                    IT & Tech Certifications
                  </h4>
                  <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                    <li>
                      <Link
                        href="/pay-someone-to-take-comptia-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        CompTIA (A+, Network+, Security+)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pay-someone-to-take-aws-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        Cloud (AWS, Azure, Google Cloud)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        Cisco (CCNA, CCNP, CCIE)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pay-someone-to-take-ec-council-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        Cybersecurity (CISSP, CEH, CISM)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pay-someone-to-take-itil-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        DevOps & ITIL
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-secondary">
                    Professional Certifications
                  </h4>
                  <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                    <li>
                      <Link
                        href="https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={true}
                        className="hover:text-emerald-600"
                      >
                        PMP & Project Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        SHRM-CP or SHRM-SCP
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                        prefetch={true}
                        className="hover:text-emerald-600"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        PRINCE2 Foundation & Practitioner
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* Pivot Pain Points towards IT Careers & Compliance */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Why Professionals Search &apos;
              <Link
                prefetch={true}
                className="hover:cursor-pointer hover:text-primary"
                href="/pay-to-pass-my-online-proctored-exam-safe-guaranteed-and-verified-certification-assistance"
              >
                Pay someone to do my Proctored Online Exam
              </Link>
              &apos; or &apos;Exam Takers Services&apos;
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                The pressure on tech professionals to maintain active
                certifications has exponentially increased. With tech stacks
                updating rapidly across Cloud, Cybersecurity, and Linux
                ecosystems, finding time to study while maintaining Production
                environments is incredibly difficult. Investing in an expert to
                take your IT exam safely bypasses academic roadblocks and helps
                you scale your corporate rank.
              </p>

              <ul className="py-2 pl-4 space-y-3 list-none">
                <li>
                  <span className="font-semibold block text-secondary-700">
                    Demanding Corporate Workloads:
                  </span>
                  Engineers often work on 24/7 on-call rotations or intense
                  sprint cycles. Delegating your upcoming certification deadline
                  ensures you don&apos;t sacrifice production code for testing
                  compliance.
                </li>
                <li>
                  <span className="font-semibold block text-secondary-700">
                    Complex Technical Lab Dynamics:
                  </span>
                  Even highly experienced sysadmins struggle with confusing
                  multiple-choice wording or timed sandbox lab instances. Our
                  domain specialists possess deep hands-on expertise to navigate
                  tricky test architectures perfectly.
                </li>
                <li>
                  <span className="font-semibold block text-secondary-700">
                    Guaranteed Compliance & Vendor Safety:
                  </span>
                  We employ secure, non-detectable background configurations
                  designed specifically for modern browser lockdowns. You can
                  sit back relaxed, knowing your candidate profile remains
                  pristine and protected.
                </li>
                <li>
                  <span className="font-semibold block text-secondary-700">
                    Instant Career & Salary Advancement:
                  </span>
                  Acquiring high-tier cloud or security certifications
                  immediately unlocks higher tier payroll bands, client
                  compliance mandates, and enterprise-grade promotion tracking.
                </li>
              </ul>

              <p className="mb-3 pt-2">
                We specialize across all core IT infrastructures—including{" "}
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me"
                  prefetch={true}
                  className="text-emerald-600 hover:underline"
                >
                  AWS architectures
                </Link>
                ,{" "}
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me"
                  prefetch={true}
                  className="text-emerald-600 hover:underline"
                >
                  Microsoft Azure instances
                </Link>
                ,{" "}
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me"
                  prefetch={true}
                  className="text-emerald-600 hover:underline"
                >
                  CompTIA baselines
                </Link>
                , and Red Hat configurations. Our mission is to secure your
                technical credentialing smoothly, safely, and with total
                anonymity.
              </p>
            </div>
          </article>

          <ExamCompanion />

          {/* Benefits of Using an Online Exam Helper */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Top Benefits of Hiring an Online Exam Helper
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                Choosing professional <strong>online exam help</strong> offers
                numerous advantages for busy professionals and students:
              </p>
              <ul className="py-2 pl-4 space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">100% Score Guarantee:</span>{" "}
                    Our experts ensure you achieve your target score on the
                    first attempt.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Time Savings:</span> Save
                    hundreds of study hours while maintaining your work-life
                    balance.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Stress-Free Experience:
                    </span>{" "}
                    Avoid test anxiety and performance pressure with our expert
                    support.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Flexible Scheduling:</span>{" "}
                    We work around your availability, including urgent
                    deadlines.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Complete Anonymity:</span>{" "}
                    Your personal information and academic records remain 100%
                    private.
                  </div>
                </li>
              </ul>
              {/* ✅ Internal Link to Order Page with Exam Parameter */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm">
                  <strong>Ready to hire an online exam helper?</strong>{" "}
                  <Link
                    href="/order"
                    prefetch={true}
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Book your exam help now →
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* Core Domains Segmented for Crawler Intent */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Comprehensive Coverage Across Cloud, Cybersecurity, & Enterprise
              Linux
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                We don&apos;t just cover generic online tests. Our technical
                panel includes certified Solutions Architects, Network
                Engineers, and Security Analysts who handle complex vendor exams
                from{" "}
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me"
                  prefetch={true}
                  className="text-emerald-600 hover:underline"
                >
                  Amazon Web Services (AWS)
                </Link>
                , Google Cloud Platform (GCP),{" "}
                <Link
                  href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                  prefetch={true}
                  className="text-emerald-600 hover:underline"
                >
                  Cisco
                </Link>
                , and the Linux Professional Institute (LPI).
              </p>
            </div>
          </article>

          {/* How to Choose the Right Online Exam Helper */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              How to Choose the Best Online Exam Helper Service
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                With so many <strong>online exam helper</strong> services
                available, it&apos;s essential to choose a trustworthy provider.
                Here&apos;s what to look for:
              </p>
              <ul className="py-2 pl-4 space-y-2 list-disc">
                <li>
                  <span className="font-semibold">
                    Verified Expert Credentials:
                  </span>{" "}
                  Ensure the service employs certified subject matter experts.
                </li>
                <li>
                  <span className="font-semibold">Proven Track Record:</span>{" "}
                  Look for reviews, testimonials, and case studies from past
                  clients.
                </li>
                <li>
                  <span className="font-semibold">Secure Payment Methods:</span>{" "}
                  Choose services with encrypted payment gateways and clear
                  refund policies.
                </li>
                <li>
                  <span className="font-semibold">Data Protection:</span> Ensure
                  the service uses secure servers and deletes client data after
                  delivery.
                </li>
                <li>
                  <span className="font-semibold">24/7 Customer Support:</span>{" "}
                  Reach out to support agents via multiple channels, including
                  live chat and phone.
                </li>
              </ul>
            </div>
          </article>

          {/* Safeguards / Assurances geared towards working pros */}
          <article>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Pay Someone to Take My IT Exam with Full Privacy Safeguards
            </h2>
            <div className="mb-6 space-y-3 leading-relaxed text-[1.2rem]">
              <p>
                Partnering with us means securing absolute transparency and
                premium delivery safeguards. We understand the high stakes
                involved with your professional profile, which is why we
                implement strict enterprise-grade privacy standards throughout
                our delivery workflows:
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
                  the highly unlikely event that a target passing score
                  isn&apos;t achieved, we offer a full policy refund.
                </li>
                <li>
                  <span className="font-semibold">
                    Hardware-Level Anonymity:
                  </span>
                  Your personal data and active employer details are entirely
                  ring-fenced. Every transaction, conversation, and virtual
                  setup operates with complete end-to-end encryption.
                </li>
                <li>
                  <span className="font-semibold">
                    Secure Payment Pathways:
                  </span>
                  All checkouts utilize highly protected, discrete digital
                  transactions ensuring your payment footprint is kept safe and
                  quiet.
                </li>
              </ul>
              <p className="py-3">
                Don&apos;t let a grueling technical exam stand between you and
                your next promotion.{" "}
                <Link
                  href="/order"
                  prefetch={true}
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  Hire our elite IT exam proxy services today
                </Link>{" "}
                and pass with confidence.
              </p>
            </div>
          </article>
        </article>

        {/* Sidebar Content fine-tuned for high-value targets */}
        <div className="w-full md:w-[35%] space-y-12">
          {/* Box 1: Core Tech Links */}
          <article className="border border-gray-300 overflow-hidden rounded-lg space-y-2">
            <div className="font-medium text-button-textColor bg-black p-4 text-xl">
              <h2>
                Proctored IT Exam Certifications <br /> We Cover
              </h2>
            </div>
            <div className="px-3 py-6">
              <ul className="flex flex-col space-y-3 p-2 font-medium">
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS
                </Link>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-sysops-administrator-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS Sysops Administrator
                </Link>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-security-specialty-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS Security Specialist
                </Link>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-professional-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS Solution Architect Professional
                </Link>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-associate-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS Solution Architect Associate
                </Link>
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-cloud-practitioner-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AWS Cloud Practitioner
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Related Exams
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Security+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-network-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Network+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cysa-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA CYSA+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-server-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Server+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-linux-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Linux+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cloud-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Cloud+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-tech-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Tech+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-a-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA A+
                </Link>
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-data-plus-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  CompTIA Data+
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  Azure
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-900"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AZ-900
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-700"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AZ-700
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-500"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AZ-500
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-400"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AZ-400
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-305"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  AZ-305
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/dp-900"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  DP-900
                </Link>
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/dp-203"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  DP-203
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/itil-v4-foundation"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL 4 Foundation
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/cds"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL - Create, Deliver & Support (CDS)
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dsv"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL - Drive Stakeholder Value (DSV)
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/hvit"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL - High-velocity IT (HVIT)
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dpi"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL - Direct, Plan & Improve (DPI)
                </Link>
                <Link
                  href="/pay-someone-to-take-itil-exam-for-me/dits"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ITIL -  Digital & IT Strategy (DITS)
                </Link>

                <Link
                  href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  Cisco CCNA
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cism"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA-CISM
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cisa"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA-CISA
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/crisc"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA-CRISC
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cdpse"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA-CDPSE
                </Link>
                <Link
                  href="/pay-someone-to-take-isaca-exam-for-me/cgeit"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  ISACA-CGEIT
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/cnd"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council CND
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council CEH
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/ctia"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council CTIA
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/cciso"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council CCISO
                </Link>
                <Link
                  href="/pay-someone-to-take-ec-council-exam-for-me/chfi"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  EC-Council CHFI
                </Link>
                <Link
                  href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold text-xl"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />{" "}
                  PMP
                </Link>
              </ul>
            </div>
          </article>

          {/* Box 2: Selling points tailored for IT professionals */}
          <article className="border overflow-hidden border-gray-300 rounded-lg space-y-2">
            <div className="font-medium text-button-textColor bg-black p-4 text-xl">
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
          </article>

          {/* Box 3: Types of Proctored Spaces */}
          <article className="border overflow-hidden border-gray-300 rounded-lg space-y-2">
            <div className="font-medium text-button-textColor bg-black p-4 text-xl">
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
          </article>

          <article className="border overflow-hidden border-gray-300 rounded-lg space-y-2">
            <Proctored />
          </article>
        </div>
      </section>

      {/* NEW SECTION: Popular Exams Comparison - Full Width Below Both Columns */}
      <section className="w-full mx-auto max-w-full lg:max-w-310 px-6 pb-12">
        <div className="border-2 border-gray-50 rounded-xl overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="bg-black px-6 py-5">
            <h2 className="text-3xl font-bold text-white text-center">
              Popular IT Exam Comparisons
            </h2>
            <p className="text-white text-center mt-1 text-lg">
              Compare certifications side by side to find the right fit for your
              career
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonLinks.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={`/tools/compare/${slug}`}
                  prefetch={true}
                  className="group block p-3 bg-white rounded-lg border border-secondary hover:border-secondary-800 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {label}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action Below Cards */}
            <div className="mt-8 text-center border-t border-emerald-100 pt-8">
              <p className="text-gray-600 mb-3">
                Want to compare different certifications or create a custom
                comparison?
              </p>
              <Link
                href="/tools/compare"
                prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 bg-button-login-default text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors shadow-md"
              >
                Compare More Certificate Exams
                <CircleArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
