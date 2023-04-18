import React from "react";
import Image from "next/image";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import SectionWithBackground from "@/components/SectionWithBackground";

/**
 * @typedef {import("@prismicio/client").Content.FullWidthSlice} FullWidthSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FullWidthSlice>} FullWidthProps
 * @param { FullWidthProps }
 */
const FullWidth = ({ slice }) => {
  console.log(slice, " full Width");
  return (
    <SectionWithBackground image={slice.primary.image}>
      {slice.primary.title && slice.primary.titleLink ? (
        <PrismicLink field={slice.primary.titleLink}>
          <PrismicRichText field={slice.primary.title} />
        </PrismicLink>
      ) : (
        <PrismicRichText field={slice.primary.title} />
      )}

      {slice.primary.summary && (
        <PrismicRichText field={slice.primary.summary} />
      )}

      {slice.primary.category_link && (
        <PrismicLink field={slice.primary.category_link}>
          <PrismicRichText field={slice.primary.category_title} />
        </PrismicLink>
      )}
      {slice.primary.category_link.link_type === "Any" &&
      slice.primary.category_title ? (
        <PrismicRichText field={slice.primary.category_title} />
      ) : null}
    </SectionWithBackground>
  );
};

export default FullWidth;
