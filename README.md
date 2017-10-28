# The Mood Tracker

My capstone for the Node.js course of Thinkful's Front-end Web Development
bootcamp.
The source code for the UI is available
[here](https://github.com/michaelablackham/thinkful-mood-tracker-ui).

## TODO

**Back-end**

- [ ] User Accounts
  - [ ] User account/profile/settings page
    - [ ] Users collection on MongoDB
    - Name
    - Email
    - Photo

- [ ] Authentication
  - [ ] Sign in  
    _Validating user credentials, creating/managing JWT tokens, etc._

- [ ] Mood Tracking
  - [ ] Moods collection on MongoDB
    - Date
    - Rating (1-10 points)
    - Bed time
    - Activity Level
    - Activity Type
    - Food
    - Drinks
    - Works
    - Notes

**Front-end**

- [ ] Dashboard
  - [ ] show default graph (moods over the past week)
  - [ ] average happiness level
  - [ ] activities that make you happiest
  - [ ] happiest day of the week
  - [ ] button to create new entry
  - [ ] newsfeed (listing of last couple entries made)
    - include a button to see a full view of entries
  - [ ] trends
    - enable user to filter/sort by default (time) or by activities, sleep etc to see common trends

## API

```
- /
  - /users
    GET: list/search users
    POST: create an user
    - /users/:uid
      GET: single entity
      POST: not allowed
      PUT: update
      DELETE
    - /users/auth
      ?

  - /mood-entries
    GET: single entity
    POST: not allowed
    PUT: update
    DELETE
```

**ISSUES/to do/good ideas**

- [ ] break up all models for all collection
- [ ] don't group too many items in to one issue
- [ ] decide on framework (bootstrap, bulma, etc)
- [ ] start with the most important things - (entry collection, dashboard, sign in)

- [ ] authentication/sign in
- [ ] create new entry
- [ ] dashboard
- [ ] convert data in to graph





### pages/calls
- [ ] log in => /user/login (within users.js)
<!-- - [ ] create account => /user/create-account -->
<!-- - [ ] account setting => /account -->
- [ ] dashboard => /user/dashboard (separate models/model.js)
- [ ] create new entry => /user/new-entry (within entry.js)

/mood-entries
  GET
  POST
/mood-entries/1
  GET
  PUT
  DELETE
