import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

import { highlightsSlides } from "@/constants";
import { VideoActions } from "@/enums/video";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLSpanElement | null)[]>([]);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<
    SyntheticEvent<HTMLVideoElement, Event>[]
  >([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
    });

    // video animation to play the video when it is in the view
    gsap.to("#video-container", {
      scrollTrigger: {
        trigger: "#video-container",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                    ? "10vw" // tablet
                    : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef?.current[videoId]?.currentTime ??
            0 / highlightsSlides[videoId].videoDuration,
        );
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]!.pause();
      } else {
        startPlay && videoRef.current[videoId]!.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type: VideoActions, i: number) => {
    switch (type) {
      case VideoActions.END:
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case VideoActions.LAST:
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case VideoActions.RESET:
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case VideoActions.PAUSE:
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case VideoActions.PLAY:
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return;
    }
  };

  const handleLoadedMetaData = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
    setLoadedData((pre) => [...pre, e]);
  };

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel-container">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  id="video-container"
                  playsInline={true}
                  className={`${i === 2 && "translate-x-56"} pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => {
                    videoRef.current[i] = el;
                  }}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess(VideoActions.END, i)
                      : handleProcess(VideoActions.LAST, 0)
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute left-[5%] top-12 z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
              ref={(el) => {
                videoDivRef.current[i] = el;
              }}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {
                  videoSpanRef.current[i] = el;
                }}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <Image
            src={
              isLastVideo
                ? "/icons/replay.svg"
                : !isPlaying
                  ? "/icons/play.svg"
                  : "/icons/pause.svg"
            }
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            width={24}
            height={24}
            onClick={
              isLastVideo
                ? () => handleProcess(VideoActions.RESET, 0)
                : !isPlaying
                  ? () => handleProcess(VideoActions.PLAY, 0)
                  : () => handleProcess(VideoActions.PAUSE, 0)
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
