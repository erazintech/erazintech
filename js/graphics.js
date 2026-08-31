function openTab(evt, tabName) {
// Hide all tab content
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tab-content");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
// Remove "active" class from all buttons
tablinks = document.getElementsByClassName("tab-link");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
// Show the current tab and add an "active" class to the button
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}


// Function for switching tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
    }
tablinks = document.getElementsByClassName("tab-link");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block";
document.getElementById(tabName).classList.add("active");
evt.currentTarget.className += " active";
}
// Functions for the Pop-up (Modal)
function showImage(imgElement) {
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("img01");
modal.style.display = "block";
modalImg.src = imgElement.src;
}
function closeModal() {
var modal = document.getElementById("imageModal");
modal.style.display = "none";
}