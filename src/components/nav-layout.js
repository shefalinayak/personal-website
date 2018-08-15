import React from "react";
import styles from "../components/nav-layout.js"

console.log(styles);

const Pentomino = props =>
  <a href={props.url} style={{outline: "none"}}>
    <polygon id={props.id} points={props.points} fill={props.fill}/>
  </a>

const Navigation = props =>
<div style={{
  gridColumn: "2 / 3",
  gridRow: "1 / 3"
}}>
  <svg xmlns="http://www.w3.org/20/svg" viewBox="0 0 5 12">
    <Pentomino
      fill="#d9e021"
      id="pent-i"
      points="0 0 0 1 5 1 5 0 0 0"
      url=""
      tx="0"
      ty="0"
      text="i"
    />
    <Pentomino
      fill="#8cc63f"
      id="pent-v"
      points="0 1 0 4 1 4 1 2 3 2 3 1 0 1"
      url=""
      tx="0"
      ty="1"
      text="v"
    />
    <Pentomino
      fill="#39b54a"
      id="pent-t"
      points="1 2 1 3 3 3 3 4 4 4 4 1 3 1 3 2 1 2"
      url=""
      tx="1"
      ty="2"
      text="t"
    />
    <Pentomino
      fill="#009245"
      id="pent-l"
      points="4 1 4 4 3 4 3 5 5 5 5 1 4 1"
      url=""
      tx="4"
      ty="1"
      text="l"
    />
    <Pentomino
      fill="#d9e021"
      id="pent-w"
      points="3 3 1 3 1 4 0 4 0 6 1 6 1 5 2 5 2 4 3 4 3 3"
      url=""
      tx="3"
      ty="3"
      text="w"
    />
    <Pentomino
      fill="#8cc63f"
      id="pent-x"
      points="2 4 2 5 1 5 1 6 2 6 2 7 3 7 3 6 4 6 4 5 3 5 3 4 2 4"
      url=""
      tx="2"
      ty="4"
      text="x"
    />
    <Pentomino
      fill="#39b54a"
      id="pent-s"
      points="0 6 0 9 1 9 1 10 2 10 2 8 1 8 1 6 0 6"
      url=""
      tx="0"
      ty="6"
      text="s"
    />
    <Pentomino
      fill="#009245"
      id="pent-z"
      points="1 6 1 8 3 8 3 9 4 9 4 7 2 7 2 6 1 6"
      url=""
      tx="1"
      ty="6"
      text="z"
    />
    <Pentomino
      fill="#d9e021"
      id="pent-u"
      points="2 10 2 12 5 12 5 10 4 10 4 11 3 11 3 10 2 10"
      url=""
      tx="2"
      ty="10"
      text="u"
    />
    <Pentomino
      fill="#8cc63f"
      id="pent-f"
      points="2 8 2 10 3 10 3 11 4 11 4 10 5 10 5 9 3 9 3 8 2 8"
      url=""
      tx="2"
      ty="8"
      text="f"
    />
    <Pentomino
      fill="#39b54a"
      id="pent-y"
      points="4 5 4 6 3 6 3 7 4 7 4 9 5 9 5 5 4 5"
      url="lamar"
      tx="4"
      ty="5"
      text="y"
    />
    <Pentomino
      fill="#009245"
      id="pent-p"
      points="0 9 0 12 2 12 2 10 1 10 1 9 0 9"
      url=""
      tx="0"
      ty="9"
      text="p"
    />
 </svg>
</div>


export default ({ children }) =>
  <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 41.67vh",
    gridTemplateRows: "1fr 30px",
    height: "100%",
    width: "100%",
    overflow: "hidden"
  }}>
    <div style={{
      gridColumn: "1 / 2",
      gridRow: "1 / 3",
      background: "whitesmoke",
      overflow: "scroll"
    }}>
      { children }
    </div>
    <Navigation />
</div>
