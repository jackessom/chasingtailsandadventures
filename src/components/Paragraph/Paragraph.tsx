import React, { FC } from "react";
import { EFonts, EColors } from "../../constants/theme";

interface IParagraphProps {
  className?: string;
}

export const Paragraph: FC<IParagraphProps> = ({
  children,
  className = "",
}) => {
  return (
    <>
      <p className={className}>{children}</p>
      <style jsx>{`
        p {
          font-family: ${EFonts.SECONDARY};
          color: ${EColors.DARK};
          margin: 0.5em 0;
          line-height: 1;
        }
      `}</style>
    </>
  );
};
