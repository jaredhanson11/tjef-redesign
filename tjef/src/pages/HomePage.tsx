/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import HomePageBody from "../components/home/HomePageBody"

function HomePage() {
  return (
    <PageBody>
      <PageNav activeTab={"home"} />
      <HomePageBody />
    </PageBody>
  )
}

export default withRouter(HomePage)
