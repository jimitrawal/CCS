// function displayReviews(reviews) {
//   const container = document.getElementById('reviews-container');
//   reviews.forEach(review => {
//     const reviewElement = document.createElement('div');
//     reviewElement.classList.add('review');
//     reviewElement.innerHTML = `
//       <div class="author">${review.author_name}</div>
//       <div class="rating">Rating: ${review.rating}</div>
//       <div class="text">${review.text}</div>
//     `;
//     container.appendChild(reviewElement);
//   });
// }

// // Fetch reviews on page load
// fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews&key=YOUR_API_KEY')
//   .then(response => response.json())
//   .then(data => {
//     const reviews = data.result.reviews;
//     displayReviews(reviews);
//   })
//   .catch(error => console.error('Error fetching reviews:', error));