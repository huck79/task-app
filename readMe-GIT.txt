Initialization (Local):
  1. Initialize git on the project by running the following command in the project folder (task-manager in this case)
    a. git init
  2. Remove node_modules from git tracking. package.json & package-lock.json tracks all required NPM packages and running npm install will recreate the entire node_modules folder.
    a. Create a new file at project root named '.gitignore' (spelling and case important)
    b. Add a single line to the file 'node_modules/'
  3. Run 'git add .' to add all of the files to the staging folder
  4. Run 'git commit -m "init commit"'. 
    a. "init commit" is a standard (not required) message to use with your first commit for a project.
    b. git requires double quotes for messages (single quotes will bomb out)

Initialization (GitHub)
  1. Log into GitHub and create a new repository
    a. Repositor name doesn't have to match project folder name, but should relate so know what you're pushing where
    b. No need for the readme, .gitignore options (don't check the boxes)
  2. On the next page you'll get 3 lines of code to use in the VSC terminal. You can cut and paste them or they're here:
    a. git remote add origin https://github.com/<GitHubUserName>/<RepositoryName>.git
    b. git branch -M main
    c. git push -u origin main
  3. When you run these inside of the VSC terminal, VSC may pop up a window if you haven't connected to GitHub on this computer yet. This window is a cheap way to get your GitHub credentials into VSC for pushes.
    a. Only tested this on Windows 11 so far. Might not work on Mac or Linux.
    b. If it doesn't wok on other platforms, the Udemy 'The Complete Node.js Developer Course (3rd Edition)' class goes over createing SSH Keys to GitHub in section 65.

Common Git Commands:
  1. git status
    a. Shows the status of all the files in the project
      i. Red means they have never been added to the commit staging
      ii. Green means they are ready to be committed to the staging
  2. git add .
    a. Adds all changed files to the local commit staging folder
  3. git commit -m "<commit message>"
    a. Commits changes to local git repository. These are now ready to be pushed to GitHub.
    b. Double quotes aroung commit message are required. Single quotes will bomb out.