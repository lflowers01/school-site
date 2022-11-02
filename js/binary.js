let i;
let r;
function input() {
  let input = document.getElementById("input").value;
  console.log(input);
  let binaryOut = [];
  i = 0;
  k = input;
  while (k > 0) {
    i++;
    r = k % 2;
    k -= r;
    k = k / 2;
    console.log(k);
    binaryOut.push(r);
  }
  console.log(binaryOut);
  document.getElementById("output").innerHTML = binaryOut;
}
