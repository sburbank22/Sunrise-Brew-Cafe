# Sunrise Brew Cafe – AI Feature

## Overview

This project extends the Sunrise Brew Cafe website by adding an AI-powered feature that enhances the user experience. Users can generate custom menu descriptions for drinks and view a dynamic coffee quote.

## Features

- AI Menu Description Generator (powered by Anthropic Claude API)
- Coffee Quote feature (second API via Netlify Function)
- Fully deployed on Netlify
- Secure API key handling using environment variables

## How It Works

The AI Menu Description Generator allows users to enter a drink name, ingredients, and a vibe. This data is sent to a Netlify serverless function, which securely calls the Anthropic Claude API to generate a short, café-style description.

The Coffee Quote feature uses a second API (ZenQuotes) to fetch a random quote. This request is handled through a Netlify Function to avoid browser CORS issues and improve reliability.

## Technologies Used

- HTML, CSS, JavaScript
- Netlify Functions (serverless backend)
- Anthropic Claude API
- ZenQuotes API

## How to Run Locally

1. Clone this repository:
   git clone https://github.com/your-username/sunrise-brew-cafe.git

2. Navigate into the project folder:
   cd sunrise-brew-cafe

3. Add your API key:
   Create a `.env` file and add:
   ANTHROPIC_API_KEY=your_api_key_here

4. Run using Netlify Dev (optional):
   netlify dev

## Deployment

This project is deployed using Netlify. The AI feature requires an environment variable to be set in Netlify:

- Key: `ANTHROPIC_API_KEY`
- Value: Your Anthropic API key

## Notes

- The AI feature requires valid API credits in Anthropic to function
- The quote feature is handled server-side to avoid CORS issues
- All API keys are kept secure and are not exposed in the frontend

## Author

Stephanie Burbank
