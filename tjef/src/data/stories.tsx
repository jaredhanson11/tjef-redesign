import {
  CousinsArchivedEditionProps,
  CousinsSeeMoreProps,
} from "../components/stories/StoriesPageCousins"
import {StoryCardProps} from "../components/stories/StoryCard"
import jackAndJohnImg from "../imgs/jackandjohn.png"
import simonImg from "../imgs/simon.png"
import vgivcImg from "../imgs/vgivc.png"

// Header & subheader
export const header = "Our Stories"
export const subheader = "John Ernest Fellows and their dreams"

// Stories carousel
export const stories: StoryCardProps[] = [
  {
    title: "Simon Orlovsky",
    body:
      "The John Ernest Foundation first came to know Simon Orlovsky when he and Lucy Chibukhchyan won the nationals as youngsters, which led them to Dancing with the Stars. Simon Orlovsky was one of our first participants at the International Summer Science School in Heidelberg. Simon liked TJEF’s suggestion that he might consider attending Carleton College. Now a graduate, he’s a very loyal Carly. And now, the wonderful world of startups!",
    img: simonImg,
    imgPortrait: true,
  },
  {
    title: "Jack and John",
    body:
      "In early June, Jack Bendell and John Woodward travelled through the American south handing  out backpacks of school supplies to families in recently-impoverished small towns.  TJEF helped design the program and provided contacts through the local Rotary Clubs, which allowed the two to create a proper itinerary for their trip with specific families and volunteer opportunities in mind.  Proper COVID-19 safety measures were taken in travelling.",
    img: jackAndJohnImg,
  },
  {
    title: "VGIVC",
    body:
      "Grammy winning Vance George brought Juan Montoya to the attention of TJEF years ago as a hopeful conductor from Medellin, Colombia. Vance was central to forming Juan’s professional growth, including a doctoral program at the University of Arizona. Now Juan is honoring his mentor, building out the Vance George International Vocal Competition. The pilot competition will take place in Kuala Lumpur, followed by San Francisco in the following year. ",
    img: vgivcImg,
  },
]

// Cousins section
export const seeMoreProps: CousinsSeeMoreProps = {
  title: "Want to see more?",
  description: [
    "Subscribe to become a TJEF Cousin,",
    "and receive weekly updates on our",
    "current John Ernest Fellows.",
  ],
}

const DIRECT = "DIRECT" as const
const HOSTED = "HOSTED" as const

export const cousins: CousinsArchivedEditionProps[] = [
  {
    key: "2020-10-06",
    name: "TJEF Cousins - Oct 06, 2020",
    html: "https://sh1.sendinblue.com/2ngs9acfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-10-06")),
  },
  {
    key: "2020-10-13",
    name: "TJEF Cousins - Oct 13, 2020",
    html: "https://sh1.sendinblue.com/2o62hacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-10-13")),
  },
  {
    key: "2020-10-20",
    name: "TJEF Cousins - Oct 20, 2020",
    html: "https://sh1.sendinblue.com/v10ahacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-10-20")),
  },
  {
    key: "2020-10-27",
    name: "TJEF Cousins - Oct 27, 2020",
    html: "https://sh1.sendinblue.com/v1cxlacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-10-27")),
  },
  {
    key: "2020-11-03",
    name: "TJEF Cousins - Nov 03, 2020",
    html: "https://sh1.sendinblue.com/v1pkpacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-11-03")),
  },
  {
    key: "2020-11-10",
    name: "TJEF Cousins - Nov 10, 2020",
    html: "https://sh1.sendinblue.com/v227tacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-11-10")),
  },
  {
    key: "2020-11-17",
    name: "TJEF Cousins - Nov 17, 2020",
    html: "https://sh1.sendinblue.com/v7buhacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-11-17")),
  },
  {
    key: "2020-11-24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "https://sh1.sendinblue.com/v814pacfpt7e.html?t=1606329993",
    type: DIRECT,
    date: new Date(Date.parse("2020-11-24")),
  },
  {
    key: "2020-12-01",
    name: "TJEF Cousins - Dec 01, 2020",
    html: "https://sh1.sendinblue.com/v8drtacfpt7e.html?t=1607124759",
    type: DIRECT,
    date: new Date(Date.parse("2020-12-01")),
  },
].sort((a, b) => {
  return b.date.valueOf() - a.date.valueOf()
})

export const _cousins: {
  [key: string]: CousinsArchivedEditionProps
} = Object.assign(
  {},
  ...cousins
    .filter((cousin) => cousin.type === "HOSTED")
    .map((cousin) => {
      return {[cousin.key]: cousin}
    })
)
