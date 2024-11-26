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
