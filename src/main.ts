import * as cheerio from 'cheerio';

async function fetchWineData(query: string) {
  const url = `https://www.vivino.com/search/wines?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extracting wine card elements
    const wineCard = $('.default-wine-card').first(); // Selecting the first wine card

    // Extracting average rating
    const averageRating = wineCard.find('.average__container .average__number').first().text().trim();

    // Extracting number of ratings
    const numberOfRatings = wineCard.find('.average__stars .text-micro').first().text().trim();

    console.log(`Average Rating: ${averageRating}`);
    console.log(`Number of Ratings: ${numberOfRatings}`);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
fetchWineData("19 Crimes Red Wine, 2022");
