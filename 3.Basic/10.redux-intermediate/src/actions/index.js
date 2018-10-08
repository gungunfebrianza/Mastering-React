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

export function carDetail(id) {
  const request = fetch(`${ROOT_URL}/carsIndex?id=${id}`, {
    method: 'GET'
  }).then(response => response.json());
  console.log(requset);
  return {
    type: 'CAR_DETAIL',
    payload: request
  };
}
