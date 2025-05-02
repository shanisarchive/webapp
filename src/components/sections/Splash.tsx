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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ccc';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const particles: any[] = [];

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const i = (y * canvas.width + x) * 4;
        const alpha = imageData.data[i + 3];
        if (alpha > 128) {
          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * -5 - 1,
            life: 0
          });
        }
      }
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life++;
        if (p.life < 90) {
          ctx.fillStyle = `rgba(200,200,200,${1 - p.life / 90})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
      if (frame < 120) requestAnimationFrame(animate);
      else onEnter();
    };

    animate();
  }, [onEnter]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute w-full h-full" />
    </div>
  );
};

export default Splash;
