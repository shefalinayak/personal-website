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
          to="/blog/"
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
            Projects
          </g.H1>
        </Link>
        <h4>{data.allJavascriptFrontmatter.totalCount} Projects</h4>
        {data.allJavascriptFrontmatter.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.node.name}
              css={{ textDecoration: `none`, color: `inherit` }}
              >
              <g.H3 marginBottom={rhythm(1 / 4)}>
                {node.frontmatter.title}{" "}
                <g.Span color="#BBB">— {node.node.mtime}</g.Span>
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
  query ProjQuery {
    allJavascriptFrontmatter {
      totalCount
      edges {
        node {
          node {
            name
            mtime(formatString: "DD MMMM, YYYY")
          }
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
