//built-in on fetch => response to convert to json, data to hold data from API, error otherwise
export const apiCall = (link) =>
  fetch(link).then(response => response.json())