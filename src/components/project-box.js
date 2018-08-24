import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Img from 'gatsby-image';
import Media from 'react-media';
import { rhythm } from "../utils/typography";
import styles from "./project-box.module.css";

export default ( props ) => (
  <div key={props.nodeid} style={{position: "relative"}}>
    <Link
      to={props.pagelink}
      css={{ textDecoration: `none`, color: `white` }}
      >
      <div className={styles.image}>
        <Img sizes={props.imgsizes} />
      </div>
      <Media query="(hover: none)">
        {matches =>
          matches ? (
            <div className={styles.labelNoHover}>
              <div>
                <g.H3 marginBottom={rhythm(1 / 64)} style={{color: "white"}}>
                  {props.title}
                </g.H3>
                <g.P marginBottom={rhythm(1 / 16)} style={{color: "white"}}>
                  {props.when}
                </g.P>
              </div>
            </div>
          ) : (
            <div className={styles.label}>
              <div>
                <g.H3 marginBottom={rhythm(1 / 64)} style={{color: "white"}}>
                  {props.title}
                </g.H3>
                <g.P marginBottom={rhythm(1 / 16)} style={{color: "white"}}>
                  {props.when}
                </g.P>
              </div>
            </div>
          )
        }
      </Media>
    </Link>
  </div>
);
