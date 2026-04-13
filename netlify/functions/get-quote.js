exports.handler = async function () {
  try {
    const res = await fetch('https://zenquotes.io/api/random');
    if (!res.ok) throw new Error(`ZenQuotes returned ${res.status}`);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quote: data[0].q, author: data[0].a }),
    };
  } catch (err) {
    console.error('get-quote:', err.message);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not fetch quote.' }),
    };
  }
};
