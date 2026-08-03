"use client";

import StudentImage from "../comptia-exam/student-image";

export default function RightHero() {
  return (
    <div className="h-full px-4 pt-12 relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
        <StudentImage
          src="/azure-associate-badge.svg"
          alt="azure  vendor "
          rounded="rounded-tl-[100px]"
        />
        <StudentImage
          src="/azure-data-fundamentals-600x600-2.png"
          alt="azure data fundamentals"
          rounded="rounded-tr-[100px]"
        />
        <StudentImage
          src="/azure-fundamentals-badge.svg"
          alt="comptia Network + badge"
          rounded="rounded-bl-[100px]"
        />
        <StudentImage
          src="/azure-data-fundamentals-600x600-2.png"
          alt="CompTIA Cloud + badge"
          rounded="rounded-br-[100px]"
        />
      </div>
    </div>
  );
}
