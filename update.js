function update() {
localStorage.setItem("field", document.getElementById('field').value);
localStorage.setItem("GPA", document.getElementById('GPA').value);
localStorage.setItem("location", document.getElementById('location').value);
document.getElementById("field").autocomplete="off";
document.getElementById("GPA").autocomplete="off";
document.getElementById("location").autocomplete="off";
}