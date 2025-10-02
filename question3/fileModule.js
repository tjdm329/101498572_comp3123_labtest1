//COMP3123 LAB TEST 1 Question 3
//Thomas del Mundo 101498572

import fs from "fs";

//add log files
function createFiles() {
    //make the new log directory
    fs.mkdirSync("./Logs");

    //create the 10 files
    for(let i=0; i < 10; i++) {
        var filename = `./Logs/log${i}.txt`; //numbers the log files 0-9
        var data = `This is log ${i}`; //the data to be inserted into each log respectively

        fs.appendFile(filename, data, err => {
            if (err) {
                console.error(`Error creating Log${i}`); //if there's an error, print this
            }
            else{
                console.log(`Log ${i} created`);
            }
        });
    }
}
//remove log files
function removeFiles() {
    //iterate over the 10 files
    for(let i=0; i < 10; i++) {
        var filename = `./Logs/log${i}.txt`; //get each filename respectively

        fs.unlink(filename, err => {
            if (err) {
                console.error(`Error deleting Log${i}`);
            }
            else{
                console.log(`Deleting file... Log${i}.txt`);
            }
        });
    }
    //delete the directory after emptying
    fs.rmdir('./Logs', err => {
        if (err) { console.error(`Error deleting directory`); }
    });
}

//export file module
export {createFiles, removeFiles};