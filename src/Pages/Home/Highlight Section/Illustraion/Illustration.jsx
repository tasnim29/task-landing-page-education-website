import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  featureLists,
  goodLists,
} from "../../../../Constants/IllustraionContent";

gsap.registerPlugin(ScrollTrigger);

const Illustration = () => {
  useGSAP(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#illustration",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.02, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "550%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <section id="illustration" className="relative py-5 bg-gray-900">
      <div className="container mx-auto">
        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left List */}
          <ul className="space-y-4 will-fade text-white">
            {goodLists.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex items-center gap-2">
                  <Icon className="w-6 h-6 text-white" />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>

          {/* Center Image */}
          <div className="relative w-full md:w-2/5 h-[50vh] md:h-[70vh]">
            <img
              src="/images/under-img.avif"
              alt="mask illustration"
              className="w-full h-full object-cover rounded-3xl masked-img"
              style={{
                WebkitMaskImage: 'url("/images/mask-img.png")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "50%",
                maskImage: 'url("/images/mask-img.png")',
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "50%",
              }}
            />
          </div>

          {/* Right List */}
          <ul className="space-y-4 will-fade text-white">
            {featureLists.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex items-center gap-2">
                  <Icon className="w-6 h-6 text-white" />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Masked Content */}
        <div className="text-center mt-20 opacity-0" id="masked-content">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Unlock Your True Potential
          </h3>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Gain the skills top employers are looking for. Learn, practice, and
            showcase your expertise to stand out in your field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Illustration;
