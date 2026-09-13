/**
 * 대형 음식 이모지 비 애니메이션 (Canvas 기반)
 */
class EmojiRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.emojis = ['🍕', '🍔', '🍜', '🍣', '🍱', '🍛', '🥟', '🍗', '🍟', '🥘', '🍢', '🥩', '🌮', '🥗', '🍲', '🍙', '🍦', '🍩'];
    this.particles = [];
    this.maxParticles = 35;
    this.animationId = null;
    this.opacity = 1.0;
    this.isPaused = false;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticle(randomY = false) {
    return {
      emoji: this.emojis[Math.floor(Math.random() * this.emojis.length)],
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -80,
      size: Math.random() * 28 + 42,
      speedY: Math.random() * 2.2 + 1.8,
      speedX: (Math.random() - 0.5) * 1.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.5 + 0.45,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.03 + 0.015
    };
  }

  animate() {
    if (this.isPaused) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.y += p.speedY;
      p.wobble += p.wobbleSpeed;
      p.x += Math.sin(p.wobble) * 1.5 + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > this.height + 80) {
        this.particles[i] = this.createParticle(false);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.opacity * this.opacity;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.font = `${p.size}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(p.emoji, 0, 0);
      this.ctx.restore();
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  fadeOut(duration = 800) {
    const startTime = performance.now();
    const startOpacity = this.opacity;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      this.opacity = startOpacity * (1 - progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.canvas.style.display = 'none';
        this.isPaused = true;
      }
    };

    requestAnimationFrame(step);
  }

  fadeIn(duration = 800) {
    this.canvas.style.display = 'block';
    this.isPaused = false;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      this.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.opacity = 1.0;
      }
    };

    this.animate();
    requestAnimationFrame(step);
  }
}

window.EmojiRain = EmojiRain;
