# Bookmarks

## Getting started

- check postgres app running [following student install](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/fundamentals/local_environment/README.md)
- `npm install`

**.env** :

```
PORT=8675
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=snack_a_log
PG_USER=postgres

```

**terminal**

- `npm run local_db_init`
- `npm run local_seed`

#### Alternative method (in command line)

```
$ psql -U postgres -f db/schema.sql
$ psql -U postgres -f db/seed.sql
```

#### Available routes

- GET `/` - landing page
- GET `/bookmarks` - index of all bookmarks

- GET `/bookmarks/:id` - show one (based on array position)
- GET `/bookmarks/`
- DELETE `/bookmarks/:id` - available through Postman
- POST `/bookmarks/` - available through Postman (see below for correct configuration)
- PUT `/bookmarks/:id` - available through Postman (see below for correct configuration (similar to POST))
- GET 404

#### Model

- name : string
- url : string
- category: string
- is_favorite: boolean
