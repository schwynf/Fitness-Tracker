# Fitness-Tracker
 
![Repo Size](https://img.shields.io/github/repo-size/schwynf/Fitness-Tracker) <br> 
## Description <span id="d"></span> 
This is a fitness tracker application. The information is stored in a MongoDB database either on the localhost or heroku server depending on run time environment. Application features:
1. Tracks workout to display graphically and stores information for further data analysis.
    
## Table of Contents 
 <ul><li><a href="#i">Installation</a></li><li><a href="#npm">NPM Packages</a></li><li><a href="#heroku">Heroku Deployement</a></li><li><a href="#u">Usage</a></li><li><a href="#l">License</a></li><li><a href="#c">Contributing</a></li><li><a href="#t">Tests</a></li></ul> 
 
## Installation <span id="i"></span> 
1. Clone this repository.
    ```
    git clone https://github.com/schwynf/Fitness-Tracker.git
    ```
1. Navigate into the cloned directory.
    ```
    cd Fitness-Tracker
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. Create mongoDB database using the `schema.sql` file, located below.
    ```
    ./db/schema.sql
    ```
1. In the root directory of the project, start the server.
    ```
    node server
    ```
1. In your browser navigate to the following page.
    ```
    http://localhost:8080

## NPM Packages <span id="npm"></span>

| Package | Documentation |
| ----------- | ----------- |
| `express` | [Express](https://www.npmjs.com/package/express) |
| `mongoDB` | [MongoDB](https://www.npmjs.com/package/mongodb) |

## Heroku Deployment <span id="heroku"></span> 

This project is deployed on Heroku. The link to web app is:

[https://fitness-trace.herokuapp.com/](https://fitness-trace.herokuapp.com/)
 
## Usage <span id="u"></span> 
Track your daily fitness workouts.
 
## License <span id="l"></span> 
MIT 
 
## Tests <span id="t"></span> 
NO
 
## Author Info 
 
 Name: Schwyn Francis <br>
 <a href="https://github.com/Schwynf"><img src="https://img.shields.io/static/v1?label=Contact&message=Github&color=lightgrey" /></a>
 <a href="mailto:schwynf@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-lightgrey" /></a> <br>
 <img src="https://avatars.githubusercontent.com/u/59147321?" width="30%" />
 <br>