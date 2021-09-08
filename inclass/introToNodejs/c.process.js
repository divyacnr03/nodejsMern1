// process.on('exit', (code) => {
//     console.log('Process exit event with code: ', code);
//   });

// process.on('beforeExit', (code) => {
//     console.log('Process beforeExit event with code: ', code);
//   });
  

  
//   console.log('This message is displayed first.');




// setTimeout(() => {
//     console.log('This will not run');
//   }, 0);

//   process.on('exit', (code) => {
//     console.log('This will  run inside exit',code);

//   });
//     console.log('This is outside exit');

//   process.exit(101)





  

//   process.on('unhandledRejection', (reason, promise) => {
//     unhandledRejections.set(promise, reason);
//   });

//   process.on('uncaughtException', (err, origin) => {
//   fs.writeSync(
//     process.stderr.fd,
//     `Caught exception: ${err}\n` +
//     `Exception origin: ${origin}`
//   );
// });




// // --------- process.env
console.log(process.env.NODE_ENV)


