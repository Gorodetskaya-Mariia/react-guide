# react-guide - different small applications such as

- section of comments (comments)
- search pictures by using unsplash API (search-pictures)
- displaying a type of season by detecting user location (seasons)
- search videos by using youtube API (search-videos)
- list of songs and details about a selected song - to practice Redux (songs)
- list of posts - to practice Redux, redux-thunk (blog)
- authentication with Google (auth-with-google)
- some features about Next.js (Next.js)

## deployment with Firebase
- run in project directory: npm run-script build
- on Firebase website choose "Hosting-> Get started"
- install Firebase tool by running: npm install -g firebase-tools. Then press continue on the website.
- run: firebase login
- run: firebase init, choose Hosting option
- answer "build" about "What do you want to use as your public directory?"
- answer "y" about "Configure as a single-page app"
- answer "n" about "File build/index.html already exists. Overwrite?"
- in a file ".firebaserc" you can change a project name: projects-> default
- run: firebase deploy
## update deployed files
- install Firebase tool
- run: firebase login
- run: firebase deploy
