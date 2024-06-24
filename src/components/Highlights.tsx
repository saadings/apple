"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import VideoCarousel from "@/components/VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width space-y-12">
        <div className="w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                src={"/icons/watch.svg"}
                alt="watch"
                className="ml-2"
                width={20}
                height={20}
              />
            </p>

            <p className="link">
              Watch the film
              <Image
                src={"/icons/right.svg"}
                alt="right"
                className="ml-2"
                width={7}
                height={11}
              />
            </p>
          </div>
        </div>

        {/* Carousel */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
