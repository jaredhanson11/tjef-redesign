/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

export type AboutSectionProps = {
  title: string
  body: string
  icon: string
}

export default function AboutSection(props: AboutSectionProps) {
  let iconHeight = 100
  let containerCss = css(defaultStyles.roundedCorners, {
    maxWidth: 1000,
    "@media screen and (min-width: 500px)": {
      width: "80%",
    },
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: iconHeight / 2,
    backgroundColor: defaultStyles.colors.lightGreen,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  })
  let iconContainerCss = css({
    position: "relative",
    top: -iconHeight / 2,
    height: iconHeight / 2,
  })
  let imgCss = css({height: "200%"})
  let titleCss = css(defaultStyles.header2, {
    display: "inline-block",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  })
  let lineBreakCss = css({width: "50%"})
  let bodyCss = css(defaultStyles.body, {})
  return (
    <div css={containerCss}>
      <div css={iconContainerCss}>
        <img src={props.icon} alt={`${props.title} img`} css={imgCss} />
      </div>
      <div css={titleCss}>{props.title}</div>
      <div css={bodyCss}>
        <hr css={lineBreakCss} />
        {props.body}
      </div>
    </div>
  )
}
