
# Explocal


Demo: https://www.youtube.com/watch?v=Mvarx_JUToY

# Description

This is a website for travellers, new-comers or anyone who plan to travel or make new friends with the local people in their desired destinations. This fully responsive project has been built on **React**, **Node.js**, **Express**, **MongoDB** and styled with **styled-components**.

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

### Local-Details Page
- Link to go back to Locals Page.
- View local's details.
- View local's contact informations.
- React-star-rating-component implemented to permit review system.
- Link to view the reviewers profile.

### Profile Page
- View the current user's information.
- Edit the current user's information.
- Change password.
- Placeholders move to Labels on top of the input once input is active.

### Login Page
- One form of Signup or Signin with animations.
- When mobile viewport, animated button will disappear and link to Signup or Signin will appear.
- Solid authentications implemented from backend.

### Page Transition
- Framer-motion is used to make smooth trasition between pages.

### Mobile Responsiveness 
- All pages are mobile-friendly.
- Hamburger bar is implemented when browser is on mobile-viewport.
- Sidebar will drop from top of the browser when hamburger bar is clicked.

## Dependencies used in the front-end:
```json
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "framer-motion": "^4.1.17",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-rating-stars-component": "^2.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-scroll": "^1.8.2",
    "react-select": "^4.3.1",
    "styled-components": "^5.3.0",
    "web-vitals": "^1.0.1"
  }
```

## Dependencies used in the back-end:
```json
"dependencies": {
    "assert": "^2.0.0",
    "body-parser": "^1.19.0",
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "file-system": "^2.2.2",
    "moment": "^2.29.1",
    "mongodb": "^4.0.0-beta.4",
    "morgan": "^1.10.0",
    "node": "^16.1.0",
    "nodemon": "^2.0.7",
    "path": "^0.12.7",
    "uuidv4": "^6.2.10"
  }
```
---
## Screenshots

### Home Section
![Screen Shot 2021-06-14 at 4 14 44 PM](https://user-images.githubusercontent.com/77517752/121954701-0f5e6900-cd2d-11eb-8b6e-85a91704f106.jpg)

### About Section
![Screen Shot 2021-06-14 at 4 15 10 PM](https://user-images.githubusercontent.com/77517752/121954751-1be2c180-cd2d-11eb-8b34-2f71d524cf51.jpg)

### Meet-Guides Section
![Screen Shot 2021-06-14 at 4 15 22 PM](https://user-images.githubusercontent.com/77517752/121954792-269d5680-cd2d-11eb-9d6f-1ace31329b26.jpg)

### Contact Section
![Screen Shot 2021-06-14 at 4 15 37 PM](https://user-images.githubusercontent.com/77517752/121954824-2f8e2800-cd2d-11eb-94c5-87746623be35.jpg)

### Signin Page
![Screen Shot 2021-06-14 at 4 15 55 PM](https://user-images.githubusercontent.com/77517752/121954857-3ae15380-cd2d-11eb-9707-bb1b5fda9eba.jpg)

### Signup Page
![Screen Shot 2021-06-14 at 4 16 13 PM](https://user-images.githubusercontent.com/77517752/121954889-446abb80-cd2d-11eb-8d2d-9685475c3833.jpg)

### List of Locals
![Screen Shot 2021-06-14 at 4 17 17 PM](https://user-images.githubusercontent.com/77517752/121954926-551b3180-cd2d-11eb-9ce9-8734de754f30.jpg)

### Local Page
![Screen Shot 2021-06-14 at 4 19 45 PM](https://user-images.githubusercontent.com/77517752/121954979-649a7a80-cd2d-11eb-871e-f4a00ac68464.jpg)
![Screen Shot 2021-06-14 at 4 17 32 PM](https://user-images.githubusercontent.com/77517752/121954994-682e0180-cd2d-11eb-8a1a-e10bc707317b.jpg)

### Local Page - Review Section
![Screen Shot 2021-06-14 at 4 17 50 PM](https://user-images.githubusercontent.com/77517752/121955048-7714b400-cd2d-11eb-8d27-f6890c766008.jpg)

### Profile Page - Account Section
![Screen Shot 2021-06-14 at 4 18 04 PM](https://user-images.githubusercontent.com/77517752/121955132-8f84ce80-cd2d-11eb-8473-a13c629997e5.jpg)

### Profile Page - Password Section
![Screen Shot 2021-06-14 at 4 18 21 PM](https://user-images.githubusercontent.com/77517752/121955171-9b709080-cd2d-11eb-9a0d-b174cd21169e.jpg)


