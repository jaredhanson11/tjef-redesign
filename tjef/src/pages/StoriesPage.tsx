/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import StoriesPageCousins from "../components/stories/StoriesPageCousins"
import StoriesPageStories from "../components/stories/StoriesPageStories"
import {header, subheader} from "../data/stories"

function StoriesPage() {
  let fullPageCss = css({
    height: "98vh",
    display: "flex",
    flexDirection: "column",
  })
  let carouselContainerCss = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  })
  let lineBreakCss = css({
    width: "100%",
    marginBottom: 0,
    marginTop: 0,
  })
  let cousinsContainerCss = css({
    paddingTop: 20,
  })
  return (
    <PageBody background="offwhite">
      <div css={fullPageCss}>
        <PageNav activeTab={"stories"} />
        <AppPageHeader header={header} subheader={subheader} />
        <div css={carouselContainerCss}>
          <StoriesPageStories />
          <hr css={lineBreakCss} />
        </div>
      </div>
      <div css={cousinsContainerCss}>
        <StoriesPageCousins />
      </div>
    </PageBody>
  )
}

export default withRouter(StoriesPage)
