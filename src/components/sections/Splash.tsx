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

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ccc';
    ctx.font = '600 64px "Open Sans", "Helvetica Neue", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2 + 5); // fine-tuned vertical position

    const imageData = ctx.getImageData(0, 0, width, height);
    const particles: any[] = [];

    for (let y = 0; y < height; y += 2) {
      for (let x = 0; x < width; x += 2) {
        const i = (y * width + x) * 4;
        const alpha = imageData.data[i + 3];
        if (alpha > 128) {
          particles.push({
            x,
            y,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
            alpha: 1,
            delay: x / width * 100,
          });
        }
      }
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        if (frame > p.delay) {
          p.vx += (Math.random() - 0.5) * 0.5;
          p.vy -= Math.random() * 0.3;
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.008;
        }
        if (p.alpha > 0) {
          ctx.fillStyle = `rgba(200, 200, 200, ${p.alpha})`;
          ctx.fillRect(p.x, p.y, 1.2, 1.2);
        }
      }
      if (frame < 300) requestAnimationFrame(animate);
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
