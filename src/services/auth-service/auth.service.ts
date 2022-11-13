import { endpoints, getAuthEndpoints } from '../../constants/api-constants';
import base64 from 'react-native-base64';
import { getErrorAndStatusFromErr } from '../../utils';
import { apiService } from '../../base-api';

const getAuthToken = async ({ id, secret }: { id: string; secret: string }) => {
  const credentials = base64.encode(`${id}:${secret}`);
  const endpoint = `${endpoints.AUTH}`;
  const authEndpoint = getAuthEndpoints(endpoint);

  // const response = await apiService
  //   .post({
  //     url: authEndpoint,
  //     data: { id, secret },
  //     headers: {
  //       headers: {
  //         Authorization: `Basic  ${credentials}`,
  //         'Content-type': 'application/x-www-form-urlencoded',
  //       },
  //       body: 'grant_type=client_credentials',
  //       json: true,
  //     },
  //   })
  //   .catch(err => {
  //     throw getErrorAndStatusFromErr(err);
  //   });

  // return response;

  try {
    const res = await fetch(authEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic  ${credentials}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
      json: true,
    });

    return res;
  } catch (err) {
    getErrorAndStatusFromErr(err);
  }
};

export default { getAuthToken };
