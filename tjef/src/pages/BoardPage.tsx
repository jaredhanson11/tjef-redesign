/** @jsx jsx */
import {jsx} from "@emotion/core"
import {withRouter} from "react-router-dom"
import BoardPageBody from "../components/board/BoardPageBody"
import AppPageHeader from "../components/common/AppPageHeader"
import PageBody from "../components/common/PageBody"
import PageNav from "../components/common/PageNav"
import {header, subheader} from "../data/board"

function BoardPage() {
  return (
    <PageBody background="offwhite">
      <PageNav activeTab={"board"} />
      <AppPageHeader header={header} subheader={subheader} />
      <BoardPageBody />
    </PageBody>
  )
}

export default withRouter(BoardPage)
