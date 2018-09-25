import React from "react";
import g from "glamorous";
import { Link, graphql } from "gatsby";
import Layout from "../components/nav-layout"

export default ({ data }) => {
  const post = data.markdownRemark;
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
        <h2>{post.frontmatter.title}</h2>
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
