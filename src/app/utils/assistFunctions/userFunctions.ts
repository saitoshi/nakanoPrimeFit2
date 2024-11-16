/**
 * @name getToken
 * @desc Retrieves the token from the session storage or local storage
 * @return
 */
export function getToken() {
  return (
    window.localStorage.getItem('token') ||
    window.sessionStorage.getItem('token')
  );
}

/**
 * @name removeToken
 * @desc Removes the token from the session stroage or local storage
 * @return n/a
 */
export function removeToken() {
  window.localStorage.removeItem('token');
  window.sessionStorage.removeItem('token');
}

/**
 * @name getServices
 * @desc Gets the list of all of the services
 * @return An object of all the services provided by the company
 */
export async function getServices() {
  try {
    const serviceResponse = await fetch('/api/service', {
      method: 'GET',
    });
    const serviceData = serviceResponse.json();
    return serviceData;
  } catch (error) {
    console.log(error);
    return error;
  }
}
