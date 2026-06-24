import Image from "next/image";

export default function GraphicCluster() {
  return (
    <div className="w-full h-full">
      {/* Background Subtle Elements */}

      <Image
        src="/proctored-image-section.png"
        alt="proctored IT exam help"
        width={1200}
        height={1300}
        className="object-cover "
      />
    </div>
  );
}
