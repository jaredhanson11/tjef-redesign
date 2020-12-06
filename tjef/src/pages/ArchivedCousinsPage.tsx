/** @jsx jsx */
import {jsx} from "@emotion/core"
import {RouteChildrenProps, withRouter} from "react-router-dom"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import ArchivedCousinsPageBody from "../components/stories/ArchivedCousinsPageBody"

type ArchivedCousinsPageProps = RouteChildrenProps<{edition: string}>

function ArchivedCousinsPage(props: ArchivedCousinsPageProps) {
  return (
    <PageBody background="offwhite">
      <PageNav />
      <ArchivedCousinsPageBody edition={props.match?.params.edition} />
    </PageBody>
  )
}

export default withRouter(ArchivedCousinsPage)
