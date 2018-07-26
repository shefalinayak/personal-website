import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Layout from "../components/layout"
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
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={{ textDecoration: `none`, color: `inherit` }}
              >
              <g.H3 marginBottom={rhythm(1 / 4)}>
                {node.frontmatter.title}{" "}
                <g.Span color="#BBB">— {node.frontmatter.when}</g.Span>
              </g.H3>
              <p>
                {node.frontmatter.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { publish: {eq: true} } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            when
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
