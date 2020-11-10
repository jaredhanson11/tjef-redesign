/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import StoryCard from "./StoryCard"

type StoriesCarouselProps = {}

export default function StoriesCarousel(props: StoriesCarouselProps) {
  let containerCss = css({
    width: "100%",
    maxWidth: 1200,
  })
  return (
    <div css={containerCss}>
      <StoryCard
        img={""}
        title={"Simon Orlovsky"}
        body={
          "The John Ernest Foundation first came to know Simon Orlovsky when he and Lucy Chibukhchyan won the nationals as youngsters, which led them to Dancing with the Stars. Simon Orlovsky was one of our first participants at the International Summer Science School in Heidelberg. Simon liked TJEF’s suggestion that he might consider attending Carleton College. Now a graduate, he’s a very loyal Carly. And now, the wonderful world of startups!"
        }
      />
    </div>
  )
}
