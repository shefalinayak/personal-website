import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Layout from "../components/nav-layout";
import Container from "../components/container";
import Img from 'gatsby-image'
import { rhythm } from "../utils/typography";

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
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} style={{position: "relative"}}>
              <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
                >
                <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                <div style={{
                    backgroundColor: "rgba(255,255,255,0.75)",
                    position: "absolute",
                    padding: "20px",
                    width: "100%",
                    top: "0px",
                    left: "0px",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}>
                  <g.H3 marginBottom={rhythm(1 / 64)}>
                    {node.frontmatter.title}
                  </g.H3>
                  <g.P marginBottom={rhythm(1 / 16)}>
                    {node.frontmatter.when}
                  </g.P>
                </div>
              </Link>
            </div>
          ))}
        </Container>
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
