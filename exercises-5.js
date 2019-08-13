//Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    // you can only write your code here!
    var kata = kata.split('');
    for(var i=0; i<kata.length; i++){
        kata[i] = String.fromCharCode(kata[i].charCodeAt()+1);
    }
    return kata.join('');
};
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu