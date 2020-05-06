import React from 'react';

import {usePlayback} from 'context/PlaybackContext';
import {useAnimationFrame} from 'hooks/useAnimationFrame';
import styled from 'styled-components';

const Seconds = styled.span`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.3);
`;

export const BeatsAnimation: React.FC = () => {
  const [seconds, setSeconds] = React.useState<string>('0');
  const [playbackState] = usePlayback();
  const run = playbackState.isPlaying && playbackState.timeStart !== 0;

  useAnimationFrame(run, (time: DOMHighResTimeStamp) => {
    const progress = time - playbackState.timeStart;
    const sec = ((progress % 60000) / 1000).toFixed(3);
    setSeconds(sec);
    // if (canvasRef.current && canvasRef.current.getContext && state.trackAnalysis.beats) {
    //   var ctx = canvasRef.current.getContext('2d');
    //   if (ctx) {
    //     ctx.fillStyle = 'purple';
    //   }
    // }
  });

  return <Seconds>{seconds}</Seconds>;
};
