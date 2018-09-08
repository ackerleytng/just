let placesCache = null
const cachePlaces = function (places) {
  placesCache = places
  return places
}

const doGetPlaces = function () {
  const params = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
      'x-apikey': '5b93392a19af4a22fafd4ca9',
      'cache-control': 'no-cache'
    },
    redirect: "error",

  }
  return fetch('https://foodplaces-e7b4.restdb.io/rest/food-places', params)
    .then(r => r.json())
}

const getPlaces = function () {
  if (!placesCache) {
    return doGetPlaces()
      .then(cachePlaces)
  } else {
    return Promise.resolve(placesCache)
  }
}

const getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const updatePlace = function (place) {
  const fields = ['place', 'branch', 'address', 'hours']
  const updateField = function (field) {
    document.getElementById(field).innerHTML = place[field]
  }

  fields.map(updateField)
}

const makeSuggestionVisible = function () {
  document.getElementById('suggestion').style.visibility = 'visible'
}

const updateRandomPlace = function () {
  getPlaces()
    .then(getRandomElement)
    .then(updatePlace)
    .then(makeSuggestionVisible)
}

updateRandomPlace()
