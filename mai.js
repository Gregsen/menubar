'use strict';


require('shelljs/global');

var command;
//
var result = exec('mai list | awk \'NR>1 {print $1}\'', function(code, stdout, stderr) {
  //console.log('Exit code:', code);
    show(stdout);
  //console.log('Program stderr:', stderr);
});

function show(command) {
    var ul = document.querySelector('.test');
    console.log(command.type)
}

//function parser(command){
//    var lines = command.split('\n');
//    return lines[0].split('\t');
//}
