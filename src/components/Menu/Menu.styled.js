import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: fixed;
  /* padding-top: 10%;
  padding-left: 20%; */
  background: rgb(255,99,71);
  background: linear-gradient(145deg, rgba(255,99,71,1) 0%, rgba(125,49,36,1) 4%, rgba(34,14,11,1) 40%, rgba(10,4,4,1) 51%, rgba(0,0,0,1) 64%, rgba(0,0,0,1) 80%);
  /* background: rgb(131,122,72);
background: linear-gradient(135deg, rgba(131,122,72,1) 0%, rgba(97,89,56,1) 5%, rgba(65,50,2,1) 19%, rgba(23,18,1,1) 32%, rgba(22,20,23,1) 51%); */
  /* background: ${({ theme }) => theme.menuBackground}; */
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) =>
    open
      ? "translateX(0) translateY(0)"
      : "translateX(-100%) translateY(-100%)"};
  /* display: ${({ open }) => (open ? "flex" : "none")}; */
  /* height: 111vh; */
  height: 100%;
  width: 100%;
  /* padding: 3rem; */
  /* width: 100%; */
  top: 0;
  left: 0;
  transition: opacity 1.5s, visibility 1.5s;
  /* font-family: 'Staatliches', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px; */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px !important;
    }
  
    .aMenu{
      color: white;
      text-decoration: none;
      font-size: 32px;
      width: 20px;
      &:hover{
        color: blue;
      }
    }
    @media (min-width: 768px) {
      font-size: 12px;
    }


    .ContainerMenu{
      position: fixed;
      padding-top: 7%;
      height: 70%;
      
    }

    .rightBottomContainer{
      position:absolute;
      bottom:0;
      right:0;
      padding: 2rem;
    
    }
    .rightBottomText{
        color: grey;
        font-size: 18px !important;
        
        @media (max-width: 568px) {
           font-size: 12px !important;
        }
    }
    .leftBottomContainer{
      position:absolute;
      bottom:0;
      left:0;
      padding: 2rem;
    
    }
    .leftBottomText{
        color: grey;
        font-size: 18px !important;
    }
/* Text */

.blip-text{
	font-size: 1.0rem;
	font-weight: normal;
  color: grey;
	position: absolute;
	transform: translateY(-50%);
   font-family: Helvetica;
}
/* General */
.exploreNow{
  text-align: right;
  align-items: flex-end;
}

.menuTitle{
  padding:3rem;
  list-style-type: none;
  color: white;
  font-size: 32px;
}

/**************************************
RESPONSIVE LAYOUT CSS
**************************************/



.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none; }
  .firefly::before, .firefly::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw; }
  .firefly::before {
    background: black;
    opacity: 0.4;
    animation: drift ease alternate infinite; }
  .firefly::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: drift ease alternate infinite, flash ease infinite; }

.firefly:nth-child(1) {
  animation-name: move1; }
  .firefly:nth-child(1)::before {
    animation-duration: 10s; }
  .firefly:nth-child(1)::after {
    animation-duration: 10s, 6255ms;
    animation-delay: 0ms, 1752ms; }

@keyframes move1 {
  0% {
    transform: translateX(4vw) translateY(35vh) scale(0.52); }
  3.57143% {
    transform: translateX(17vw) translateY(-41vh) scale(0.56); }
  7.14286% {
    transform: translateX(-40vw) translateY(-41vh) scale(0.53); }
  10.71429% {
    transform: translateX(-5vw) translateY(30vh) scale(0.57); }
  14.28571% {
    transform: translateX(-30vw) translateY(32vh) scale(0.43); }
  17.85714% {
    transform: translateX(42vw) translateY(15vh) scale(0.55); }
  21.42857% {
    transform: translateX(-24vw) translateY(-18vh) scale(0.69); }
  25% {
    transform: translateX(40vw) translateY(50vh) scale(0.94); }
  28.57143% {
    transform: translateX(7vw) translateY(8vh) scale(0.38); }
  32.14286% {
    transform: translateX(-41vw) translateY(34vh) scale(0.54); }
  35.71429% {
    transform: translateX(-31vw) translateY(16vh) scale(0.29); }
  39.28571% {
    transform: translateX(47vw) translateY(-24vh) scale(0.91); }
  42.85714% {
    transform: translateX(-42vw) translateY(19vh) scale(0.51); }
  46.42857% {
    transform: translateX(-4vw) translateY(22vh) scale(0.68); }
  50% {
    transform: translateX(36vw) translateY(-38vh) scale(0.7); }
  53.57143% {
    transform: translateX(12vw) translateY(38vh) scale(0.4); }
  57.14286% {
    transform: translateX(31vw) translateY(-34vh) scale(0.46); }
  60.71429% {
    transform: translateX(21vw) translateY(-16vh) scale(0.93); }
  64.28571% {
    transform: translateX(41vw) translateY(17vh) scale(0.66); }
  67.85714% {
    transform: translateX(-34vw) translateY(-49vh) scale(0.7); }
  71.42857% {
    transform: translateX(8vw) translateY(-46vh) scale(0.46); }
  75% {
    transform: translateX(18vw) translateY(44vh) scale(0.34); }
  78.57143% {
    transform: translateX(38vw) translateY(-46vh) scale(0.98); }
  82.14286% {
    transform: translateX(24vw) translateY(-28vh) scale(0.95); }
  85.71429% {
    transform: translateX(-22vw) translateY(21vh) scale(0.67); }
  89.28571% {
    transform: translateX(29vw) translateY(6vh) scale(0.52); }
  92.85714% {
    transform: translateX(16vw) translateY(-42vh) scale(0.52); }
  96.42857% {
    transform: translateX(13vw) translateY(-24vh) scale(0.8); }
  100% {
    transform: translateX(5vw) translateY(-4vh) scale(0.35); } }

