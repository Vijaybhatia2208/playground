const fetchWithRetry = async (url, params, retries = 3, delay = 1000) => {
  try {
    const response = await fetch(url, params);
  } catch (error) {
    if (retries === 0) throw error;
    console.log(`Retrying... attempts left: ${retries}`);
    await new Promise((res) => setTimeout(res, delay));
    return fetchWithRetry(url, options, retries - 1, delay);
  }
};
