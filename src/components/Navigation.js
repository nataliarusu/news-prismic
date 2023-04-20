import React from "react";
import Link from "next/link";
import { PrismicLink, PrismicText } from "@prismicio/react";
import classes from "./Navigation.module.css";

export function Navigation({ navigation }) {
  // console.log(navigation.data.slices[1].primary.link, " link");

  return (
    <nav>
      <ul className={classes["nav-list"]}>
        {navigation.data.slices.map((slice) => {
          const isHome = slice.primary.link.uid === "home";
          const linkTo = isHome ? "/" : slice.primary.link.url;
          // console.log(slice, " slice");
          return (
            <li key={slice.id}>
              <Link href={linkTo}>
                <PrismicText field={slice.primary.name} />
              </Link>
              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicLink field={item.child_link}>
                          <PrismicText field={item.child_name} />
                        </PrismicLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export function NavigationX({ navigation }) {
  return (
    <nav>
      <ul>
        {navigation.data.slices.map((slice) => {
          console.log(slice, " slice");
          const isHome = slice.primary.link.uid === "home";
          const linkTo = isHome ? "/" : slice.primary.link.url;

          return (
            <li key={slice.id}>
              <Link to={linkTo}>
                <PrismicText field={slice.primary.name} />
              </Link>

              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <Link to={item.child_link.url}>
                          <PrismicText field={item.child_name} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
