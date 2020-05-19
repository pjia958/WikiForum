This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

A WikiBlog App

## Introduction

Wikipedia is one of the most popular online resources, so on average, people spend quite a bit of time on Wikipedia;
 
yet there is surprisingly little social interaction possibility. 

The talk pages on Wikipedia are predominantly for editorial discussions and not for general discussion on a topic and also have some drawbacks, being basically just a wikipage. 

This project is about building a social media web app around Wikipedia that may offer functions such as forum, recommender, commenting and Q&A functions.

Various ways of linking to Wikipedia content/importing content are possible, ideal would be a system where one can annotate questions and comments directly to specific points in the text.

## Core Feature
One can annotate questions and comments directly to specific points in the text


## Some Tech/Dependencies in use
React: Mainly invovled

Scss: Css style control

React router: Solving routing issues

Antd: style misc like avatars and something

Moment.js: handle posts, request with fake date within json

Jquery: an old way to handle ajax

Nomdemon: hot fresh dev tool

 ## Wiki api
get the content and handle exceptions(e.g. no such article)

 ## Done - Features
Nav bar

Basic page layout

Fetch wiki article content

 ## To-dos
 Data base: structure(login, wikiarticle-blog)

 Optimize fetching wiki article content: 
    what if the response is only a title?
    what if the response is a series of related hyperlink?
    what if the input is a random string
 
 Login function
 
 Optimize the layout of article content

 Anotate the article

 Home page: update articles in database(by getting json?)

  ## Notes of some features / components

  * The fetch wiki pages api is now done in Jquery and in render() by ajax rather than in componentWillMount() : This will cause empty content when access it.