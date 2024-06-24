"use client";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.to("#explore-video", {
      scrollTrigger: {
        trigger: "#explore-video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    animateWithGsap({
      target: "#features-title",
      animationProps: {
        y: 0,
        opacity: 1,
      },
    });

    animateWithGsap({
      target: ".g_grow",
      animationProps: {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      scrollProps: {
        scrub: 5.5,
      },
    });

    animateWithGsap({
      target: ".g_text",
      animationProps: {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
    });
  }, []);

  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features-title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                playsInline
                id="explore-video"
                className="h-full w-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src="/videos/explore.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <Image
                    src="/images/explore1.jpg"
                    alt="titanium"
                    width={964}
                    height={1028}
                    className="feature-video g_grow"
                  />
                </div>

                <div className="h-[50vh] flex-1 overflow-hidden">
                  <Image
                    src="/images/explore2.jpg"
                    alt="titanium 2"
                    width={964}
                    height={1028}
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace grade titanium
                      design{" "}
                    </span>
                    using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    Titanium has one of the best{" "}
                    <span className="text-white">
                      strength-to-weight ratios of any metal, making these our{" "}
                    </span>
                    You&apos;ll love the way it feels in your hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
