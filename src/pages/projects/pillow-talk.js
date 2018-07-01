import React from "react";
import Layout from "../../components/layout"

exports.frontmatter = {
    title: 'A storytelling system',
    description: 'Using pillows to enchance the group storytelling experience'
}

export default ({ data }) =>
  <Layout>
    <div>
      <h1>
        A storytelling system
      </h1>
      <p>
        The project
      </p>
    </div>
  </Layout>
