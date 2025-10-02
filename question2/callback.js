//COMP3123 LAB TEST 2 Question 2
//Thomas del Mundo 101498572

class callback {
    static resolvedPromise(){
        let success = 'Delayed Successfully';
        console.log(success);
    }
    static rejectedPromise(){
        let reject = 'Delayed Exception';
        console.error(reject);
    }
}

//set timers before calling each method
setTimeout(callback.resolvedPromise,500);
setTimeout(callback.rejectedPromise,500);
