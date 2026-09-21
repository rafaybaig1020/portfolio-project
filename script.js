cat << 'EOF' > script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendation-form');
  const popupModal = document.getElementById('popup-modal');
  const closePopupButton = document.getElementById('close-popup');

  // Function to display confirmation popup
  function showPopup() {
    popupModal.style.display = 'flex';
  }

  // Close modal when clicking the OK button
  closePopupButton.addEventListener('click', () => {
    popupModal.style.display = 'none';
  });

  // Recommendation Form Submit Listener
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const recText = document.getElementById('recommendation-text').value;
    const recName = document.getElementById('recommender-name').value;

    // Validate inputs before adding recommendation
    if (recText.trim() !== '' && recName.trim() !== '') {
      const container = document.getElementById('recommendations-container');
      const newCard = document.createElement('div');
      newCard.classList.add('recommendation-card');

      newCard.innerHTML = `
        <p>"${recText}"</p>
        <span>- ${recName}</span>
      `;

      // Append new recommendation card to list
      container.appendChild(newCard);

      // Coursera Requirement: showPopup is triggered strictly upon successful submission
      showPopup();

      // Clear input fields after submission
      form.reset();
    }
  });
});
EOF