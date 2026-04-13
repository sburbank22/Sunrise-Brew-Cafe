exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { drinkName, ingredients, vibe } = JSON.parse(event.body);

  const prompt = `You write short, warm, polished menu descriptions for Sunrise Brew Café — a cozy artisan coffee shop in Oakwood Heights, CA, open since 2018.

Our existing menu for brand reference:
- Espresso: Rich, bold single or double shot from our house blend
- Americano: Espresso with hot water for a smooth, full-bodied taste
- Cappuccino: Equal parts espresso, steamed milk, and velvety foam
- Latte: Espresso with steamed milk and a light layer of foam
- Mocha: Espresso, rich chocolate, steamed milk, and whipped cream
- Flat White: Double ristretto with microfoam milk, Australian-style
- Cold Brew: Smooth, low-acidity coffee steeped for 18 hours
- Chai Latte: House-made spiced chai concentrate with steamed milk
- Matcha Latte: Ceremonial-grade matcha whisked with your choice of milk

Write a 1–2 sentence menu description for this new drink. Match the warm, inviting tone of the examples above.

Drink name: ${drinkName}
Ingredients: ${ingredients}${vibe ? `\nVibe: ${vibe}` : ''}

Reply with only the description. No labels, no quotes, no extra formatting.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 120,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate description.' }),
    };
  }

  const data = await response.json();
  const description = data.content[0].text.trim();

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  };
};
