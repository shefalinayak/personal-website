import React from "react";
import Layout from "../../components/layout"

exports.frontmatter = {
    title: 'Shifting gradient',
    description: 'Gently changing gradient background in HTML5'
}

export default ({ data }) =>
  <Layout>
    <div>
      <h1>
        Shifting gradient
      </h1>
      <p>
        The project
      </p>
    </div>
  </Layout>
