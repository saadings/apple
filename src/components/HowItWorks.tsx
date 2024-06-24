"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { animateWithGsap } from "@/utils/animations";

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap({
      target: ".g_fadeIn",
      animationProps: {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <Image
            src={"/images/chip.jpeg"}
            alt="chip"
            width={180}
            height={180}
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip.
            <br />A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It&apos;s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <Image
                src={"/images/frame.png"}
                alt="frame"
                className="relative z-10 bg-transparent"
                width={1392}
                height={680}
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
              >
                <source src="/videos/frame.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="mt-3 text-center font-semibold text-gray">
            Honkai: Star Rail
          </p>

          <div className="hiw-text-container mt-5">
            <div className="flex flex-1 flex-col justify-center">
              <p className="hiw-text g_fadeIn">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our{" "}
                <span className="text-white">
                  best graphics performance ever.
                </span>
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <p className="hiw-text g_fadeIn">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive{" "}
                </span>
                with incredible detail and smoothness.
              </p>
            </div>
          </div>

          <div className="g_fadeIn mt-10 flex flex-1 flex-col justify-center">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