.firefly:nth-child(2) {
  animation-name: move2; }
  .firefly:nth-child(2)::before {
    animation-duration: 15s; }
  .firefly:nth-child(2)::after {
    animation-duration: 15s, 7203ms;
    animation-delay: 0ms, 3039ms; }

@keyframes move2 {
  0% {
    transform: translateX(-32vw) translateY(-21vh) scale(0.89); }
  4.16667% {
    transform: translateX(-38vw) translateY(35vh) scale(0.73); }
  8.33333% {
    transform: translateX(15vw) translateY(-48vh) scale(0.65); }
  12.5% {
    transform: translateX(8vw) translateY(-3vh) scale(0.26); }
  16.66667% {
    transform: translateX(-22vw) translateY(-43vh) scale(0.96); }
  20.83333% {
    transform: translateX(8vw) translateY(3vh) scale(0.88); }
  25% {
    transform: translateX(3vw) translateY(-34vh) scale(0.44); }
  29.16667% {
    transform: translateX(-36vw) translateY(10vh) scale(0.46); }
  33.33333% {
    transform: translateX(-47vw) translateY(-40vh) scale(0.77); }
  37.5% {
    transform: translateX(2vw) translateY(6vh) scale(0.58); }
  41.66667% {
    transform: translateX(30vw) translateY(45vh) scale(0.86); }
  45.83333% {
    transform: translateX(42vw) translateY(36vh) scale(0.79); }
  50% {
    transform: translateX(22vw) translateY(29vh) scale(0.67); }
  54.16667% {
    transform: translateX(-34vw) translateY(-24vh) scale(0.75); }
  58.33333% {
    transform: translateX(31vw) translateY(47vh) scale(0.78); }
  62.5% {
    transform: translateX(-21vw) translateY(-29vh) scale(0.57); }
  66.66667% {
    transform: translateX(-25vw) translateY(6vh) scale(0.32); }
  70.83333% {
    transform: translateX(7vw) translateY(41vh) scale(0.39); }
  75% {
    transform: translateX(-36vw) translateY(-42vh) scale(0.78); }
  79.16667% {
    transform: translateX(-44vw) translateY(16vh) scale(0.93); }
  83.33333% {
    transform: translateX(44vw) translateY(-2vh) scale(0.4); }
  87.5% {
    transform: translateX(18vw) translateY(28vh) scale(0.38); }
  91.66667% {
    transform: translateX(-1vw) translateY(46vh) scale(0.83); }
  95.83333% {
    transform: translateX(6vw) translateY(-28vh) scale(0.51); }
  100% {
    transform: translateX(-3vw) translateY(-44vh) scale(0.63); } }

.firefly:nth-child(3) {
  animation-name: move3; }
  .firefly:nth-child(3)::before {
    animation-duration: 12s; }
  .firefly:nth-child(3)::after {
    animation-duration: 12s, 5673ms;
    animation-delay: 0ms, 4786ms; }

@keyframes move3 {
  0% {
    transform: translateX(-28vw) translateY(-24vh) scale(0.6); }
  4.7619% {
    transform: translateX(24vw) translateY(-43vh) scale(0.37); }
  9.52381% {
    transform: translateX(-46vw) translateY(28vh) scale(0.57); }
  14.28571% {
    transform: translateX(-25vw) translateY(42vh) scale(0.54); }
  19.04762% {
    transform: translateX(-3vw) translateY(-46vh) scale(0.54); }
  23.80952% {
    transform: translateX(-32vw) translateY(37vh) scale(0.66); }
  28.57143% {
    transform: translateX(40vw) translateY(-38vh) scale(0.6); }
  33.33333% {
    transform: translateX(0vw) translateY(28vh) scale(0.75); }
  38.09524% {
    transform: translateX(-27vw) translateY(-28vh) scale(0.67); }
  42.85714% {
    transform: translateX(35vw) translateY(-8vh) scale(0.27); }
  47.61905% {
    transform: translateX(-4vw) translateY(-49vh) scale(0.67); }
  52.38095% {
    transform: translateX(37vw) translateY(23vh) scale(0.64); }
  57.14286% {
    transform: translateX(44vw) translateY(-33vh) scale(0.41); }
  61.90476% {
    transform: translateX(-7vw) translateY(-14vh) scale(0.67); }
  66.66667% {
    transform: translateX(45vw) translateY(12vh) scale(0.78); }
  71.42857% {
    transform: translateX(11vw) translateY(-7vh) scale(0.84); }
  76.19048% {
    transform: translateX(-33vw) translateY(-36vh) scale(0.57); }
  80.95238% {
    transform: translateX(33vw) translateY(-46vh) scale(0.78); }
  85.71429% {
    transform: translateX(-17vw) translateY(7vh) scale(0.31); }
  90.47619% {
    transform: translateX(-23vw) translateY(-49vh) scale(0.96); }
  95.2381% {
    transform: translateX(1vw) translateY(18vh) scale(0.75); }
  100% {
    transform: translateX(18vw) translateY(-36vh) scale(0.96); } }

