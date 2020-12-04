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
    maxWidth: "90%",
    height: 500,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  })
  let contentContainerCss = css({
    maxHeight: "100%",
    overflowY: "auto",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,

    border: `${defaultStyles.colors.grey} solid 1px`,
    backgroundColor: defaultStyles.colors.white,
  })
  let titleCss = css(defaultStyles.header1, {
    display: "inline-block",
    fontWeight: "normal",
    textAlign: "center",
    width: "100%",
  })
  let lineBreakCss = css({width: "100%"})
  let bodyContainerCss = css(defaultStyles.body, {})
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
      <div css={contentContainerCss}>
        <div css={titleCss}>{props.title}</div>
        <hr css={lineBreakCss} />
        <div css={bodyContainerCss}>
          <div css={imgContainerCss}>
            <img css={imgCss} src={props.img} alt={"Story img"} />
          </div>
          <div css={bodyCss}>{props.body}</div>
        </div>
      </div>
    </div>
  )
}
