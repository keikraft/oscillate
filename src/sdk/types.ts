export interface Track {
  uri: string;
}

export interface SearchTracksResponse {
  tracks: {
    items: Track[];
    totalItems: number;
  };
}
