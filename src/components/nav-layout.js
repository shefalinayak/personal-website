import React from "react";
import { Link } from "gatsby";
import Media from "react-media";
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

var strokeColor = "#fff";
var strokeMiter = "10";
var strokeWidth = "2px";

const NavigationTop = props =>
<div className={styles.navTop}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 360"
    height="100%" width="100%"
    >
    <g>
      <polygon id="pent-c"
        points="901 169 904 137 1005 146 1005 146 1005 146 1011 81 1014 45 1014 45 1014 45 913 36 916 0 1080 0 1080 255 895 238 901 169"
        style={{fill: colors[0], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-x"
        points="1014 45 1014 45 1011 81 1005 146 1005 146 904 137 904 137 901 169 895 238 794 229 803 128 702 119 711 18 812 27 814 0 916 0 913 36 1014 45"
        style={{fill: colors[1], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-i"
        points="582 312 582 312 591 211 753 225 895 238 1080 255 1080 356 582 312 582 312"
        style={{fill: colors[2], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-f"
        points="601 110 610 9 711 18 702 119 803 128 794 229 753 225 591 211 582 312 582 312 481 303 499 101 601 110"
        style={{fill: colors[3], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-y"
        points="610 9 601 110 499 101 499 101 508 0 814 0 812 27 610 9"
        style={{fill: colors[4], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-t"
        points="499 101 481 303 380 294 389 193 187 175 196 74 398 92 407 0 508 0 499 101 499 101"
        style={{fill: colors[5], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-p"
        points="196 74 203 0 407 0 398 92 196 74"
        style={{fill: colors[6], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-l"
        points="86 166 187 175 389 193 380 294 0 260 0 56 95 65 86 166"
        style={{fill: colors[7], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-w"
        points="187 175 86 166 95 65 0 56 0 0 203 0 196 74 187 175"
        style={{fill: colors[8], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
    </g>
    <text transform="translate(657 315) rotate(-85)" style={{
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

const NavigationSide = props =>
<div className={styles.navSide}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360 1080"
    height="100%" width="100%"
    >
    <g>
      <polygon id="pent-c"
        points="191 179 223 176 214 75 214 75 214 75 280 69 315 66 315 66 315 66 324 167 360 164 360 0 105 0 122 185 191 179"
        style={{fill: colors[0], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-x"
        points="315 66 315 66 280 69 214 75 214 75 223 176 223 176 191 179 122 185 131 286 232 277 241 378 342 369 333 268 360 266 360 164 324 167 315 66"
        style={{fill: colors[1], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-i"
        points="48 498 48 498 149 489 135 327 122 185 105 0 4 0 48 498 48 498"
        style={{fill: colors[2], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-f"
        points="250 479 351 470 342 369 241 378 232 277 131 286 135 327 149 489 48 498 48 498 57 599 259 581 250 479"
        style={{fill: colors[3], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-y"
        points="351 470 250 479 259 581 259 581 360 572 360 266 333 268 351 470"
        style={{fill: colors[4], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-t"
        points="259 581 57 599 66 700 167 691 185 893 286 884 268 682 360 673 360 572 259 581 259 581"
        style={{fill: colors[5], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-p"
        points="286 884 360 877 360 673 268 682 286 884"
        style={{fill: colors[6], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-l"
        points="194 994 185 893 167 691 66 700 100 1080 304 1080 295 985 194 994"
        style={{fill: colors[7], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
      <polygon id="pent-w"
        points="185 893 194 994 295 985 304 1080 360 1080 360 877 286 884 185 893"
        style={{fill: colors[8], stroke: strokeColor, strokeMiterLimit: strokeMiter, strokeWidth: strokeWidth}}/>
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
<Media query="(min-width: 750px)">
  {matches =>
    matches ? (
      <div className={styles.mainSide}>
        <div className={styles.content} style={{
            gridColumn: "2 / 3",
            gridRow: "2 / 3"
          }}>
          { children }
        </div>
        <NavigationSide />
      </div>
    ) : (
      <div className={styles.mainTop}>
        <div className={styles.content} style={{
            gridColumn: "2 / 3",
            gridRow: "2 / 3",
          }}>
          { children }
        </div>
        <NavigationTop />
      </div>
    )
  }
</Media>
