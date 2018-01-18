
# Resources for Boston Queer Folk Front End Repository

This repository contains the front-end code for an application designed to connect queer people in the Boston Area to the resources that exist for their benefit.

The back end repository can be found here: https://github.com/gercks/QueeResources-API

The deployed database can be found here: https://aqueous-falls-81772.herokuapp.com/queeresources

And the deployed front end can be found here: https://gercks.github.io/QueeResources-Front-End/

Here's what the app currently looks like:
<img src="https://imgur.com/a/Q4aNL">

## Technologies used

This application was made using:

HTML
handlebars
SCSS
Ember

## How it was made

I began this project by creating a functional back end database using Ruby and Ruby on Rails, the link to which can be found above.

Then, I began using ember to build the front end. I began by creating a route to display all of the resources in the app as a list of links that bring the user to the page each specific resource. I displayed both using handlebars and both get their functionality through ember. I then created a route to display all of the resources the signed-in user has created (if any). This route is only visible to signed in users, and it contains forms to create and update resources as well as a way to delete resources.

## Improvements to be Made

I am by no means done with this app. I have a few major updates to functionality that I still want to do: I want to have the front page separate resources by type via buttons, so a user can click on the type of resource they're looking for and be brought to the proper list. I also want to add like and comment options for users. Finally, this badly needs styling.

## User Stories and Wireframes

Here is the original wireframe for this project:
<img src="https://imgur.com/a/6dkpv">

When building this app, I kept the following user stories in mind.

- Resources are organized in a way that is easy for me to read and understand
- I can add and update my own resource without worrying that another user will delete it (but an administrator might)
- I can navigate to a page that is specific to the resource I want to learn more about that contains more information
- I can view all resources in a list on the same page
- I can view all information without logging in
