import AboutLeft from "./about-left";
import AboutRight from "./about-right";

export default function AboutUsSection() {
  return (
    <div className="relative w-full py-15  px-4 lg:px-8 bg-primary-50">
      <section className="w-full mx-auto max-w-full lg:max-w-310 xl:max-w-36- flex  flex-col-reverse md:flex-row gap-18 md:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <AboutLeft />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutRight />
        </div>
      </section>
    </div>
  );
}
