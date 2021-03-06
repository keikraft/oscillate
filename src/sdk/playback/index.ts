import {AuthHandler} from 'sdk/auth';

type PlaybackListenerHandler = (state: Spotify.PlaybackState) => void;

class Playback {
  player: Spotify.SpotifyPlayer | undefined;
  deviceId: string = '';
  listeners = new Set<PlaybackListenerHandler>();

  constructor() {
    this.init();
  }

  play(uri: string) {
    return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.deviceId}`, {
      method: 'PUT',
      body: JSON.stringify({uris: [uri]}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthHandler.getToken()}`,
      },
    });
  }

  init() {
    // @ts-ignore
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb: any) => {
          cb(AuthHandler.getToken());
        },
      });

      // Error handling
      this.player.addListener('initialization_error', ({message}: any) => {
        console.error(message);
      });
      this.player.addListener('authentication_error', ({message}: any) => {
        console.error(message);
      });
      this.player.addListener('account_error', ({message}: any) => {
        console.error(message);
      });
      this.player.addListener('playback_error', ({message}: any) => {
        console.error(message);
      });

      // Ready
      this.player.addListener('ready', ({device_id}: any) => {
        console.log('Ready with Device ID', device_id);
        this.deviceId = device_id;
      });

      // Not Ready
      this.player.addListener('not_ready', ({device_id}: any) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Player State
      this.player.addListener('player_state_changed', (state) => {
        this.listeners.forEach((listener) => listener(state));
      });

      // Connect to the player!
      this.player.connect();
    };
  }

  public listen(handler: PlaybackListenerHandler) {
    this.listeners.add(handler);
  }

  public removeListener(handler: PlaybackListenerHandler) {
    this.listeners.delete(handler);
  }
}

export const PlaybackHandler = new Playback();
