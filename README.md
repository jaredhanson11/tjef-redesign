# TJEF Redesign

## Notes

Keep these in mind when developing:

- the entire website has to be mobile friendly aka it should look as good on a
    phone as it does on the web
- we will find a better font later so don't worry about changing the font, we
    will need to size all the font now (and attributes like bold, italics,
    spacing, etc.) so definitely worry about that in the css

## To-Do List

- [x] Landing screen - Jacob
    1. determine the proper dimension of background picture
        - will there need to be seperate pictures for mobile vs. web?
        - look into the css height value `vh`
            - 100vh == 100% of viewheight, link [here](https://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window)
    2. layout the title and subtitle on the page and make sure the layout is
       mobile responsive
       - pick the text size for each element
- [ ] Lazy loading person iframes
    1. make the iframes within the person modals lazy load
        - loading should occur when the modal for that person is opened
        - this means iframe shouldn't be added to the DOM (shouldn't be added
            in the html) until the person modal is clicked.
        - a good way on how to do it can be found [here](https://codepen.io/tutsplus/pen/RRVRro)
            just don't do it on click of the iframe, do it when opening modal
- [ ] Refactor navbar
    1. change navbar to be:
        - <TJEF LOGO> | About TJEF | Fellows (Current, Past) | Board | Contact Us
    2. add functionality to navbar
        - on hover make divs look clickable
        - link navbar to locations on the page
            - make navbar click scroll smoothly to location on page
- [ ] Contact Us
    1. Make contact us an actual section
        - should have some room for a little blurb talking about what type of
            contact we want to receive (i.e. new initiatives, donors, etc)
        - include TJEF email address if we have one, and make clickable to open
            up mail app directly (find tutorial, i think its just
            mailto://tjef@foo.bar link)
        - look at other non profits contact us sections and figure out what we
            want for this section. it definitely should be small, but I think a
            little bit more than just a footer would be nice
