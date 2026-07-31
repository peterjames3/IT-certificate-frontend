import Image from "next/image";

export default function GraphicCluster() {
  return (
    <div className="w-full h-full">
     

      <Image
        src="/cta-banner-org-exam-details.webp"
        alt="proctored IT exam help"
        width={1200}
        height={1300}
        className="object-cover "
      />
    </div>
  );
}
