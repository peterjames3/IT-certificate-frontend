
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { title: 'Tech & Programming', count: '10 Course' },
  { title: 'Art & Design', count: '50 Course' },
  { title: 'Online Marketing', count: '12 Course' },
  { title: 'Content Creation', count: '10 Course' },
];

const partners = ['SkillUp', 'course', 'udemy', 'moodle'];

// ─── Main Page ─────────────────────────────────────────────
export default function ISACACertificationOverview() {
 
  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-sans">
      {/* Top Banner Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-semibold text-slate-700 mb-4 px-4">
        <span>20+ Instructor</span>
        <span>+</span>
        <span>500+ Online Courses</span>
        <span>+</span>
        <span>24 Hours Support</span>
        <span>+</span>
        <span>Courses Certificate</span>
      </div>

      {/* Main Banner Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-xl flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
          {/* Badge */}
          <div className="inline-block w-fit text-[10px] font-bold tracking-widest uppercase bg-yellow-400 text-blue-950 px-2 py-0.5 rounded mb-3">
            Category
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            Browse Our Categories <br />
            To Find Exactly{" "}
            <span className="italic font-serif font-normal underline decoration-yellow-400">
              Courses
            </span>
          </h2>

          {/* Category Rows */}
          <div className="space-y-4 max-w-md">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 border-b border-blue-400/40 hover:border-yellow-400 transition-colors cursor-pointer group"
              >
                <div>
                  <h3 className="font-semibold text-base md:text-lg group-hover:text-yellow-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-blue-200">{cat.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-blue-300/40 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 group-hover:border-yellow-400 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center / Image Area with Rounded Cutout */}
        <div className="relative flex-1 min-h-[300px] lg:min-h-full flex items-end justify-center p-6 lg:p-0">
          <div className="relative w-full h-full max-w-sm lg:max-w-none bg-blue-300/30 rounded-3xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden flex items-end justify-center">
            {/* Replace src with your model image path */}
            <Image
              src="/student-holding-laptop.png"
              alt="Student carrying books"
              width={400}
              height={500}
              className="object-cover object-top h-full w-auto max-h-[420px]"
              priority
            />
          </div>
        </div>

        {/* Right Sidebar - Partner Logos */}
        <div className="w-full lg:w-20 bg-blue-900/60 backdrop-blur-md flex lg:flex-col items-center justify-around py-6 px-4 border-t lg:border-t-0 lg:border-l border-blue-400/20 text-blue-200 text-sm font-bold tracking-wide">
          {partners.map((brand, i) => (
            <span
              key={i}
              className="lg:-rotate-90 lg:my-6 transition-colors hover:text-yellow-400 cursor-pointer select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );}