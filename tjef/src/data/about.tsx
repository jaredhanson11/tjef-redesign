import {AboutSectionProps} from "../components/about/AboutSection"
import different from "../imgs/different_icon.png"
import meaning from "../imgs/meaning_icon.png"
import mentoring from "../imgs/mentoring_icon.png"
export const header = "About Us"
export const subheader = "and how we add value to our Fellows"

export const aboutUs: AboutSectionProps[] = [
  {
    title: "Value of Mentoring",
    body:
      "For TJEF, our real wealth is our College of Mentors, a group of individuals whop have the care and enthusiasm to pass on their knowledge and expertise to John Ernest Fellows who have similar interests or aspirations.  They may be college counselors for a lost student.  They may have found success in a career field and can share their path with another generation.  They may produce an internship for a Fellow.  The College of Mentors is the most important step in making dreams into realities.",

    icon: mentoring,
  },
  {
    title: "How is TJEF Different?",
    body:
      "We believe organizing ourselves under a specific dedication is restrictive to whose lives we are able to add value to.  To only support Fellows with a very particular interest would be exclusionary to others that we may be capable of supporting with our College of Mentors and additional resources.  Pairing the value of mentoring from this College of Mentors with grants from our John Ernest Fellowship Fund amplify the value added to give TJEF the ability to do quite a bit with the resources of a small organization.",

    icon: different,
  },
  {
    title: "Meaning of a John Ernest Fellow",
    body:
      "What does it mean to become a John Ernest Fellow? It might seem like an easy question, but I am sure that every Fellow would give you a different response. When I look at the definition of mentoring, which, according to Wikipedia, is “a relationship in which a more experienced or more knowledgeable person helps to guide a less experienced or less knowledgeable person,” I find it to be incomplete. It is a relevant description, but it doesn’t acknowledge the fact that both the mentor and the less knowledgeable person learn through this process.",
    icon: meaning,
  },
]
