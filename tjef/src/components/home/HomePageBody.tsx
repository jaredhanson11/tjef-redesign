/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import React from "react"
import {box1, box2} from "../../data/home"
import HomePageBox from "./HomePageBox"

type HomePageBodyProps = {}

export default function HomePageBody(props: HomePageBodyProps) {
  let containerCss = css({
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundImage: "url(/img/okke-homepage.png)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    zIndex: -1,
    backgroundSize: "contain",
    filter: "grayscale(100%)",
  })
  let boxContainerCss = css({
    maxWidth: 1500,
    maxHeight: 1000,
    margin: "auto",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
  })
  let box1Css = css({
    marginTop: "auto",
    marginBottom: 70,
    marginLeft: "auto",
    marginRight: "auto",
  })
  let box2Css = css({
    marginTop: "auto",
    marginBottom: 200,
    marginLeft: "auto",
    marginRight: "auto",
  })
  return (
    <React.Fragment>
      <div css={boxContainerCss}>
        <div css={box1Css}>
          <HomePageBox {...box1} />
        </div>
        <div css={box2Css}>
          <HomePageBox {...box2} />
        </div>
      </div>
      <div css={containerCss}></div>
    </React.Fragment>
  )
}
