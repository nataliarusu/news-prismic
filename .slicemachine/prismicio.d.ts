// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Name field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = BodySlice | CardSlice | FullWidthSlice | SectionGridSlice | TopGridSlice | ArticleSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument;
/**
 * Primary content in Article → Primary
 *
 */
interface ArticleSliceDefaultPrimary {
    /**
     * Title field in *Article → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: article.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Summary field in *Article → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.primary.summary
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
    /**
     * Article Image field in *Article → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.primary.articleImage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    articleImage: prismicT.ImageField<never>;
    /**
     * Article Link field in *Article → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: article.primary.articleLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    articleLink: prismicT.LinkField;
}
/**
 * Default variation for Article Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Article`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticleSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Article*
 *
 */
type ArticleSliceVariation = ArticleSliceDefault;
/**
 * Article Shared Slice
 *
 * - **API ID**: `article`
 * - **Description**: `Article`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleSlice = prismicT.SharedSlice<"article", ArticleSliceVariation>;
/**
 * Primary content in Body → Primary
 *
 */
interface BodySliceDefaultPrimary {
    /**
     * Body field in *Body → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: body.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for Body Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Body`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BodySliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BodySliceDefaultPrimary>, never>;
/**
 * Slice variation for *Body*
 *
 */
type BodySliceVariation = BodySliceDefault;
/**
 * Body Shared Slice
 *
 * - **API ID**: `body`
 * - **Description**: `Body`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BodySlice = prismicT.SharedSlice<"body", BodySliceVariation>;
/**
 * Primary content in Card → Primary
 *
 */
interface CardSliceDefaultPrimary {
    /**
     * Title field in *Card → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: card.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Body field in *Card → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: card.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Item in Card → Items
 *
 */
export interface CardSliceDefaultItem {
    /**
     * Button Text field in *Card → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: card.items[].buttonText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
    /**
     * Button Link field in *Card → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: card.items[].buttonLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonLink: prismicT.KeyTextField;
}
/**
 * Default variation for Card Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Card`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CardSliceDefaultPrimary>, Simplify<CardSliceDefaultItem>>;
/**
 * Slice variation for *Card*
 *
 */
type CardSliceVariation = CardSliceDefault;
/**
 * Card Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: `Card`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardSlice = prismicT.SharedSlice<"card", CardSliceVariation>;
/**
 * Primary content in FullWidth → Primary
 *
 */
interface FullWidthSliceDefaultPrimary {
    /**
     * Title field in *FullWidth → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: full_width.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Title Link field in *FullWidth → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: full_width.primary.titleLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    titleLink: prismicT.LinkField;
    /**
     * Image field in *FullWidth → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: full_width.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Summary field in *FullWidth → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: full_width.primary.summary
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
    /**
     * Category Title field in *FullWidth → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: full_width.primary.category_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    category_title: prismicT.RichTextField;
    /**
     * Category Link field in *FullWidth → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: full_width.primary.category_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category_link: prismicT.LinkField;
}
/**
 * Default variation for FullWidth Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FullWidth`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FullWidthSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FullWidthSliceDefaultPrimary>, never>;
/**
 * Slice variation for *FullWidth*
 *
 */
type FullWidthSliceVariation = FullWidthSliceDefault;
/**
 * FullWidth Shared Slice
 *
 * - **API ID**: `full_width`
 * - **Description**: `FullWidth`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FullWidthSlice = prismicT.SharedSlice<"full_width", FullWidthSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
    /**
     * Child Name field in *NavigationItem → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    child_name: prismicT.RichTextField;
    /**
     * Child link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    child_link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, Simplify<NavigationItemSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
/**
 * Primary content in SectionGrid → Primary
 *
 */
interface SectionGridSliceDefaultPrimary {
    /**
     * Title field in *SectionGrid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: section_grid.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Title Link field in *SectionGrid → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.primary.titleLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    titleLink: prismicT.LinkField;
    /**
     * Summary field in *SectionGrid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.primary.summary
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
}
/**
 * Item in SectionGrid → Items
 *
 */
export interface SectionGridSliceDefaultItem {
    /**
     * Block Title field in *SectionGrid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.items[].blockTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    blockTitle: prismicT.RichTextField;
    /**
     * Block Image field in *SectionGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.items[].blockImage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    blockImage: prismicT.ImageField<never>;
    /**
     * Block Category Title field in *SectionGrid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.items[].blockCategoryTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    blockCategoryTitle: prismicT.RichTextField;
    /**
     * Block Category Link field in *SectionGrid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: section_grid.items[].blockCategoryLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    blockCategoryLink: prismicT.LinkField;
}
/**
 * Default variation for SectionGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SectionGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SectionGridSliceDefaultPrimary>, Simplify<SectionGridSliceDefaultItem>>;
/**
 * Slice variation for *SectionGrid*
 *
 */
type SectionGridSliceVariation = SectionGridSliceDefault;
/**
 * SectionGrid Shared Slice
 *
 * - **API ID**: `section_grid`
 * - **Description**: `SectionGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionGridSlice = prismicT.SharedSlice<"section_grid", SectionGridSliceVariation>;
/**
 * Primary content in TopGrid → Primary
 *
 */
interface TopGridSliceDefaultPrimary {
    /**
     * Title field in *TopGrid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Category Title field in *TopGrid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.primary.categoryTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    categoryTitle: prismicT.RichTextField;
    /**
     * Category Link field in *TopGrid → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.primary.categoryLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    categoryLink: prismicT.LinkField;
}
/**
 * Item in TopGrid → Items
 *
 */
export interface TopGridSliceDefaultItem {
    /**
     * Block Title field in *TopGrid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.items[].blockTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    blockTitle: prismicT.RichTextField;
    /**
     * Block Link field in *TopGrid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.items[].blockLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    blockLink: prismicT.LinkField;
    /**
     * Block Image field in *TopGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.items[].blockImage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    blockImage: prismicT.ImageField<never>;
    /**
     * Block Category Title field in *TopGrid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.items[].blockCategoryTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    blockCategoryTitle: prismicT.RichTextField;
    /**
     * Block Category Link field in *TopGrid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: top_grid.items[].blockCategoryLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    blockCategoryLink: prismicT.LinkField;
}
/**
 * Default variation for TopGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TopGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TopGridSliceDefaultPrimary>, Simplify<TopGridSliceDefaultItem>>;
/**
 * Slice variation for *TopGrid*
 *
 */
type TopGridSliceVariation = TopGridSliceDefault;
/**
 * TopGrid Shared Slice
 *
 * - **API ID**: `top_grid`
 * - **Description**: `TopGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopGridSlice = prismicT.SharedSlice<"top_grid", TopGridSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, ArticleSliceDefaultPrimary, ArticleSliceDefault, ArticleSliceVariation, ArticleSlice, BodySliceDefaultPrimary, BodySliceDefault, BodySliceVariation, BodySlice, CardSliceDefaultPrimary, CardSliceDefaultItem, CardSliceDefault, CardSliceVariation, CardSlice, FullWidthSliceDefaultPrimary, FullWidthSliceDefault, FullWidthSliceVariation, FullWidthSlice, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefaultItem, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice, SectionGridSliceDefaultPrimary, SectionGridSliceDefaultItem, SectionGridSliceDefault, SectionGridSliceVariation, SectionGridSlice, TopGridSliceDefaultPrimary, TopGridSliceDefaultItem, TopGridSliceDefault, TopGridSliceVariation, TopGridSlice };
    }
}