const axios = require('axios');

const getNumbers = async (urls) => {
  const numbers = [];

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        numbers.push(...response.data.numbers);
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
    }
  }
  return [...new Set(numbers)].sort((a, b) => a - b);
};

const main = async () => {
  const urls = [
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
    'http://20.244.56.144/numbers/odd',
  ];

  try {
    const numbers = await getNumbers(urls);
    console.log(JSON.stringify({ numbers }));
  } catch (error) {
    console.error('Main function error:', error);
  }
};

main();
