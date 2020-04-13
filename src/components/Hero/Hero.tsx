import React, { FC } from "react";
import { Heading, EHeadingType } from "../Heading";
import { Paragraph } from "../Paragraph";
import css from "styled-jsx/css";
import { EMediaQueries, EColorsRGB } from "../../constants/theme";

interface IHeroProps {
  title: string;
  description: string;
  background: { src: string };
}

const { className: paragraphClassName, styles: paragraphStyles } = css.resolve`
  p {
    font-size: 0.8em;
    font-style: italic;
  }

  @media (${EMediaQueries.SMALL}) {
    p {
      font-size: 1em;
      text-align: right;
    }
  }
`;

export const Hero: FC<IHeroProps> = ({ title, description, background }) => {
  return (
    <section className="container">
      <div>
        <Heading type={EHeadingType.H1}>{title}</Heading>
        <Paragraph className={paragraphClassName}>{description}</Paragraph>
      </div>
      <img src={background.src} role="presentation" />
      <style jsx>{`
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: rgba(${EColorsRGB.LIGHT}, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          padding: 20px;
          box-sizing: border-box;
        }

        .container::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          z-index: -1;
          background-image: radial-gradient(
            rgba(${EColorsRGB.LIGHT}, 0.7) 33%,
            transparent 33%
          );
          background-size: 2px 2px;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: 20% 50%;
          width: inherit;
          height: inherit;
          z-index: -2;
        }
      `}</style>
      {paragraphStyles}
    </section>
  );
};
