import Image from "next/image";

export default function HireSomeoneLeft() {
  return (
    <div className="relative w-full h-full mx-auto flex  justify-center ">
      <div className="relative w-full h-[30rem] z-6 ">
        <Image
          src="/students-holding-books2.png"
          alt="student  doing eccouncil  proctored exam"
          width={1200}
          height={1200}
          priority
          className="object-cover h-full bg-gradient-to-b from-gray-50 to white "
        />
      </div>

      <div className="absolute top-6 left-6 text-emerald-500 opacity-60 animate-pulse">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.4L21 11l-6.6 2.6L12 20l-2.4-6.4L3 11l6.6-2.6L12 2z" />
        </svg>
      </div>
    </div>
  );
}
