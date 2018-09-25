import React from "react";
import Layout from "../components/nav-layout";
import githubLogo from "../media/github.png";
import instagramLogo from "../media/instagram.png";

var username = "nayakshefali";
var hostname = "gmail";

export default ({ data }) =>
  <Layout>
    <div style={{maxWidth: "900px"}}>
      <h1>
        Hey this is Shefali
      </h1>
      <p>
        I'm a creative coder, and more generally a maker of things combining arts and tech. I love working on projects that deal with education or storytelling (or both!). Most of my recent tech tinkering has been at the <a href="https://cst.princeton.edu/studiolab">StudioLab</a> at Princeton University.
      </p>
      <p>
        I designed and coded this website myself. If you want to look at the source code, you can find it in the <a href="https://github.com/shefalinayak/personal-website">github repo</a>.
      </p>
      <p>
        In my downtime I make things with paper and ink, which you can find on my <a href="https://www.instagram.com/shefferstroke/">instagram</a>.
      </p>
      <p>
        The best way to reach me is via email, at <a href={"mailto:" + username + "@" + hostname + ".com"}>{username + "@" + hostname + ".com"}</a>.
      </p>
      <a href="https://github.com/shefalinayak/">
        <img src={githubLogo} alt="github" height="50px"
          style={{margin: "0px 15px 0px 0px"}}/>
      </a>
      <a href="https://www.instagram.com/shefferstroke/">
        <img src={instagramLogo} alt="instagram" height="50px"
          style={{margin: "0px 0px 0px 15px"}}/>
      </a>
    </div>
  </Layout>
