/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import React from "react"
import {cousins, seeMoreProps} from "../../data/stories"
import {AppRoutes} from "../../Stack"
import defaultStyles from "../../styles"

type StoriesPageCousinsProps = {}

export default function StoriesPageCousins(props: StoriesPageCousinsProps) {
  let containerCss = css({
    display: "flex",
    flexWrap: "wrap",
  })
  let seeMoreContainer = css({
    maxWidth: 550,
    width: 550,
    margin: "auto",
    marginBottom: 20,
    marginTop: 20,
  })
  return (
    <div css={containerCss}>
      <div css={seeMoreContainer}>
        <SeeMore {...seeMoreProps} />
      </div>
      <div css={seeMoreContainer}>
        <CousinsSendinBlueSignup />
      </div>
      <div css={css(seeMoreContainer, {width: "100%", maxWidth: "100%"})}>
        <CousinsArchive cousins={cousins} />
      </div>
    </div>
  )
}

export type CousinsSeeMoreProps = {
  title: string
  description: string[] | string
}
function SeeMore(props: CousinsSeeMoreProps) {
  let description: string[] =
    typeof props.description === "string"
      ? [props.description]
      : props.description

  let containerCss = css({
    textAlign: "center",
  })
  let titleCss = css(defaultStyles.header1, {marginBottom: 20})
  let descriptionCss = css(defaultStyles.body, {})
  let lineBreakCss = css({width: "80%"})
  return (
    <div css={containerCss}>
      <hr css={lineBreakCss} />
      <div css={titleCss}>{props.title}</div>
      <div css={descriptionCss}>
        {description.map((sentence) => (
          <React.Fragment>
            {sentence}
            <br />
          </React.Fragment>
        ))}
      </div>
      <hr css={lineBreakCss} />
    </div>
  )
}

function CousinsSendinBlueSignup() {
  return (
    <iframe
      title="Sendinblue email signup"
      width="550"
      src="https://6f046149.sibforms.com/serve/MUIEAC4XM8OgR-8kuYb8IIkXjpnoh5exDc2lWJSEM455cjabMxH2fBh01udgMeXBtIWwNvWH7KM9-mbLn-C6YzLnJy2__lxdEwYa7jo7Mx44ys3gaoghiWzh1pZ_Atq4cxVLBcbTYpUmZGa3pM79pQf7WlTaSkrwuBrVTsROtk0Dr9s116zSYpPRBnPHJqvQWe7Q1YPdo71K6lE0"
      frameBorder="0"
      scrolling="auto"
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
      }}
      css={css({
        "@media screen and (min-width: 600px)": {
          minHeight: 500,
        },
        minHeight: 700,
      })}></iframe>
  )
}

export type CousinsArchivedEditionProps = {
  key: string
  name: string
  html: string
  type: "HOSTED" | "DIRECT"
  date: Date
}
type CousinsArchiveProps = {
  cousins: CousinsArchivedEditionProps[]
}
function CousinsArchive(props: CousinsArchiveProps) {
  function redirectToArchivedArticle(edition: CousinsArchivedEditionProps) {
    let redirectUrl: string = ""
    if (edition.type === "HOSTED") {
      redirectUrl = AppRoutes.getPath("ArchivedCousinsPage", {
        edition: edition.key,
      })
    } else if (edition.type === "DIRECT") redirectUrl = edition.html
    if (redirectUrl) window.open(redirectUrl, "_blank")
  }

  let containerCss = css({
    textAlign: "center",
    width: "100%",
  })
  let titleContainerCss = css(defaultStyles.header2, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  })
  let titleCss = css({})
  let cousinsListCss = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
  let cousinsListItemCss = css(defaultStyles.body, defaultStyles.clickable, {
    "&:hover": {
      textDecoration: "underline",
    },
    color: defaultStyles.colors.link,
  })
  let lineBreakCss = css({width: "calc(20px + 100%)", marginLeft: -10})
  return (
    <div css={containerCss}>
      <div css={titleContainerCss}>
        <div css={titleCss}>
          TJEF Cousins Archive
          <hr css={lineBreakCss} />
        </div>
      </div>
      <div css={cousinsListCss}>
        {props.cousins.map((edition) => (
          <div
            css={cousinsListItemCss}
            onClick={() => redirectToArchivedArticle(edition)}>
            {edition.name}
          </div>
        ))}
      </div>
    </div>
  )
}
