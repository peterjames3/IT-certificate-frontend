import Image from "next/image"

export default function  BookStack3D() {
  return (
    <div className="w-32 h-32 transform hover:scale-105 transition-transform duration-300 select-none filter drop-shadow-xl">
        <Image 
        src="/stacked-3d-books-removebg-preview.png"
        alt="stacked 3d books"
        width={80}
        height={60}
        />
    </div>
  );
};