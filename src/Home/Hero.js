import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import InteractiveMobile from "../Components/InteractiveMobile";
import InteractiveDesktop from "../Components/InteractiveDesktop";
import { IoIosArrowDown } from "react-icons/io";

function LazyBackground({ src }) {
  const [source, setSource] = useState("preload.jpg");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return (
    <div
      alt="GRIT logo"
      className="hero__background"
      style={{ backgroundImage: `url(${source})` }}
    ></div>
  );
}

const Hero = () => {
  return (
    <>
      <LazyBackground src={"../images/grit-hero.jpg"} />

      <FadeIn>
        <section className="hero">
          <div className="container hero__wrap">
            <div className="hero__content">
              <div className="hero__image">
                <img alt="GRIT logo" src="../images/grit-logo-white.png" />
              </div>
              <InteractiveMobile />
              <InteractiveDesktop />
            </div>
          </div>
          <div className="scroll-icon">
            <div className="button_block">
              <button className="button">
                FIND <span>a better</span> YOU
              </button>
              <IoIosArrowDown size={60} color="#fff" />
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Hero;
