import {request} from 'sdk/request';

class AvailableGenres {
  private genres: string[] = [];

  async getAvailableGenres() {
    if (this.genres.length) return this.genres;

    const result = await request<SpotifyApi.AvailableGenreSeedsResponse>({
      path: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      method: 'get',
    });
    this.genres = result.genres;
    return this.genres;
  }
}
export const Genres = new AvailableGenres();
