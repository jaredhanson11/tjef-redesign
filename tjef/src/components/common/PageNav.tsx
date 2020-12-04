/** @jsx jsx */
import {css, Interpolation, jsx} from "@emotion/core"
import {useState} from "react"
import menuIcon from "../../imgs/menu-icon.png"
import defaultStyles from "../../styles"
import AppLogo from "./AppLogo"

export type NavTabs = "home" | "about" | "stories" | "board"

type PageNavProps = {
  activeTab?: NavTabs
}

export default function PageNav(props: PageNavProps) {
  let [navMenuCollapsed, setNavMenuCollapsed] = useState(true)

  function navigate(tab: NavTabs) {
    if (tab === "home") {
      window.location.href = "/"
    } else {
      window.location.href = `/${tab}`
    }
  }

  function mobileCss(_css: Interpolation<undefined>) {
    return css({"@media (max-width:1000px)": _css})
  }

  let navPlaceholderCss = css({
    height: 110,
  })
  let containerCss = css({
    width: "100%",
    top: 0,
    position: "fixed",
    zIndex: 1,
  })

  let navContainerCss = css({
    backgroundColor: defaultStyles.colors.offWhite,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
  })
  let navItemsCss = css(
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginRight: 30,
    },
    // collapsed menu
    mobileCss({
      display: "none",
    })
  )

  let collapsibleNavItemsCss = css(defaultStyles.marginBetweenChilren(20), {
    display: "none",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: defaultStyles.colors.offWhite,
    flexDirection: "column",
    left: 0,
    top: 110,
    textAlign: "center",
  })
  let expandedNavItemsCss = css(
    collapsibleNavItemsCss,
    mobileCss({display: "flex"})
  )
  let mobileNavMenuCss = css(
    {height: 40, width: 45, marginRight: 30, display: "none"},
    mobileCss({display: "block"})
  )
  let mobileNavItemsXCss = css(defaultStyles.clickable, {
    fontSize: "2em",
    textAlign: "right",
    paddingRight: 50,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: defaultStyles.colors.grey,
    },
  })
  let activeNavItemCss = css({
    backgroundColor: defaultStyles.colors.main,
  })
  let navItemCss = css(
    defaultStyles.body,
    defaultStyles.clickable,
    {
      color: defaultStyles.colors.white,
      border: `${defaultStyles.colors.main} solid 1px`,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: defaultStyles.colors.lightMain,
      "&:hover": activeNavItemCss,
    },
    mobileCss({
      fontSize: "2em",
    })
  )
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
    },
    mobileCss({
      fontSize: "2em",
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 20,
      paddingBottom: 20,
    })
  )
  let lineBreakCss = css({
    margin: 0,
    padding: 0,
  })
  let donateButton = (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="VB8DHAFBQ95C6" />
      <input
        css={donateCss}
        type="submit"
        value="Donate"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  )
  let navItems = [
    <div
      onClick={() => navigate("home")}
      css={css(
        navItemCss,
        props.activeTab === "home" ? activeNavItemCss : undefined
      )}>
      Home
    </div>,
    <div
      onClick={() => navigate("about")}
      css={css(
        navItemCss,
        props.activeTab === "about" ? activeNavItemCss : undefined
      )}>
      About Us
    </div>,
    <div
      onClick={() => navigate("stories")}
      css={css(
        navItemCss,
        props.activeTab === "stories" ? activeNavItemCss : undefined
      )}>
      Stories
    </div>,
    <div
      onClick={() => navigate("board")}
      css={css(
        navItemCss,
        props.activeTab === "board" ? activeNavItemCss : undefined
      )}>
      Board of Governors
    </div>,
    donateButton,
  ]

  return (
    <div>
      <div css={navPlaceholderCss}></div>
      <div css={containerCss}>
        <div css={navContainerCss}>
          <AppLogo onClick={() => navigate("home")} />
          <div>
            <div css={navItemsCss}>{navItems}</div>
            <div css={mobileNavMenuCss}>
              <NavMenuIcon
                onClick={() => setNavMenuCollapsed(!navMenuCollapsed)}
              />
            </div>
            <div
              css={
                navMenuCollapsed ? collapsibleNavItemsCss : expandedNavItemsCss
              }>
              <div
                onClick={() => setNavMenuCollapsed(true)}
                css={mobileNavItemsXCss}>
                X
              </div>
              {navItems}
            </div>
          </div>
        </div>
        <hr css={lineBreakCss} />
      </div>
    </div>
  )
}

type NavMenuIconProps = {
  onClick: () => void
}

function NavMenuIcon(props: NavMenuIconProps) {
  let containerCss = css(defaultStyles.clickable, {
    height: "100%",
    width: "100%",
  })
  let imgCss = css({
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
  })
  return (
    <div css={containerCss} onClick={props.onClick}>
      <img src={menuIcon} css={imgCss} alt="Mobile Menu Icon" />
    </div>
  )
}
