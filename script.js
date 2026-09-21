function addRecommendation() {

    var recommendationText =
        document.getElementById("newRecommendation").value;

    if (recommendationText.trim() === "") {
        alert("Please write a recommendation first.");
        return;
    }

    var newRecommendation =
        document.createElement("div");

    newRecommendation.className = "recommendation";

    newRecommendation.innerHTML =
        "<p>\"" + recommendationText + "\"</p>";

    document.getElementById("recommendation-list")
        .appendChild(newRecommendation);

    document.getElementById("newRecommendation").value = "";

    showPopup();
}


/* Popup is triggered only after a new recommendation is submitted */

function showPopup() {
    alert("Thank you! Your recommendation has been added successfully.");
}