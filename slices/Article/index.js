import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import PrismicImage from "../../src/components/PrismicImage";
import classes from "../../src/styles/Home.module.css";
/**
 * @typedef {import("@prismicio/client").Content.ArticleSlice} ArticleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleSlice>} ArticleProps
 * @param { ArticleProps }
 */
const Article = ({ slice }) => (
  <div className={`${classes.article} ${classes.flex}`}>
    <div className={classes["flex-item"]}>
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.summary && (
        <PrismicRichText field={slice.primary.summary} />
      )}

      <PrismicLink field={slice.primary.articleLink}>Read more</PrismicLink>
    </div>

    <div className={classes["flex-item__img-container"]}>
      <PrismicImage
        image={slice.primary.articleImage}
        className={classes["flex-item__img-container__img"]}
      />
    </div>
  </div>
);

export default Article;
