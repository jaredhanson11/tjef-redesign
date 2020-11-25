/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import {board} from "../../data/board"
import defaultStyles from "../../styles"
import BoardMemberSection from "./BoardMemberSection"

type BoardPageBodyProps = {}

export default function BoardPageBody(props: BoardPageBodyProps) {
  let containerCss = css(defaultStyles.marginBetweenChilren(30), {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  })
  return (
    <div css={containerCss}>
      {board.map((props) => (
        <BoardMemberSection {...props} />
      ))}
    </div>
  )
}
