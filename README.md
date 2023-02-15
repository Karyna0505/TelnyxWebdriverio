...............................................###.............................................

WebdriverIO/Allure-report/Docker "TELNYX" project

...............................................###.............................................

## This repository contains tests written in WebdriverIO js to test the site https://telnyx.com/ Contains of:
- Page Object Model
- Separate configs for chrome and firefox browsers
- npm scripts to run all tests, single file, run tests with chrome browser and firefox browser
- Docker integration
- Allure report integration

### Install software and check out the project
- Clone and checkout the github project

        git clone https://github.com/Karyna0505/TelnyxWebdriverio

 - Go to the terminal and execute inside the checked out folder

         npm install 

### Docker preparation

- Install docker desktop
- Running docker

        docker-compose up

- Stop docker

        docker-compose down

### Running test with Docker

1. Running docker

        docker-compose up

2. Running tests

        npm run wdio

More details how to run on the link More details how to run on the link https://docs.cypress.io/guides/references/configuration#Specifying-an-Alternative-Config-File
or in package.json file in scripts

### Allure Report

To generate a report for all specs in the integration folder of the WebdriverIO project, run the command given below −

        npm run allure:generate


### GitHub Actions and Pages 
When a push is made to the master/main repository, the workflow is triggered. The output of each build is available on the Actions pane of the repository and we can drill down into each flow to see why it failed.

    https://karyna0505.github.io/TelnyxWebdriverio/4/
    

