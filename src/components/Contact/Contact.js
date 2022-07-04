import React, { useEffect, useState, useRef } from "react";
import Transitions from "../Transition";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./Contact.css";
import { Container, Row, Col } from "react-grid-system";
import Burger from "../Burger";
import FocusLock from "react-focus-lock";
import Menu from "../Menu";
import Footer from "../Footer";
const Contact = () => {
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
          <div className="haederContainer">
            <Container>
              <Row>
                <Col sm={2}> </Col>
                <Col sm={8}>
                <p className="newsText">Contact</p>
                  <h1 class="jt --debug">
                    <span class="jt__row">
                      <span class="jt__text"> Get in touch with us</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text"> Get in touch with us</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text"> Get in touch with us</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                      <span class="jt__text"> Get in touch with us</span>
                    </span>
                  </h1>
                    <p className="contactDesc">
                      Share your proposals, ideas and comments with us. We are
                      looking forward for them. Thank You We’ll respond to your
                      message as soon as possible.
                    </p>
                  <header class="speaker-form-header">
                 
                  </header>
                  <br></br>
                  <form action="" method="get" class="speaker-form">
                    <div class="form-row">
                      <label for="email" className="formFieldTitle">Name</label>
                      <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-row">
                      <label for="email" className="formFieldTitle">Surname</label>
                      <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-row">
                      <label for="email" className="formFieldTitle">Email</label>
                      <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-row">
                      <label for="email" className="formFieldTitle">Practice Area</label>
                      <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-row">
                      <button>Submit</button>
                    </div>
                  </form>
                  {/* <form onSubmit={handleSubmit}>
                    <label>
                      Enter your name:
                      <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Enter your age:
                      <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                      />
                    </label>
                    <input type="submit" />
                  </form> */}
                </Col>
                <Col sm={2}></Col>
              </Row>
            </Container>
            <Footer></Footer>
          </div>
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

export default Contact;
