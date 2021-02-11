const loadData = async (api, targetPlace) => {
  const response = await fetch(api)
  const data = await response.json();
  targetPlace(data)
}

export default loadData