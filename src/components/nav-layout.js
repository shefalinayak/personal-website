import React from "react";
import Link from "gatsby-link";
import styles from "./nav-layout.module.css";

var colors = [
  "#a5c4d4",
  "#99b4c7",
  "#8499b1",
  "#828da7",
  "#7d7997",
  "#7b6d8d",
  "#6f5c7d",
  "#624c6e",
  "#593f62"
];

const Navigation = props =>
  <div style={{
      height: "100%",
      position: "fixed",
      top: "0px",
      right: "0px"}}
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 1080" height="100%" width="100%">
      <title>sidebar navigation</title>
      <g>
        <polygon id="pent-c"
          points="191 179 223 176 214 75 214 75 214 75 280 69 315 66 315 66 315 66 324 167 360 164 360 0 105 0 122 185 191 179"
          style={{fill: colors[0], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-x"
          points="315 66 315 66 280 69 214 75 214 75 223 176 223 176 191 179 122 185 131 286 232 277 241 378 342 369 333 268 360 266 360 164 324 167 315 66"
          style={{fill: colors[1], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-i"
          points="48 498 48 498 149 489 135 327 122 185 105 0 4 0 48 498 48 498"
          style={{fill: colors[2], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-f"
          points="250 479 351 470 342 369 241 378 232 277 131 286 135 327 149 489 48 498 48 498 57 599 259 581 250 479"
          style={{fill: colors[3], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-y"
          points="351 470 250 479 259 581 259 581 360 572 360 266 333 268 351 470"
          style={{fill: colors[4], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-t"
          points="259 581 57 599 66 700 167 691 185 893 286 884 268 682 360 673 360 572 259 581 259 581"
          style={{fill: colors[5], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-p"
          points="286 884 360 877 360 673 268 682 286 884"
          style={{fill: colors[6], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-l"
          points="194 994 185 893 167 691 66 700 100 1080 304 1080 295 985 194 994"
          style={{fill: colors[7], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
        <polygon id="pent-z"
          points="185 893 194 994 295 985 304 1080 360 1080 360 877 286 884 185 893"
          style={{fill: colors[8], stroke: "#fff", strokeMiterLimit: "10", strokeWidth: "2px"}}/>
      </g>
      <text transform="translate(29 186) rotate(-5)" style={{
          fontSize: "60px",
          fill: "#312336",
          fontFamily: "Lato-Bold, Lato",
          fontWeight: "700"}}
          >
          <Link to="/">
            <tspan>HOME</tspan>
          </Link>
          <Link to="/projects/">
            <tspan x="0" y="101">PROJECTS</tspan>
          </Link>
          <Link to="/about/">
            <tspan x="0" y="202">ABOUT</tspan>
          </Link>
          <Link to="/blog/">
            <tspan x="0" y="303">BLOG</tspan>
          </Link>
      </text>
    </svg>
  </div>


export default ({ children }) =>
  <div style={{
    display: "grid",
    gridTemplateColumns: "6.6667vh 1fr 40vh",
    gridTemplateRows: "6.6667vh minmax(300px,1fr) 6.6667vh",
    height: "100vh",
    background: "white",
  }}>
    <div className={styles.content} style={{
      gridColumn: "2 / 3",
      gridRow: "2 / 3",
      background: "white",
    }}>
      { children }
    </div>
    <Navigation />
</div>
