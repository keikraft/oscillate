import {SearchTracksResponse, Track} from 'sdk/types';
import {request} from 'sdk/request';

export const searchTracks = async (query: string) => {
  const params = {
    q: query,
    type: 'track',
  };

  return request<SearchTracksResponse>({
    path: 'https://api.spotify.com/v1/search',
    method: 'get',
    params,
  });
};

export const searchTrackRecommendations = async (): Promise<Track[]> => {
  const params = {
    limit: '10',
    seed_genres: 'techno',
    min_energy: '0.4',
    min_popularity: '50',
    target_instrumentalness: '0.6',
  };

  return request<Track[]>({
    path: 'https://api.spotify.com/v1/recommendations',
    method: 'get',
    params,
  });
};
