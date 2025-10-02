// COMP3123 LAB TEST 1 Question 3
//Thomas del Mundo 101498572

//import module and file system
const fs = require('fs');
var module = require( './fileModule' );

//call the module functions
module.createFiles();
//delayed timer before deleting
setTimeout(module.removeFiles,2000);