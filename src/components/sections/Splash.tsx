import React, { useEffect, useRef } from 'react';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const text = 'Welcome to the world of Aura';
    const dpi = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpi;
    canvas.height = height * dpi;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpi, dpi);

    let frame = 0;
    const maxFrames = 420;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background: Solid Black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Central Purple Nebula Glow
      const nebula = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 240);
      nebula.addColorStop(0, 'rgba(128, 0, 255, 0.3)');
      nebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula;
      ctx.fillRect(width / 2 - 240, height / 2 - 240, 480, 480);

      // Text: Precise font and style matching
      const opacity = Math.min(1, frame / 60);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1, 1);
      ctx.translate(-width / 2, -height / 2);

      ctx.font = '600 48px Manrope, Open Sans, sans-serif';
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(128, 0, 255, 0.35)';
      ctx.shadowBlur = 50;
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();

      // Fade to black for exit
      if (frame > maxFrames - 60) {
        const progress = (frame - (maxFrames - 60)) / 60;
        const fade = 1 - progress;
        ctx.fillStyle = `rgba(0, 0, 0, ${1 - fade})`;
        ctx.fillRect(0, 0, width, height);
      }

      if (frame < maxFrames) requestAnimationFrame(animate);
      else onEnter();
    };

    animate();
  }, [onEnter]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default Splash;
