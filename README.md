# Valorize NLW Rocketseat

Api made with NodeJs and Typescript in which users can get authenticated and post compliments to one another

## Installation

yarn 

yarn dev

## Dependencies

SQLite
Express
Typeorm

## Rules

- User Register

  [ x ] It is not allowed to register more than one user with the same email

  [ x ] It is not allowed to register a user without emails

- Tag Register
  [ x ] It is not allowed to register an unnamed tag

  [ x ] It is not allowed to register more than one tag with the same name

  [ x ] Registration by users who are not administrators is not allowed

- Compliments Register

  [ ] Users are not allowed to register a compliment for themselves

  [ ] It is not allowed to register compliments for invalid users

  [ ] The user must be authenticated in the application
