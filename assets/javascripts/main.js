let emailP1 = "bharat"
let emailP2 = "bharatmiddha.com"
let email = emailP1 + "@" + emailP2;

document.querySelector(".hiddenEmail").href = "mailto:" + email;
document.querySelector(".hiddenEmail>span").innerHTML = email;