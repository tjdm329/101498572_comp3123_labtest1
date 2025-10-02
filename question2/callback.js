//COMP3123 LAB TEST 2 Question 2
//Thomas del Mundo 101498572

class callback {
    static resolvedPromise(){
        let success = 'Delayed Successfully';
        console.log(success,', ', 500);
    }
    static rejectedPromise(){
        let reject = 'Delayed Exception';
        console.error(reject,', ', 500);
    }
}

//set timers before calling each method
setTimeout(callback.resolvedPromise,500);
setTimeout(callback.rejectedPromise,500);
