import React from "react";
import { Hero } from "./Hero";
import heroImg from "../../assets/images/mollyhero.jpg";

export default { title: "Hero" };

export const basicHero = () => (
  <Hero
    title="Chasing tails and adventures"
    description="Two pooches showing two hoomans the ropes in the big wide world."
    background={{ src: heroImg }}
  />
);
