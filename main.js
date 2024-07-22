function checkvowel() {
  var text = document.getElementById("tr").value;
  var totalcount = 0;
  var totalconstant = 0;
  text = text.toLowerCase();
  var vowel = ["a", "e", "i", "o", "u"];
  if (!text) {
    document.getElementById(
      "alert"
    ).innerHTML = `<strong class="text-danger fw-bold fs-4"> Please input the Alphabat..</strong>`;
    document.getElementById("resultvowel").innerHTML = ``;
    document.getElementById("resultconsonant").innerHTML = ` `;
    document.getElementById("resulttotal").innerHTML = ` `;
  } else {
    document.getElementById("alert").innerHTML = ``;
    for (var i = 0; i < text.length; i++) {
      if (vowel.includes(text[i])) {
        totalcount += 1;
      }
      if (text[i] >= "a" && text[i] <= "z" && !vowel.includes(text[i])) {
        totalconstant += 1;
      }
      var totalletter = totalconstant + totalcount;
    }
    document.getElementById(
      "resultvowel"
    ).innerHTML = `<strong class="text-success">Total vowels is ${totalcount}</strong>  `;
    document.getElementById(
      "resultconsonant"
    ).innerHTML = `<strong class="text-warning">Total consonant is ${totalconstant} </strong> `;
    document.getElementById(
      "resulttotal"
    ).innerHTML = `<strong class="text-info">Total alphabet is ${totalletter} </strong> `;
  }
}
function deleted() {
  document.getElementById("alert").innerHTML = ``;
  document.getElementById("resultvowel").innerHTML = ``;
  document.getElementById("resultconsonant").innerHTML = ` `;
  document.getElementById("resulttotal").innerHTML = ` `;
  document.getElementById("tr").value = "";
}
