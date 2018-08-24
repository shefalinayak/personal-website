import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Img from 'gatsby-image';
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
    </Link>
  </div>
);


// <div key={node.id} style={{position: "relative"}}>
//   <Link
//     to={node.fields.slug}
//     css={{ textDecoration: `none`, color: `inherit` }}
//     >
//     <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
//     <div style={{
//         backgroundColor: "rgba(255,255,255,0.75)",
//         position: "absolute",
//         padding: "20px",
//         width: "100%",
//         top: "0px",
//         left: "0px",
//         overflow: "hidden",
//         textOverflow: "ellipsis"
//       }}>
//       <g.H3 marginBottom={rhythm(1 / 64)}>
//         {node.frontmatter.title}
//       </g.H3>
//       <g.P marginBottom={rhythm(1 / 16)}>
//         {node.frontmatter.when}
//       </g.P>
//     </div>
//   </Link>
// </div>
