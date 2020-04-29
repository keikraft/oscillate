import React from 'react';
import styled from 'styled-components';
import {usePlayback} from 'context/PlaybackContext';

const SIDE_PADDING = 48;

const CanvasWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 ${SIDE_PADDING}px;
  overflow: hidden;
`;
const StyledCanvas = styled.canvas`
  width: 1440px;
  height: 900px;
`;

export const Canvas: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [state] = usePlayback();

  const drawSegments = React.useCallback(() => {
    if (canvasRef.current && canvasRef.current.getContext && state.trackAnalysis.segments) {
      var ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'yellow';

        const {segments} = state.trackAnalysis;
        const segmentTruncation = Math.max(2, Math.min(Math.floor(segments.length / 500), 4));
        const segmentWidth = canvasRef.current.width / (segments.length / segmentTruncation);

        for (let i = 0; i < segments.length / segmentTruncation; i += segmentTruncation) {
          const segmentHeight = segments[i].loudness_max - segments[i].loudness_start;
          ctx.fillRect(i * segmentWidth, 100, segmentWidth * segmentTruncation - 2, segmentHeight);
          ctx.fillRect(i * segmentWidth, 100, segmentWidth * segmentTruncation - 2, -segmentHeight);
        }
      }
    }
  }, [state.trackAnalysis]);

  const fixCanvasAspectRatio = React.useCallback(() => {
    if (containerRef.current && canvasRef.current) {
      const ratio = Math.min(
        containerRef.current.clientWidth / canvasRef.current.width,
        containerRef.current.clientHeight / canvasRef.current.height,
      );

      const width = canvasRef.current.width * ratio - SIDE_PADDING * 2;
      const height = canvasRef.current.height * ratio;
      canvasRef.current.setAttribute('width', `${width}`);
      canvasRef.current.setAttribute('height', `${height}`);
      console.log('fix');
      drawSegments();
    }
  }, [containerRef, canvasRef, drawSegments]);

  React.useEffect(() => {
    if (state.trackAnalysis.segments) {
      drawSegments();
    }
  }, [state.trackAnalysis, drawSegments]);

  React.useLayoutEffect(() => fixCanvasAspectRatio(), [fixCanvasAspectRatio]);

  React.useEffect(() => {
    window.addEventListener('resize', fixCanvasAspectRatio);

    return () => window.removeEventListener('resize', fixCanvasAspectRatio);
  }, [fixCanvasAspectRatio]);

  return (
    <CanvasWrapper ref={containerRef}>
      <StyledCanvas ref={canvasRef} />
    </CanvasWrapper>
  );
};
