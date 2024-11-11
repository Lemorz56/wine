// content-script.js

// (async () => {
//   console.log('Async function started');
//   await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
//   console.log('Async operation finished');
//   alert("I can't see this because of async");
// })();
import browser from 'webextension-polyfill';
(async () => {
  // const products = document.querySelectorAll<HTMLElement>(".ProductListItem__details");
  //
  // for (const product of products) {
  //   const productNameElement = product.querySelector<HTMLElement>(".ProductListItem__name");
  //   if (!productNameElement) continue;
  //
  //   const productName = productNameElement.textContent?.trim();
  //   if (!productName) continue;
  //
  //
  alert('I can see this');
  try {
    const rating = await fetchVivinoRating('19 crimes');
    if (rating) {
      // const ratingElement = document.createElement('div');
      // ratingElement.textContent = `Vivino Rating: ${rating}`;
      // ratingElement.style.color = '#B22222';
      // ratingElement.style.fontWeight = 'bold';
      console.log('rating!');
      console.log(rating);
      // product.appendChild(ratingElement);
    }
  } catch (error) {
    console.error(`Error fetching rating for TEST:`, error);
    alert('Error fetching rating');
  }
})();

function fetchVivinoRating(productName: string): Promise<string | null> {
  return new Promise((resolve) => {
    browser.runtime
      .sendMessage({ query: 'getRating', productName })
      .then((response) => {
        resolve((response as VivinoResponse)?.rating ?? null);
      })
      .catch((error) => {
        console.error(`Failed to get rating for ${productName}:`, error);
        resolve(null);
      });
  });
}
