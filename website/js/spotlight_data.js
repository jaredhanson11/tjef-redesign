class StoryImage {
    constructor(imgPath, caption, orientation) {
        this.url= imgPath
        this.caption = caption
        this.orientation = orientation
    }
}

const landscape = "landscape"
const portrait = "portrait"

var slideShowConfig = {"speed":  5000, "fadeSpeed":  100, "maxDesc":  500}
var slideShow = [
    {
        "imgs": [
            new StoryImage("./img/spotlight.png","Eric Sodomka (center right) and Okke Schrijvers (center left)", landscape)
        ],
        "desc":
        `
Eric Sodomka and Okke Schrijvers are senior scientists at Facebook headquarters in Menlo Park. Eric spent countless hours to get four
young Nigerian young academics visas, conference fees, and flights to
come to Oxford to attend the 14th conference on web and internet
economics, a conference on mechanism design. Okke (long standing
John Ernest Fellow and member of TJEF’s College of Mentors) connected
them to The John Ernest Foundation, which provided their conference fees
to help them reach their goals. This project was conceived 1 month ago.
Talk about adding value in a timely manner!  Conference was held at Oxford
University in mid-December, 2018.
        `
    },
    {
        "imgs": [
            new StoryImage('./img/bendall-heid/image0.jpg', '', landscape),
            new StoryImage('./img/bendall-heid/image1.jpg', '', landscape),
            new StoryImage('./img/bendall-heid/image2.jpg', '', landscape),
            new StoryImage('./img/bendall-heid/image3.jpg', '', landscape)
        ],
        "desc":
        `
As a John Ernest Fellow, Jack Bendell traveled to Heidelberg, Germany for the International Summer Science School in 
summer 2017.  Studying at the Haus Der Astronomie, he calculated the distance to the Sun using the red shift produced 
by light.  On the weekends, he enjoyed exploring Germany with his cohort.  He valued gaining a greater global perspective 
from long lunches and late-night chats with his peers from around the world.  The John Ernest Foundation has been providing 
students for the International Summer Science School in Heidelberg for over a decade, from China, from Korea, and from 
the United States.  Each participant earned the title: John Ernest Fellow.
        `
    },
    {
        "imgs": [
            new StoryImage("./img/college-is-real.jpg","", landscape)
        ],
        "desc":
        `
“College is Real is thriving. We now have more than 400 kids in the program at Richmond’s three public high schools. 
Our college acceptance rate remains at 90-100% per year. I’m very proud of the impact we’ve made on these kids’ lives, 
the schools and the community.”

- Brad Blake, Founder

There is TJEF green at the inception of this incredible program.  It came about when Brad Blake coached a local high 
school team, seeded number eight, at a soccer tournament.  Richmond High School was seeded first.  Brad’s team won.  
He immediately began to develop this exciting concept, which became College is Real, beginning with a gift of two 
thousand dollars to the school’s soccer program.
        `
    },
    {
        "imgs": [
            new StoryImage('./img/wurzner/image0.jpg', 'Jeff Byron, retired California Energy Commissioner, Band of Angels; ' +
              'Professor Jeff Koseff, co-founder, Stanford Woods Institute on the Environment; ' +
              'Mayor Eckart Würzner, Heidelberg; ' +
              'Ken Kaufman, Executive Chairman, The John Ernest Foundation; Emeritus, Stanford University', landscape),
            new StoryImage('./img/wurzner/image1.jpg', '', landscape),
        ],
        "desc":
        `
Mayor Eckhart Würzner honored The John Ernest Foundation, giving a timely fireside chat:  My Thoughts for Greta, at 
the Stanford Faculty Club on October 29th (2019).  Heidelberg has a pronounced innovative history, with some good answers 
for Greta.  The exchange with invited participants was robust.  There are theorists, and there are practitioners. 
The Mayor is a combination of both.
        `
    },
    {
        "imgs": [
          new StoryImage('./img/munguia.png', 'Alvaro Munguia (second from right) and the Newton High School Azteca Dance Troup.', portrait)
        ],
        "desc":
        `
My name is Alvaro Munguia and I am a junior at Earlham college in Richmond, Indiana. I have been a part of the John 
Ernest Foundation for over three years. I first heard about TJEF at an event for the Kauffman museum at my church, Our 
Lady of Guadalupe in Newton, Kansas. There, I was to perform with the Newton High School Azteca dance troupe. After I 
had finished dancing, everyone was asked to introduce themselves and to state what they wanted to do after high school. 
When the microphone came to me, I firmly stated that I wanted to go to college and to become an attorney. My statement 
was heard by Ken, who was in the crowd watching us dance. Afterwards, Kathy Stucky handed me a card with the information 
about TJEF. I did not know what to make of it so I decided to email Ken. That was a great decision because ever since 
that day my path has changed. The John Ernest Foundation has helped me in various ways but most importantly they guided 
me to where I am now. TJEF helped me to be at Earlham College by opening my eyes to the numerous options of colleges 
that we have in America. I chose Earlham and I am glad I did. TJEF has helped me immensely and I hope they do for a very 
long time.        
        `
    },
    {
        "imgs": [
          new StoryImage('./img/orlovsky/image0.jpg', '', portrait),
          new StoryImage('./img/orlovsky/image1.jpg', '', portrait)
        ],
        "desc":
        `
The John Ernest Foundation first came to know Simon Orlovsky when he and Lucy Chibukhchyan won the nationals as 
youngsters, which led them to Dancing with the Stars. Simon Orlovsky was one of our first participants at the 
International Summer Science School in Heidelberg. Simon liked TJEF’s suggestion that he might consider attending 
Carleton College.  Now a graduate, he’s a very loyal Carly. And now, the wonderful world of startups!
        `
    },
]
