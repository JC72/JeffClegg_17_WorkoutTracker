# JeffClegg_17_WorkoutTracker

This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been loaded to my Personal GitHub Page and deployed to my Heroku account. To get this project up and running, you can follow the deployment link that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [Assignment](#assignment)
5. [File Structure](#filestructure)
6. [License](#license)
7. [Execution](Execution)
8. [Credit](#credit)
9. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_17_WorkoutTracker)
* [Active Site](https://immense-mountain-41240.herokuapp.com/?id=6010bcad1c9fbf0015ae2408)

## Project Overview <a name="projectoverview"></a>
* Uses CSS, Node.js, JQuery, JSON, Express, mongoose, MongoDB and Heroku to create a active web page which allows the user to add new workouts, save them, put new workouts into the same day and see the stats for all the workouts.  This is accomplished using CRUD (create, retrieve, update & delete).

## Demo:

![](https://github.com/JC72/JeffClegg_17_WorkoutTracker/blob/main/public/assets/video/demovideo.gif)

## Assignment
### This assignment contains the following features:

* Main Page
    * Contains a header with a image and name for the application.
    
    * Shows the all the information for the last workout that was undertaken.

    * A Continue button that allows the user to add to their daily workout.

    * A add new workout to add a different type of workout to the day.

    ![Home Page](https://github.com/JC72/JeffClegg_17_WorkoutTracker/blob/main/public/assets/screenshots/homepage.png)

* Exercise Page
    * Contains input fields to enter the exercise information

    * Has a complete button to add the exercise and return to the main page.

    * Has a add workout button to add the workout, clears the field and allows the user to add another workout for that day.

    ![Entered Page](https://github.com/JC72/JeffClegg_17_WorkoutTracker/blob/main/public/assets/screenshots/exercisepage.png)

* Dashboard Page
    * Shows a pie chart for the duration of exercises performed.

    * Shows a pie chart for the total pounds lifted in a specific exercise performed.

    * A bar graph for the minutes that was accumlated for the workouts during the week.

    * A bar graph for the total pounds lifted for each day for seven days. 


    ![Ate Page](https://github.com/JC72/JeffClegg_17_WorkoutTracker/blob/main/public/assets/screenshots/statspage.png)



## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- JEFFCLEGG_17_WORKOUTTRACKER
    |-- models
    |   |-- index.js
    |   |-- workout.js
    |-- public
    |   |-- assets
    |   |   |--screenshots
    |   |   |   |-- homepage.png
    |   |   |   |-- statspage.png
    |   |   |   |-- exercisepage.png
    |   |   |--video
    |   |   |   |-- demovideo.gif
    |   |-- api.js
    |   |-- exercise.html
    |   |-- exercise.js
    |   |-- index.html
    |   |-- index.js
    |   |-- stat.html
    |   |-- stats.js
    |   |-- style.css
    |   |-- workout.js
    |-- routes
    |   |-- api-routes.js
    |   |-- html-routes.js (not used these routes are in APi-Routes)
    |-- seeders
    |   |-- seed.js
    |-- .gitignore
    |-- LICENSE
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- server.js
```

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/Burger?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Just click on the Active site link in the link section or go to
https://immense-mountain-41240.herokuapp.com/?id=6010bcad1c9fbf0015ae2408 in the web browser.


## Credit

* Would like to thank stackoverflow for helping me find fixes for some of my conflicts.  Especially with my problem when I was trying to add a new workout to my database.

* [Stack Overflow](https://stackoverflow.com/)

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp