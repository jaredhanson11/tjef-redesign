class StoryImage {
    url 
    caption

    constructor(imgPath, caption) {
        this.url= imgPath
        this.caption = caption
    }
}

var slideShowConfig = {"speed":  5000, "fadeSpeed":  100, "maxDesc":  500}
var slideShow = [
    {
        "imgs": [
            new StoryImage("./img/spotlight.png","Eric Sodomka (center right) and Okke Schrijvers (center left)")
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
            new StoryImage("./img/spotlight.png","test 2")
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
            new StoryImage("./img/spotlight.png","test3")
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
            new StoryImage('./img/spotlight.png', 'test4'),
            new StoryImage('./img/munguia.png', 'test5')
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
    }
]
