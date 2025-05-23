const fetchData = async function (apiKey, inputValue) {
  try {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`
    );
    const response = await data.json();
    console.log(response.Search);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
