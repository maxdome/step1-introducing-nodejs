'use strict';

/*
 Node.js is non blocking, the program don't block if there is a waiting operation.
 Thats the reason why a Node.js Server can handle multiple requests, the second request will be handled
 if the first request waits for something (database query, file system, http request)
 */
process.nextTick(() => {
  console.log(1);
});
console.log(2);
