import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Navigation } from "../../src/components/Navigation";

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param { NavigationItemProps }
 */
const NavigationItem = ({ slice }) => {
  return <div>This nav slice is not used</div>;
};
export default NavigationItem;
