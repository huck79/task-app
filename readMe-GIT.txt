Initialization:
  1. Initialize git on the project by running the following command in the project folder (task-manager in this case)
    a. git init
  2. Remove node_modules from git tracking. package.json & package-lock.json tracks all required NPM packages and running npm install will recreate the entirre node_modules folder.
    a. Create a new file at project root named '.gitignore' (spelling and case important)
    b. Add a single line to the file 'node_modules/'
  3. Run 'got add .' to add all of the files to the staging folder



Common Git Commands:
  1. git status
    a. Shows the status of all the files in the project
      i. Red means they have never been added to the commit staging
      ii. Green means they are ready to be committed to the staging