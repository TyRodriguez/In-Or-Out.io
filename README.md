# In-or-Out
Project 1 for the food delivery app

## Description
More than 1 in 3 US consumers are following a specific diet or eating pattern due to cultural, religious, allergy, health or ethical reasons. We’ve developed an app, called In-or-Out that consumers can use to quickly get a clear list of restaurants that allow delivery or take-out in the user’s area that cater to their specific dietary needs.

Food search app that takes user selection of specific dietary requirements from a dropdown field, queries those needs in Google Places API based on a set radius from the user’s zip code, then returns a list of restaurants on the website that meet those needs. Users will see the restaurant name, address, rating reviews, open status, and a photo for the restaurant.

User story: I am a person with dietary restrictions, I want to be able to input my dietary needs in an app so that I can find restaurants near me that are currently open, meet my dietary needs and will deliver to my address or allow takeout.
Motivation for development:
Inspired by the need for shelter-in-place during COVID-19 pandemic
Created for individuals with special diets

## Challenges:
Zomato API responses were not the same as Google Places API responses
Trouble getting Ajax call to work, which required a proxy while not deployed
Not every restaurant in google had opening hours or a photo, which required a short-circuit evaluation to check if there the data existed in the API response before appending to our HTML, else do nothing.
## Successes:
Getting complex responses from the Google API
A beautiful, working application

## Deployed Application
https://tyrodriguez.github.io/In-Or-Out.io/