.firefly:nth-child(4) {
  animation-name: move4; }
  .firefly:nth-child(4)::before {
    animation-duration: 9s; }
  .firefly:nth-child(4)::after {
    animation-duration: 9s, 5985ms;
    animation-delay: 0ms, 4746ms; }

@keyframes move4 {
  0% {
    transform: translateX(2vw) translateY(-6vh) scale(0.96); }
  4.54545% {
    transform: translateX(27vw) translateY(15vh) scale(0.88); }
  9.09091% {
    transform: translateX(-4vw) translateY(-27vh) scale(0.61); }
  13.63636% {
    transform: translateX(-27vw) translateY(43vh) scale(0.4); }
  18.18182% {
    transform: translateX(32vw) translateY(21vh) scale(0.74); }
  22.72727% {
    transform: translateX(5vw) translateY(19vh) scale(0.94); }
  27.27273% {
    transform: translateX(28vw) translateY(-32vh) scale(0.5); }
  31.81818% {
    transform: translateX(17vw) translateY(16vh) scale(0.53); }
  36.36364% {
    transform: translateX(4vw) translateY(-21vh) scale(0.32); }
  40.90909% {
    transform: translateX(-8vw) translateY(44vh) scale(0.57); }
  45.45455% {
    transform: translateX(-22vw) translateY(-2vh) scale(0.79); }
  50% {
    transform: translateX(-7vw) translateY(4vh) scale(0.64); }
  54.54545% {
    transform: translateX(-26vw) translateY(-14vh) scale(0.8); }
  59.09091% {
    transform: translateX(-5vw) translateY(21vh) scale(0.95); }
  63.63636% {
    transform: translateX(-24vw) translateY(-22vh) scale(0.74); }
  68.18182% {
    transform: translateX(17vw) translateY(-30vh) scale(0.32); }
  72.72727% {
    transform: translateX(-16vw) translateY(13vh) scale(0.72); }
  77.27273% {
    transform: translateX(-38vw) translateY(29vh) scale(0.89); }
  81.81818% {
    transform: translateX(48vw) translateY(4vh) scale(0.79); }
  86.36364% {
    transform: translateX(18vw) translateY(-48vh) scale(0.68); }
  90.90909% {
    transform: translateX(-25vw) translateY(1vh) scale(0.96); }
  95.45455% {
    transform: translateX(-24vw) translateY(10vh) scale(0.75); }
  100% {
    transform: translateX(9vw) translateY(-27vh) scale(0.7); } }

.firefly:nth-child(5) {
  animation-name: move5; }
  .firefly:nth-child(5)::before {
    animation-duration: 17s; }
  .firefly:nth-child(5)::after {
    animation-duration: 17s, 5802ms;
    animation-delay: 0ms, 4434ms; }

@keyframes move5 {
  0% {
    transform: translateX(-5vw) translateY(-13vh) scale(0.66); }
  3.57143% {
    transform: translateX(11vw) translateY(-22vh) scale(0.49); }
  7.14286% {
    transform: translateX(-26vw) translateY(37vh) scale(0.35); }
  10.71429% {
    transform: translateX(-20vw) translateY(30vh) scale(0.39); }
  14.28571% {
    transform: translateX(-27vw) translateY(13vh) scale(0.84); }
  17.85714% {
    transform: translateX(28vw) translateY(31vh) scale(0.62); }
  21.42857% {
    transform: translateX(17vw) translateY(-48vh) scale(0.88); }
  25% {
    transform: translateX(27vw) translateY(-22vh) scale(0.58); }
  28.57143% {
    transform: translateX(-5vw) translateY(-15vh) scale(0.8); }
  32.14286% {
    transform: translateX(38vw) translateY(7vh) scale(0.94); }
  35.71429% {
    transform: translateX(15vw) translateY(-5vh) scale(0.55); }
  39.28571% {
    transform: translateX(-15vw) translateY(-7vh) scale(0.57); }
  42.85714% {
    transform: translateX(-19vw) translateY(-21vh) scale(0.72); }
  46.42857% {
    transform: translateX(1vw) translateY(42vh) scale(0.81); }
  50% {
    transform: translateX(-33vw) translateY(-48vh) scale(0.89); }
  53.57143% {
    transform: translateX(-23vw) translateY(13vh) scale(0.32); }
  57.14286% {
    transform: translateX(46vw) translateY(-7vh) scale(0.87); }
  60.71429% {
    transform: translateX(-47vw) translateY(-40vh) scale(0.34); }
  64.28571% {
    transform: translateX(-47vw) translateY(-32vh) scale(0.48); }
  67.85714% {
    transform: translateX(29vw) translateY(-16vh) scale(0.93); }
  71.42857% {
    transform: translateX(-19vw) translateY(17vh) scale(0.57); }
  75% {
    transform: translateX(9vw) translateY(31vh) scale(0.59); }
  78.57143% {
    transform: translateX(21vw) translateY(41vh) scale(0.85); }
  82.14286% {
    transform: translateX(2vw) translateY(-23vh) scale(0.87); }
  85.71429% {
    transform: translateX(19vw) translateY(18vh) scale(0.83); }
  89.28571% {
    transform: translateX(-9vw) translateY(45vh) scale(0.34); }
  92.85714% {
    transform: translateX(7vw) translateY(-1vh) scale(0.89); }
  96.42857% {
    transform: translateX(-32vw) translateY(-47vh) scale(0.73); }
  100% {
    transform: translateX(-48vw) translateY(-6vh) scale(0.98); } }

