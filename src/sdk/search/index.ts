import {request} from 'sdk/request';

export const searchTracks = async (query: string) => {
  const params = {
    q: query,
    type: 'track',
  };

  return request<SpotifyApi.SearchResponse>({
    path: 'https://api.spotify.com/v1/search',
    method: 'get',
    params,
  });
};
