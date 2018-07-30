import React from "react";

export default ({ children }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridGap: "20px",
  }}>
  {children}
  </div>
);
