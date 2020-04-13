import React, { FC } from "react";
import { EFonts, EColors, EMediaQueries } from "../../constants/theme";

export enum EHeadingType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

interface IHeadingProps {
  type: EHeadingType;
}

export const Heading: FC<IHeadingProps> = ({ type, children }) => {
  const HeadingType = type;

  return (
    <>
      <HeadingType className="headingStyle">{children}</HeadingType>
      <style jsx>{`
        .headingStyle {
          font-family: ${EFonts.PRIMARY};
          color: ${EColors.DARK};
          font-size: 2rem;
          margin: 0;
          line-height: 1;
        }

        @media (${EMediaQueries.SMALL}) {
          .headingStyle {
            font-size: 3rem;
          }
        }

        @media (${EMediaQueries.MEDIUM}) {
          .headingStyle {
            font-size: 4rem;
          }
        }

        @media (${EMediaQueries.XL}) {
          .headingStyle {
            font-size: 5rem;
          }
        }
      `}</style>
    </>
  );
};
