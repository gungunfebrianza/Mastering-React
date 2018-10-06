const ROOT_URL = 'http://localhost:3004';

export function getCars(kyw) {
  const request = fetch(`${ROOT_URL}/carsIndex?q=${kyw}`, {
    method: 'GET'
  }).then(response => response.json());

  return {
    type: 'SEARCH_CARS',
    payload: request
  };
}
