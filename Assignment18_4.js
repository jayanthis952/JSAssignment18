function *multiplyGenerator() {
    let a = yield;
    let b = yield;
    let result = a * b;
    console.log( result);
  }
  
  const gen = multiplyGenerator();
  gen.next(); 
  gen.next(2); 
  gen.next(2); 
  const result = gen.next().value; 
  console.log(result); 
  function *addGenerator() {
    let a = yield;
    let b = yield;
    let result = a + b;
    console.log(result);
  }
  
  function* trueGenerator() {
    let value = yield;
    let result = Boolean(value);
    console.log(result);
  }
  
  const addGen = addGenerator();
  addGen.next();
  addGen.next(3);
  addGen.next(3);
  const sum = addGen.next().value;
  console.log(sum); 
  
  const trueGen = trueGenerator();
  trueGen.next();
  trueGen.next();
  const bool = trueGen.next().value;
  console.log(bool); 
  
  