import React from "react";
import g from "glamorous";
import { Link, graphql } from "gatsby";
import Layout from "../components/nav-layout";
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
              imgfluid={node.frontmatter.featuredImage.childImageSharp.fluid}
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
      fileAbsolutePath: {regex: "/(projects)/.*.md$/"},
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
              fluid( maxWidth: 600 ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`;
