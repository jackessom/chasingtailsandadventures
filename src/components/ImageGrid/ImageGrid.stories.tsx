import React from "react";
import { ImageGrid } from "./ImageGrid";
import { ImageGridItem } from "./ImageGridItem";

export default {
  title: "ImageGrid",
  decorators: [
    (storyFn: () => JSX.Element) => (
      <div style={{ padding: "20px" }}>{storyFn()}</div>
    ),
  ],
};

export const basicImageGrid = () => (
  <ImageGrid>
    {Array.from({ length: 9 }, (_, index) => (
      <ImageGridItem key={index} src="https://via.placeholder.com/500" alt="" />
    ))}
  </ImageGrid>
);
