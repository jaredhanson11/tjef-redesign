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
    key: "2020_11_24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "https://sh1.sendinblue.com/v814pacfpt7e.html?t=1606329993",
    type: DIRECT,
    date: new Date(Date.parse("2020-11-24")),
  },
  {
    key: "2020_11_24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "2020_11_24.html",
    type: HOSTED,
    date: new Date(Date.parse("2020-11-24")),
  },
  {
    key: "2020_11_24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "2020_11_24.html",
    type: HOSTED,
    date: new Date(Date.parse("2020-11-24")),
  },
  {
    key: "2020_11_24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "2020_11_24.html",
    type: HOSTED,
    date: new Date(Date.parse("2020-11-24")),
  },
  {
    key: "2020_11_24",
    name: "TJEF Cousins - Nov 24, 2020",
    html: "2020_11_24.html",
    type: HOSTED,
    date: new Date(Date.parse("2020-11-24")),
  },
]
  .sort((a, b) => {
    return a.date.getMilliseconds() - b.date.getMilliseconds()
  })
  .map((cousin) => {
    return cousin
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
