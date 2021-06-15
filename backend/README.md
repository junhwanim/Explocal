# Setup and ports

Open a terminal and change directory to backend `cd backend` then run `yarn install` to install dependencies. Run `yarn start` to start the server.

The server runs on port **8000**, so you can access the server at `http://localhost:8000/`. As a test, you can go to `http://localhost:8000/api/destinations`. You should see a JSON object shown in the browser:

```json
{
  "status":200,
  "message":"Success",
  "data":
    [
      {
        "_id":"60a40667f410a8287a97e875",
        "code":"CA",
        "country":"Canada",
        "cities":
          ["Montreal","Ottawa","Toronto","Vancouver"]
      }
      // More destinations...
    ]
}
```

Add a `proxy` to the server in `client/package.json`. This will allow you to use relative paths in your `fetch` requests to the server.

```json
"proxy": "http://localhost:8000"
```

---

# Endpoints

## GET /api/destinations

This endpoint fetches all the destinations from MongoDB.

Should come in this structure:

```json
{
  "status":200,
  "message":"Success",
  "data":
    [
      {
        "_id":"60a40667f410a8287a97e875",
        "code":"CA",
        "country":"Canada",
        "cities":
          ["Montreal","Ottawa","Toronto","Vancouver"]
      }
      // More destinations...
    ]
}
```

## GET /api/users

This endpoint fetches all the users from MongoDB.

Should come in this structure:

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "_id": "ed9c392a-bad7-4fac-b9ef-84831c2bffe9",
    "country": "Canada",
    "city": "Vancouver",
    "name": "Stephanie",
    "email": "stephanie@google.com",
    "username": "stephanie",
    "password": "stephanie1234",
    "bio": "Beer specialist. Twitter enthusiast. Subtly charming web ninja. Travel fan.",
    "avatarSrc": "https://media-exp3.licdn.com/dms/image/C5603AQEKmXcAf8v1GA/profile-displayphoto-shrink_800_800/0/1585861785208?e=1628726400&v=beta&t=R6o16TYhc3LTtM64I9M3ReNMwgfp9EFxPBlkO1E49hA",
    "local": "true",
    "rating": [
      {
        "rate": 5,
        "review": "Amazing person! I miss drinking beer with her.",
        "timeStamp": "Jun 9, 2021 11:04 PM",
        "by": "Mike"
      }
    ]
    // More users...
  }
}
```

## GET /api/user/:id

This endpoint fetches a user by user's _id.

Should come in this structure:

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "_id": "ed9c392a-bad7-4fac-b9ef-84831c2bffe9",
    "country": "Canada",
    "city": "Vancouver",
    "name": "Stephanie",
    "email": "stephanie@google.com",
    "username": "stephanie",
    "password": "stephanie1234",
    "bio": "Beer specialist. Twitter enthusiast. Subtly charming web ninja. Travel fan.",
    "avatarSrc": "https://media-exp3.licdn.com/dms/image/C5603AQEKmXcAf8v1GA/profile-displayphoto-shrink_800_800/0/1585861785208?e=1628726400&v=beta&t=R6o16TYhc3LTtM64I9M3ReNMwgfp9EFxPBlkO1E49hA",
    "local": "true",
    "rating": [
      {
        "rate": 5,
        "review": "Amazing person! I miss drinking beer with her.",
        "timeStamp": "Jun 9, 2021 11:04 PM",
        "by": "Mike"
      }
    ]
  }
}
```

## PATCH /api/user/:id

Once the loggedin-user write a review on another user, this endpoint will update the new review.

When loggedin-user writes new review like below:

<p align="center">
<img width="auto" height="500px" alt="Screen Shot 2021-06-14 at 1 44 12 PM" src="https://user-images.githubusercontent.com/77517752/121935611-9fdd7f00-cd16-11eb-83cf-42a8eba04a25.png">
</p>

This endpoint will update the given information, time, and name of the loggedin-user like below:

```json
{
  "rate": 4.5,
  "review": "She is very friendly and brought me to a lot of beautiful places in Montreal.",
  "TimeStamp": "It shows the time when loggedin-user submits",
  "by": "Current loggedin-user's name"
}
```

## POST /api/user

This endpoint creates new user in the form format. 

Once it receives JSON body from the signup form and passes all authentications like below:

<p align="center">
<img width="auto" height="700px" alt="Screen Shot 2021-06-14 at 2 04 15 PM" src="https://user-images.githubusercontent.com/77517752/121938277-99043b80-cd19-11eb-8a53-64b2b9d5887d.png">
</p>

It will update the information in MongoDB in this form:

```json
{
  "status": 201,
  "message": "Updated",
  "data": {
    "_id": "ed9c392a-bad7-4fac-b9ef-84831c2bffe9",
    "country": "Canada",
    "city": "Montreal",
    "name": "stefany",
    "email": "stefany@gmail.com",
    "username": "stefany",
    "password": "stefany1234",
    "bio": "Coffee practitioner. Tv guru. Devoted thinker. Amateur music maven. Web fan. Bacon expert.",
    "avatarSrc": "https://media-exp3.licdn.com/dms/image/C4E03AQFcchvv3qTcLw/profile-displayphoto-shrink_800_800/0/1619712894123?e=1629331200&v=beta&t=5UdtlXAHjAMC1neTd3vgxt5VvwuZiDydHF0V3eHgymY",
    "local": "true",
    "rating": [
      // No rating since she is a new user
    ]
  }
}
```
If the authentications fail, It will show the error accordingly.

## PATCH /api/user/account/:id

Once user is loggedin, the user can go to profile page and edit user's information.

If the informations pass every authentications, this endpoint will update the new information in MongoDB.

<p align="center">
<img width="auto" height="700px" alt="Screen Shot 2021-06-14 at 2 18 43 PM" src="https://user-images.githubusercontent.com/77517752/121940356-00bb8600-cd1c-11eb-8b6b-84dab6705843.png">
</p>

If the authentications fail, It will show the error accordingly.

## PATCH /api/user/password/:id

Once user is loggedin, the user can go to profile page and change the password.

If the informations pass every authentications, this endpoint will update the new password  in MongoDB.

<p align="center">
<img width="auto" height="500px" alt="Screen Shot 2021-06-14 at 2 24 21 PM" src="https://user-images.githubusercontent.com/77517752/121940738-6ad42b00-cd1c-11eb-997b-5d125d82b276.png">
</p>

If the authentications fail, It will show the error accordingly.



