/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {stories} from "../../data/stories"
import StoriesCarousel from "./StoriesCarousel"

type StoriesPageStoriesProps = {}

export default function StoriesPageStories(props: StoriesPageStoriesProps) {
  let containerCss = css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    maxWidth: 1100,
    marginLeft: "auto",
    marginRight: "auto",
  })
  return (
    <div css={containerCss}>
      <StoriesCarousel stories={stories} />
    </div>
  )
}
