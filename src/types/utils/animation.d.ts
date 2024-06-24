interface IAnimateWithGsapTimelineProps {
  timeline: gsap.core.Timeline;
  rotationRef: React.MutableRefObject<THREE.Group | undefined>;
  rotationState: number;
  firstTarget: string;
  secondTarget: string;
  animationProps: {
    transform: string;
    duration: number;
  };
}

interface IAnimateWithGsap {
  target: string;
  animationProps: gsap.TweenVars;
  scrollProps?: ScrollTrigger.Vars;
}
