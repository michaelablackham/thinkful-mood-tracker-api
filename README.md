Service Side Capstone - Mood Tracker

### pages/calls
- [ ] log in => /user/login
- [ ] create account => /user/create-account
- [ ] user profile => /user/profile
- [ ] dashboard => /user/dashboard
- [ ] create new entry => /user/new-entry

/mood-entries
  GET
  POST
/mood-entries/1
  GET
  PUT
  DELETE

**Back-end**

- [ ] Functionalities
  - [ ] Sign up, sign in and create a profile
    - [ ] User collection on MongoDB
    <!-- - [ ] Sign up (user creation, profile & info validation, etc.) -->
    - [x] Sign in (validating user credentials, creating/managing JWT tokens, etc.)
    <!-- - [ ] Account settings page -->
      <!-- - [ ] set reminders to fill in an entry -->
      <!-- - [ ] photo, name, phone number, permission for SMS, reminders -->
  - [ ] create new entry
    - [x] mood rating: radio button 1-10 (**required**)
    - [x] textarea for open notes
    - [ ] rate activity level (radio select)
    - [ ] time to bed/time you woke up
    - [x] multi select for activities (keywords to sort data by)
      - went for a run,
      - took a walk,
      - hung out with friends,
      - drank a beer
      - (other) create your own
  - [ ] dashboard
    - [x] show default graph (moods over the past week)
    - [ ] average happiness level
    - [ ] activities that make you happiest
    - [ ] happiest day of the week
    - [x] button to create new entry
    - [x] newsfeed (listing of last couple entries made)
      - include a button to see a full view of entries
    - [ ] trends
      - enable user to filter/sort by default (time) or by activities, sleep etc to see common trends
