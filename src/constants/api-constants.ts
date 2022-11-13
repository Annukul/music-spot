const baseUrl = 'https://api.spotify.com/v1';
const authUrl = 'https://accounts.spotify.com/api';

export const endpoints = {
  AUTH: '/token',
  TRACKS: '/tracks',
};

const getBaseUrl = (baseUrl: string) => {
  return (endPoint: string) => {
    return `${baseUrl}${endPoint}`;
  };
};

export const getEndpoints = getBaseUrl(baseUrl);
export const getAuthEndpoints = getBaseUrl(authUrl);
