# MSA_2016
This is SlideCol, a simple app for the Microsoft Student Accelerator, created by Jayden Cooke.

This app uses SASS, Typescript, HTML5, CSS and Javascript,  as well as a Bootstrap template.

The app, hosted on Azure, with continuous Github deployment, can be reached at 

`http://slidecol.azurewebsites.net/`

##A note about the API: 

This app uses timeanddate.com's API to update a small clock at the bottom of the screen. 

The free subscription to this API has a limited number of requests, can only check the time for a fixed few countries, (This app uses Amsterdam, as an example) and expires after a set amount of time.

If the clock does not appear, uncomment this line in script.js and view the console:

`console.log(responseText);`

If the message states that authorisation has failed, then the key has expired. I set the maximum time until it expires, but this may not have worked.

If the message states that I have no request credits left, it means that too many calls were made to the API during testing, and the free version has run out.

In either case, the information has been successfully sent to the API, and recieved by my program, but the processing cannot be done as no data could be sent.
