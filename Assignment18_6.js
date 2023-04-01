function* myGenerator() {
    try {
      yield 1;
      yield 2;
      throw "Oops! Something went wrong.";
      yield 3; 
    } catch (error) {
      console.log(error);
    }
  }
  
  const generator = myGenerator();
  
  console.log(generator.next()); 
  console.log(generator.next()); 
  console.log(generator.next()); 
  