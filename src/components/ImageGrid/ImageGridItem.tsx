import React, { FC } from "react";

export interface IImageGridItemProps {
  src: string;
  alt: string;
}

export const ImageGridItem: FC<IImageGridItemProps> = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
