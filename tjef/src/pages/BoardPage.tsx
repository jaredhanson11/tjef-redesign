/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import BoardPageBody from "../components/board/BoardPageBody"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"

function BoardPage() {
  return (
    <PageBody>
      <PageNav activeTab={"board"} />
      <AppPageHeader
        header={"Board of Governors"}
        subheader={"of The John Ernest Foundation"}
      />
      <BoardPageBody />
    </PageBody>
  )
}

export default withRouter(BoardPage)