.firefly:nth-child(6) {
  animation-name: move6; }
  .firefly:nth-child(6)::before {
    animation-duration: 16s; }
  .firefly:nth-child(6)::after {
    animation-duration: 16s, 10219ms;
    animation-delay: 0ms, 4179ms; }

@keyframes move6 {
  0% {
    transform: translateX(26vw) translateY(49vh) scale(0.34); }
  3.7037% {
    transform: translateX(-7vw) translateY(-40vh) scale(0.35); }
  7.40741% {
    transform: translateX(-28vw) translateY(25vh) scale(0.47); }
  11.11111% {
    transform: translateX(27vw) translateY(10vh) scale(0.52); }
  14.81481% {
    transform: translateX(31vw) translateY(-23vh) scale(0.87); }
  18.51852% {
    transform: translateX(-13vw) translateY(-5vh) scale(0.92); }
  22.22222% {
    transform: translateX(-21vw) translateY(35vh) scale(0.93); }
  25.92593% {
    transform: translateX(31vw) translateY(32vh) scale(0.97); }
  29.62963% {
    transform: translateX(44vw) translateY(27vh) scale(0.34); }
  33.33333% {
    transform: translateX(-15vw) translateY(6vh) scale(0.9); }
  37.03704% {
    transform: translateX(40vw) translateY(11vh) scale(0.58); }
  40.74074% {
    transform: translateX(-8vw) translateY(35vh) scale(0.33); }
  44.44444% {
    transform: translateX(-40vw) translateY(-46vh) scale(0.56); }
  48.14815% {
    transform: translateX(-15vw) translateY(-4vh) scale(0.44); }
  51.85185% {
    transform: translateX(-49vw) translateY(-43vh) scale(1); }
  55.55556% {
    transform: translateX(39vw) translateY(49vh) scale(0.28); }
  59.25926% {
    transform: translateX(-4vw) translateY(-33vh) scale(0.85); }
  62.96296% {
    transform: translateX(-40vw) translateY(42vh) scale(0.71); }
  66.66667% {
    transform: translateX(38vw) translateY(26vh) scale(0.34); }
  70.37037% {
    transform: translateX(31vw) translateY(5vh) scale(0.47); }
  74.07407% {
    transform: translateX(18vw) translateY(-7vh) scale(0.74); }
  77.77778% {
    transform: translateX(39vw) translateY(-38vh) scale(0.81); }
  81.48148% {
    transform: translateX(48vw) translateY(-35vh) scale(0.88); }
  85.18519% {
    transform: translateX(47vw) translateY(-9vh) scale(0.57); }
  88.88889% {
    transform: translateX(3vw) translateY(-35vh) scale(0.77); }
  92.59259% {
    transform: translateX(43vw) translateY(-10vh) scale(0.48); }
  96.2963% {
    transform: translateX(15vw) translateY(-22vh) scale(0.42); }
  100% {
    transform: translateX(49vw) translateY(-28vh) scale(0.76); } }

.firefly:nth-child(7) {
  animation-name: move7; }
  .firefly:nth-child(7)::before {
    animation-duration: 14s; }
  .firefly:nth-child(7)::after {
    animation-duration: 14s, 8644ms;
    animation-delay: 0ms, 7908ms; }

