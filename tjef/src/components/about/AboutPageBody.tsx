/** @jsx jsx */
import {css, jsx} from "@emotion/core"
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
      <AboutSection
        title={"The Value of Mentoring"}
        body={
          "For TJEF, our real wealth is our College of Mentors, a group of individuals who have the care and enthusiasmt to pass on their knowledge and expertise to John Ernest Fellows who have similiar interests or aspirations. The may be college counselors for a lost student. They may have found success in a carreer field and can sahre their path with another generation. They may produce an internship for a Fellow. The College of Mentors is the most important step in making dreams into realities."
        }
      />
      <AboutSection
        title={"The Value of Mentoring"}
        body={
          "For TJEF, our real wealth is our College of Mentors, a group of individuals who have the care and enthusiasmt to pass on their knowledge and expertise to John Ernest Fellows who have similiar interests or aspirations. The may be college counselors for a lost student. They may have found success in a carreer field and can sahre their path with another generation. They may produce an internship for a Fellow. The College of Mentors is the most important step in making dreams into realities."
        }
      />
    </div>
  )
}
