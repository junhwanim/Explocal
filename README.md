# Explocal

Demo: 

# Description

This is a website for travellers, new-comers or anyone who plan to travel or make new friends with the local people in their desired destinations. This fully responsive project has been built on **React**, **Node.js**, and styled with **styled-components**.

## Contributers

**Junhwan Im (Jun)**: https://github.com/junhwanim

![Screen Shot 2021-06-14 at 3 14 37 PM](https://user-images.githubusercontent.com/77517752/121947172-be964280-cd23-11eb-9a03-365d8ccb118d.jpg)




## Setup instructions

Fork the repository then clone the repository into your code editor.

Open a terminal and change directories into server by typing `cd frontend` hit enter, then run `yarn install` to install dependencies. Run `yarn start` to start the back-end.

Open another terminal and change directories into client by typing `cd backend` hit enter, then run `yarn install` to install dependencies. Run `yarn start` to start the front-end.

Head over to https://localhost:3000 to view the project.

## Endpoints

**Endpoints have been documented in [backend/README.md](https://github.com/junhwanim/Explocal/blob/main/backend/README.md)**

## What has been implemented in this project

### Home
#### Three different sections with scroll effect by **react-scroll**
- Home section inlcudes : brief explanation about Explocal and link to sign-up page.
- About section is to introduce Explocal to you.
- Meet-Guides section is where you can choose your desired destination and see our locals in that specific destination.
- Contact section is where you can contact Explocal's team about anything.

### Locals Page
- A list of locals living in the specific city you chose.
- React-select implemented to let you change the city and the country within the same page.
- Link to view local's details.

### Local Details Page
- Link to go back to Locals Page.
- View local's details.
- View local's contact informations.
- React-star-rating-component implemented to permit review system.
- Link to view the reviewers profile.

### Profile page
- View the current user's information.
- Edit the current user's information.
- Change password.
- Placeholders move to Labels on top of the input once input is active.

### Login page
- One form of Signup or Signin with animations.
- When mobile viewport, animated button will disappear and link to Signup or Signin will appear.
- Solid authentications implemented from backend.

### Page transition
- Framer-motion is used to make smooth trasition between pages.
