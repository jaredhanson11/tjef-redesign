/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

type AboutSectionProps = {
  title: string
  body: string
}

export default function AboutSection(props: AboutSectionProps) {
  let containerCss = css(defaultStyles.roundedCorners, {
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
  let titleCss = css(defaultStyles.header2, {
    display: "inline-block",
    paddingLeft: 10,
    paddingRight: 10,
  })
  let lineBreakCss = css({width: "50%"})
  let bodyCss = css(defaultStyles.body, {})
  return (
    <div css={containerCss}>
      <div css={titleCss}>{props.title}</div>
      <div css={bodyCss}>
        <hr css={lineBreakCss} />
        {props.body}
      </div>
    </div>
  )
}
