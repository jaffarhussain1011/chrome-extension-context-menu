<!-- PROJECT LOGO -->
<br />
<div align="center">
      <img src="https://github.com/elsakrandrew/pjcx/blob/dev/source/assets/icons/home_ico.png" alt="Lyne" >
</div>

Lyne is a data scraping extension that helps users to scrape the data from well know sides like ( LinkedIn sale navigator ).

## Contribution

Please follow the following steps to join the Lyne team.

### Step 1 [ Setting code to locally ]

- Clone the repository to your local device.

### Step 2 [ Branching ]

- Always create a branch from the dev branch.
- Best practice to create a branch name, <initials_of_your_name>-<ticket_type>/<ticket_number>
- **e.g.** For user John Papa,
  - jp-task/lc-102
  - jp-bug/lc-103

### Step 3 [ Development and building ]

- After creating a branch, the First command you'll hit is,

```terminal
// To install all node packages.
npm install
```

- After writing all your code.

```terminal
// To create a build
npm run build
```

### Step 4 [ Deploy extension chrome browser for testing. ]

- After hitting the above command the build folder will be created in the folder tree.
- Open the browser and go to the extension manager page.
- Click on the load unpack button. select the build folder.

> **_NOTE:_** Always select a manifest of the build folder to upload the

### Final Step [ Creating a PR ]

- After all of your hard work, let's get the thing merged into the actual product by raising the PR.

> **_NOTE:_** The pull request should always be created against the dev branch.
