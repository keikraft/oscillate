import {request} from 'sdk/request';

let genres: string[] = [];

class AvailableGenres {
  genres: string[] = [];

  async getAvailableGenres() {
    if (genres.length) return genres;

    const result = await request<SpotifyApi.AvailableGenreSeedsResponse>({
      path: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      method: 'get',
    });
    genres = result.genres;
    return genres;
  }
}
export const Genres = new AvailableGenres();
