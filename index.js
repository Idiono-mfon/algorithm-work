// Algo

// N X N

const fruit = [
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 0],
];

const fruit2 = [
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0],
];

const banannaOrApple = (array) => {
  let zeroStr = " ";
  let finalStr = "";
  const newLine = "\n";

  array.forEach((ele) => {
    //   matrixLength -= 1;
    ele.forEach((val) => {
      finalStr += val === 1 ? zeroStr + val : zeroStr;
    });

    finalStr += newLine;
  });

  return finalStr;
};

console.log(banannaOrApple(fruit2));
