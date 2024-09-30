# FIRST TIME SET-UP
You'll need to do a few things before you can begin working: 
1. You need to have **nodejs** installed on your machine.
2. You'll need to clone  this repository to your machine:
    1) Create a folder where you want to to store the project.
    2) Open command terminal and navigate to this newly created folder.
    3) Type `git clone https://github.com/Cerotin0/CS353_Group21_Project.git`(this will clone the repository)
       *Note: It might ask you to log into your github if you've never done used git on your machine before.*
       https://education.github.com/git-cheat-sheet-education.pdf
       *Do parts `... user.name ...` and `...   user.email ...` from the SETUP section from the above pdf if it asks you to log in.*
    4) If clone gives an error saying something along the lines of `... Connection reset ...` just enter the git clone command again.
3. If repository is cloned successfully, you can now change branches. You can get a full list of branches using `git checkout -a`. You can change branches using `git checkout [branch name]`.
4. First time setting up, go to main branch (ie. `git checkout main`), and enter command `git fetch`. This will fetch all updates (if there is any) that were made to the branch.
5. **REALLY REALLY REALLY IMPORTANT**. **Make sure you're ON YOUR OWN BRANCH before doing this command**. `git merge main`. This will merge main branchs history into your own branch. Essentially, you're copying everything from the main branch into your own branch.
6. If everything sucessfull, you should now see a bunch of files/folders in your project folder on your machnine.
7. Next, open vscode (or whatever IDE you're using).
8. In the root directory (basically just inside the projects folder where you can see all the content), open command terminal (or open it through vscode) and type in `npm install`. This will install all the module dependencies that are required for this project.

*REFERENCE on most used commands* https://education.github.com/git-cheat-sheet-education.pdf

---


# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
