// update total based on selected payment plan

function updateTotalPrice(price) {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${price} / Month`;
  }

  const paymentPlans = document.querySelectorAll('.payment-plan');

  paymentPlans.forEach(plan => {
    const radio = plan.querySelector('.custom-radio');
    radio.addEventListener('change', () => {
      if (radio.checked) {
        const price = radio.dataset.price;
        updateTotalPrice(price);
      }
    });
  });


  // selection effect on payment options
  
  const paymentOptions = document.querySelectorAll('.payment-option');
  
  paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        paymentOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});
