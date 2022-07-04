import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../hooks";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import FocusLock from "react-focus-lock";
import ReactPlayer from "react-player";
import { VideoScroll } from "react-video-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Burger from "../Burger";
import Menu from "../Menu";
import Transitions from "../Transition";
import ExploreButton from "../ExploreButton";
import "./Home.css";
import { StyleRoot } from "radium";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import BreathingDots from "../BreathingDots/BreathingDots";
import { createUseStyles } from "react-jss";
import useRaf from "@rooks/use-raf";
import style from "./style";

// const useStyles = createUseStyles(style);

// const lerp = (a, b, n) => (1 - n) * a + n * b;
// const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Home = () => {
  //--------- Loading --------- \\
  const [isLoading, setLoading] = useState(true);
  //* ---------------------------------- */

  // const classes = useStyles();
  // const $root = useRef();
  // const $video = useRef();
  // const $progressBar = useRef();
  // const videoProgress = useRef(0);

  // const [isVideoReady, setVideoReady] = useState(false);

  // useEffect(() => {}, []);

  // useRaf(() => {
  //   if (!isNaN($video.current.duration)) {
  //     const { top, height } = $root.current.getBoundingClientRect();
  //     videoProgress.current = lerp(
  //       videoProgress.current,
  //       clamp(-top / (height - window.innerHeight), 0, 1),
  //       0.06
  //     ).toPrecision(6);

  //     $video.current.currentTime =
  //       videoProgress.current * $video.current.duration;
  //     $progressBar.current.style.transform = `scaleX(${videoProgress.current})`;
  //   }
  // }, [isVideoReady]);

  useEffect(() => {
    console.clear();

    setTimeout(function() {
      // document.getElementById("loading-page").className += "loaded";
      // document.getElementById("loader").className += "opzero";
      // document.getElementById("lastray").className += " finalray";
      // document.body.className += "whitebk";
      // setLoading(false);
    }, 6500);

    const video = document.querySelector(".video-background");
    let src = video.currentSrc || video.src;

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function(e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function(e) {
      video.play();
      video.pause();
    });

    // /* ---------------------------------- */
    // /* Scroll Control! */

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        {
          currentTime: 0,
        },
        {
          currentTime: video.duration || 1,
        }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function() {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function(e) {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.001;
          });
      }
    }, 5000);

    /* ---------------------------------- */

  }, []);

  const onLoadedData = () => {
    setLoading(false);
  };

  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const listInnerRef = useRef();

  const onScroll = () => {
    // if (listInnerRef.current) {
    //   const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    //   if (scrollTop + clientHeight === scrollHeight) {
    //     console.log(scrollHeight);
    //     console.log("reached bottom");
    //   }
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Transitions>
          <video
            src="/Videos/SAHNE 1 BOLLUK.mp4"
            playsinline="true"
            webkit-playsinline="true"
            id="video"
            preload="auto"
            muted="muted"
            class="video-background"
            onLoadedData={onLoadedData}
            onScroll={onScroll}
            ref={listInnerRef}
          ></video>
          <div id="container"></div>
          {/* <div ref={$root} className={classes.root}>
            <div className={classes.video}>
              <video
                ref={$video}
                muted
                onLoadedData={() => {
                  setVideoReady(true);
                }}
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/heterometadev-4d7aa.appspot.com/o/SAHNE%201%20BOLLUK.mp4?alt=media&token=02fad452-28d6-4270-903b-d1e6820a64fa"
                  type="video/mp4"
                />
              </video>
              <div ref={$progressBar} className={classes.progressBar} />
            </div>
          </div> */}
          {/* <canvas className="canvasAirpods" id="hero-lightpass" />
           */}
          <div class="scroll-downs">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
            <p className="scrollText">Scroll</p>
          </div>
          <div className="App">
            <div id="trigger"></div>
            <Controller>
              <Scene
                duration={400}
                pin={true}
                indicators={false}
                triggerHook="onLeave"
              >
                {(progress) => (
                  <div
                    id="hero"
                    className="hero "
                  >
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{ scale: 10, opacity: 0 }}
                        to={{ scale: 1, opacity: 1 }}
                      >
                        <div class="boxContainer">
                          <div class="firefly"></div>
                          <div className="boxCenter">
                            <Menu></Menu>
                            <a href="/2" class="animated-button10">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              Explore Now
                            </a>
                          </div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                          <div class="firefly"></div>
                        </div>
                      </Tween>
                    </Timeline>
                  </div>
                )}
              </Scene>
            </Controller>
          </div>
          {isLoading ? (
            <>
              <div id="loading-page">
                <div id="loader">
                  <div class="particles element">
                    <div class="spark1 spark element">
                      <div class="particle1 particle element"></div>
                    </div>
                    <div class="spark2 spark element">
                      <div class="particle2 particle element"></div>
                    </div>
                    <div class="spark3 spark element">
                      <div class="particle3 particle element"></div>
                    </div>
                    <div class="spark4 spark element">
                      <div class="particle4 particle element"></div>
                    </div>
                    <div class="spark5 spark element">
                      <div class="particle5 particle element"></div>
                    </div>
                    <div class="spark6 spark element">
                      <div class="particle6 particle element"></div>
                    </div>
                    <div class="spark7 spark element">
                      <div class="particle7 particle element"></div>
                    </div>
                    <div class="spark8 spark element">
                      <div class="particle8 particle element"></div>
                    </div>
                    <div class="spark9 spark element">
                      <div class="particle9 particle element"></div>
                    </div>
                    <div class="spark10 spark element">
                      <div class="particle10 particle element"></div>
                    </div>
                    <div class="spark11 spark element">
                      <div class="particle11 particle element"></div>
                    </div>
                    <div class="spark12 spark element">
                      <div class="particle12 particle element"></div>
                    </div>
                    <div class="spark13 spark element">
                      <div class="particle13 particle element"></div>
                    </div>
                    <div class="spark14 spark element">
                      <div class="particle14 particle element"></div>
                    </div>
                  </div>
                  <div class="ray element"></div>
                  <div class="sphere element">
                    {/* <img src="https://giphy.com/embed/U4FkC2VqpeNRHjTDQ5"></img> */}
                  </div>
                </div>
              </div>
              <div id="lastray" class="element"></div>
            </>
          ) : (
           <div></div>
          )}
        </Transitions>
        <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </div>
      </>
    </ThemeProvider>
  );
};

export default Home;