@keyframes move7 {
  0% {
    transform: translateX(7vw) translateY(28vh) scale(0.85); }
  5% {
    transform: translateX(49vw) translateY(0vh) scale(0.39); }
  10% {
    transform: translateX(38vw) translateY(3vh) scale(0.48); }
  15% {
    transform: translateX(11vw) translateY(-16vh) scale(0.47); }
  20% {
    transform: translateX(11vw) translateY(-35vh) scale(0.56); }
  25% {
    transform: translateX(-3vw) translateY(-31vh) scale(0.49); }
  30% {
    transform: translateX(-14vw) translateY(21vh) scale(0.77); }
  35% {
    transform: translateX(-41vw) translateY(-6vh) scale(0.9); }
  40% {
    transform: translateX(-16vw) translateY(-37vh) scale(0.72); }
  45% {
    transform: translateX(11vw) translateY(34vh) scale(0.77); }
  50% {
    transform: translateX(46vw) translateY(-32vh) scale(0.59); }
  55% {
    transform: translateX(-19vw) translateY(-3vh) scale(0.94); }
  60% {
    transform: translateX(-30vw) translateY(-44vh) scale(0.78); }
  65% {
    transform: translateX(12vw) translateY(-31vh) scale(0.62); }
  70% {
    transform: translateX(31vw) translateY(5vh) scale(0.35); }
  75% {
    transform: translateX(-29vw) translateY(-38vh) scale(0.56); }
  80% {
    transform: translateX(-3vw) translateY(12vh) scale(0.97); }
  85% {
    transform: translateX(-3vw) translateY(-39vh) scale(0.32); }
  90% {
    transform: translateX(-5vw) translateY(24vh) scale(0.42); }
  95% {
    transform: translateX(-27vw) translateY(44vh) scale(0.28); }
  100% {
    transform: translateX(16vw) translateY(10vh) scale(0.4); } }

.firefly:nth-child(8) {
  animation-name: move8; }
  .firefly:nth-child(8)::before {
    animation-duration: 16s; }
  .firefly:nth-child(8)::after {
    animation-duration: 16s, 9601ms;
    animation-delay: 0ms, 6955ms; }

@keyframes move8 {
  0% {
    transform: translateX(7vw) translateY(-28vh) scale(0.67); }
  5.55556% {
    transform: translateX(-14vw) translateY(25vh) scale(0.64); }
  11.11111% {
    transform: translateX(4vw) translateY(33vh) scale(0.37); }
  16.66667% {
    transform: translateX(18vw) translateY(-37vh) scale(0.72); }
  22.22222% {
    transform: translateX(6vw) translateY(-43vh) scale(0.96); }
  27.77778% {
    transform: translateX(0vw) translateY(-27vh) scale(0.37); }
  33.33333% {
    transform: translateX(7vw) translateY(26vh) scale(0.63); }
  38.88889% {
    transform: translateX(33vw) translateY(-24vh) scale(0.57); }
  44.44444% {
    transform: translateX(-6vw) translateY(-45vh) scale(0.89); }
  50% {
    transform: translateX(-23vw) translateY(-45vh) scale(0.53); }
  55.55556% {
    transform: translateX(-14vw) translateY(-15vh) scale(0.95); }
  61.11111% {
    transform: translateX(-35vw) translateY(-43vh) scale(0.76); }
  66.66667% {
    transform: translateX(1vw) translateY(-24vh) scale(0.83); }
  72.22222% {
    transform: translateX(-20vw) translateY(37vh) scale(0.87); }
  77.77778% {
    transform: translateX(20vw) translateY(-24vh) scale(0.59); }
  83.33333% {
    transform: translateX(22vw) translateY(24vh) scale(0.79); }
  88.88889% {
    transform: translateX(33vw) translateY(-46vh) scale(0.97); }
  94.44444% {
    transform: translateX(-18vw) translateY(3vh) scale(0.66); }
  100% {
    transform: translateX(7vw) translateY(-49vh) scale(0.91); } }

.firefly:nth-child(9) {
  animation-name: move9; }
  .firefly:nth-child(9)::before {
    animation-duration: 18s; }
  .firefly:nth-child(9)::after {
    animation-duration: 18s, 5482ms;
    animation-delay: 0ms, 4153ms; }

@keyframes move9 {
  0% {
    transform: translateX(38vw) translateY(-8vh) scale(0.62); }
  3.57143% {
    transform: translateX(14vw) translateY(-43vh) scale(0.91); }
  7.14286% {
    transform: translateX(49vw) translateY(4vh) scale(0.55); }
  10.71429% {
    transform: translateX(-27vw) translateY(-24vh) scale(0.26); }
  14.28571% {
    transform: translateX(-32vw) translateY(15vh) scale(0.78); }
  17.85714% {
    transform: translateX(41vw) translateY(40vh) scale(0.87); }
  21.42857% {
    transform: translateX(12vw) translateY(-4vh) scale(0.36); }
  25% {
    transform: translateX(-12vw) translateY(-40vh) scale(0.37); }
  28.57143% {
    transform: translateX(-27vw) translateY(30vh) scale(0.71); }
  32.14286% {
    transform: translateX(-17vw) translateY(39vh) scale(0.44); }
  35.71429% {
    transform: translateX(27vw) translateY(30vh) scale(0.88); }
  39.28571% {
    transform: translateX(-30vw) translateY(-16vh) scale(0.95); }
  42.85714% {
    transform: translateX(7vw) translateY(11vh) scale(0.38); }
  46.42857% {
    transform: translateX(-29vw) translateY(16vh) scale(0.27); }
  50% {
    transform: translateX(-47vw) translateY(40vh) scale(0.35); }
  53.57143% {
    transform: translateX(32vw) translateY(15vh) scale(0.57); }
  57.14286% {
    transform: translateX(21vw) translateY(30vh) scale(0.86); }
  60.71429% {
    transform: translateX(8vw) translateY(36vh) scale(0.81); }
  64.28571% {
    transform: translateX(11vw) translateY(-12vh) scale(0.33); }
  67.85714% {
    transform: translateX(21vw) translateY(45vh) scale(0.92); }
  71.42857% {
    transform: translateX(-12vw) translateY(-28vh) scale(0.56); }
  75% {
    transform: translateX(5vw) translateY(30vh) scale(0.67); }
  78.57143% {
    transform: translateX(-46vw) translateY(25vh) scale(0.93); }
  82.14286% {
    transform: translateX(-47vw) translateY(41vh) scale(0.44); }
  85.71429% {
    transform: translateX(-28vw) translateY(21vh) scale(0.28); }
  89.28571% {
    transform: translateX(-7vw) translateY(-29vh) scale(0.43); }
  92.85714% {
    transform: translateX(-23vw) translateY(-22vh) scale(0.77); }
  96.42857% {
    transform: translateX(-28vw) translateY(-27vh) scale(0.94); }
  100% {
    transform: translateX(47vw) translateY(29vh) scale(0.49); } }

