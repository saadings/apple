"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "@/utils/animations";
import { ModelSize } from "@/enums/model";

const Model = () => {
  const [size, setSize] = useState<ModelSize>(ModelSize.SMALL);
  const [model, setModel] = useState<IModels>(models[0]);

  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  const cameraControlSmall = useRef<HTMLDivElement | null>(null);
  const cameraControlLarge = useRef<HTMLDivElement | null>(null);

  // models
  const small = useRef<THREE.Group>(new THREE.Group());
  const large = useRef<THREE.Group>(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    // This code runs only on the client side
    const rootElement = document.getElementById("_root");
    setEventSource(rootElement as HTMLElement);
  }, []);

  useEffect(() => {
    if (size === ModelSize.LARGE) {
      animateWithGsapTimeline({
        timeline: tl,
        rotationRef: small,
        rotationState: smallRotation,
        firstTarget: "#view1",
        secondTarget: "#view2",
        animationProps: {
          transform: "translateX(-100%)",
          duration: 2,
        },
      });
    }

    if (size === ModelSize.SMALL) {
      animateWithGsapTimeline({
        timeline: tl,
        rotationRef: large,
        rotationState: largeRotation,
        firstTarget: "#view1",
        secondTarget: "#view2",
        animationProps: {
          transform: "translateX(0)",
          duration: 2,
        },
      });
    }
  }, [size, largeRotation, smallRotation, tl]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="h-full w-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={eventSource ?? undefined}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="mx-2 h-6 w-6 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
