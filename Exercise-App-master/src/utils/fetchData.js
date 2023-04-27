export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8cb990b973mshf06428384dd6af2p1498e8jsnc7fc33c88336',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8cb990b973mshf06428384dd6af2p1498e8jsnc7fc33c88336',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) =>{
    const response = await fetch(url,options)
    const data = await response.json()
    return data;
}