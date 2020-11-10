import React from "react";
import { PrimaryButton } from "../Components/Buttons";

const WhyGrit = () => {
  return (
    <section className="why-grit white_bg" id="why-grit">
      <div className="container col_wrap why-grit__wrap">
        <div className="why-grit__sidebar">
          <div className="why-grit__graph">
            <img alt="Success Chart" src="images/success-chart.png" />
            <p>The success chart reality</p>
          </div>
          <PrimaryButton />
        </div>
        <div>
          <div className="section__title">Why GRIT?</div>
          <div className="section__header">
            Strengthening the mental fortitude of our extraordinary young
            people.
          </div>
          <div className="section__copy">
            <p>
              Do we really understand the challenges some of our extraordinary
              young individuals are put under today? Sure, we get the
              ‘performing under pressure’ deal, but the fish-bowl they live in
              now doesn’t always offer the ‘time-out’ factor that is crucial in
              their development. Life can appear to be continually under
              scrutiny. There is nothing worse than feeling alone in a crowded
              room. A very dangerous, and easy mindset to fall into.
            </p>
            <p>
              At Inspire Foundation we know the wellbeing of our youth is
              paramount for them to realise their potential. We want them to
              become adversity champions. Accept that anything worth doing
              typically doesn’t come easy, and no-one is immune to the
              challenges that life can throw at us. But with a little inspired
              GRIT we can prepare our grantees to become inspired, not expired.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGrit;