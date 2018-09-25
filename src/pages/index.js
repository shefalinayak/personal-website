import React from "react";
import Layout from "../components/nav-layout"

export default () => (
  <Layout>
    <iframe
      title="pentominoes"
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
        left: "6%",
      }}>
      <h1 style={{fontSize: "10vw", color: "rgba(0,0,0,0.7)"}}>Shefali Nayak</h1>
    </div>
  </Layout>
);
