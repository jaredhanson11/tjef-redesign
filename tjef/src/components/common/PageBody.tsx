/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {PropsWithChildren} from "react"

type PageBodyProps = PropsWithChildren<{}>

export default function PageBody(props: PageBodyProps) {
  let bodyCss = css({
    width: "100vw",
    height: "100vh",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
  })
  return <div css={bodyCss}>{props.children}</div>
}
