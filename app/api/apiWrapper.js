import { AUTH_TOKEN, API_PATH } from '../credentials/smashgg';

export function getGQLQuery(
    query,
    operationName,
    variables
) {
  return new Promise((resolve, reject) => {
    fetch(API_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        query,
        operationName,
        variables
      })
    }).then(r => r.json(), reject)
    .then(resolve, reject);
  });
}

export function postGQLQuery(
    query,
    operationName,
    variables
) {
  return new Promise((resolve, reject) => {
    fetch(API_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        query,
        operationName,
        variables
      })
    }).then(r => r.json(), reject)
            .then(resolve, reject);
  });
}

