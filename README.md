# GSUA

Upon cloning this repo, open a command line, make sure you are in the correct directory of this app, then input the following commands:

`npm install`

`npm run build`

Then:
1. Open a tab of chrome or brave and go to chrome://extensions

2. developer mode on

3. load unpacked
4. select 'dist' folder from root level, which was created when you input `npm run build` into the terminal
5. load and refresh google.com

You should now be able to press buttons to add the special operators to the search bar.

NOTE: Sometimes the dependencies for @MUI or @types do not install correctly and you will have to manually install them yourself.

NOTE: Currently the App only works on google's homepage. Sitewide functionality comes soon.
