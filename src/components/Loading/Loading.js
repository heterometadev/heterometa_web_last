import React, { useEffect, useState, useRef } from "react";

const Loading = () => {
 
  useEffect(() => {
    // Never modify state manually!!!!
    // counter = 100;
    // Never!
    // setCounter(100);
    setTimeout(function() {
      document.getElementById("loading-page").className += "loaded";
      document.getElementById("loader").className += "opzero";
      document.getElementById("lastray").className += " finalray";
      document.body.className += "whitebk";
    }, 6500);
  }, );

  return (
    <div class="container">
      <h1></h1>
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
          </div>
          <div class="ray element"></div>
          <div class="sphere element"></div>
        </div>
      </div>
      <div id="lastray" class="element"></div>
      <script src="js/master.js" charset="utf-8"></script>
    </div>
  );
};
export default Loading;
