# SectorLabsCodingChallenge

This is a simple React application that uses the Github Gist API to allow the following operations:

- Find all public Gists of an input user.
- Display all the files in those Gists.
- For each Gist, find the last three users that forked it.
- For each file, display the content of the file.

In terms of layout, at the top the app contains an input field and a search button (`SearchField` component), followed by a table with multiple entries representing the Gists (`GistsDisplay` and `GistDisplayItem` components). At the bottom of the page, all the files from a given gist are listed, after pressing the _View Files_ button.

## Functionality

---

The `SearchGist` component contains an input field with the username and a search button. Pressing the search button will send a GET request to the Gist API (with the endpoint corresponding to the username), which will return as a response a list of gists that will then get displayed in the `GistDisplay` component.

**Extra functionality:** Input validation -- the input field displays an error message if the username is invalid, that is, if the request was unsuccessful.

---

The `GistDisplay` component displays in a table all of the user's public gists. Each entry consists of a `GistDisplayItem` component. The columns show a gist number (for easier identification), the gist url redirecting to the gist on github, the last three users that forked the gist (or a suggestive message if there were no forks) and a button to display all the files of the gist. The gists are passed in as a prop from the `App` component.

In order to display the last three forkers, we created a hook in the `GistDisplayItem` component to store a list representing the names of the last three forkers. We then implemented an Effect Hook that makes a call to the gist api to retrieve the list of forks when the component renders for the first time. Finally, we created a function that takes the list of forks as an argument and returns a list having the three names of the last three forkers. (Note: there could be less than three forkers, and when there are no forks we display the message "No forks".)

Initially, I had a _Show Forkers_ button that would display in a list the last three forkers, which was easier to implement but it wasn't fully satisfying the problem statement. ("-Forks: Additionally, include with the list of the Gists, the username/avatar of the last 3 users who have forked it.") This would have also lead to minor conflicts, for instance pressing the _View files_ button for a gist and the _Show Forkers_ button for a different gist.

---

The `FilesDisplay` component will display all the files, showing with the respective programming language as a badge. Again, we used a GET request when pressing the _View Files_ button in the `GistDisplay` component to retrieve all the information about the files. The user is able to see the content of the file by clicking on the filename.

**Extra functionality:** Popup -- when the user clicks on the filename, a popup will appear and display the code in the file. This was implemented using a simple hook in the `App` statement to determine if the popup is currently showing or not. We created the `Popup` component to display a popup with a given text.

## Notes:

I initially created a django project to try and implement some extra backend functionalities. Unfortunately, I wasn't able to connect to the gist API in a timely manner, so I gave up on the idea and resumed with a React project.
