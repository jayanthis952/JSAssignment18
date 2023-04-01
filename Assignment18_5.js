function* naturalNumbers() {
    let num = 1;
    while (true) {
      yield num;
      num++;
    }
  }
  
  const generator = naturalNumbers();
  for (let i = 0; i < 10; i++) {
    console.log(generator.next().value);
  }
  