/** @jsx jsx */
import {css, jsx} from "@emotion/core"
import React from "react"
import {cousins, ctaProps, seeMoreProps} from "../../data/stories"
import {AppRoutes} from "../../Stack"
import defaultStyles from "../../styles"

type StoriesPageCousinsProps = {}

export default function StoriesPageCousins(props: StoriesPageCousinsProps) {
  let containerCss = css({
    display: "flex",
    flexWrap: "wrap",
  })
  let seeMoreContainer = css({
    maxWidth: 500,
    width: 500,
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
        <EmailSignup {...ctaProps} />
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

export type CousinsEmailCTAProps = {
  title: string
  description: string
  cta: string
  ctaPlaceholder: string
  ctaButton: string
}
function EmailSignup(props: CousinsEmailCTAProps) {
  let description: string[] =
    typeof props.description === "string"
      ? [props.description]
      : props.description

  let containerCss = css(defaultStyles.roundedCorners, {
    backgroundColor: defaultStyles.colors.white,
    padding: 40,
    border: `${defaultStyles.colors.grey} 1px solid`,
  })
  let titleCss = css(defaultStyles.header1, {
    marginBottom: 10,
  })
  let descriptionCss = css(defaultStyles.body, {})
  let emailContainerCss = css(defaultStyles.marginBetweenChilren(10), {
    marginTop: 15,
  })
  let emailInputHeaderCss = css(defaultStyles.body, {fontWeight: "bold"})
  let emailInputCss = css(defaultStyles.body, {width: "80%"})
  let emailSubmitCss = css(defaultStyles.roundedCorners, defaultStyles.body, {
    "&:hover": {
      opacity: ".7",
    },
    cursor: "pointer",
    color: defaultStyles.colors.white,
    backgroundColor: defaultStyles.colors.main,
    display: "inline-block",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  })
  return (
    <div css={containerCss}>
      <div css={titleCss}>{props.title}</div>
      <div css={descriptionCss}>
        {description.map((sentence) => (
          <React.Fragment>
            {sentence}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div css={emailContainerCss}>
        <div css={emailInputHeaderCss}>{props.cta}</div>
        <input
          css={emailInputCss}
          type="email"
          placeholder={props.ctaPlaceholder}
        />
        <div css={emailSubmitCss}>{props.ctaButton}</div>
      </div>
    </div>
  )
}

export type CousinsArchivedEditionProps = {
  key: string
  name: string
  html: string
  date: Date
}
type CousinsArchiveProps = {
  cousins: CousinsArchivedEditionProps[]
}
function CousinsArchive(props: CousinsArchiveProps) {
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
            onClick={() =>
              (window.location.href = AppRoutes.getPath("ArchivedCousinsPage", {
                edition: edition.key,
              }))
            }>
            {edition.name}
          </div>
        ))}
      </div>
    </div>
  )
}
