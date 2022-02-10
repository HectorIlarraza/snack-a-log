

## PART 2

### Requirements

- Using the given template, build a create-react-app with the following views (destroy will be accessible through the show route):

|  #  | Action |       URL        | HTTP Verb |         CRUD         |                                    Description                                     |
| :-: | :----: | :--------------: | :-------: | :------------------: | :--------------------------------------------------------------------------------: |
|  1  |  Show  |   /snacks/:id    |    GET    | **R**ead /**D**elete | Get an individual view (show one snack) (be able to delete a snack from this view) |
|  2  | Index  |     /snacks      |    GET    |       **R**ead       |                        Get a list (or index) of all snacks                         |
|  3  |  New   |     /snacks      |    GET    |      **C**reate      |                          Use a form to create a new snack                          |
|  4  |  Edit  | /snacks/:id/edit |    GET    |      **U**pdate      |                       Use a form to create a update a snack                        |

## Data Model - Reminder

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

**NOTE:** - You will have 2 `package.json` files in this project - confirm you are working with the correct one as you develop your front-end

- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

### `front-end` Set Up

- keep your back-end running
- open a new tab, navigate to the front-end directory
- install dependencies
- `npm start`

### Run Tests

- keep your back-end and front-end apps running
- `npm test`

  - If `cypress` is not found try:

    - `npx install cypress`
    - `npm run cypress:open`

This will install a version of cypress for this build

Set up the URL for your backend in a `.env` file:

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

Check and confirm the function so it returns the URL for your back-end

There are more tests for the index page. The next section will address the final two in the `index page` section.

**NOTE:**`Index Page CSS` tests are an opportunity for you to work with testing CSS in Cypress, they are a chance for you to get experience, but are the least important to complete.

### HeartHealth.js

**src/Components/HeartHealth.js**

- HeartHealth is a React Component that takes a prop `snackHealth`
- It currently shows a `p` tag with `???` as the text.
- You must change it so that
- `snackHealth` is a Boolean value (true or false) that is being passed down as a prop from a parent component
- if `snackHealth` is true
  - render an image of `heartSolid` with an alt text of `healthy food`
- if `snackHealth` is false
  - render ran image of `heartOutline` with an alt text of `unhealthy food`
- the images are in `src/assets`

  - heartSolid is `heart-solid.png`
  - heardOutline is `heart-regular.png`

- **IMPORTANT** - please keep `Strawberries` (healthy) and `Healthy Birthday Cake Square` in your database/list in order for the Cypress tests in the index to pass. If needed, go back to your back end and run `npm run db:init` and `npm run db:seed`

- Use the cypress interface to test/rerun tests/get feedback
- All the tests under `index page` should pass
- Move on to the next section, at the very end, you will return to the `Index Page CSS` tests

### Snack Details/Show Page

Build the `/snacks/:id` (Show page/ `src/SnackDetails.js`) component to match the following specs

Confirm that your page is set up correctly:

- The same header from the `index` page is visible and has the same text
- The header has the same navigation to the `New` page
- there is a main tag (from `App.js`)

If the above tests pass, you are ready to build!

### Build a component that will have state

You will have one data object that will have all the data of one snack

#### First, build out the static components.

- article
  - aside
    - h4 with text `the snack health`
    - your `HeartHealth` component that you previously built. Be sure to pass it the correct props (it should default to empty heart until you have data for snack.is_healthy coming in as `true`)
  - div
    - h5: snack name
    - image with the snack image, and an alt of snack name
    - h6: `Protein:` snack protein
    - h6: `Fiber:` snack fiber
    - h6: `Added Sugar:` snack added_sugar
  - div with a class of `showNavigation`
    - div
      - anchor with an href of `/snacks`
        - button with the text `Back`
    - div
      - button with the text `Delete`

#### Add functionality

##### Get One Snack

- make an API call to `/snacks/:id` where `:id` matches the value in the URL of your browser on page load
- Then, you will get the response and set the state for your snack data
- This should update your browser view to see the snack name, image etc.

Don't forget to import `axios`, your `apiURL` for your back-end and you'll be using

- `Link`
- `useParams`
- `useNavigate`

from `react-router-dom`

**Note**: if you are running your tests often, your db may start filling up with raspberry snack objects (This is from cypress tests). If you get _too many_ you can re-initialize the db, reseed it and restart nodemon- you can do it in one line, like so:

-`npm run db:init && npm run db:seed && nodemon`

##### Delete One Snack

- on the button with the text delete, add an onClick event that will call a function to delete a snack
- on successful delete, the user should be taken back to the `/snacks` view

### New Form

On the route `/snacks/new` and in the file `SnackNewForm.js` build a form for creating a new snack

Create a form that has labels and inputs for

- name (text)
- image (text)
- fiber (number)
- protein (number)
- added_sugar (number)
- submit input/button

Make the form functional so that typing in the various fields updates the state of the component

On submit, make a call to the database that will POST the form data. Then, on successful database insertion, redirect the view back to `/snacks`

**Note**: if you are running your tests often, your db may start filling up with potato chip snack objects (This is from cypress tests). If you get `too many` you can re-initialize the db, reseed it and restart nodemon- you can do it in one line, like so:

-`npm run db:init && npm run db:seed && nodemon`

### Index CSS

**NOTE:** Please do not get distracted by the CSS. All images from the database are square have a 1:1 aspect ratio. If you choose images with a different aspect ratio, they will look like they need more styling.

Either go to the `db/seed.sql` file and take the URLS for images there or use google advanced search
https://www.google.com/advanced_image_search

Last part! It's time to style the index page (only the index page needs CSS)

- import the google fonts `Overlock and Carter One`
- the `body` should have a font of `Overlock`
- the `h1` should hav ea font of `Carter One`
- `main` has a width of 90% and is centered using `margin: auto`
- `nav` has a background color of `rgb(37, 36, 34)`
- `nav` has a display of flex
- `nav`'s contents are justified with `space-between`
- `nav` has padding 15px (top and bottom) and 45px (left and right)
- `nav` has margin-bottom 15px
- `a` has no `text-decoration` and a color of `rgb(235, 94,40)`
- `h4` with margin 0 and font size 16px with text-align center
- `div` element inside of article element with a class of `Snack`
- `article` has a display of flex and flex-wrap wraps the content
- `article` has content justified with space-between and padding of 1em
- `div` inside of the element with the class of Snacks has a width of 150px and padding of 1em
- `div` inside of the element with the class of Snacks has background color of rgb(255, 252, 242)
- `img` of elements inside of the element with the class of Snacks have a width of 150px

![](https://i.imgur.com/W4zQMF2.png)

### Other views, approximately, for reference

show
![](https://i.imgur.com/krja0Ru.png)

New

![](https://i.imgur.com/a37Ecmo.png)
