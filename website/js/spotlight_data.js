class StoryMedia {
    constructor(imgPath, caption, orientation, isYoutube=false) {
        this.url= imgPath
        this.caption = caption
        this.isYoutube = isYoutube
        this.orientation = orientation
    }
}

const landscape = "landscape"
const portrait = "portrait"

var slideShow = [
    {
        "imgs": [
            new StoryMedia("./img/spotlight.png","Eric Sodomka (center right) and Okke Schrijvers (center left)", landscape)
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
            new StoryMedia('./img/bendall-heid/image0.jpg', '', landscape),
            new StoryMedia('./img/bendall-heid/image1.jpg', '', landscape),
            new StoryMedia('./img/bendall-heid/image2.jpg', '', landscape),
            new StoryMedia('./img/bendall-heid/image3.jpg', '', landscape)
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
            new StoryMedia("./img/college-is-real.jpg","", landscape)
        ],
        "desc":
        `
“College is Real is thriving. We now have more than 400 kids in the program at Richmond’s three public high schools. 
Our college acceptance rate remains at 90-100% per year. I’m very proud of the impact we’ve made on these kids’ lives, 
the schools and the community.”
<br>
- Brad Blake, Founder
<br>
<br>
There is TJEF green at the inception of this incredible program.  It came about when Brad Blake coached a local high 
school team, seeded number eight, at a soccer tournament.  Richmond High School was seeded first.  Brad’s team won.  
He immediately began to develop this exciting concept, which became College is Real, beginning with a gift of two 
thousand dollars to the school’s soccer program.
        `
    },
    {
        "imgs": [
            new StoryMedia('./img/wurzner/image0.jpg', 'Jeff Byron, retired California Energy Commissioner, Band of Angels; ' +
              'Professor Jeff Koseff, co-founder, Stanford Woods Institute on the Environment; ' +
              'Mayor Eckart Würzner, Heidelberg; ' +
              'Ken Kaufman, Executive Chairman, The John Ernest Foundation; Emeritus, Stanford University', landscape),
            new StoryMedia('./img/wurzner/image1.jpg', '', landscape),
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
          new StoryMedia('./img/munguia.png', 'Alvaro Munguia (second from right) and the Newton High School Azteca Dance Troup.', portrait)
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
          new StoryMedia('./img/orlovsky/image0.jpg', '', portrait),
          new StoryMedia('./img/orlovsky/image1.jpg', '', portrait)
        ],
        "desc":
        `
The John Ernest Foundation first came to know Simon Orlovsky when he and Lucy Chibukhchyan won the nationals as 
youngsters, which led them to Dancing with the Stars. Simon Orlovsky was one of our first participants at the 
International Summer Science School in Heidelberg. Simon liked TJEF’s suggestion that he might consider attending 
Carleton College.  Now a graduate, he’s a very loyal Carly. And now, the wonderful world of startups!
        `
    },
    {
        "imgs": [
          new StoryMedia('https://www.youtube.com/embed/ar-H-pzRZ1k', '', portrait, true),
        ],
        "desc":
        `
The Westfield Center seeks to promote dialogue among keyboard performers, scholars, and instrument makers. One aspect of this mission
 is the Concert Scholar Program, designed to give talented young keyboard players in the early stages of their performing career an 
 opportunity to perform on excellent instruments located throughout the country.
<br>
<br>
This program, made possible through the support of The John Ernest Foundation, provides a three concert tour during the academic
 year following receipt of the award. The award is based on the concept of "student mentoring" and experiential learning, and as such,
 is intended to develop the student's skills as a performer, as well as his or her ability to meet and successfully interact with people
 in a professional and social context. Concerts are sponsored by TJEF which provides travel, and by the hosting institution, which provides
 hospitality. While there is no monetary award, the concert scholar receives a free membership to the Westfield Center.
<br>
<br>
The John Ernest Foundation first connected with Kristian Bezuidenhout when he won the Westfield Concert Scholar award. TJEF salutes his success.
 Mr. Bezuidenhout began his education in Australia and completed his studies at the Eastman School of Music. He has since become a maestro of the
 fortepiano, harpsichord, and piano. Mr. Bezuidenhout received international acclaim at 21 after winning the celebrated first prize and audience
 prize at the Bruges Fortepiano Competition in Belgium. In 2013 he was nominated by Gramophone Magazine for Artist of the Year. Kristian has also
 demonstrated his musical prowess with some of the world’s leading ensembles such as the Orchestra of the Age of Enlightenment, Freiburger
 Barockorchester, the Chicago Symphony Orchestra along with guest-directing the English Concert. Kristian now lives in London, but his recitals
 take him across the world, from the United States to Japan.
        `
    },
    {
        "imgs": [
          new StoryMedia('https://www.youtube.com/embed/m7UGRjv0qDk', '', portrait, true)
        ],
        "desc":
        `
After months of preparation, on October 2nd a dinner program, “The Time for Civil Discourse is NOW,” featuring a keynote 
address by the general secretary of Rotary International: John Hewko was hosted for almost 250 people at the Stanford 
Faculty Club. The event was the brainchild of the Palo Alto University Rotary Emeriti Group, a group of distinguished 
former Palo Alto University Rotarians, who are using their intellectual capital and position in the community to improve 
civil discourse.
<br>
<br>
Club member Okke Schrijvers gave an introduction to this timely topic drawing on stories about Alexander Hamilton and 
Thomas Jefferson. During John's presentation, he drew on the example of Rotary's efforts to eradicate polio to highlight 
the importance of civil discourse, and the powerful role Rotary can play in improving civil discourse. Over the years of 
attempting to eradicate polio, there were many falsehoods spread about the vaccination efforts. Rotary was able to overcome 
the obstacles and resistance by listening and understanding people’s concerns. John then linked the topic of civil discourse 
to the last US presidential election and the role that media, old and new, have played in polarizing the citizenry. John 
concluded with recommendations for how the lessons learned during polio eradication could be applied more broadly.
<br>
<br>
Funding for the evening was generously provided by The John Ernest Foundation. This lecture won the Cicero Award for 
Non-Profits in 2018.
        `
    },
    {
        "imgs": [
          new StoryMedia('./img/montoya.jpg', '', landscape)
        ],
        "desc":
        `
Grammy winning Vance George brought Juan Montoya to the attention of The John Ernest Foundation years ago as a hopeful 
conductor from Medellin (Colombia). Vance was central to forming Juan’s professional growth.  This included a successful 
doctoral program at the University of Arizona. Now Juan is honoring his mentor, building out the Vance George International Vocal Competition.  The pilot competition 
will take place in Kuala Lumpur (Malaysia), followed by San Francisco in the following year.  More to follow.
<br>
<br>
<a href="https://www.juandmontoya.com/" target="_blank">https://www.juandmontoya.com/</a>
        `
    },
    {
        "imgs": [
          new StoryMedia('./img/broderick.png', '', portrait)
        ],
        "desc":
        `
Kelsey Broderick currently works at the Eurasia Group, where she is an analyst in the Asia team with a particular focus 
on Chinese foreign policy and Taiwan. You might see Kelsey discussing Chinese politics on Bloomberg News (search her).
<br>
<br>
Prior to Eurasia Group, she researched macroeconomic trends in China at the World Bank and held internships at the 
Department of State, Albright Stonebridge Group, and Project 2049 Institute. She received a master's degree with 
distinction from the Georgetown University Walsh School of Foreign Service and a bachelor's degree in anthropology 
and Chinese language from Stanford University. 
<br>
<br>
Kelsey became a John Ernest Fellow after her junior year in high school.  Jessie Chen hosted her for a summer in 
Shanghai, where she began to hear the language she had been studying in high school.  What a story!
        `
    }
]


