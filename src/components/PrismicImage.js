import React from "react";
import Image from "next/image";
const PrismicImage = ({ image, className }) => {
  if (!image || !image.url) {
    return null;
  }

  return (
    <Image
      className={className}
      src={image.url}
      alt={image.alt || ""}
      width={image.dimensions.width}
      height={image.dimensions.height}
    />
  );
};

export default PrismicImage;
