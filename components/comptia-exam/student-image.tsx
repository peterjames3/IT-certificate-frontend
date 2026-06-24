import Image from "next/image";
import type { FC } from "react";

interface StudentImageProps {
  src: string;
  alt: string;

  rounded: string;
}

const StudentImage: FC<StudentImageProps> = ({
  src,
  alt,

  rounded,
}) => {
  return (
    <div className={`  ${rounded}`}>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={30}
        className="w-full h-[16.5rem] object-contain rounded-lg"
      />
    </div>
  );
};

export default StudentImage;
