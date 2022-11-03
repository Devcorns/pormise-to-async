
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

  function doSomething() {
    return new Promise((res,rej)=>{
        res("Hello");
    })
  }
  function doSomethingElse(val) {
    return new Promise((res,rej)=>{
        res(val)
    })
  }
  function doThirdThing(val) {
    return new Promise((res,rej)=>{
        res(val)
    })
  }

  function failureCallback() {
    return "failure callback";
  }

  doSomething();


//   i want same output using async 

async function asyncTask() {
    try {
        let firstFnVal = await doSomething();
        let secondFnVal = await doSomethingElse(firstFnVal);
        let thirdFnVal = await doThirdThing(secondFnVal);
        console.log(`Got the final result with thirdfn value: ${thirdFnVal}`);
    } catch(err) {
        failureCallback()
    }
    // console.log("async task")
    

}
asyncTask()