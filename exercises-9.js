//Logic Challenge - Check AB

function checkAB(num) {
    // you can only write your code here!
    for (var i = 0; i < num.length; i++) {
        //dari a mencari b
        if (num[i] === 'a') {
            for (var j = i + 1; j < num.length; j++) {
                if (num[j] === 'b') {
                    if ((j-1)-i === 3) {
                        return true
                    }
                }
            }
        }
        //dari b mencari a
        if (num[i] === 'b') {
            for (var j = i + 1; j < num.length; j++) {
                if (num[j] === 'a') {
                    if ((j-1)-i === 3) {
                        return true
                    }
                }
            }
        }
    }
    return false;
};
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false