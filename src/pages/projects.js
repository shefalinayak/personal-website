import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Layout from "../components/nav-layout";
import Img from 'gatsby-image';
import { rhythm } from "../utils/typography";
import ProjectBox from "../components/project-box";
import styles from "./projects.module.css";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <Link
          to="/projects/"
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H1 display={"inline-block"}>
            Projects
          </g.H1>
        </Link>
        <div className={styles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectBox
              nodeid={node.id}
              pagelink={node.fields.slug}
              imgsizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              title={node.frontmatter.title}
              when={node.frontmatter.when}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query ProjectIndexQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {
      fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"},
      frontmatter: {publish: {eq: true}}
    }
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          when
          description
          featuredImage {
            childImageSharp {
              sizes( maxWidth: 600 ) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
}
`;
