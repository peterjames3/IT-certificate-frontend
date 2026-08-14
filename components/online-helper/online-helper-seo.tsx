"use client";

import { motion } from "framer-motion";
import { ExamCompanion } from "../ui/exam-companion";
import { Proctored } from "../ui/proctored-banner";
import {
  CircleArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ItilSeoContent() {
  return (
    <section className="w-full mx-auto max-w-full lg:max-w-310 gap-20 px-6 py-12 md:flex items-start">
      <article className="w-full md:w-[65%]">
        {/* ── PILLAR PAGE: The Ultimate Guide to Online Exam Help ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Ultimate Guide to Online Exam Help – Everything You Need to Know
          </h1>
          <div className="mb-6 space-y-4 leading-relaxed text-[1.1rem]">
            <p className="text-lg text-gray-600">
              If you've ever searched for <strong>"online exam help"</strong>, 
              you're not alone. Thousands of students and professionals turn to 
              exam help services every year. But what exactly is online exam help? 
              How does it work? Is it safe? This guide answers all your questions.
            </p>
          </div>
        </motion.article>

        {/* ── TABLE OF CONTENTS ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="bg-slate-50 p-6 rounded-xl border border-gray-200 my-8"
        >
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link href="#what-is-online-exam-help" className="text-emerald-600 hover:underline">
                1. What Is Online Exam Help?
              </Link>
            </li>
            <li>
              <Link href="#how-does-it-work" className="text-emerald-600 hover:underline">
                2. How Does Online Exam Help Work?
              </Link>
            </li>
            <li>
              <Link href="#types-of-exams" className="text-emerald-600 hover:underline">
                3. Types of Exams You Can Get Help With
              </Link>
            </li>
            <li>
              <Link href="#why-choose-professional-help" className="text-emerald-600 hover:underline">
                4. Why Choose Professional Online Exam Help?
              </Link>
            </li>
            <li>
              <Link href="#how-to-choose" className="text-emerald-600 hover:underline">
                5. How to Choose the Right Online Exam Helper
              </Link>
            </li>
            <li>
              <Link href="#cost" className="text-emerald-600 hover:underline">
                6. How Much Does Online Exam Help Cost?
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="text-emerald-600 hover:underline">
                7. Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </motion.article>

        {/* ── SECTION 1: What Is Online Exam Help? ── */}
        <motion.article
          id="what-is-online-exam-help"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            1. What Is Online Exam Help?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              <strong>Online exam help</strong> is a professional service where 
              certified subject matter experts take your online exams on your 
              behalf. These experts are knowledgeable in specific subjects and 
              trained to navigate various online learning platforms like 
              Canvas, Blackboard, Moodle, Pearson MyLab, and McGraw-Hill Connect.
            </p>
            <p>
              Whether you're facing time constraints, test anxiety, complex 
              material, or simply don't have the bandwidth to prepare, our 
              experts handle the entire exam process from start to finish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Why Students Use Online Exam Help
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>Overwhelming workload and tight deadlines</li>
                  <li>Lack of time to study effectively</li>
                  <li>Test anxiety and performance pressure</li>
                  <li>Complex subjects requiring expert guidance</li>
                  <li>Need for guaranteed passing scores</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  What We Guarantee
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>100% confidentiality and privacy</li>
                  <li>Certified subject matter experts</li>
                  <li>Pass on first attempt or full refund</li>
                  <li>On-time delivery every time</li>
                  <li>Secure payment and data protection</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 2: How Does It Work? ── */}
        <motion.article
          id="how-does-it-work"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            2. How Does Online Exam Help Work?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              The process is simple and straightforward. Here's how it works:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {[
                {
                  step: "1",
                  title: "Request Support",
                  desc: "Share your exam details, subject, preferred date, and location through our secure form. Our team reviews your request promptly.",
                },
                {
                  step: "2",
                  title: "Get Matched",
                  desc: "We assign a certified expert familiar with your specific exam and subject requirements.",
                },
                {
                  step: "3",
                  title: "We Take the Exam",
                  desc: "Your expert completes the exam on your behalf with strict privacy standards.",
                },
                {
                  step: "4",
                  title: "You Get Results",
                  desc: "Receive your passing score with full confidentiality and guaranteed satisfaction.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition"
                >
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 3: Types of Exams ── */}
        <motion.article
          id="types-of-exams"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            3. Types of Exams You Can Get Help With
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Our online exam help services cover a diverse range of assessment 
              types across multiple domains:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary">🎓 Academic Exams</h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                  <li>College & University Courses</li>
                  <li>Graduate Programs</li>
                  <li>MBA & Business Courses</li>
                  <li>Engineering & Sciences</li>
                  <li>Medical & Nursing</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary">💻 IT & Tech Certifications</h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                  <li>
                    <Link href="/pay-someone-to-take-aws-exam-for-me" className="hover:text-emerald-600">
                      AWS, Azure, Google Cloud
                    </Link>
                  </li>
                  <li>
                    <Link href="/pay-someone-to-take-comptia-exam-for-me" className="hover:text-emerald-600">
                      CompTIA (A+, Network+, Security+)
                    </Link>
                  </li>
                  <li>
                    <Link href="/pay-someone-to-take-cisco-ccna-exam-for-me" className="hover:text-emerald-600">
                      Cisco (CCNA, CCNP)
                    </Link>
                  </li>
                  <li>
                    <Link href="/pay-someone-to-take-ec-council-exam-for-me" className="hover:text-emerald-600">
                      Cybersecurity (CISSP, CEH, CISM)
                    </Link>
                  </li>
                  <li>
                    <Link href="/pay-someone-to-take-itil-exam-for-me" className="hover:text-emerald-600">
                      DevOps & ITIL
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary">📜 Professional Certifications</h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                  <li>
                    <Link 
                      href="https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-emerald-600"
                    >
                      PMP & Project Management
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
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
                      className="hover:text-emerald-600"   
                      rel="noopener noreferrer"  
                      target="_blank"
                    >  
                      PRINCE2 Foundation & Practitioner
                    </Link>
                  </li>
                  <li>Six Sigma & Lean</li>
                  <li>Real Estate & Finance</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary">🌍 English Proficiency</h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4">
                  <li>TOEFL</li>
                  <li>IELTS</li>
                  <li>PTE Academic</li>
                 
                  <li>Cambridge Assessments</li>
                </ul>
              </div>
            </div>
 <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Common Online Exam Formats We Handle</h3>
      <p className="text-sm text-gray-600 mb-3">
        Different exams use different formats and platforms. Here's what we cover:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Exam Type</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-left">Common Platforms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Multiple Choice</td>
              <td className="border p-2">Automated grading, often timed</td>
              <td className="border p-2">Canvas, Blackboard, Moodle</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Essay & Short Answer</td>
              <td className="border p-2">Requires written responses, human-graded</td>
              <td className="border p-2">Turnitin-integrated LMS</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Open-Book Exams</td>
              <td className="border p-2">Allows reference materials, tests application</td>
              <td className="border p-2">Custom university portals</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Proctored Exams</td>
              <td className="border p-2">Monitored via webcam/software</td>
              <td className="border p-2">ProctorU, Examity, Proctorio</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Adaptive Testing</td>
              <td className="border p-2">Questions adjust based on performance</td>
              <td className="border p-2">NCLEX, GRE, GMAT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-1">
        * Platforms and formats may vary by institution. Contact us for specific requirements.
      </p>
    </div>
    </div> 
          
        </motion.article>

        {/* ── SECTION 4: Why Choose Professional Help ── */}
        <motion.article
          id="why-choose-professional-help"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            4. Why Choose Professional Online Exam Help?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Choosing professional <strong>online exam help</strong> offers 
              numerous advantages for busy professionals and students:
            </p>
            <ul className="py-2 space-y-3 list-none">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">100% Score Guarantee:</span>
                  {" "}Our experts ensure you achieve your target score on the first attempt.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Time Savings:</span>
                  {" "}Save hundreds of study hours while maintaining your work-life balance.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Stress-Free Experience:</span>
                  {" "}Avoid test anxiety and performance pressure with our expert support.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Flexible Scheduling:</span>
                  {" "}We work around your availability, including urgent deadlines.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Complete Anonymity:</span>
                  {" "}Your personal information and academic records remain 100% private.
                </div>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* ── SECTION 5: How to Choose ── */}
        <motion.article
          id="how-to-choose"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            5. How to Choose the Right Online Exam Helper
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              With so many <strong>online exam helper</strong> services available, 
              it's essential to choose a trustworthy provider. Here's what to 
              look for:
            </p>
            <ul className="py-2 pl-4 space-y-2 list-disc">
              <li>
                <span className="font-semibold">Verified Expert Credentials:</span>
                {" "}Ensure the service employs certified subject matter experts.
              </li>
              <li>
                <span className="font-semibold">Proven Track Record:</span>
                {" "}Look for reviews, testimonials, and case studies from past clients.
              </li>
              <li>
                <span className="font-semibold">Secure Payment Methods:</span>
                {" "}Choose services with encrypted payment gateways and clear refund policies.
              </li>
              <li>
                <span className="font-semibold">Data Protection:</span>
                {" "}Ensure the service uses secure servers and deletes client data after delivery.
              </li>
              <li>
                <span className="font-semibold">24/7 Customer Support:</span>
                {" "}Reach out to support agents via multiple channels, including live chat and phone.
              </li>
            </ul>
            <div className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-sm">
                <strong>Ready to hire an online exam helper?</strong>{" "}
                <Link 
                  href="/order"
                  prefetch={true}
                  className="text-primary-700 font-semibold hover:underline"
                >
                  Book your exam help now →
                </Link>
              </p>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 6: Cost ── */}
        <motion.article
          id="cost"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            6. How Much Does Online Exam Help Cost?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Pricing varies based on the exam type, urgency, and specific 
              requirements. Here's a general breakdown:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Exam Type</th>
                    <th className="border p-2 text-left">Price Range</th>
                    <th className="border p-2 text-left">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">Academic Exams</td>
                    <td className="border p-2">$100 – $500</td>
                    <td className="border p-2">24-48 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">IT Certifications</td>
                    <td className="border p-2">$300 – $1,200</td>
                    <td className="border p-2">48-72 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Professional Certifications</td>
                    <td className="border p-2">$500 – $2,500</td>
                    <td className="border p-2">3-5 days</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Urgent (48 hours or less)</td>
                    <td className="border p-2">+ $100 – $300</td>
                    <td className="border p-2">24-48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              * Prices are estimates and may vary based on exam complexity and 
              specific requirements. Contact us for a free, no-obligation quote.
            </p>
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm">
                <strong>Get a free, no-obligation quote today!</strong>{" "}
                <Link 
                  href="/contact"
                  prefetch={true}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Contact us now →
                </Link>
              </p>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 7: FAQ ── */}
        <motion.article
          id="faqs"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            7. Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is online exam help legal?",
                a: "Yes, online exam help is legal in most jurisdictions. However, it's important to check your institution's or employer's policies regarding third-party test-taking assistance.",
              },
              {
                q: "How much does online exam help cost?",
                a: "Pricing varies based on the exam type, urgency, and specific requirements. Contact us for a free, no-obligation quote tailored to your needs.",
              },
              {
                q: "What happens if I don't pass?",
                a: "We offer a full refund or a free retake if you don't achieve your target score. Our success rate exceeds 98% on first attempts.",
              },
              {
                q: "How do I know the expert won't fail?",
                a: "Our experts are rigorously vetted and certified in their respective fields. We also provide practice tests as proof of competency before your actual exam.",
              },
              {
                q: "Is my privacy protected?",
                a: "Absolutely. We use encrypted systems, anonymous identities, and strict privacy protocols to ensure your personal information remains 100% confidential.",
              },
              {
                q: "Can I get help with partial exams?",
                a: "Yes. Many services offer help with specific sections or parts of an exam.",
              },
              {
                q: "How do I pay for online exam help?",
                a: "We offer secure payment methods including credit cards, PayPal, and other encrypted gateways. Payment is processed with full privacy protection.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg">{item.q}</h3>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.article>

        {/* ── EXAM COMPANION ── */}
        <ExamCompanion />

        {/* ── RELATED RESOURCES (Internal Links) ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200"
        >
          <h3 className="text-xl font-bold text-secondary mb-4">
            📚 Related Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/how-to-pass-your-online-exam-without-getting-caught"
              prefetch={true}
              className="p-3 bg-white rounded-lg border border-primary-100 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="font-medium text-secondary-700">Passing Online Exam Tips</span>
              <p className="text-xs text-gray-500">Ace your online exam without getting caught
</p>
            </Link>
            <Link
              href="/blog/what-is-online-proctoring-and-how-does-it-work"
              prefetch={true}
              className="p-3 bg-white rounded-lg border border-primary-100 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="font-medium text-secondary-700">Online Proctoring Guide</span>
              <p className="text-xs text-gray-500">How proctoring software works</p>
            </Link>
            <Link
              href="/blog/how-to-choose-a-legitimate-exam-help-service"
              prefetch={true}
              className="p-3 bg-white rounded-lg border border-primary-100 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="font-medium text-secondary-700">Choose a Legitimate Service</span>
              <p className="text-xs text-gray-500">What to look for in an exam helper</p>
            </Link>
            <Link
              href="/blog/pay-to-pass-my-online-proctored-exam-safe-guaranteed-and-verified-certification-assistance"
              prefetch={true}
              className="p-3 bg-white rounded-lg border border-primary-100 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="font-medium text-secondary-700">Pay Someone to Take My Exam</span>
              <p className="text-xs text-gray-500">Is it safe? Find out here</p>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              prefetch={true}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
            >
              View All Blog Posts 
              <CircleArrowRight className="size-4" />
            </Link>
          </div>
        </motion.article>
      </article>

      {/* ── SIDEBAR ── */}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
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
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
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
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  AWS Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-cloud-practitioner-exam-for-me"
                  prefetch={true}
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
                  prefetch={true}
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
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  Microsoft Azure
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-azure-exam-for-me/az-900"
                  prefetch={true}
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
                  prefetch={true}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-bold"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0" />
                  CompTIA Certifications
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                  prefetch={true}
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
            <h2>Why We&apos;re #1 for Online Exam Help</h2>
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
