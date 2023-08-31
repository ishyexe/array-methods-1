//doubleValues

function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

//onlyEvenValues

function onlyEvenValues(arr) {
  let evenValuesArray = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evenValuesArray.push(val);
    }
  });
  return evenValuesArray;
}

// showFirstAndLast

function showFirstAndLast(arr) {}