function update() {
localStorage.setItem("field", document.getElementById('field').value);
localStorage.setItem("GPA", document.getElementById('GPA').value);
localStorage.setItem("location", document.getElementById('location').value);
localStorage.setItem("pay", document.getElementById('pay').value);
document.getElementById("field").autocomplete="off";
document.getElementById("GPA").autocomplete="off";
document.getElementById("location").autocomplete="off";
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
if (localStorage.getItem("pay")=="Paid or Unpaid") {
  localStorage.setItem("pay", "Unspecified");
}
}