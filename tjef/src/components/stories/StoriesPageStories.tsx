/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import StoriesCarousel from "./StoriesCarousel"

type StoriesPageStoriesProps = {}

export default function StoriesPageStories(props: StoriesPageStoriesProps) {
  let containerCss = css({
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    maxWidth: 1100,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
  })
  return (
    <div css={containerCss}>
      <StoriesCarousel />
    </div>
  )
}
