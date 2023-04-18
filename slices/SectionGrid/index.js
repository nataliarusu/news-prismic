import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SectionGridSlice} SectionGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionGridSlice>} SectionGridProps
 * @param { SectionGridProps }
 */
const SectionGrid = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
     {/* <div className="imgage-container">
        <Image
          className="image-container__image"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
        />
      </div> */}
  </section>
)

export default SectionGrid