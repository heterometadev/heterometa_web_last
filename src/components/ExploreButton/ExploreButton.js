import React from 'react';
import { bool, func } from 'prop-types';
import "./ExploreButton.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const ExploreButton = ({ open, setOpen, ...props }) => {

  let navigate = useNavigate();
  function handleClick() {
    console.log(' click');
    navigate("../about");
  }

  return (
    <button className='exploreButton' onClick={handleClick} >Start</button>
  )
}

ExploreButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ExploreButton;