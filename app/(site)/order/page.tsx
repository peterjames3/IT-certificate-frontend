// app/order/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Server
} from "lucide-react";

const AZURE_EXAMS = [
  { code: "AZ-900", name: "Azure Fundamentals", tier: "Fundamentals", basePrice: 299 },
  { code: "DP-900", name: "Azure Data Fundamentals", tier: "Fundamentals", basePrice: 299 },
  { code: "AI-900", name: "Azure AI Fundamentals", tier: "Fundamentals", basePrice: 299 },
  { code: "AZ-104", name: "Azure Administrator Associate", tier: "Associate", basePrice: 499 },
  { code: "AZ-500", name: "Azure Security Engineer Associate", tier: "Associate", basePrice: 549 },
  { code: "DP-203", name: "Azure Data Engineer Associate", tier: "Associate", basePrice: 549 },
  { code: "AZ-700", name: "Azure Network Engineer Associate", tier: "Associate", basePrice: 549 },
  { code: "AZ-305", name: "Azure Solutions Architect Expert", tier: "Expert", basePrice: 699 },
  { code: "DP-420", name: "Azure Cosmos DB Developer Specialty", tier: "Specialty", basePrice: 649 },
];

export default function AzureOrderPage() {
  const searchParams = useSearchParams();
  const initialExamParam = searchParams.get("exam") || "AZ-104";

  // Form State
  const [selectedExamCode, setSelectedExamCode] = useState(initialExamParam);
  const [scheduleUrgency, setScheduleUrgency] = useState("standard"); // standard, express, flexible
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [customNotes, setCustomNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  // Dynamic Pricing Calculations
  const currentExam = AZURE_EXAMS.find(e => e.code === selectedExamCode) || AZURE_EXAMS[3];
  const expressFee = scheduleUrgency === "express" ? 100 : 0;
  const totalPrice = currentExam.basePrice + expressFee;

  useEffect(() => {
    const examParam = searchParams.get("exam");
    if (examParam && AZURE_EXAMS.some(e => e.code === examParam)) {
      setSelectedExamCode(examParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate localized payload submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmittedSuccessfully(true);
  };

  return (
    <section className="min-h-screen py-20 mt-[5rem] px-6 bg-slate-50 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form & Checkout Actions */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-200/60 shadow-sm">
            {!submittedSuccessfully ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
                    Secure Your IT Certification
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm md:text-base leading-relaxed">
                    Enter your testing metrics below to align with a verified <strong> exam taker </strong> 
                    and deploy our secure <strong> proxy services </strong> for your scheduled session.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. James Kamau"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-secondary focus:border-primary focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Contact Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-secondary focus:border-primary focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dropdown: Exam Track Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Select Target Azure Certification
                    </label>
                    <select
                      value={selectedExamCode}
                      onChange={(e) => setSelectedExamCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-secondary focus:border-primary focus:outline-none bg-white transition-all duration-200"
                    >
                      {AZURE_EXAMS.map((exam) => (
                        <option key={exam.code} value={exam.code}>
                          {exam.code} - {exam.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Input: Time Zone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Your Active Time Zone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. GMT+3 / EST"
                      value={timeZone}
                      onChange={(e) => setTimeZone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-secondary focus:border-primary focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Radio Selector: Timeline Urgency */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider block">
                    Execution Window Priority
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setScheduleUrgency("flexible")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "flexible"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Clock className="w-5 h-5 text-gray-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-secondary">Flexible Slot</h4>
                        <span className="text-[10px] text-gray-400">Scheduled in 5+ Days</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduleUrgency("standard")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "standard"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-secondary">Standard Window</h4>
                        <span className="text-[10px] text-gray-400">Scheduled in 3 to 5 Days</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduleUrgency("express")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "express"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Sparkles className="w-5 h-5 text-amber-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-secondary">Express Urgent (+ $100)</h4>
                        <span className="text-[10px] text-gray-400">Scheduled within 48 Hours</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Textarea: Custom Requirements */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Additional Requirements or Special Instructions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your target exam dates, specific proctoring guidelines, or localized software constraints."
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-secondary focus:border-primary focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Submission CTA */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary-900 shadow-md transition-all flex items-center justify-center gap-2 hover:cursor-pointer"
                >
                  {isSubmitting ? "Processing Custom Setup..." : "Securely Submit Booking Order"}
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <ShieldCheck size={36} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-secondary">Secure Order Received</h2>
                  <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                    Your details have been completely processed and isolated within our encrypted database. 
                    An infrastructure analyst will coordinate with you via email within the next 2 hours 
                    to configure your specialized **proxy services** baseline and verify your scheduled slot.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Pricing Summary & Trust Signals */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dynamic Receipt Box */}
            <div className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="font-bold text-secondary text-lg">Verification Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Selected Certification:</span>
                  <span className="font-bold text-secondary text-right">{currentExam.code}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Validation Track:</span>
                  <span className="font-medium text-secondary text-right">{currentExam.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Tier Classification:</span>
                  <span className="font-medium text-secondary text-right">{currentExam.tier}</span>
                </div>
                {expressFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Priority Schedule Premium:</span>
                    <span className="font-bold text-amber-600 text-right">+ $100</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between items-center">
                <span className="font-bold text-secondary text-base">Total Investment:</span>
                <span className="font-extrabold text-secondary text-3xl">$ {totalPrice}</span>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed text-center">
                All pricing schedules operate under our 100% first-time passing score or full refund policy.
              </p>
            </div>

            {/* Trust Bullet Blocks */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100 shrink-0 text-blue-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">Encrypted Connection Profiles</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Our customized, hardware-level **proxy services** route your session parameters natively, ensuring full system anonymity throughout testing lockdowns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 shrink-0 text-emerald-500">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">Specialist Validation Mastery</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Each assigned **exam taker** holds advanced Microsoft credentials and is highly experienced in configuring live sandbox environments and solving active performance-based simulations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
