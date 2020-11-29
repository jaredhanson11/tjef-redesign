/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import React, {useEffect, useState} from "react"
import defaultStyles from "../../styles"
import StoryCard, {StoryCardProps} from "./StoryCard"

type StoriesCarouselProps = {
  stories: StoryCardProps[]
}

export default function StoriesCarousel(props: StoriesCarouselProps) {
  if (props.stories.length < 1) {
    throw Error("There needs to be at least one story in the stories carousel.")
  }
  let [activeIndex, setActiveIndex] = useState(0)

  // let [rightStory, setRightStory] = useState<StoryCardProps | undefined>(
  //   undefined
  // )
  let [activeStory, setActiveStory] = useState<StoryCardProps | undefined>(
    undefined
  )
  // let [leftStory, setLeftStory] = useState<StoryCardProps | undefined>(
  //   undefined
  // )

  useEffect(() => {
    if (props.stories.length <= activeIndex) {
      setActiveIndex(0)
    } else {
      let activeStory = undefined
      // Commented out the leftstory/rightstory logic until animations are added
      // let leftStory = undefined
      // let rightStory = undefined
      // if (activeIndex === props.stories.length - 1) {
      //   // last story
      //   rightStory = props.stories[0]
      // } else {
      //   rightStory = props.stories[activeIndex + 1]
      // }
      // leftStory = props.stories[activeIndex - 1]
      activeStory = props.stories[activeIndex]
      // if (
      //   leftStory &&
      //   (leftStory === rightStory || leftStory === activeStory)
      // ) {
      //   leftStory = undefined
      // }
      // if (
      //   rightStory &&
      //   (rightStory === leftStory || rightStory === activeStory)
      // ) {
      //   // rightStory = undefined
      // }
      // setRightStory(rightStory)
      // setLeftStory(leftStory)
      setActiveStory(activeStory)
    }
  }, [props.stories, activeIndex, setActiveIndex])

  function next() {
    if (activeIndex + 1 >= props.stories.length) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }
  function previous() {
    if (activeIndex - 1 < 0) {
      setActiveIndex(props.stories.length - 1)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }

  let arrowCss = css({
    height: 50,
    width: 45,
    textAlign: "center",
    fontSize: 50,
    lineHeight: "50px",
    borderRadius: "50%",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: defaultStyles.colors.grey,
    },
  })

  let leftArrowCss = css(arrowCss, {paddingRight: 5})
  let rightArrowCss = css(arrowCss, {paddingLeft: 5})
  let containerCss = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 1200,
  })
  return (
    <React.Fragment>
      {activeStory ? (
        <div css={containerCss}>
          <div css={leftArrowCss} onClick={previous}>
            &#9664;
          </div>
          <StoryCard {...activeStory} />
          <div css={rightArrowCss} onClick={next}>
            &#9654;
          </div>
        </div>
      ) : undefined}
    </React.Fragment>
  )
}
