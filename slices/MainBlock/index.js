import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.MainBlockSlice} MainBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainBlockSlice>} MainBlockProps
 * @param { MainBlockProps }
 */
const MainBlock = ({ slice }) => {
  console.log(slice, " main block");
  return (
    <div>
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.body ? (
        <PrismicRichText field={slice.primary.body} />
      ) : (
        <p>start by editing this slice from inside Slice Machine for Body!</p>
      )}
      {slice.primary.body ? (
        <button>
          <Link>{slice.primary.primaryButtonText}</Link>{" "}
        </button>
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      <div></div>
    </div>
  );
};

export default MainBlock;
