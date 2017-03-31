// HTML elements stored in variables
var sugarBtn = document.getElementById("sugarBtn");
var chocolateBtn = document.getElementById("chocolateBtn");
var lemonBtn = document.getElementById("lemonBtn");
var clearBtn = document.getElementById("clearBtn");

// cookie counters
var sugarCookie = 0;
var lemonCookie = 0;
var chocolateCookie = 0;

// button event listeners
sugarBtn.addEventListener("click", function() {
  // incrementing num of sugar cookies on each click
  sugarCookie++
  //cookie set for sugar cookie
  Cookies.set("sugarCookies", sugarCookie);
  var sugarCount = document.getElementById("sugarCount");
  sugarCount.textContent = sugarCookie;
})

chocolateBtn.addEventListener("click", function() {
  // incrementing num of chocolate cookies on each click
  chocolateCookie++
  //cookie set for chocolate cookie
  Cookies.set("chocolateCookies", chocolateCookie);
  // chocolate cookie count passed on to HTML element
  var chocolateCount = document.getElementById("chocolateCount");
  chocolateCount.textContent = chocolateCookie;
})

lemonBtn.addEventListener("click", function() {
  // incrementing num of lemon cookies on each click
  lemonCookie++
  //cookie set for lemon cookie
  Cookies.set("lemonCookies", lemonCookie);
  // lemon cookie count passed on to HTML element
  var lemonCount = document.getElementById("lemonCount");
  lemonCount.textContent = lemonCookie;
})

clearBtn.addEventListener("click", function() {
  // setting cookie counts to 0
  sugarCookie = 0
  lemonCookie = 0
  chocolateCookie = 0

  // clearing cookie count in Cookies
  Cookies.set("sugarCookies", 0);
  Cookies.set("chocolateCookies", 0);
  Cookies.set("lemonCookies", 0);

  // clearing cookie count in HTML
  var sugarCount = document.getElementById("sugarCount");
  sugarCount.textContent = " ";
  var chocolateCount = document.getElementById("chocolateCount");
  chocolateCount.textContent = " ";
  var lemonCount = document.getElementById("lemonCount");
  lemonCount.textContent = " ";
})

// onload event listener
window.addEventListener("load", function() {
  // retrieves cookie count
  sugarCookie = Cookies.get("sugarCookies");
  chocolateCookie = Cookies.get("chocolateCookies");
  lemonCookie = Cookies.get("lemonCookies");
  //test
  console.log(sugarCookie);
  console.log(chocolateCookie);
  console.log(lemonCookie);

  // // displays cookie count
  if (sugarCookie == 0) {
    var sugarCount = document.getElementById("sugarCount");
    sugarCount.textContent = " ";
    var sugarCookie = 0;
  }
  else {
    var sugarCount = document.getElementById("sugarCount");
    sugarCount.textContent = sugarCookie;
  }

  if (chocolateCookie == 0) {
    var chocolateCount = document.getElementById("chocolateCount");
    chocolateCount.textContent = " ";
    var chocolateCookie = 0;
  }
  else {
    var chocolateCount = document.getElementById("chocolateCount");
    chocolateCount.textContent = chocolateCookie;
  }

  if (lemonCookie == 0) {
    var lemonCount = document.getElementById("lemonCount");
    lemonCount.textContent = " ";
    var lemonCookie = 0;
  }
  else {
    var lemonCount = document.getElementById("lemonCount");
    lemonCount.textContent = lemonCookie;
  }
})
