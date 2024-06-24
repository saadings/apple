"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("/videos/hero.mp4");

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc("/videos/hero-mobile.mp4");
    } else {
      setVideoSrc("/videos/hero.mp4");
    }
  };

  useEffect(() => {
    if (window) handleVideoSrcSet();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="w-dull nav-height relative bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          IPhone 15 Pro
        </p>

        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <Link href={"#highlights"} className="btn">
          Buy
        </Link>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
