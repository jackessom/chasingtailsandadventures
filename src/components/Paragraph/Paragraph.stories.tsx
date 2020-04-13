import React from "react";
import { Paragraph } from "./Paragraph";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export default {
  title: "Paragraph",
  decorators: [
    (storyFn: () => JSX.Element) => (
      <div style={{ padding: "20px" }}>{storyFn()}</div>
    ),
  ],
};

export const basicParagraph = () => (
  <Paragraph>{lorem.generateParagraphs(1)}</Paragraph>
);
