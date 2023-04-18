import React from "react";
import classes from "./SectionWithBackground.module.css";

const SectionWithBackground = ({
  image,
  textColour,
  linkColour,
  linkHoverColour,
  children,
}) => {
  if (!image || !image.url) {
    return null;
  }

  const sectionStyle = {
    backgroundImage: `url(${image.url})`,
    "--text-color": textColour,
    "--link-color": linkColour,
    "--link-hover-color": linkHoverColour,
  };

  return (
    <section className={classes["section-bg"]} style={sectionStyle}>
      <div className={classes["section-bg__content"]}>{children}</div>
    </section>
  );
};

export default SectionWithBackground;
