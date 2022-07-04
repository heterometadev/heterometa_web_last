import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-grid-system";
import {
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaTwitch,
  FaTelegram,
} from "react-icons/fa";

const FooterPage = () => {
  useEffect(() => {
    
    console.clear();
    /* Js */
    let aphorisms = [
      "That which yields",
      "is not always weak.",
      "If you want something done,",
      "do it yourself!",
      "Never trust a computer you can't throw out a window.",
    ];

    let data = {
      aphorisms: aphorisms,
    };

    function BlipText(
      el,
      copyArray,
      flickerSpeed = 50,
      holdDelay = 2000,
      noise = "-*.°"
    ) {
      this.contentArray = copyArray;
      this.contentCount = 0;
      this.charCount = 0;
      this.domElement = el;
      this.flickerSpeed = flickerSpeed;
      this.holdDelay = holdDelay;
      this.noise = noise.split("");
      this.noiseCount = 0;
      this.compose(this.contentArray[this.contentCount++]);
    }
    BlipText.prototype.compose = function(txt) {
      this.noiseCount = 0;
      this.charCount = 0;
      this.flickerUp(txt);
    };
    BlipText.prototype.decompose = function() {
      this.noiseCount = 0;
      this.charCount = 0;
      this.flickerDown();
    };
    BlipText.prototype.flickerUp = function(txt) {
      let t = txt.substr(0, this.charCount);
      this.domElement.textContent = t + this.noise[this.noiseCount++];
      if (this.noiseCount < this.noise.length) {
        setTimeout(() => this.flickerUp(txt), this.flickerSpeed);
      } else if (this.charCount++ < txt.length - 1) {
        this.noiseCount = 0;
        setTimeout(() => this.flickerUp(txt), this.flickerSpeed);
      } else {
        this.domElement.textContent = txt;
        setTimeout(() => this.decompose(), this.holdDelay);
      }
    };
    BlipText.prototype.flickerDown = function() {
      let t = this.domElement.textContent.slice(0, -1);
      this.domElement.textContent = t + this.noise[this.noiseCount++];
      if (this.noiseCount < this.noise.length) {
        setTimeout(() => this.flickerDown(), this.flickerSpeed);
      } else if (t.length > 0) {
        this.noiseCount = 0;
        this.domElement.textContent = this.domElement.textContent.slice(0, -1);
        setTimeout(() => this.flickerDown(), this.flickerSpeed);
      } else {
        this.domElement.textContent = "";
        this.compose(this.contentArray[this.contentCount++]);
        if (this.contentCount >= this.contentArray.length) {
          this.contentCount = 0;
        }
      }
    };

    let blipTargets = [...document.querySelectorAll(".blip-text")];
    for (let i = 0; i < blipTargets.length; i++) {
      let dataSet = blipTargets[i].dataset;
      let blipper = new BlipText(
        blipTargets[i],
        data[dataSet.src],
        Number(dataSet.flicker),
        Number(dataSet.hold),
        dataSet.noise
      );
    }

    /* ---------------------------------- */
  }, []);

  return (
    <footer class="site-footer">
      
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>

        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p
              class="blip-text"
              data-src="aphorisms"
              data-flicker="10"
              data-hold="1200"
              data-noise="-.*°"
            ></p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble">
                    <FaDiscord></FaDiscord>
                  </i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter">
                    <FaTwitter></FaTwitter>
                  </i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-youtube">
                    <FaYoutube></FaYoutube>
                  </i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-facebook">
                    <FaTwitch></FaTwitch>
                  </i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-youtube">
                    <FaTelegram></FaTelegram>
                  </i>
                </a>
              </li>
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook">
                    <FaFacebook></FaFacebook>
                  </i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin">
                    <FaLinkedin></FaLinkedin>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
   
    </footer>

    // <div className="footerContainer">
    //   <Container>
    //     <Row>
    //       <Col sm={5}>
    //         <div class="wrapper">
    //           <p
    //             class="blip-text"
    //             data-src="aphorisms"
    //             data-flicker="10"
    //             data-hold="1200"
    //             data-noise="-.*°"
    //           ></p>
    //         </div>
    //       </Col>
    //       <Col sm={1}>
    //       </Col>
    //       <Col sm={6}>
    //         <div class="social-menu">
    //           <ul>
    //             <li>
    //               <a href="">
    //               <i class="fa"><FaFacebook></FaFacebook></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-twitter"><FaTwitter></FaTwitter></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-instagram"><FaInstagram></FaInstagram></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-youtube"><FaYoutube></FaYoutube></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-linkedin"><FaLinkedin></FaLinkedin></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-discord"><FaDiscord></FaDiscord></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>

    //     </Row>
    //   </Container>
    // </div>
  );
};

export default FooterPage;
