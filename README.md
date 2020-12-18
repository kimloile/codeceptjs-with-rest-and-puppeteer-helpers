# Introduction
This project demonstrates how to use CodeceptJS with REST/Puppeteer helper for Automation Tests.
REST helper for API tests and Puppeteer helper for Front-end tests.

## Installation
This requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies by:

```
npm i
```

## How to trigger API tests
Replace all the variables in file `codecept.conf.js` to match your configurations.

To add others scenarios, created files should be named as format `[filename]_exec.ts` and put in `/scenarios/` folder.

To run all api tests just simply type:

```
npm test
```

## Contributing
Have a lot of experience with CodeceptJs and suggestions on how we could improve this template? We'd love a PR!