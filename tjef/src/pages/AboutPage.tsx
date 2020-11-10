/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import AboutPageBody from "../components/about/AboutPageBody"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"

function AboutPage() {
  return (
    <PageBody>
      <PageNav activeTab={"about"} />
      <AppPageHeader
        header={"About Us"}
        subheader={"and how we add value to our Fellows"}
      />
      <AboutPageBody />
    </PageBody>
  )
}

export default withRouter(AboutPage)
