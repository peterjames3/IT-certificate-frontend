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
          src="/azure-data-fundamentals-600x600-2.png"
          alt="azure data fundamentals"
          rounded="rounded-tr-[100px]"
        />
        <StudentImage
          src="/AWS-Certified-Cloud-Practitioner_badge.png"
          alt="aws certified cloud practitioner  badge"
          rounded="rounded-bl-[100px]"
        />
        <StudentImage
          src="/google-cloud-certificate.png"
          alt="Google cloud certificate"
          rounded="rounded-br-[100px]"
        />
      </div>

  
    </div>
  );
}