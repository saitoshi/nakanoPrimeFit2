import { getToken } from './userFunctions';

/**
 * @name getSerivces
 * @desc Retrieves all of the services available
 * @return serviceList - The collection of services available
 */
export async function getServices() {
  try {
    const serviceResponses = await fetch('api/service', {
      method: 'GET',
    });
    const serviceData = await serviceResponses.json();
    await console.log(serviceData['services']);

    return serviceData['services'];
  } catch (error) {
    return error;
  }
}

/**
 * @name updateService
 * @input id - the unique identifier of the said service
 * @input token - the token of the user
 */
export async function updateService(_id: string) {
  try {
    const token = await getToken();
  } catch (error) {
    return error;
  }
}
