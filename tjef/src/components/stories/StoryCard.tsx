/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

export type StoryCardProps = {
  title: string
  body: string
  img: string
  imgPortrait?: boolean
}

export default function StoryCard(props: StoryCardProps) {
  let containerCss = css(defaultStyles.roundedCorners, {
    width: 600,
    maxWidth: "100%",
    height: 400,
    maxHeight: "100%",

    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "scroll",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    border: `${defaultStyles.colors.grey} solid 1px`,
    backgroundColor: defaultStyles.colors.white,
  })
  let titleCss = css(defaultStyles.header1, {
    display: "inline-block",
    fontWeight: "normal",
  })
  let lineBreakCss = css({width: "100%"})
  let bodyContainerCss = css({
    height: "100%",
  })
  let imgContainerCss = css({
    ...(props.imgPortrait
      ? {
          padding: 5,
          maxWidth: "33%",
          float: "left",
        }
      : {
          padding: 5,
          maxWidth: "50%",
          float: "left",
        }),
  })
  let imgCss = css(defaultStyles.roundedCorners, {
    height: "100%",
    width: "100%",
  })
  let bodyCss = css(defaultStyles.body, {clear: "right"})
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
