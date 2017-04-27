function update() {
localStorage.setItem("field", document.getElementById('field').value);
localStorage.setItem("GPA", document.getElementById('GPA').value);
localStorage.setItem("location", document.getElementById('location').value);
localStorage.setItem("year", document.getElementById('year').value);
localStorage.setItem("pay", document.getElementById('pay').value);
document.getElementById("field").autocomplete="off";
document.getElementById("GPA").autocomplete="off";
document.getElementById("location").autocomplete="off";
document.getElementById("year").autocomplete="off";
document.getElementById("pay").autocomplete="off";

if (localStorage.getItem("field")=="Enter your field...") {
  localStorage.setItem("field", "Unspecified");
}
if (localStorage.getItem("GPA")=="Enter your GPA...") {
  localStorage.setItem("GPA", "Unspecified");
}
if (localStorage.getItem("location")=="Enter your location...") {
  localStorage.setItem("location", "Unspecified");
}
if (localStorage.getItem("year")=="Enter your class...") {
  localStorage.setItem("year", "0");
}
if (localStorage.getItem("year")=="Freshman"){
  localStorage.setItem("year", "1");
}
if (localStorage.getItem("year")=="Sophomore"){
  localStorage.setItem("year", "2");
} 
if (localStorage.getItem("year")=="Junior"){
  localStorage.setItem("year", "3");
} 
if (localStorage.getItem("year")=="Senior"){
  localStorage.setItem("year", "4");
} 
if (localStorage.getItem("year")=="Bachelor's Degree"){
  localStorage.setItem("year", "5");
} 
if (localStorage.getItem("year")=="Master's Degree"){
  localStorage.setItem("year", "6");
} 
if (localStorage.getItem("year")=="Doctorate's Degree"){
  localStorage.setItem("year", "7");
} 
if (localStorage.getItem("pay")=="Paid or Unpaid") {
  localStorage.setItem("pay", "Unspecified");
}
}