/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

type StoryCardProps = {
  title: string
  body: string
  img: string
}

export default function StoryCard(props: StoryCardProps) {
  let containerCss = css(defaultStyles.roundedCorners, {
    width: 600,
    maxWidth: "100%",

    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    border: `${defaultStyles.colors.grey} solid 1px`,
  })
  let titleCss = css(defaultStyles.header1, {
    display: "inline-block",
    fontWeight: "normal",
  })
  let lineBreakCss = css({width: "100%"})
  let bodyContainerCss = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  })
  let imgContainerCss = css({
    minWidth: 150,
  })
  let imgCss = css({
    width: "100%",
  })
  let bodyCss = css(defaultStyles.body, {})
  return (
    <div css={containerCss}>
      <div css={titleCss}>{props.title}</div>
      <hr css={lineBreakCss} />
      <div css={bodyContainerCss}>
        <div css={imgContainerCss}>
          <img css={imgCss} src={props.img} alt={"Story img"} />
        </div>
        <div css={bodyCss}>{props.body}</div>
      </div>
    </div>
  )
}
