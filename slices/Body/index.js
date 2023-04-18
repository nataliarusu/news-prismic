import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "../../src/styles/Home.module.css";
/**
 * @typedef {import("@prismicio/client").Content.BodySlice} BodySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BodySlice>} BodyProps
 * @param { BodyProps }
 */
const Body = ({ slice }) => (
  <div className={classes.body}>
    {slice.primary.body ? (
      <PrismicRichText field={slice.primary.body} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </div>
);

export default Body;
