import React from "react";

export default ({ children }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(250px, 1fr) )",
    gridGap: "2px",
  }}>
  {children}
  </div>
);
