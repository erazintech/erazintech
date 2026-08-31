// Function to show the pop-up

function openModal(planName) {

    // Corrected .innertext to .innerText (capital 'T')
    document.getElementById("modalTitle").innerText = planName;
    document.getElementById("infoModal").style.display = "block";
}

// Function to hide the pop-up

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

// Close the pop-up if the user clicks outside of the box

window.onclick = function(event) {
let modal = document.getElementById("infoModal");
if (event.target == modal) {
modal.style.display = "none";
}}

// Function to copy the modal message

function copyModalText() {
    let title = document.getElementById("modalTitle").innerText;
    // Note: Ensure an element with ID "modalMessage" exists in HTML if you wish to use this line
    let message = "Can I please have a quote on this.";
    let fullText = title + "\n" + message;
    navigator.clipboard.writeText(fullText).then(() => {
    alert("Message copied to clipboard!");
    }).catch(err => {
    console.error('Error in copying text: ', err);
    });
}