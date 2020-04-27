import React, { Children, FC } from "react";
import { ESpacing } from "../../constants/theme";
import { IImageGridItemProps } from "./ImageGridItem";

interface IImageGridProps {
  children: React.ReactElement<IImageGridItemProps>[];
}

export const ImageGrid: FC<IImageGridProps> = ({ children }) => {
  return (
    <div className="root">
      {Children.map(children, (child, index) => (
        <div className={`gridChild gridChild-${index}`}>{child}</div>
      ))}
      <style jsx>{`
        .root {
          display: grid;
          grid-gap: ${ESpacing.NORMAL};
          grid-template: repeat(6, minmax(0, 1fr)) / repeat(6, minmax(0, 1fr));
          grid-auto-flow: row;
        }

        .root::before {
          content: "";
          padding-bottom: 100%;
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        .gridChild {
          grid-area: span 2 / span 2;
        }

        .gridChild-0 {
          grid-column: 1 / 5;
          grid-row: 1 / 3;
        }

        .gridChild-1 {
          grid-column: 5 / 7;
          grid-row: 1 / 5;
        }

        .gridChild-2 {
          grid-column: 1 / 3;
          grid-row: 3 / 4;
        }

        .gridChild-3 {
          grid-column: 1 / 3;
          grid-row: 4 / 5;
        }

        .gridChild-7 {
          grid-column: 5 / 6;
          grid-row: 5 / 7;
        }

        .gridChild-8 {
          grid-column: 6 / 7;
          grid-row: 5 / 7;
        }
      `}</style>
    </div>
  );
};
