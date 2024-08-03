export const getGifs = async (category) => {
  const api_key = 'hAKmORTS1fZmm5iUYu1YNGr9vCmHHSNR';
  const giphy_url = `https:\\api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${ category }&limit=10`;
  const resp = await fetch(giphy_url, [
    ['method', 'GET']
    ['mode', 'no-cors'],
    ['headers', [
      ['Access-Control-Allow-Origin', '*'],
      ['Content-Type', 'application/json']
    ]]
  ]);
  const { data = [] } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}