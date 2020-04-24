import {request} from 'sdk/request';

export const getTrackAnalysis = async (trackId: string) => {
  const result = await request<SpotifyApi.AudioAnalysisResponse>({
    path: `https://api.spotify.com/v1/audio-analysis/${trackId}`,
    method: 'get',
  });
  console.log(result);
  return {};
};