.firefly:nth-child(10) {
  animation-name: move10; }
  .firefly:nth-child(10)::before {
    animation-duration: 11s; }
  .firefly:nth-child(10)::after {
    animation-duration: 11s, 10884ms;
    animation-delay: 0ms, 5264ms; }

@keyframes move10 {
  0% {
    transform: translateX(1vw) translateY(12vh) scale(0.82); }
  5.55556% {
    transform: translateX(31vw) translateY(26vh) scale(0.67); }
  11.11111% {
    transform: translateX(-49vw) translateY(-41vh) scale(0.93); }
  16.66667% {
    transform: translateX(15vw) translateY(5vh) scale(0.47); }
  22.22222% {
    transform: translateX(40vw) translateY(44vh) scale(0.76); }
  27.77778% {
    transform: translateX(17vw) translateY(-10vh) scale(0.41); }
  33.33333% {
    transform: translateX(-11vw) translateY(49vh) scale(0.63); }
  38.88889% {
    transform: translateX(15vw) translateY(21vh) scale(0.84); }
  44.44444% {
    transform: translateX(-25vw) translateY(22vh) scale(0.96); }
  50% {
    transform: translateX(40vw) translateY(-31vh) scale(0.9); }
  55.55556% {
    transform: translateX(-20vw) translateY(19vh) scale(0.75); }
  61.11111% {
    transform: translateX(-13vw) translateY(-18vh) scale(0.48); }
  66.66667% {
    transform: translateX(50vw) translateY(17vh) scale(0.98); }
  72.22222% {
    transform: translateX(-22vw) translateY(-3vh) scale(0.53); }
  77.77778% {
    transform: translateX(30vw) translateY(24vh) scale(0.79); }
  83.33333% {
    transform: translateX(-31vw) translateY(15vh) scale(0.5); }
  88.88889% {
    transform: translateX(-37vw) translateY(9vh) scale(0.62); }
  94.44444% {
    transform: translateX(-42vw) translateY(44vh) scale(0.55); }
  100% {
    transform: translateX(-42vw) translateY(-37vh) scale(0.35); } }

.firefly:nth-child(11) {
  animation-name: move11; }
  .firefly:nth-child(11)::before {
    animation-duration: 18s; }
  .firefly:nth-child(11)::after {
    animation-duration: 18s, 9632ms;
    animation-delay: 0ms, 4348ms; }

@keyframes move11 {
  0% {
    transform: translateX(-28vw) translateY(-17vh) scale(0.7); }
  4% {
    transform: translateX(-27vw) translateY(-38vh) scale(0.77); }
  8% {
    transform: translateX(-2vw) translateY(45vh) scale(0.82); }
  12% {
    transform: translateX(7vw) translateY(-11vh) scale(0.72); }
  16% {
    transform: translateX(-26vw) translateY(-46vh) scale(0.92); }
  20% {
    transform: translateX(18vw) translateY(11vh) scale(0.52); }
  24% {
    transform: translateX(-16vw) translateY(-39vh) scale(0.92); }
  28% {
    transform: translateX(50vw) translateY(-15vh) scale(0.98); }
  32% {
    transform: translateX(4vw) translateY(-23vh) scale(0.37); }
  36% {
    transform: translateX(8vw) translateY(-16vh) scale(0.98); }
  40% {
    transform: translateX(21vw) translateY(-8vh) scale(0.92); }
  44% {
    transform: translateX(-45vw) translateY(-28vh) scale(0.88); }
  48% {
    transform: translateX(-26vw) translateY(-39vh) scale(0.7); }
  52% {
    transform: translateX(21vw) translateY(-39vh) scale(1); }
  56% {
    transform: translateX(37vw) translateY(-35vh) scale(0.43); }
  60% {
    transform: translateX(-31vw) translateY(34vh) scale(0.6); }
  64% {
    transform: translateX(-8vw) translateY(-14vh) scale(0.49); }
  68% {
    transform: translateX(-2vw) translateY(44vh) scale(0.28); }
  72% {
    transform: translateX(36vw) translateY(-28vh) scale(0.45); }
  76% {
    transform: translateX(48vw) translateY(-28vh) scale(0.54); }
  80% {
    transform: translateX(-6vw) translateY(-1vh) scale(0.94); }
  84% {
    transform: translateX(0vw) translateY(-45vh) scale(0.99); }
  88% {
    transform: translateX(0vw) translateY(24vh) scale(0.66); }
  92% {
    transform: translateX(45vw) translateY(10vh) scale(0.29); }
  96% {
    transform: translateX(15vw) translateY(-12vh) scale(0.37); }
  100% {
    transform: translateX(42vw) translateY(-11vh) scale(0.62); } }

