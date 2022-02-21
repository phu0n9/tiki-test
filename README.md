# Tiki test cases using Cypress:

## How to run:
* Open VS Code terminal and run command: `npm init -y`
* Install Cypress: `npm install cypress`
* Check Cypress version and install it by using command: `npx cypress -v`
* Open Cypress: `npx cypress open`
* Running these commands by `npm run pretest` after that run `npm run test` 
* After that browse to `cypress/reports/output.html` to see report in html form
* Can see the videos in the folder `cypress/videos`

## Note:
Remember to include this following in `support/index.js` to catch some errors occured in test cases
```
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
```




