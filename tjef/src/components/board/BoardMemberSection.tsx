/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

export type BoardMemberSectionProps = {
  name: string
  jobTitle: string
  whyTjef: string
  avatar: string
}

export default function BoardMemberSection(props: BoardMemberSectionProps) {
  let containerCss = css(defaultStyles.roundedCorners, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyItems: "center",
    maxWidth: "80%",
    "@media screen and (min-width: 800px)": {
      maxWidth: 1000,
    },
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: defaultStyles.colors.lightGreen,
    "& > *": {paddingRight: 10},
    "& > *:last-child": {paddingRight: 0},
  })
  let imgContainer = css({
    marginLeft: "auto",
    marginRight: "auto",
  })
  let imgCss = css({
    width: 150,
    paddingLeft: 50,
    paddingRight: 50,
    "@media screen and (min-width: 800px)": {
      paddingLeft: 0,
      paddingRight: 0,
      width: 250,
    },
    borderRadius: "50%",
  })
  let contentsContainer = css({
    flexGrow: 1,
    maxWidth: 500,
    width: "90%",
    textAlign: "center",
    "@media screen and (min-width: 800px)": {
      textAlign: "left",
      paddingLeft: 10,
    },
    margin: "auto",
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
      <div css={imgContainer}>
        <img src={props.avatar} alt={`${props.name} avatar`} css={imgCss} />
      </div>
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
