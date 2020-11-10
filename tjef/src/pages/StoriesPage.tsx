/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import StoriesPageStories from "../components/stories/StoriesPageStories"

function HomePage() {
  return (
    <PageBody>
      <div>
        <PageNav activeTab={"stories"} />
        <AppPageHeader
          header={"Our Stories"}
          subheader={"John Ernest Fellows and their dreams"}
        />
        <StoriesPageStories />
      </div>
    </PageBody>
  )
}

export default withRouter(HomePage)
