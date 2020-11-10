/** @jsx jsx */
import {css, jsx} from "@emotion/core"

type HomePageBodyProps = {}

export default function HomePageBody(props: HomePageBodyProps) {
  let containerCss = css({
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundImage: "url(/img/okke-homepage.png)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    zIndex: -1,
    backgroundSize: "contain",
    filter: "grayscale(100%)",
  })
  return <div css={containerCss}></div>
}
