# Firebase Web Codelab - Start code

This folder contains the starting code for the [Firebase: Build a Real Time Web Chat App Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/).

If you'd like to jump directly to the end and see the finished code head to the [web](../web) directory.



To run the app, do the following:
```
cd project/codelab-friendlychat/web-start
firebase serve --only hosting

```
To rebuild the web-app
```
npm run build
```

This should start the app at http://localhost:5000




#Current state of the web app:

Stuff that works:
- We are able to send messages
- We are able to login
- Storing the messages in the db works fine

Stuff that doesn't work:
- Can't send images: Error: Cannot upload to firebase storage

Requirements:
- At any time, there will only be one Tutor and Tutee.
- When you open the app, there is a standard message for navigation.


Today's goals:
- 1. Tutee selects "where I need help" ---> Tutor interface gets updated with it
- 2. Add side panel (level of hint) - in hint category
- 3. Copy to clipboard
- 4. Fix the image thing (OPTIONAL)