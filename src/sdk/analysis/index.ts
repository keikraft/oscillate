import {request} from 'sdk/request';

interface TimeInterval {
  start: number;
  duration: number;
  confidence: number;
}

interface Section extends TimeInterval {
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  kmode_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

interface Segment extends TimeInterval {
  loudness_start: number;
  loudness_max: number;
  loudness_max_time: number;
  loudness_end: number;
  pitches: number[];
  timbre: number[];
}

export interface AudioAnalysis {
  bars: TimeInterval[];
  beats: TimeInterval[];
  sections: Section[];
  segments: Segment[];
  tatums: TimeInterval[];
}

export const getTrackAnalysis = (trackId: string) => {
  return request<AudioAnalysis>({
    path: `https://api.spotify.com/v1/audio-analysis/${trackId}`,
    method: 'get',
  });
};
