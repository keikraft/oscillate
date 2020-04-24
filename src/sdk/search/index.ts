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

export const searchTrackRecommendations = async () => {
  const params = {
    limit: '10',
    seed_genres: 'techno',
    min_energy: '0.6',
    max_popularity: '30',
    min_instrumentalness: '0.6',
    max_valence: '0.3',
  };

  return request<SpotifyApi.RecommendationsFromSeedsResponse>({
    path: 'https://api.spotify.com/v1/recommendations',
    method: 'get',
    params,
  });
};
