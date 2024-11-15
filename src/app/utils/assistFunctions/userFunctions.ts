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
