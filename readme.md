# Speed Math Game

## Introduction

This project is a recreation of the speed math game available at https://arithmetic.zetamac.com/ and is being built for an interview. The application is being built with ReactJS for the frontend and Ruby on Rails for the backend.

## Behaviour

The behaviour of the app is as follows:

1. User goes to the home page.
2. User sees a set of inputs for the number range and duration (They are pre-filled with the default values).
3. User changes the values if they want.
4. User clicks start game.
5. User is taken to the game page.
6. User sees a timer counting down from the duration.
7. User sees a math question.
8. User types in the answer.
9. If the answer is correct, the user gets a point and a new question is generated.
10. If the answer is incorrect, nothing happens.
11. If the timer runs out, the user is taken to the score page.
12. User sees their score.
13. User sees a button to go back to the home page and another button to play again with the same settings.
14. If the user clicks on play again, they are taken to the game page and the score is reset to 0.
15. If the user clicks on the home page button, they are taken to the home page and the score is reset to 0.
16. All the data is persisted in the database and shown on the home page.

## Tech Stack

FrontEnd:

-   ReactJS
-   react-router-dom v6
-   Jest

BackEnd:

-   Ruby on Rails
-   PostgreSQL

## FrontEnd

### Pages:

-   Home page
-   Game page
-   Score page

### Components:

-   Home page: GameSettingsForm, pastGames
-   Game page: Timer, Score, Question
-   Score page: Score
-   Shared components: Button, ExpandableList

### Routes:

-   /home
-   /game
-   /score

### State:

-   Global state: additionRange, multiplicationRange, duration
-   Home page: pastGames
-   Game page: score, timer, question, correctAnswer, userAnswer
-   Score page: score

## BackEnd

### Models:

-   Game
-   GameSetting
-   Question

### Controllers:

-   GamesController
    -   create_game(inputs: gameSettingParams)
    -   list_games(inputs: None)
    -   delete_game(inputs: gameId)
-   QuestionsController
    -   create_question_set(inputs: gameSettingParams)
    -   list_questions(inputs: gameId)

### Routes:

-   POST /api/v1/questions QuestionsController#create_question_set
-   POST /api/v1/games GamesController#create_game
-   GET /api/v1/games GamesController#list_games
-   GET /api/v1/games/:game_id/questions QuestionsController#list_questions
-   DELETE /api/v1/games/:game_id GamesController#delete_game

### Database tables:

-   Games: id, gameSettingsId, score, timestamp
-   GameSettings: id, additionRangeStart, additionRangeEnd, multiplicationRangeStart, multiplicationRangeEnd, duration
-   Questions: id, gameId, question, answer
