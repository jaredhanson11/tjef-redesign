/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

type AppPageHeaderProps = {
  header: string
  subheader?: string
}

export default function AppPageHeader(props: AppPageHeaderProps) {
  let containerCss = css(defaultStyles.marginBetweenChilren(10), {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })
  let headerCss = css(defaultStyles.header1, {})
  let subHeaderCss = css(defaultStyles.subeader1, {})
  return (
    <div css={containerCss}>
      <div css={headerCss}>{props.header}</div>
      {props.subheader ? (
        <div css={subHeaderCss}>{props.subheader}</div>
      ) : undefined}
    </div>
  )
}
