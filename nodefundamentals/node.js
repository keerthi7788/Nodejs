/*what is node js:
-Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance web applications. Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for data-intensive real-time applications.
-uses an event driven ,non blocking i/o model which makes it lightweight and efficient.
-Node.js is designed to build scalable network applications.
-single threaded 
-node js is server side javascript

Concurrency is not a parallelism
-not concurrent not paraller  i have cpu which single core one task one time if i have two tasks take task 1 execute wayr for task 1 to complet the execute task 2 called syncronizantion since while running one we cacot run another since no cpu core available
-  1013 if i want to read some thig frpm my desk open book reae re-consile so lat of buffers in between at that time  come into picture that is e pole
- u need cpu for computaion no need to io so this part this library decoupled the io and computer- one more
- Node delegates to libuv
-libuv:  provides the abstraction over the linuc mac window any thing

Node says:

“Hey libuv, read this file async”
-- libuv says: “Sure, I’ll read it in the background and let you know when it’s done.”
- Node.js continues with other tasks without waiting for the file read to complete.
*/


/* 
Blocking vs non blocking
BLocking methods executes synchronously
-blockig is when the execution of the code waits until the currently running operation complets,
- non blocking is methods execures asynchronously
-non blocking is when the execution of the code does mpre work , untill the currently running operations complete

y node js:
lightweight and very fast
whrere tonuse node js:
-i/o bounds applicatios
-data steaming applications
-json API based applicatios
-timers
ex: chat server, game servers, command line tools,iot
*/