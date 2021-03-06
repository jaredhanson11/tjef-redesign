/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"

type AppLogoProps = {
  onClick?: () => void
}

export default function AppLogo(props: AppLogoProps) {
  let [horizontalPadding, verticalPadding] = [20, 10]
  let containerCss = css(
    props.onClick ? defaultStyles.clickable : undefined,
    defaultStyles.marginBetweenChilren(5),
    {
      backgroundColor: defaultStyles.colors.main,
      paddingLeft: horizontalPadding,
      paddingRight: horizontalPadding,
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
      display: "inline-block",
      textAlign: "center",
    }
  )
  let header = css({color: "white", fontSize: 35})
  let subheader = css({color: "white", fontSize: 15})
  return (
    <div css={containerCss} onClick={props.onClick}>
      <div css={header}>TJEF</div>
      <div css={subheader}>The John Ernest Foundation</div>
    </div>
  )
}
