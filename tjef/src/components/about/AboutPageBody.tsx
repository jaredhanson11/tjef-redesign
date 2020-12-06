/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {aboutUs} from "../../data/about"
import defaultStyles from "../../styles"
import AboutSection from "./AboutSection"

type AboutPageBodyProps = {}

export default function AboutPageBody(props: AboutPageBodyProps) {
  let containerCss = css(defaultStyles.marginBetweenChilren(30), {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  })
  return (
    <div css={containerCss}>
      {aboutUs.map((props) => (
        <AboutSection {...props} />
      ))}
    </div>
  )
}
