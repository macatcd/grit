import React from "react";
import { Link } from "react-router-dom";
import VideoTile from "../Components/VideoTile";
import VideoData from "../VideoData";

const Insights = () => {
  return (
    <section className="insights" id="insights">
      <div className="container insights__wrap">
        <div className="insights__header">
          <div className="insights__logo_wrap">
            <div className="insights__logo">
              <img alt="Insights Logo" src="../images/insights-logo.png" />
              <div>
                <span>The Series</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="insights__subheader">
            <div className="section__title">RESOURCES TO INSPIRE</div>
          </div> */}
          <div className="section__header">Become better equiped.</div>
          <div className="section__copy">
            <p>
              A series of inspirational short films capturing personal lessons
              and learnings from success, failure and adversity, experienced by
              individuals. How they became better equipped to objectively review
              the way they think, they do, they live.
            </p>
          </div>
        </div>
        <div className="resources">
          {VideoData.map((d) => (
            <Link
              key={d.url}
              to={{
                pathname: `/insights/${d.url}`,
                state: d,
              }}
            >
              <VideoTile name={d.name} title={d.title} image={d.image} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
