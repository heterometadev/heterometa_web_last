import React, { useEffect, useState, useRef } from "react";
import Transitions from "../Transition";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./Team.css";
import { Container, Row, Col } from "react-grid-system";
import Burger from "../Burger";
import FocusLock from "react-focus-lock";
import Menu from "../Menu";
import Footer from "../Footer";
import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Team = () => {
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

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  function Dodecahedron({ time, ...props }) {
    return (
      <mesh {...props}>
        <dodecahedronGeometry />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
        <Html distanceFactor={10}>
          <div className="content">
            Michael <br />
            Jackson
          </div>
        </Html>
      </mesh>
    );
  }

  function Content() {
    const ref = useRef();
    useFrame(
      () =>
        (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.001)
    );
    return (
      <group ref={ref}>
        <Dodecahedron position={[-2, 0, 0]} />
        <Dodecahedron position={[-4, 2, 0]} />
        <Dodecahedron position={[-4, -3, 0]} />
        <Dodecahedron position={[0, -5, -3]} />
        <Dodecahedron position={[2, 0, 0]} />
        <Dodecahedron position={[2, 0, 4]} />
        <Dodecahedron position={[5, 1, 0]} />
      </group>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Transitions>
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
          <div className="teamContainer">
            <div className="teamTitleContainer">
              <p className="teamText">Team</p>
              <h1>
                {" "}
                <h1 class="jt --debug">
                  <span class="jt__row">
                    <span class="jt__text">
                      {" "}
                      Bringing power to the people by creating an intergalactic
                      metaverse with next-gen technologies.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Bringing power to the people by creating an intergalactic
                      metaverse with next-gen technologies.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Bringing power to the people by creating an intergalactic
                      metaverse with next-gen technologies.
                    </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">
                      {" "}
                      Bringing power to the people by creating an intergalactic
                      metaverse with next-gen technologies.
                    </span>
                  </span>
                </h1>
              </h1>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div className="teamMembers">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5] }}>
                <pointLight color="indianred" />
                <pointLight position={[10, 10, -10]} color="white" />
                <pointLight position={[-10, -10, 10]} color="purple" />
                <Content />
              </Canvas>
            </div>
            <Container>
              <Row>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
              </Row>
            </Container>

            <br></br>
            <br></br>
            <br></br>
            <Container>
              <Row>
                <Col sm={4}>
                  <p className="teamText">Developers</p>
                  <ul>
                    <ul>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                    </ul>
                  </ul>
                </Col>
                <Col sm={4}>
                  <p className="teamText">Designers</p>{" "}
                  <ul>
                    <ul>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                      <li>
                        <p>Michael Jackson</p>
                      </li>
                    </ul>
                  </ul>
                </Col>
                <Col sm={4}>
                  <p className="teamText">Founders</p>
                  <ul>
                    <li>
                      <p>Michael Jackson</p>
                    </li>
                    <li>
                      <p>Michael Jackson</p>
                    </li>
                    <li>
                      <p>Michael Jackson</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer></Footer>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              {/* <ExploreButton /> */}
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </Transitions>
      </>
    </ThemeProvider>
  );
};

export default Team;

{
  /* 
            <div class="images-leaning">
              <div>
                <img
                  src="https://assets.codepen.io/1025350/eleanor.jpg"
                  alt="Eleanor from The Good Place"
                />
              </div>
              <div>
                <img
                  src="https://assets.codepen.io/1025350/chidi.jpg"
                  alt="Chidi from The Good Place"
                />
              </div>
              <div>
                <img
                  src="https://assets.codepen.io/1025350/jason.jpg"
                  alt="Jason from The Good Place"
                />
              </div>
              <div>
                <img
                  src="https://assets.codepen.io/1025350/tahani.jpg"
                  alt="Tahani from The Good Place"
                />
              </div>
            </div> */
}
