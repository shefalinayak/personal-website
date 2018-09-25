import React from "react";
import g from "glamorous";
import { Link, graphql } from "gatsby";
import Layout from "../components/nav-layout"
import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <Link
          to="/blog/"
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H4 display={"inline-block"}>
            when things are mad
          </g.H4>
        </Link>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={{ textDecoration: `none`, color: `inherit` }}
              >
              <g.H3 marginBottom={rhythm(1 / 4)}>
                {node.frontmatter.title}{" "}
                <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
              </g.H3>
              <p>
                {node.frontmatter.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
query BlogIndexQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {
      fileAbsolutePath: {regex: "/(blog)/.*.md$/"},
      frontmatter: {publish: {eq: true}}
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 150)
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;
