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

    // Stars
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      d: Math.random() * 0.5 + 0.2,
    }));

    // Comets
    let comets: any[] = [];
    const spawnComet = () => {
      comets.push({
        x: Math.random() * width,
        y: -20,
        vx: Math.random() * 0.8 + 0.5,
        vy: Math.random() * 1.2 + 1.5,
        alpha: 1,
        life: 0,
      });
    };

    setInterval(spawnComet, 2500);

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      // Stars
      for (let star of stars) {
        star.y += star.d;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      // Comets
      comets.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;
        c.life++;
        c.alpha -= 0.005;
        if (c.alpha > 0) {
          const grad = ctx.createLinearGradient(c.x - 30, c.y - 30, c.x, c.y);
          grad.addColorStop(0, `rgba(255,255,255,0)`);
          grad.addColorStop(1, `rgba(255,255,255,${c.alpha})`);
          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(c.x - 30, c.y - 30);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();
        }
      });
      comets = comets.filter(c => c.alpha > 0);

      // Zoom in
      const zoom = 1 + frame / 1400 * 0.05;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(zoom, zoom);
      ctx.translate(-width / 2, -height / 2);

      // Text
      ctx.font = '600 64px system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillStyle = 'rgba(230,230,230,0.85)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Glow
      ctx.shadowColor = 'rgba(200,200,255,0.1)';
      ctx.shadowBlur = 25;
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
