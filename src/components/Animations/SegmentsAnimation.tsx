import React from 'react';

export const SegmentsAnimation: React.FC = () => {
  // const drawSegments = React.useCallback(() => {
  //   if (canvasRef.current && canvasRef.current.getContext && state.trackAnalysis.segments) {
  //     var ctx = canvasRef.current.getContext('2d');
  //     if (ctx) {
  //       ctx.fillStyle = 'yellow';

  //       const {segments} = state.trackAnalysis;
  //       const segmentTruncation = Math.max(2, Math.min(Math.floor(segments.length / 500), 4));
  //       const segmentWidth = canvasRef.current.width / (segments.length / segmentTruncation);

  //       for (let i = 0; i < segments.length / segmentTruncation; i += segmentTruncation) {
  //         const segmentHeight = segments[i].loudness_max - segments[i].loudness_start;
  //         ctx.fillRect(i * segmentWidth, 100, segmentWidth * segmentTruncation - 2, segmentHeight);
  //         ctx.fillRect(i * segmentWidth, 100, segmentWidth * segmentTruncation - 2, -segmentHeight);
  //       }
  //     }
  //   }
  // }, [state.trackAnalysis]);

  return <div></div>;
};
