
 var gettingToPhilosophy = require('philosophy.js');
 var readlineSync = require('readline-sync');
 
 
 var answer = readlineSync.question('What is the starting page? ');
 gettingToPhilosophy.start(answer, function (pageName) {
   //console.log(pageName);
 }, function (path) {
   //console.log(path);
 });