let i;
let r;
function input() {
  let input = document.getElementById("input").value;
  let output;
  console.log(input);
  let binaryOut = [];
  i = 0;
  k = input;
  while (k > 0) {
    i++;
    r = k % 2;
    k -= r;
    k = k / 2;
    binaryOut.push(r);
  }
  binaryOut.push("0000");
  output = binaryOut.join("");
  let chunckedOut = [];
  i = 0;
  r = 0;
  while (r < output.length) {
    if ((i = 3)) {
      chunckedOut.push(output.slice(r - 4, r));
      chunckedOut.push(" ");
      console.warn(output.slice(r - 4, r));
    }
    r += 4;
    i++;
  }
  console.log(chunckedOut);
  let final = [];
  final = chunckedOut.join("").split("");
  let reversed = final.reverse();
  let finalOutput = reversed.join("");
  document.getElementById("output").innerHTML = finalOutput;
}

function input2() {
  let input = document.getElementById("input2").value;
  let inputA = input.split("");
  inputA = inputA.reverse();
  let output = 0;
  i = 0;
  while (i < input.length) {
    output += (2 ^ i) * inputA[i];
    console.log(output);
    i++;
  }
}
