    const generateButton = document.querySelector('.generate-button');
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const categoryElement = document.getElementById('category');
    const copyIcon = document.querySelector('.copy .fa-copy');
    const copyToolkit = document.getElementById('copyToolKit');
    const speechToolkit = document.getElementById('speechToolKit');
    const speechIcon = document.querySelector('.speech .fa-volume-high');
    let category = 'happiness'; // Initial category

    authorElement.textContent = 'Anonymous';
    quoteElement.textContent = 'Click the button to generate a quote!';
    categoryElement.textContent = 'Happiness';

    function fetchQuote() {

        const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '89917b2558msh80c3fac7c1b251cp1f57e9jsn811ea6893a65',
                'x-rapidapi-host': 'quotes-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch(url, options)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
            if(data.length > 0) {
                const quoteData = data[0];
                quoteElement.textContent = quoteData.quote;
                authorElement.textContent = quoteData.author ? quoteData.author : 'Anonymous';

                // update category based on response or default
                category = quoteData.category ? quoteData.category : 'happiness';
                categoryElement.textContent = category.charAt(0).toUpperCase()+category.slice(1);

                // trigger color transition
                categoryElement.style.borderColor = '#e36414';

            } else {
                quoteElement.textContent = 'No quotes available';
                authorElement.textContent = 'Anonymous';
                categoryElement.textContent = category.charAt(0).toUpperCase()+category.slice(1);
            }
          })
          .catch ((error) => {
            console.error('Error:', error);
            quoteElement.textContent = 'Error fetching quote';
            authorElement.textContent = 'None';
            categoryElement.textContent = category.charAt(0).toUpperCase()+category.slice(1);
          });
    }

// click event event listener

    generateButton.addEventListener('click', fetchQuote);


// Enter key press event listener
    document.addEventListener('keydown', (event) => {
         if(event.key === 'Enter') {
            console.log('Enter key pressed!');
            fetchQuote();
        }
});


// copy to keyboard logic
const copyQuote = async () => {
    try {
        const copiedQuote = quoteElement.textContent;
        await navigator.clipboard.writeText(copiedQuote);
        console.log('Quote copied to clipboard');

        // change clipboard message
        copyToolkit.textContent = 'Copied to clipboard';

        //reset tooltip message
        setTimeout(() => {
            copyToolkit.textContent = 'Copy to clipboard';
        }, 2000);

    } catch(err) {
        console.error('Failed to copy quote: ', err);
    }
};

copyIcon.addEventListener('click', copyQuote);
