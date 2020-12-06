/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import AboutPageBody from "../components/about/AboutPageBody"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import {header, subheader} from "../data/about"

function AboutPage() {
  return (
    <PageBody background="offwhite">
      <PageNav activeTab={"about"} />
      <AppPageHeader header={header} subheader={subheader} />
      <AboutPageBody />
    </PageBody>
  )
}

export default withRouter(AboutPage)