.firefly:nth-child(12) {
  animation-name: move12; }
  .firefly:nth-child(12)::before {
    animation-duration: 13s; }
  .firefly:nth-child(12)::after {
    animation-duration: 13s, 9843ms;
    animation-delay: 0ms, 5196ms; }

@keyframes move12 {
  0% {
    transform: translateX(-46vw) translateY(-11vh) scale(0.97); }
  3.57143% {
    transform: translateX(-29vw) translateY(10vh) scale(0.97); }
  7.14286% {
    transform: translateX(-7vw) translateY(-11vh) scale(0.74); }
  10.71429% {
    transform: translateX(42vw) translateY(11vh) scale(0.31); }
  14.28571% {
    transform: translateX(17vw) translateY(-21vh) scale(0.83); }
  17.85714% {
    transform: translateX(-46vw) translateY(-16vh) scale(0.55); }
  21.42857% {
    transform: translateX(33vw) translateY(-2vh) scale(0.51); }
  25% {
    transform: translateX(-49vw) translateY(49vh) scale(0.28); }
  28.57143% {
    transform: translateX(40vw) translateY(33vh) scale(0.48); }
  32.14286% {
    transform: translateX(-9vw) translateY(-16vh) scale(0.26); }
  35.71429% {
    transform: translateX(30vw) translateY(-23vh) scale(0.3); }
  39.28571% {
    transform: translateX(-16vw) translateY(-3vh) scale(0.98); }
  42.85714% {
    transform: translateX(22vw) translateY(-18vh) scale(0.97); }
  46.42857% {
    transform: translateX(24vw) translateY(-40vh) scale(0.47); }
  50% {
    transform: translateX(44vw) translateY(42vh) scale(0.75); }
  53.57143% {
    transform: translateX(45vw) translateY(43vh) scale(0.52); }
  57.14286% {
    transform: translateX(18vw) translateY(-31vh) scale(0.29); }
  60.71429% {
    transform: translateX(32vw) translateY(27vh) scale(0.96); }
  64.28571% {
    transform: translateX(-40vw) translateY(-23vh) scale(0.97); }
  67.85714% {
    transform: translateX(43vw) translateY(-26vh) scale(0.86); }
  71.42857% {
    transform: translateX(19vw) translateY(-35vh) scale(0.67); }
  75% {
    transform: translateX(35vw) translateY(36vh) scale(0.92); }
  78.57143% {
    transform: translateX(33vw) translateY(0vh) scale(0.26); }
  82.14286% {
    transform: translateX(3vw) translateY(-18vh) scale(0.81); }
  85.71429% {
    transform: translateX(-20vw) translateY(50vh) scale(0.81); }
  89.28571% {
    transform: translateX(-47vw) translateY(13vh) scale(0.62); }
  92.85714% {
    transform: translateX(-45vw) translateY(18vh) scale(0.93); }
  96.42857% {
    transform: translateX(44vw) translateY(-12vh) scale(0.77); }
  100% {
    transform: translateX(-16vw) translateY(-33vh) scale(0.79); } }

.firefly:nth-child(13) {
  animation-name: move13; }
  .firefly:nth-child(13)::before {
    animation-duration: 18s; }
  .firefly:nth-child(13)::after {
    animation-duration: 18s, 8738ms;
    animation-delay: 0ms, 3428ms; }

@keyframes move13 {
  0% {
    transform: translateX(-41vw) translateY(44vh) scale(0.91); }
  4.7619% {
    transform: translateX(-18vw) translateY(-3vh) scale(0.58); }
  9.52381% {
    transform: translateX(12vw) translateY(35vh) scale(0.43); }
  14.28571% {
    transform: translateX(-12vw) translateY(-35vh) scale(0.99); }
  19.04762% {
    transform: translateX(11vw) translateY(-23vh) scale(0.49); }
  23.80952% {
    transform: translateX(13vw) translateY(6vh) scale(0.65); }
  28.57143% {
    transform: translateX(-37vw) translateY(41vh) scale(0.68); }
  33.33333% {
    transform: translateX(-37vw) translateY(-24vh) scale(0.48); }
  38.09524% {
    transform: translateX(26vw) translateY(1vh) scale(0.34); }
  42.85714% {
    transform: translateX(-28vw) translateY(-27vh) scale(0.61); }
  47.61905% {
    transform: translateX(47vw) translateY(-15vh) scale(0.74); }
  52.38095% {
    transform: translateX(40vw) translateY(-43vh) scale(0.46); }
  57.14286% {
    transform: translateX(33vw) translateY(-9vh) scale(0.39); }
  61.90476% {
    transform: translateX(36vw) translateY(36vh) scale(0.53); }
  66.66667% {
    transform: translateX(-39vw) translateY(-4vh) scale(0.29); }
  71.42857% {
    transform: translateX(-25vw) translateY(-28vh) scale(0.39); }
  76.19048% {
    transform: translateX(-43vw) translateY(-41vh) scale(0.56); }
  80.95238% {
    transform: translateX(34vw) translateY(-40vh) scale(0.3); }
  85.71429% {
    transform: translateX(-40vw) translateY(-2vh) scale(0.81); }
  90.47619% {
    transform: translateX(49vw) translateY(-5vh) scale(0.48); }
  95.2381% {
    transform: translateX(-14vw) translateY(-5vh) scale(0.53); }
  100% {
    transform: translateX(33vw) translateY(11vh) scale(0.9); } }

