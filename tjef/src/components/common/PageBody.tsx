/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {PropsWithChildren} from "react"
import defaultStyles from "../../styles"

type PageBodyProps = PropsWithChildren<{background?: "offwhite" | "none"}>

export default function PageBody(props: PageBodyProps) {
  let bodyCss = css({
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    ...(props.background === "offwhite"
      ? {backgroundColor: defaultStyles.colors.offWhite}
      : {}),
  })
  return <div css={bodyCss}>{props.children}</div>
}
