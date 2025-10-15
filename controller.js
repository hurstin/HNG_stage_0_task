import axios from 'axios';

const name = 'Okechukwu Augustine';
const email = 'okechukwuhurstin@gmail.com';
const stack = 'Node.js/Express';

export const me = async (req, res) => {
  try {
    const catfact = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000, // Set a timeout to avoid hanging requests
    });

    res.json({
      status: 'success',
      user: {
        email,
        name,
        stack,
      },
      timestamp: new Date().toISOString(),
      fact: catfact.data.fact,
    });
  } catch (err) {
    console.log('Cat Fact API Error:', err.message);

    // Determine the appropriate status code and error message
    let statusCode = 500;
    let errorMessage = 'Internal server error';

    if (err.response) {
      // The external API responded with an error status (4xx, 5xx)
      statusCode = err.response.status;
      errorMessage = `External API error: ${err.response.status}`;
    } else if (err.request) {
      // The request was made but no response was received
      statusCode = 503;
      errorMessage = 'External service unavailable';
    } else if (err.code === 'ECONNABORTED') {
      // Request timeout
      statusCode = 504;
      errorMessage = 'External service timeout';
    }

    res.status(statusCode).json({
      status: 'error',
      message: errorMessage,
      timestamp: new Date().toISOString(),
    });
  }
};
