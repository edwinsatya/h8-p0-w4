//Logic Challenge - Change Me!

function changeMe(arr) {
    // you can only write your code here!
    var obj = {};
    if (arr.length < 1) {
        console.log('""');
    } else {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                obj.firstName = arr[i][j];
                j++
                obj.lastName = arr[i][j];
                j++
                obj.gender = arr[i][j];
                j++
                if (arr[i].length > 3) {
                    obj.age = arr[i][j];
                } else {
                    obj.age = 'Invalid Birth Year';
                }
            }
            console.log((i+1) + '. ' + obj.firstName + ' ' + obj.lastName);
            console.log(obj);
        }
        
    }
};
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""