# General Assembly Project 02 : React Hackathon

Bete Yemane | Lauren Bell

### Project Brief
To create a front-end application using React and at least one external API.

### Timeframe
2 days

## Technologies used

* HTML5
* SASS/SCSS (CSS preprocessor)
* JavaScript (ES6)
* React
* Webpack
* Bulma (CSS framework)
* Git/GitHub

## Deployed version

---> https://by-react-hackathon.herokuapp.com

## Application - Wevent

![Screenshot 2019-03-27 at 19 01 55](https://user-images.githubusercontent.com/44004811/55104788-fb35df00-50c2-11e9-8f6e-7a23ce8aaa10.png)

## Overview

Wevent is a web application that allows users to select a city and view events that are weather appropriate at that current time. For example, if the the current temperature is over a certain amount of degrees, events of an'outdoorsy' nature will be generated.

Homepage
![Screenshot 2019-03-27 at 19 12 55](https://user-images.githubusercontent.com/44004811/55105420-616f3180-50c4-11e9-860b-9fd570a8f842.png)

![Screenshot 2019-03-26 at 22 53 58](https://user-images.githubusercontent.com/44004811/55105499-97141a80-50c4-11e9-95cd-dfb122ceaf9d.png)

![Screenshot 2019-03-27 at 19 15 25](https://user-images.githubusercontent.com/44004811/55105554-b448e900-50c4-11e9-849d-fac4afe0f7e9.png)

## Process

As the timeframe was only two days, we first began with a quick brainstorming session to identify the topics we were both interested in, then dived straight into searching for API's that we could use to build to use as our base product. 
We used two API's:
* Skiddle to extract data for our events 
* Weather Unlocked to get the current temperature of the different cities

We tested the endpoints of our API using Insomnia and started to build the front-end once we felt satisfied with the data being retrieved.
Displaying event information was our first priority where initially used the general multiple event endpoint. To then enhance user experience, we began to build a search bar that gives you the option of selecting a city in the UK. As Skiddle does not provide an endpoint that refines data by city, but by latitude and longitude, we hard-coded each cities lat and long and stored them in a variable with the name of town being the key.

The next step was to implement the weather feature. We had to think of a clever system that displayes events that are deemed appropriate for the weather. We acheived this by using Skiddle's endpoints that filter the different event types, such as festivals, live music, exhibitions and attractions, and sporting events. By separating the events that occur outdoors from those that are indoors, we were able to combine this data with the weather API and display the events depending on the current temprerature.

## Challenges

## Wins

## Future Features

- another api for lat and long info
- a map

