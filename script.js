//customReverse
function customReverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var result = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = result;
  }
  return arr;
}

// console.log(customReverse([1, 20, 4, 10, 0]));

//customConcat
function customConcat(arr1, arr2) {
  var arr = [];
  arr1.forEach((element) => {
    arr.push(element);
  });
  arr2.forEach((element) => {
    arr.push(element);
  });

  return arr;
}

// console.log(customConcat([1, 2, 3,10], [4, 5, 6]));

//customSlice
function customSlice(arr, start, end) {
  var result = [];
  var from = Math.max(start, 0);
  var to = Math.min(end);

  if (!end || end > arr.length) {
    for (var i = from; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else {
    for (var i = from; i < to; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(customSlice([1, 2, 3, 4], 1, 3));

//customJoin
function customJoin(arr, sep = "") {
  var result = "";
  for (var i = 0; i < arr.length - 1; i++) {
    result += arr[i];
    result += sep;
  }
  result += arr[arr.length - 1];
  return result;
}

// console.log(customJoin([1, 2, 3], ","));
