/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

type BoardMemberSectionProps = {
  name: string
  jobTitle: string
  whyTjef: string
}

export default function BoardMemberSection(props: BoardMemberSectionProps) {
  let containerCss = css(defaultStyles.roundedCorners, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyItems: "center",
    width: "95%",
    maxWidth: 1000,
    "@media screen and (min-width: 500px)": {
      width: "80%",
    },
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: defaultStyles.colors.lightGreen,
  })
  let imgContainer = css({
    minWidth: 250,
  })
  let contentsContainer = css({
    flexGrow: 1,
    maxWidth: "100%",
    width: 500,
    textAlign: "center",
    "@media screen and (min-width: 938px)": {
      textAlign: "left",
    },
  })
  let nameCss = css(defaultStyles.header1, {
    fontWeight: "normal",
  })
  let jobTitleCss = css(defaultStyles.body, {})
  let bodyCss = css(defaultStyles.body, {})
  let whyHeaderCss = css({marginBottom: 5, fontWeight: "bold"})
  let lineBreakCss = css({})
  return (
    <div css={containerCss}>
      <div css={imgContainer}></div>
      <div css={contentsContainer}>
        <div css={nameCss}>{props.name}</div>
        <div css={jobTitleCss}>{props.jobTitle}</div>
        <hr css={lineBreakCss} />
        <div css={bodyCss}>
          <div css={whyHeaderCss}>Why TJEF?</div>
          {props.whyTjef}
        </div>
      </div>
    </div>
  )
}
