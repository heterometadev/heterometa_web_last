import React, { useEffect, useState, useRef } from "react";
import Transitions from "../Transition";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./News.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Row, Col } from "react-grid-system";
import Burger from "../Burger";
import FocusLock from "react-focus-lock";
import Menu from "../Menu";
import Footer from "../Footer";
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


const News = () => {
  
  let navigate = useNavigate();
  function handleClick() {
    console.log(" click");
    navigate("../heterometa");
  }

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    backgroundColor: "black",
    ...theme.typography.body2,
    fontSize: 32,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
  }));

  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const videoRef = useRef();
  const menuId = "main-menu";

  return (
    <ThemeProvider theme={theme}>
        {/* <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas> */}
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
          <p className="newsText">News</p>
                  <h1 class="jt --debug">
                    <span class="jt__row">
                      <span class="jt__text">
                        {" "}
                        The latest news from the Heterometa metaverse and beyond
                      </span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text">
                        {" "}
                        The latest news from the Heterometa metaverse and beyond
                      </span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text">
                        {" "}
                        The latest news from the Heterometa metaverse and beyond
                      </span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text">
                        {" "}
                        The latest news from the Heterometa metaverse and beyond
                      </span>
                    </span>
                  </h1>
                  {/* <p className="underline">
                    The latest news from the Heterometa metaverse and beyond
                  </p> */}
                  </div>
                
            <Container>
              <Row>
                <Col sm={8}>
                <p className="sortByTitle">Sort by:Date</p>
                  <section id="postIndex" class="widthWrapper">
                    <article>
                      <a
                        target="_blank"
                        href="https://sitechop.com/posts/12-speeding-up-your-website"
                      >
                        <div class="postImg">
                          <img src="/assets/Logo 3d kare.png" />
                        </div>
                        <h2>Speeding Up Your Website 101</h2>
                        <p>
                          It seems like only a select few, besides big companies
                          and corporations, care about web page speed and
                          performance. Browsing the web, it's common to see load
                          times of 5 seconds and pages that weigh 4, 5,
                          sometimes 10 megabytes! Even if that's not you, is
                          your website optimized to its full potential? This
                          post is not about stripping your page, its about
                          optimizing everything so that your website loads as
                          fast as possible.
                        </p>
                      </a>
                    </article>

                    <article>
                      <a
                        target="_blank"
                        href="https://sitechop.com/posts/11-guide-to-grunt-js-basics"
                      >
                        <div class="postImg">
                          <img src="/assets/Logo 3d kare.png" />
                        </div>
                        <h2>Guide to Grunt JS (The Basics)</h2>
                        <p>
                          Grunt is one of those tools I've heard of forever, but
                          never got around to using. Everyone raves about how
                          great it is and the amount of time they've saved, but
                          could it really be that great? This week I took some
                          time to learn the basics and try it on a project. They
                          were right... Grunt is pretty awesome. Today I'm going
                          to take you through the installation process, teach
                          you the basics, and take you through the creation of
                          your first Gruntfile.
                        </p>
                      </a>
                    </article>

                    <article>
                      <a
                        target="_blank"
                        href="https://sitechop.com/posts/10-svg-social-media-sprite-icon-tutorial"
                      >
                        <div class="postImg">
                          <img src="/assets/Logo 3d kare.png" />
                        </div>
                        <h2>
                          Social Media Icons Tutorial (SVG Sprite + Image
                          Replacement)
                        </h2>
                        <p>
                          Nearly every modern website has social media icons on
                          their page. It's a great and stylish why to cross link
                          and hold everything together. There are ton's of bad
                          methods to add these icons to your page though. Today
                          I offer you a clean and semantic way to add social
                          media icons to your website using a SVG sprite sheet
                          and image replacement. A PNG fall back and IE6+
                          support is included as well.
                        </p>
                      </a>
                    </article>

                    <article>
                      <a
                        target="_blank"
                        href="https://sitechop.com/posts/9-svg-css-icon-buttons-with-fallback"
                      >
                        <div class="postImg">
                          <img src="/assets/Logo 3d kare.png" />
                        </div>
                        <h2>
                          SVG+CSS Icon Buttons with PNG Fallbacks Tutorial
                        </h2>
                        <p>
                          Icons make everything look cooler, there's some
                          magical component to them that can really bring out a
                          website. Visuals aside, using icons offer some great
                          UX benefits as well, in many cases the user spots the
                          icon before the word it represents. With the rising
                          use/support of SVG we no longer have to worry about
                          our icons looking choppy on a "retina screen". Today I
                          want to take you though the process of creating
                          SVG+CSS icon buttons, with PNG fallbacks.
                        </p>
                      </a>
                    </article>

                    <article>
                      <a
                        target="_blank"
                        href="https://sitechop.com/posts/8-migrating-to-ubuntu-as-designer-developer"
                      >
                        <div class="postImg">
                          <img src="/assets/Logo 3d kare.png" />
                        </div>
                        <h2>
                          Migrating to Ubuntu as a Web Designer and Developer
                        </h2>
                        <p>
                          Originally a Windows and OSX user, I made the jump to
                          Ubuntu Linux early this year. After a brief adjustment
                          period, I must say I've grown to love it. The
                          stability and UNIXiness (yeah, made that word up) of
                          OSX and the flexibility of Windows make for the
                          perfect combination of awesomeness. Today I want to do
                          two things. Tell you why I made the migration to
                          Ubuntu Linux as a web designer/developer, and give you
                          a overview of all the different softwares I use on a
                          daily basis.
                        </p>
                      </a>
                    </article>
                  </section>{" "}
                </Col>
                <Col sm={4}>
                  <div class="roadmapSection">
                    <div class="list">
                      <h2 className="leftListTitle">Roadmap</h2>
                      <ul>
                        <li>
                          <span>Articles</span>
                        </li>
                        <li>
                          <span>Updates</span>
                        </li>
                        <li>
                          <span>Latest News</span>
                        </li>
                        <li>
                          <span>Newsletter</span>
                        </li>
                      </ul>
                    </div>
                    {/* <h3 >Roadmap</h3>
                    <ul>
                      <li>Coffee Coca Cola Coffee</li>
                      <li>Tea</li>
                      <li>Coca Cola</li>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Coca Cola</li>
                    </ul> */}
                  </div>
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

export default News;
