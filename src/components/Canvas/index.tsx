import React from 'react';
import styled from 'styled-components';

import {BeatsAnimation} from 'components/Animations/BeatsAnimation';

const SIDE_PADDING = 48;

const CanvasWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 ${SIDE_PADDING}px;
  overflow: hidden;
`;

export const Canvas: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const fixCanvasAspectRatio = React.useCallback(() => {
    if (containerRef.current && canvasRef.current) {
      const ratio = Math.min(
        (containerRef.current.clientWidth - SIDE_PADDING * 2) / canvasRef.current.width,
        containerRef.current.clientHeight / canvasRef.current.height,
      );

      const width = Math.trunc(canvasRef.current.width * ratio);
      const height = Math.trunc(canvasRef.current.height * ratio);
      canvasRef.current.setAttribute('width', `${width}`);
      canvasRef.current.setAttribute('height', `${height}`);
    }
  }, [containerRef, canvasRef]);

  React.useLayoutEffect(() => fixCanvasAspectRatio(), [fixCanvasAspectRatio]);

  React.useEffect(() => {
    window.addEventListener('resize', fixCanvasAspectRatio);

    return () => window.removeEventListener('resize', fixCanvasAspectRatio);
  }, [fixCanvasAspectRatio]);

  return (
    <CanvasWrapper ref={containerRef}>
      <canvas ref={canvasRef} style={{width: '1440px', height: '900px'}} />
      <BeatsAnimation />
    </CanvasWrapper>
  );
};
