/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import defaultStyles from "../../styles"
import AppLogo from "./AppLogo"

export type NavTabs = "home" | "about" | "stories" | "board"

type PageNavProps = {
  activeTab?: NavTabs
}

export default function PageNav(props: PageNavProps) {
  function navigate(tab: NavTabs) {
    if (tab === "home") {
      window.location.href = "/"
    } else {
      window.location.href = `/${tab}`
    }
  }

  let containerCss = css({
    width: "100%",
  })

  let navContainerCss = css({
    paddingBottom: 20,
    paddingTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  })
  let navItemsCss = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  })
  let activeNavItemCss = css({
    backgroundColor: defaultStyles.colors.main,
  })
  let navItemCss = css(defaultStyles.body, defaultStyles.clickable, {
    color: defaultStyles.colors.white,
    border: `${defaultStyles.colors.main} solid 1px`,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: defaultStyles.colors.lightMain,
    "&:hover": activeNavItemCss,
  })
  let donateCss = css(
    defaultStyles.header2,
    defaultStyles.roundedCorners,
    defaultStyles.clickable,
    {
      color: defaultStyles.colors.white,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15,
      paddingBottom: 15,
      backgroundColor: defaultStyles.colors.main,
      "&:hover": {
        textDecoration: "underline",
      },
    }
  )
  let lineBreakCss = css({})
  return (
    <div css={containerCss}>
      <div css={navContainerCss}>
        <AppLogo />
        <div css={navItemsCss}>
          <div
            onClick={() => navigate("home")}
            css={css(
              navItemCss,
              props.activeTab === "home" ? activeNavItemCss : undefined
            )}>
            Home
          </div>
          <div
            onClick={() => navigate("about")}
            css={css(
              navItemCss,
              props.activeTab === "about" ? activeNavItemCss : undefined
            )}>
            About Us
          </div>
          <div
            onClick={() => navigate("stories")}
            css={css(
              navItemCss,
              props.activeTab === "stories" ? activeNavItemCss : undefined
            )}>
            Stories
          </div>
          <div
            onClick={() => navigate("board")}
            css={css(
              navItemCss,
              props.activeTab === "board" ? activeNavItemCss : undefined
            )}>
            Board of Governors
          </div>
          <div css={donateCss}>Donate</div>
        </div>
      </div>
      <hr css={lineBreakCss} />
    </div>
  )
}
