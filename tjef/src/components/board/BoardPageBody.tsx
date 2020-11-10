/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"
import BoardMemberSection from "./BoardMemberSection"

type BoardPageBodyProps = {}

export default function BoardPageBody(props: BoardPageBodyProps) {
  let containerCss = css(defaultStyles.marginBetweenChilren(30), {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  })
  return (
    <div css={containerCss}>
      <BoardMemberSection
        name={"Daniel Crowder"}
        jobTitle={"Systems Enginer/Software Developer at DCTECH, Ltd."}
        whyTjef={
          'Without mentoring, charism, or direction, great dreams often reamin fallowed. TEJF provides the "spark" to cultivate a dream from seeding to harvest.'
        }
      />
      <BoardMemberSection
        name={"Daniel Crowder"}
        jobTitle={"Systems Enginer/Software Developer at DCTECH, Ltd."}
        whyTjef={
          'Without mentoring, charism, or direction, great dreams often reamin fallowed. TEJF provides the "spark" to cultivate a dream from seeding to harvest. Without mentoring, charism, or direction, great dreams often reamin fallowed. TEJF provides the "spark" to cultivate a dream from seeding to harvest.'
        }
      />
    </div>
  )
}
