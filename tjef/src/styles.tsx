// This file contains global styles that are used in many places throughout app

import {css} from "@emotion/core"

const vars = {
  colors: {
    grey: "#B3B3B3",
    lightGrey: "#F3F3F3",
    white: "#FFFFFF",
    offWhite: "#FDFDF0",
    black: "#000000",
    linkBlue: "#0000EE",
    red: "red",
    forestGreen: "#37532d",
    lightForestGreen: "rgba(55, 83, 45, 0.75)",
    lightGreen: "rgba(55, 83, 45, 0.25)",
  },
}

export default class defaultStyles {
  static colors = {
    // Defaults
    white: vars.colors.white,
    offWhite: vars.colors.offWhite,
    black: vars.colors.black,
    grey: vars.colors.grey,
    lightGrey: vars.colors.lightGrey,
    blue: vars.colors.linkBlue,
    red: vars.colors.red,
    lightGreen: vars.colors.lightGreen,

    // Color scheme
    main: vars.colors.forestGreen,
    lightMain: vars.colors.lightForestGreen,
    link: vars.colors.linkBlue,
  }

  static roundedCorners = css({
    borderRadius: "5px",
  })

  static boxShadow = css({
    boxShadow: `0px 1px 4px rgba(0, 0, 0, .25)`,
  })

  static darkBoxShadow = css({
    boxShadow: `0px 1px 4px 5px rgba(0, 0, 0, .25)`,
  })

  static clickable = css({
    cursor: "pointer",
  })

  static marginBetweenChilren(marginPx: number, horizontal?: boolean) {
    return css({
      "& > *": horizontal ? {marginRight: marginPx} : {marginBottom: marginPx},
      "& > *:last-child": horizontal ? {marginRight: 0} : {marginBottom: 0},
    })
  }

  // Text related
  static header1 = css({
    fontSize: 40,
    fontWeight: "bold",
  })
  static subeader1 = css({
    fontSize: 25,
    color: defaultStyles.colors.grey,
  })
  static header2 = css({
    fontSize: 20,
    fontWeight: "bold",
  })
  static body = css({
    fontSize: 20,
    lineHeight: "150%",
  })
}
