# Basic Node & Express Server Setup

## Description
Follow the code comments in [script.js](server/public/scripts.js) & [server.js](server/server.js) to learn the syntax and flow of things. To see how minimal the codebase is to get started check out [server-minus-comments.js](server/server-minus-comments.js).


## Step-by-step Re-creation
** ** ** ** ** Use command line unless otherwise specified ** ** ** **

- Install Node & set up base files
  - Download & install [Node](https://nodejs.org/en/download/)
  - `mkdir node-basics` (mkdir makes a directory/folder)
  - `cd node-basics` (cd changes directory)
  - `mkdir server`
  - `cd server`
  - `touch server.js` (touch creates a file)
  - `mkdir public`
  - `cd public`
  - `touch index.html`
  - `touch scripts.js`
  - `cd ../../` (two dots with a slash moves up one directory, here we move up two)

- Initialize npm, install dependencies
  - `npm init -y`
  - `npm install express` (express is a Node framework)
  - `npm install axios` (promise-based http client)
  - `npm install cors` (middleware to allow cross-origin resource sharing)

- Set up `package.json` & run server
  - Open the project in your code editor of choice
  - Navigate to `package.json`
  - Create a script like `"start": "node server/server.js"` to run server from command line
  - Set up the first 22 lines of code in server.js
  - `npm start` should say 'Listening on port: 5000'

- View server route in browser
  - Set up lines 31-33 in server.js
  - Ctrl+C in command line to stop server (it doesn't auto-update when changes are made)
  - `npm start`
  - Navigate to `http://localhost:5000/taco` in your browser
  - Treat yourself to something nice for learning something new!