"use client";

import StudentImage from "./student-image";

export default function RightHero() {
  return (
    <div className="h-full px-4 pt-12 relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
        <StudentImage
          src="/CompTIA_A_2Bce-1.png"
          alt="compTIA  vendor "
          rounded="rounded-tl-[100px]"
        />
        <StudentImage
          src="/security.webp"
          alt="comptia server +"
          rounded="rounded-tr-[100px]"
        />
        <StudentImage
          src="/comptia-network+1.webp"
          alt="comptia Network + badge"
          rounded="rounded-bl-[100px]"
        />
        <StudentImage
          src="/comptia-cloud+.webp"
          alt="CompTIA Cloud + badge"
          rounded="rounded-br-[100px]"
        />
      </div>
    </div>
  );
}
