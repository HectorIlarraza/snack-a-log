## Back-end Start Here

### Requirements

- Using the given template, build an Express API with the following routes:

|  #  | Action  |     URL     | HTTP Verb |    CRUD    |               Description               |
| :-: | :-----: | :---------: | :-------: | :--------: | :-------------------------------------: |
|  1  |  Show   | /snacks/:id |    GET    |  **R**ead  | Get an individual view (show one snack) |
|  2  | Destroy | /snacks/:id |  DELETE   | **D**elete |             Delete a snack              |
|  3  |  Index  |   /snacks   |    GET    |  **R**ead  |   Get a list (or index) of all snacks   |
|  4  | Create  |   /snacks   |   POST    | **C**reate |           Create a new snack            |
|  5  | Update  |   /snacks/:id   |   PUT    | **U**pdate |           Update a new snack            |

## Data Model

Your database MUST be named `snack_a_log`
This API has one model: `snacks` with the following:

```
id: unique integer that automatically generates a new number with a new entry
name: string, required
image: string,
fiber: integer, default 0
protein: integer, default 0
added_sugar: integer, default 0
is_healthy: boolean
```

## Getting Started

```
├── README_BE.md (what you are currently reading)
├── back-end (a basic express app with tests)
├── front-end (a basic create-react-app with tests)
```

**NOTE:** - You will have 2 `package.json` files in this project

- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

### `back-end` Set Up

- Make sure you are on the same level as the `package.json` of the `back-end` directory
- install necessary dependencies
- `touch .env`

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=snack_a_log
```

Build a basic, functional express app.

- use the `app.js` file to
  - require express
  - require and configure cors
  - set up the middleware for the body parser
  - make a basic `get` route at `/` that sends a simple string `Get Snack'n at Snack-a-log!`
  - use `module.exports` to export the functionality needed into
- the `server.js` file

  - require `app`
  - configure `dotenv`
  - set up the `PORT` from the `.env` file, using the recommended [methods from the docs](https://www.npmjs.com/package/dotenv)
  - set up `app.listen` to use the `PORT` variable

- Run `npm run test` and the first test should pass (no database call, just a hard-coded string)

```
  Basic root route
    /
```

**Note** The above functionality MUST work before moving on to the next section.

## Adding a Database Call

- edit the `db/schema.sql` file to be your own
- use `db/seed.sql` it should work without you needing to edit it, if you have an error, go back and continue to work on your `db/schema.sql` and confirm your `.env` settings/configuration

To run your SQL files

- `npm run db:init`
- `npm run db:config`

You should us `psql` and enter the shell, connect `\c snack_a_log` and run a few more commands to confirm

- Your database has been created
- Your table has been created
- Your seed data has been inserted into terminal

## Routes

After you have a basic express app working, and you have confirmed that your db/table is set up work on the `snacksController.js` to get your routes working

- don't forget to configure this in `app.js`
- add your database queries to **queries/snacks.js** file and be sure to export them into your `snackController.js`
- remember that in order to test any route that is not a `GET` you must use Postman/Insomnia

- Remember to select `POST` and configure the `body` in Postman/Insomnia
- Remember to choose `body` => `raw` => `json` for the request body
- Remember you must use [proper JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#json_structure) - (double quotes around key values and properties, no single quotes, no trailing commas etc.)

![](./assets/postman-create.png)

The shape of the data you are returning should include an object with a `success` key and a `payload` key. This is different than simply returning the data from the database.

**Thought Question** Why might you want to return more than just the database query?

```js
{
  "success":true,
  "payload":{
    "id":3,
    "name":"Honey Covered Granola",
    "image":"https://picsum.photos/id/312/300/300",
    "fiber":30,"protein":12,"added_sugar":22,
    "is_healthy":false
  }
}
```

To run tests:

- `npm run test`

## Routes & Tests

### FUNCTIONALITY

- Basic root route` /`
  - returns a string
- GET `/snacks/:id`
  - with a valid id fetches the correct snack
  - with an invalid id, sets status to 404 and returns error
- DELETE `/snacks/:id`
  - with a valid id, deletes the correct snack
  - with an invalid id, does not delete anything
- GET `/snacks`
  - returns all snacks
- POST `/snacks`
  - with a valid name and image URL can create a snack
  - with no valid name, return a `422` error with a message `Must include name field`
  - with valid snack name, but no image, set default image to `"https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"` (hint: put this logic inside the `POST` route)
  - **IMPORTANT** the `is_healthy` attribute/column is not something that we should set manually. We decide whether a snack is healthy or unhealthy based on the following attributes:
    - fiber
    - protein
    - added_sugar
  - There are tests in place for the `confirmHealth` file/function. Implement and use this function to to set the `is_healthy` attribute on newly created snacks

### Additional functionality:

You can write this functionality in the POST route or create a new function and use it there

- Format the snack name such that a snack that as long as word is longer than two letters, it is capitalized
  e.g.:

  - `ants on a log` => `Ants on a Log`
  - `Flamin' Hot CheeTOS` => `Flamin' Hot Cheetos`
  - `COMBOS` => `Combos`

- Snack Health
  The value of `is_healthy` should be a boolean. It is determined by the following
  - if protein or fiber is greater than or equal to 5 and added_sugar is less than 5 then the snack is_healthy = true
  - if any values are not numbers (ie empty strings, not numbers) then snack is_healthy = null

To add this functionality, create the function inside the `confirmHealth.js` file. You should `require` this function in your `snackController.js` and then call it.

To summarize:

- in the `confirmHealth.js` file
- write a function called `confirmHealth`
- don't forget to export this function
- pass in the snack object to the function
- if there are missing values for protein or fiber or added_sguar, snack.is_healthy = null
- if protein is greater than or equal to 5 OR fiber is greater than or equal to 5 AND added_sugar is less than 5, then snack.is_healthy = true
- else, the snack.is_healthy - false
- don't forget to `return` the value

## ONWARDS

[Continue to the next README for the details of create-react-app](./README_FE.md)
