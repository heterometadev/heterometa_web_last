import React, { useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Transitions from "../Transition";
import Burger from "../Burger";
import FocusLock from "react-focus-lock";
import Menu from "../Menu";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// const unityContext = new UnityContext({
//   loaderUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.loader.js",
//   dataUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.data",
//   frameworkUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.framework.js",
//   codeUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.wasm",
// });

function HeteroMetaUnity() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.loader.js",
    dataUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.data",
    frameworkUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.framework.js",
    codeUrl: "HeteroMetaUnity/HeteroMetaUnity-Build.wasm",
  });
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const videoRef = useRef();
  const menuId = "main-menu";

  return (
    <ThemeProvider theme={theme}>
      <>
        <Transitions>
          <div className="containerUnity">
            {isLoaded === false && (
              // We'll conditionally render the loading overlay if the Unity
              // Application is not loaded.
              <div id="loading-page">
                <p>Loading... ({loadingPercentage}%)</p>
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
              // <div id="lastray" class="element"></div>
              //   <div className="loading-overlay">
              //     <p>Loading... ({loadingPercentage}%)</p>
              //   </div>
            )}
            <Unity
              className="unity"
              unityProvider={unityProvider}
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
              }}
            />
          </div>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />

              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>{" "}
        </Transitions>
      </>
    </ThemeProvider>
  );
}

export default HeteroMetaUnity;
