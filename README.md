
## Habit Tracker Project


## Intoduction

This is a Habit Tracker Project which is work for track user habbit for daily basis and weekly.
This app will help you to create and maintain an awesome daily and weekly routine.



## Frontend technology

- html

- css

- Bootstrap

- EJS


## Backend technology 
- Node js

- Express

- MongoDB



## Features

- you can add multiple habits to track habits like     reading a book, going to the gym etc.
- Track each habit everyday. These are the 3 statuses of a habit:
    - Done - Mark the habit as done for a day.
    - Not done - Mark the habit as not done for a day
    - None - User did not take any action on a habit for a day
- A view to show all current habits. Here give an add  button where you can add a new habit to track
- A view to display 7 days of each habit:
    - Show today where user can mark todays habit
    - And show the previous 6 days and the status of that habit for each day
    - A user can toggle between the three (above mentioned) statuses of a habit i.e. I can change today’s status as done, not done or none anytime.
    


## Folder and files structure


Habit_traker

    |-----assets
    |       |--- css
    |       |     |-- bootstrap.css
    |       |     |-- dashboard.css
    |       |     └-- style.css
    |       |--- images
    |             |-- clend.jpg
    |             |-- logo.jpg
    |             
    |------ config
    |         └---middlewear.js
    |         └---mongoose.js
    |         └---passport-local-stretegy.js
    |------ controllers
    |         └---deshboard_controller.js
    |         └---user_controllers.js
    |------ models
    |         └--- habit.js
    |         └--- user.js
    |------ routes
    |         └--- index.js
    |         └---user.js
    |         └---deshboard.js
    |          
    |------ views
    |         |----- Partials
    |            L---masseges.ejs
    |         L--- dashboard.ejs
    |         L--- layout.ejs
    |         L--- login.ejs
    |         L--- register.ejs
    |         L--- welcome.ejs
    |         
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md
## Installation

Clone the latest Repository

```bash
  npm install my-project
  
```
into the my project folder
```
cd habit_traker
```
Installation all  NPM dependencies
```
npm install
```
then start your project

```
npm start
```

Server runing on   http://localhost:9997/

    