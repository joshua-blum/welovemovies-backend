# welovemovies-backend

This project is a demonstration of utilizing Knex.js and Express.js in order to perform PostgreSQL queries that in correlation with Node.js routes.

## Overview

There are five SQL tables: movies, critics, reviews, theaters, and movies_theaters. 
Here is a [link](https://lucid.app/lucidchart/invitations/accept/inv_f0951d08-c392-462b-856f-2f0818f7c0e8?viewport_loc=-29%2C197%2C2230%2C1047%2C0_0) to the ERD for these SQL tables for quick reference.

## Routes

The following is the list of routes that are accounted for in this project:

* /movies
* /movies/:movieId
* /movies/:movieId/theaters
* /reviews/:reviewId
* /theaters

---

Special thanks to Thinkful and Qualified.io for providing the lessons and boilerplate code for this project.
