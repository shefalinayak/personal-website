import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Link
          to="/blog/"
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H4 display={"inline-block"} borderBottom={"1px solid"}>
            When Things Are Mad
          </g.H4>
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
