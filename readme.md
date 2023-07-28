Description:
I have an interview in 2 days, so I am spinning up a speed math game I like in React and Ruby on Rails.

App description. The app is a recreation of https://arithmetic.zetamac.com/

The pages will be:

-   Home page
-   Game page
-   Score page

The behaviour of the app will be:

-   User goes to home page
-   User sees a set up inputs for number range and duration (They are pre filled with the default values)
-   User changes the values if they want
-   User clicks start game
-   User is taken to the game page
-   User sees a timer counting down from the duration
-   User sees a math question
-   User types in the answer
-   If the answer is correct, the user gets a point and a new question is generated
-   If the answer is incorrect, nothing happens
-   If the timer runs out, the user is taken to the score page
-   User sees their score
-   User sees a button to go back to the home page and another button to play again with the same settings
-   If the user clicks on play again, they are taken to the game page and the score is reset to 0
-   If the user clicks on the home page button, they are taken to the home page and the score is reset to 0
-   All the data is persisted in the database and shown on the home page

The app will be built with:

-   React
-   Ruby on Rails
-   PostgreSQL
-   Jest
