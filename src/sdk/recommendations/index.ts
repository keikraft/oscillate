import {request} from 'sdk/request';

interface TrackRecommendationAttributes {
  genre: string;
  danceability: number;
  energy: number;
  popularity: number;
  instrumentalness: number;
  tempo: number;
  valence: number;
}

export const getTrackRecommendations = async ({
  genre,
  danceability,
  energy,
  popularity,
  instrumentalness,
  tempo,
  valence,
}: TrackRecommendationAttributes) => {
  const params = {
    limit: '10',
    seed_genres: genre,
    target_danceability: `${danceability / 100}`,
    target_energy: `${energy / 100}`,
    target_popularity: `${popularity}`,
    target_instrumentalness: `${instrumentalness / 100}`,
    target_tempo: `${tempo}`,
    target_valence: `${valence / 100}`,
  };

  return request<SpotifyApi.RecommendationsFromSeedsResponse>({
    path: 'https://api.spotify.com/v1/recommendations',
    method: 'get',
    params,
  });
};
