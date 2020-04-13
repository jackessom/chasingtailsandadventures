import React from "react";
import { Heading, EHeadingType } from "./Heading";

export default {
  title: "Heading",
  decorators: [
    (storyFn: () => JSX.Element) => (
      <div style={{ padding: "20px" }}>{storyFn()}</div>
    ),
  ],
};

export const basicHeading = () => (
  <Heading type={EHeadingType.H1}>Heading text goes here!</Heading>
);