.firefly:nth-child(14) {
  animation-name: move14; }
  .firefly:nth-child(14)::before {
    animation-duration: 13s; }
  .firefly:nth-child(14)::after {
    animation-duration: 13s, 10505ms;
    animation-delay: 0ms, 2648ms; }

@keyframes move14 {
  0% {
    transform: translateX(-44vw) translateY(-39vh) scale(0.32); }
  5.88235% {
    transform: translateX(-29vw) translateY(7vh) scale(0.39); }
  11.76471% {
    transform: translateX(-29vw) translateY(24vh) scale(0.98); }
  17.64706% {
    transform: translateX(-21vw) translateY(32vh) scale(0.76); }
  23.52941% {
    transform: translateX(15vw) translateY(6vh) scale(0.54); }
  29.41176% {
    transform: translateX(30vw) translateY(-18vh) scale(0.9); }
  35.29412% {
    transform: translateX(9vw) translateY(34vh) scale(0.5); }
  41.17647% {
    transform: translateX(-26vw) translateY(10vh) scale(0.89); }
  47.05882% {
    transform: translateX(-32vw) translateY(-14vh) scale(0.56); }
  52.94118% {
    transform: translateX(-36vw) translateY(-35vh) scale(0.53); }
  58.82353% {
    transform: translateX(-12vw) translateY(0vh) scale(0.43); }
  64.70588% {
    transform: translateX(34vw) translateY(37vh) scale(0.56); }
  70.58824% {
    transform: translateX(19vw) translateY(25vh) scale(0.68); }
  76.47059% {
    transform: translateX(0vw) translateY(46vh) scale(0.56); }
  82.35294% {
    transform: translateX(-17vw) translateY(7vh) scale(0.88); }
  88.23529% {
    transform: translateX(35vw) translateY(32vh) scale(0.9); }
  94.11765% {
    transform: translateX(40vw) translateY(-1vh) scale(0.37); }
  100% {
    transform: translateX(-44vw) translateY(-2vh) scale(0.5); } }

.firefly:nth-child(15) {
  animation-name: move15; }
  .firefly:nth-child(15)::before {
    animation-duration: 10s; }
  .firefly:nth-child(15)::after {
    animation-duration: 10s, 8609ms;
    animation-delay: 0ms, 4621ms; }

@keyframes move15 {
  0% {
    transform: translateX(-31vw) translateY(-18vh) scale(0.57); }
  5.26316% {
    transform: translateX(2vw) translateY(-31vh) scale(0.89); }
  10.52632% {
    transform: translateX(28vw) translateY(0vh) scale(0.92); }
  15.78947% {
    transform: translateX(-1vw) translateY(-32vh) scale(0.46); }
  21.05263% {
    transform: translateX(-11vw) translateY(11vh) scale(0.38); }
  26.31579% {
    transform: translateX(39vw) translateY(13vh) scale(0.47); }
  31.57895% {
    transform: translateX(7vw) translateY(20vh) scale(0.88); }
  36.84211% {
    transform: translateX(-47vw) translateY(-17vh) scale(0.26); }
  42.10526% {
    transform: translateX(-35vw) translateY(11vh) scale(0.71); }
  47.36842% {
    transform: translateX(8vw) translateY(30vh) scale(0.27); }
  52.63158% {
    transform: translateX(9vw) translateY(-40vh) scale(0.96); }
  57.89474% {
    transform: translateX(-46vw) translateY(-33vh) scale(0.45); }
  63.15789% {
    transform: translateX(27vw) translateY(-17vh) scale(0.91); }
  68.42105% {
    transform: translateX(-45vw) translateY(39vh) scale(0.61); }
  73.68421% {
    transform: translateX(-47vw) translateY(16vh) scale(0.95); }
  78.94737% {
    transform: translateX(-16vw) translateY(-30vh) scale(0.56); }
  84.21053% {
    transform: translateX(17vw) translateY(1vh) scale(0.67); }
  89.47368% {
    transform: translateX(-30vw) translateY(-23vh) scale(0.97); }
  94.73684% {
    transform: translateX(27vw) translateY(-47vh) scale(0.72); }
  100% {
    transform: translateX(-39vw) translateY(42vh) scale(0.92); } }

@keyframes drift {
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg); } }

@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow; }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow; } }

`;
