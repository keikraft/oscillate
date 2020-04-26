import React from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  flex: 1;
`;
const StyledCanvas = styled.canvas`
  width: 1440;
  height: 900;
`;

export const Canvas: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const draw = () => {
    if (canvasRef.current && canvasRef.current.getContext) {
      var ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'orange';
        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
      }
    }
  };

  const fixCanvasAspectRatio = React.useCallback(() => {
    if (containerRef.current && canvasRef.current) {
      const ratio = Math.min(
        containerRef.current.clientWidth / canvasRef.current.width,
        containerRef.current.clientHeight / canvasRef.current.height,
      );

      canvasRef.current.setAttribute('width', `${canvasRef.current.width * ratio}`);
      canvasRef.current.setAttribute('height', `${canvasRef.current.height * ratio}`);
      draw();
    }
  }, [containerRef, canvasRef]);

  React.useEffect(() => fixCanvasAspectRatio(), [containerRef, canvasRef, fixCanvasAspectRatio]);

  React.useEffect(() => {
    window.addEventListener('resize', fixCanvasAspectRatio);

    return () => window.removeEventListener('resize', fixCanvasAspectRatio);
  }, []);

  return (
    <CanvasWrapper ref={containerRef}>
      <StyledCanvas ref={canvasRef} />
    </CanvasWrapper>
  );
};
