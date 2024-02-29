import React from "react";
import PropTypes from "prop-types";
import './App.css'
import Icon1 from "./assets/mobile-apps-icon.svg";
import Icon2 from "./assets/web-apps-icon.svg";
import Icon3 from "./assets/headless-dev-icon.svg";
import Icon4 from "./assets/generative-ai-icon.svg";
import Icon5 from "./assets/resource-icon.svg";

const cardIconOptions = [
  {
    label: "Mobile Apps",
    icon: Icon1,
  },
  {
    label: "Web Apps",
    icon: Icon2,
  },
  {
    label: "Headless Devlopement",
    icon: Icon3,
  },
  {
    label: "Generative Ai",
    icon: Icon4,
  },
  {
    label: "Resource Augmentation",
    icon: Icon5,
  },
];

const CardComponent = ({ icon, title, description }) => {
  const iconPath = cardIconOptions.find((option) => option.label === icon).icon;


  return (
    <div  className="card">
      <div  className="card-title">
        <img src={iconPath} alt="Card Icon" />
        <h6 className="heading"> {title}</h6>
      </div>

      <p className="card-detail"> {description}</p>
    </div>
  );
};

const iconTypes = [
  "Mobile Apps",
  "Web Apps",
  "Headless Devlopement",
  "Generative Ai",
  "Resource Augmentation",
];
CardComponent.propTypes = {
  icon: PropTypes.oneOf(iconTypes),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CardComponent.defaultProps = {
  icon: "Mobile Apps",
  title: "Mobile Apps",
  description:
    "Top notch mobile application development solutions for Android and iOS using React Native and Flutter",
};

export default CardComponent;
