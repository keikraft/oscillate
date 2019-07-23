export const initPlayback = () => {
  // @ts-ignore
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem('access_token');
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: (cb: any) => {
        cb(token);
      },
    });

    // Error handling
    player.addListener('initialization_error', ({message}: any) => {
      console.error(message);
    });
    player.addListener('authentication_error', ({message}: any) => {
      console.error(message);
    });
    player.addListener('account_error', ({message}: any) => {
      console.error(message);
    });
    player.addListener('playback_error', ({message}: any) => {
      console.error(message);
    });

    // Playback status updates
    player.addListener('player_state_changed', (state: any) => {
      console.log(state);
    });

    // Ready
    player.addListener('ready', ({device_id}: any) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({device_id}: any) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };
};
