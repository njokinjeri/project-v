let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
  
    document.querySelectorAll(".rating-feature span").forEach(span => {
      span.classList.remove("selected");
    });
  
    const selectedSpan = document.querySelector(`.rating-feature span[data-rating="${rating}"]`);
    selectedSpan.classList.add("selected");
  }
  
function submitRating() {
  if (currentRating > 0) {
    const ratingSection = document.getElementById("rating-section");
    ratingSection.innerHTML = "";

    const thankYouMessage = document.createElement("div");
    thankYouMessage.className = "thank-you-message";
    thankYouMessage.innerHTML = `
      <img src="./images/illustration-thank-you.svg" alt="Thank you">
      <p>You have selected ${currentRating} out of 5</p>
      <h2>Thank You!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    `;

    ratingSection.appendChild(thankYouMessage);
  } else {
    alert("Please select a rating before submitting.");
  }
}
