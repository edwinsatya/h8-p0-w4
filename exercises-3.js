//Logic Challenge - Mencari Median

function cariMedian(arr) {
    // you can only write your code here!
    var median;

    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length/2)]
    } else {
        median = (arr[arr.length/2] + arr[arr.length/2 - 1]) / 2;
    }
    return median;
};
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5