/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import React from "react"
import defaultStyles from "../../styles"

export type HomePageBoxProps = {
  text: string | string[]
}

export default function HomePageBox(props: HomePageBoxProps) {
  let text = typeof props.text === "string" ? [props.text] : props.text
  let containerCss = css(defaultStyles.body, defaultStyles.roundedCorners, {
    display: "inline-block",
    color: defaultStyles.colors.white,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    maxWidth: "100%",
    width: 400,
    textAlign: "center",
  })
  return (
    <div css={containerCss}>
      {text.map((line) => (
        <React.Fragment>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  )
}
