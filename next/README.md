# Next Steps

## Try it yourself

### Install Node.js

It's recommended to install Node.js with the "nvm (Node Version 
Manager)". With "nvm" you can install new Node.js Version and switch
between all installed versions.

https://github.com/creationix/nvm

### Have a quick look over the API

Just to know what aspects Node.js API can handle natively and if need
something to know if there is something in Node.js already solved or
a third party package is needed.

https://nodejs.org/api/

### Get familiar with the "package.json"
 
At least the "dependencies" how to install new third party packages with
"npm i --save", semver versioning, whats "private: true" and how to use 
the custom scripts.

dependencies: https://docs.npmjs.com/files/package.json#dependencies
semver: https://docs.npmjs.com/misc/semver
private: https://docs.npmjs.com/files/package.json#private
custom scripts: https://docs.npmjs.com/misc/scripts

### Try some common middlewares to create a RestAPI

Body Parser is needed to parse JSON bodies in POST requests. 
CORS is ... needed.

https://www.npmjs.com/package/body-parser
https://www.npmjs.com/package/cors

## Advanced Node.js Tech Talk?

* The Twelve-Factor App
  * Config
* Best Practices
  * NPM as Build Tool
  * Linting
  * Testing
  * Others
* Asynchronous Concepts
  * Callbacks
  * "async" package
  * Promises
  * Generators
  * async/await
* Koa, the better express?
  * Async in express middlewares
  * Async in koa middlewares
  * Koa versions
  * Alternative Frameworks
* Babel
* TypeScript
