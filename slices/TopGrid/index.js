import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import PrismicImage from "@/components/PrismicImage";
import classes from "../../src/styles/Home.module.css";
/**
 * @typedef {import("@prismicio/client").Content.TopGridSlice} TopGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopGridSlice>} TopGridProps
 * @param { TopGridProps }
 */
const TopGrid = ({ slice }) => {
  return (
    <section>
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>

      {slice.items ? (
        <ul className={classes["grid-container"]}>
          {slice.items.map((slice, idx) => {
            return (
              <li key={idx} className={classes["grid-item"]}>
                <div className={classes["grid-item__container"]}>
                  {slice.blockImage ? (
                    <div className={classes["grid-item__image-container"]}>
                      <PrismicImage
                        image={slice.blockImage}
                        className={classes["grid-item__image"]}
                      />
                    </div>
                  ) : null}
                  <div className={classes["grid-item__text-container"]}>
                    {slice.blockTitle ? (
                      <PrismicLink field={slice.blockLink}>
                        <PrismicRichText field={slice.blockTitle} />
                      </PrismicLink>
                    ) : null}

                    {slice.blockCategoryTitle ? (
                      <PrismicLink field={slice.blockCategoryLink}>
                        <PrismicRichText field={slice.blockCategoryTitle} />
                      </PrismicLink>
                    ) : null}
                  </div>
                </div>{" "}
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
};

export default TopGrid;
