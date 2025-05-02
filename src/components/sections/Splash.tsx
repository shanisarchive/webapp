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

    // Starfield — minimal glow and motion
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 0.8 + 0.2,
      dx: (Math.random() - 0.5) * 0.02,
      dy: (Math.random() - 0.5) * 0.02,
    }));

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      // Stars (glow and subtle drift)
      for (let star of stars) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.shadowColor = 'rgba(255,255,255,0.2)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      // Text reveal
      const opacity = Math.min(1, frame / 60);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      const scale = 1 + Math.sin(frame / 60) * 0.005;
      ctx.scale(scale, scale);
      ctx.translate(-width / 2, -height / 2);
      ctx.font = '600 58px Manrope, Open Sans, system-ui';
      ctx.fillStyle = `rgba(230,230,230,${opacity})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(255,255,255,0.12)';
      ctx.shadowBlur = 20;
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();

      if (frame < 420) requestAnimationFrame(animate);
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
