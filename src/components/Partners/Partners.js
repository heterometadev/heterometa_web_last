import React, { useEffect, useState, useRef } from "react";
import Transitions from "../Transition";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./Partners.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Row, Col } from "react-grid-system";
import Burger from "../Burger";
import FocusLock from "react-focus-lock";
import Menu from "../Menu";
import Footer from "../Footer";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  // teeest
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
  );
  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
      />
      <mesh
        position={[0, -1.03, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials["Default OBJ.001"]}
        dispose={null}
      />
      <mesh receiveShadow position={[0, -1, 3]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}

const Partners = () => {
  let navigate = useNavigate();
  function handleClick() {
    console.log(" click");
    navigate("../heterometa");
  }

  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const videoRef = useRef();
  const menuId = "main-menu";

  return (
    <ThemeProvider theme={theme}>
      <>
        <Transitions>
        
          <Carousel showArrows ={false} showStatus ={false} className="canvasPartners" emulateTouch={true} showIndicators={open ? false : true } >
            <div>
              <Canvas
                className="canvasPartners"
                shadows
                dpr={[1, 2]}
                camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
              >
                <color attach="background" args={["#202020"]} />
                <fog attach="fog" args={["#202020", 5, 20]} />
                <ambientLight intensity={0.015} />
                <Scene />
              </Canvas>
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <Canvas
                className="canvasPartners"
                shadows
                dpr={[1, 2]}
                camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
              >
                <color attach="background" args={["#202020"]} />
                <fog attach="fog" args={["#202020", 5, 20]} />
                <ambientLight intensity={0.015} />
                <Scene />
              </Canvas>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <Canvas
                className="canvasPartners"
                shadows
                dpr={[1, 2]}
                camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
              >
                <color attach="background" args={["#202020"]} />
                <fog attach="fog" args={["#202020", 5, 20]} />
                <ambientLight intensity={0.015} />
                <Scene />
              </Canvas>
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <Canvas
                className="canvasPartners"
                shadows
                dpr={[1, 2]}
                camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
              >
                <color attach="background" args={["#202020"]} />
                <fog attach="fog" args={["#202020", 5, 20]} />
                <ambientLight intensity={0.015} />
                <Scene />
              </Canvas>
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <Canvas
                className="canvasPartners"
                shadows
                dpr={[1, 2]}
                camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
              >
                <color attach="background" args={["#202020"]} />
                <fog attach="fog" args={["#202020", 5, 20]} />
                <ambientLight intensity={0.015} />
                <Scene />
              </Canvas>
              <p className="legend">Legend 5</p>
            </div>
          </Carousel>

          <br></br>
          <br></br>
          <Container>
            <Row>
              <Col sm={12}>
                <p className="newsText">Partners</p>
                <h1 class="jt --debug">
                  <span class="jt__row">
                    <span class="jt__text">
                      {" "}
                      Top-tier partners in manifesting a metaverse of the
                      future.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Top-tier partners in manifesting a metaverse of the
                      future.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Top-tier partners in manifesting a metaverse of the
                      future.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Top-tier partners in manifesting a metaverse of the
                      future.
                    </span>
                  </span>
                </h1>
                <br></br>
                <br></br>
                <div class="partners-container">
                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/979bde19-34ed-45f0-be1b-5f16e0fdb7d4/"
                          alt="Syncspider partners - Aciety"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/8d67bfbe-24ea-4401-ba9b-340c1eac1836/"
                          alt="Syncspider partners - Aciety"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/63256e42-0a22-4dae-8acc-a0a90284d954/"
                          alt="Syncspider partners - Advarics"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/b509a55b-255d-4a8c-bcda-ffe6b4d02ce5/"
                          alt="Syncspider partners - Advarics"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/280c7599-2eb6-4c00-a5e5-0b65d016ba57/"
                          alt="Syncspider partners - Freshworks"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/a6f0fc3c-245e-4ec0-8d05-fc1cfa8c8fd6/"
                          alt="Syncspider partners - Freshworks"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/a5efb575-0fc8-4d23-bf78-f06dec3d92d2/"
                          alt="Syncspider partners - DragDropr"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/375fe1d1-5ed0-4348-907f-9d3cde41ca7d/"
                          alt="Syncspider partners - DragDropr"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/96b8891d-0ed5-4aab-a6cf-41edaf260b61/"
                          alt="Syncspider partners - Dokan"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/9bda4baa-d4b4-47b4-8c24-45e9014fe541/"
                          alt="Syncspider partners - Dokan"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/30153ffa-1922-4406-888f-c91ad2966e89/"
                          alt="Syncspider partners - Tada"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/659d25ed-4b62-49c2-bb9c-b2d19518d1e9/"
                          alt="Syncspider partners - Tada"
                        ></img>
                      </div>
                    </a>
                  </div>
                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/979bde19-34ed-45f0-be1b-5f16e0fdb7d4/"
                          alt="Syncspider partners - Aciety"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/8d67bfbe-24ea-4401-ba9b-340c1eac1836/"
                          alt="Syncspider partners - Aciety"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/63256e42-0a22-4dae-8acc-a0a90284d954/"
                          alt="Syncspider partners - Advarics"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/b509a55b-255d-4a8c-bcda-ffe6b4d02ce5/"
                          alt="Syncspider partners - Advarics"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/280c7599-2eb6-4c00-a5e5-0b65d016ba57/"
                          alt="Syncspider partners - Freshworks"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/a6f0fc3c-245e-4ec0-8d05-fc1cfa8c8fd6/"
                          alt="Syncspider partners - Freshworks"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/a5efb575-0fc8-4d23-bf78-f06dec3d92d2/"
                          alt="Syncspider partners - DragDropr"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/375fe1d1-5ed0-4348-907f-9d3cde41ca7d/"
                          alt="Syncspider partners - DragDropr"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/96b8891d-0ed5-4aab-a6cf-41edaf260b61/"
                          alt="Syncspider partners - Dokan"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/9bda4baa-d4b4-47b4-8c24-45e9014fe541/"
                          alt="Syncspider partners - Dokan"
                        ></img>
                      </div>
                    </a>
                  </div>

                  <div class="partner-card-container">
                    <a href="https://syncspider.com/partners-overview-page/">
                      <div class="partner-logo-container">
                        <img
                          class="partner-logo big"
                          src="https://cdn.dragdropr.com/30153ffa-1922-4406-888f-c91ad2966e89/"
                          alt="Syncspider partners - Tada"
                        ></img>
                        <img
                          class="partner-logo small"
                          src="https://cdn.dragdropr.com/659d25ed-4b62-49c2-bb9c-b2d19518d1e9/"
                          alt="Syncspider partners - Tada"
                        ></img>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={0}></Col>
              <Col sm={0}></Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Footer></Footer>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />

              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </Transitions>
      </>
    </ThemeProvider>
  );
};

export default Partners;
