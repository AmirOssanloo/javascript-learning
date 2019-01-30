# Node Chat App

A chat application that is using Node.js and websockets to push messages and live mouse position data from server to each client in the same chat room. The application is using React/Redux for front-end with GSAP for UI animations.

## Project website
http://immense-cove-92394.herokuapp.com/

## Usage
Open up two or more browsers and enter the same room-name with each. You will be able to chat with other users while seeing their mouse cursor move in real-time. Mobile users will see Desktop users cursors but don't have one of their own.

- The login page have error handling to assure real strings.
- Chat will scroll back up if a user scrolls down in the chat history and then posts a new message.

## Purpose

I wanted to build an application that utilizes the most popular tools within front-end engineering. My aspiration is to become a UI Engineer and learning how React/Redux front-end with a Node.js backend works together was the purpose of this project.

I used websockets to display live mouse position data between the clients. The main purpose of this was to learn how data can flow between the client and the server. The secondary purpose was to build the foundation functionality for a much larger project that I have had in mind for a long time. I also did some testing with Mocha and Expect to further learn how real UI Engineers work.

Finally, I deployed the project to Heroku to learn how deployment to a cloud platform works. In an earlier version I also deployed the project to Google Cloud Platform using their App Engine. The reason for reverting back to Heroku was simply that I wanted to learn CI/CD on a smaller platform before moving over to Google Cloud Platform.