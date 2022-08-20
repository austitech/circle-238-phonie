
var mtnCode = ["0703", "0704", "0706", "0803", "0806", "0813", "0814", "0816", "0810", "0903", "0906", "+234703", "+234704", "+234706", "+234803", "+234806", "+234813", "+234814", "+234816", "+234810", "+234903", "+234906"];
autocomplete(document.getElementById("myInput"), mtnCode);
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function() {
          inp.value = this.getElementsByTagName("input")[0].value;
          document.querySelector('.airtel').classList.add('active');
          document.getElementById("myInput").focus();
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}