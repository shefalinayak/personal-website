import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Layout from "../components/nav-layout"
import { rhythm } from "../utils/typography";

export default () => (
  <Layout>
    <iframe
      src="https://alpha.editor.p5js.org/embed/B1SkH_CHQ"
      frameBorder="0"
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        zindex: "-1"
      }}>
    </iframe>
    <div style={{
        position: "absolute",
        zindex: "2",
        bottom: "15%",
        left: "6.67%",
      }}>
      <h1 style={{fontSize: "10vw"}}>Shefali Nayak</h1>
    </div>
  </Layout>
);
