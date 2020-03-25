import Particle from './Particle';
import { imageCache } from '#utils/imageCache';
import { random, map } from '#utils/math';

function Particles(ctx) {
  this.ctx = ctx;
  this.fps = 60;
  this.friction = 0.96;
  this.gravity = -0.4;
  this.opacity = 1;
  this.recycleStrays = true;
  this.rotation = 0;
  this.rotationSpeed = 0;
  this.scale = 1;
  this.turbulence = 0;
  this.vx = 0;
  this.vy = 0;

  this.emitter = {
    x: 0,
    y: 0,
    width: 300,
    height: 250
  };

  this.images = [
    imageCache['particle_glow']
  ];

  this.lifespan = 0.5;
  this.particlesPerSecond = 8;
  this.maxParticles = this.lifespan * this.particlesPerSecond;

  this.oldTime = Date.now();
  this.lastEmitTime = this.oldTime;
  this.currentTime = 0;
  this.deltaTime = 0;
  this.updateInterval = 1 / this.fps;
  this.emitInterval = 1 / this.particlesPerSecond;
  this.particlesPerFrame = this.updateInterval / this.emitInterval;
  this.particleRest = 0;
  this.running = false;

  this.activeParticles = [];
  this.idleParticles = [];

  for (let i = 0; i < this.maxParticles; i++) {
    const particle = new Particle(0, 0, 0, 0);
    this.idleParticles.push(particle);
  }
};

Particles.prototype.start = function() {
  this.running = true;
};

Particles.prototype.stop = function() {
  this.running = false;
};

Particles.prototype.destroy = function() {
  //
};

Particles.prototype.render = function() {
  for (var i = 0; i < this.activeParticles.length; i++) {
    const particle = this.activeParticles[i];
    particle.render(this.ctx);
  }
};


Particles.prototype.update = function() {
  this.currentTime = Date.now();
  this.deltaTime = this.currentTime - this.oldTime;

  // if (this.deltaTime > this.updateInterval) {
  this.oldTime = this.currentTime - (this.deltaTime % this.updateInterval);

  let particlesToEmit = this.particlesPerFrame + this.particleRest;
  this.particleRest = particlesToEmit % 1;

  if (this.running) {
    this.emit(Math.floor(particlesToEmit));
  }

  let i = this.activeParticles.length;

  while (i--) {
    const particle = this.activeParticles[i];
    const turbulenceX = random(-this.turbulence, this.turbulence);
    const turbulenceY = random(-this.turbulence, this.turbulence);

    particle.accelerate(0, this.gravity);
    particle.accelerate(turbulenceX, turbulenceY);

    //
    const lifeCurve = particle.getLifeCurve();
    particle.opacity = map(lifeCurve, 0, 0.2, 0, 1, true);
    particle.scale = map(lifeCurve, 0, 0.5, 0, 1, true);

    //
    particle.update();
    this.retire(particle, i);
  }

  this.render(this.ctx);
  // }

  if (!this.running && !this.activeParticles.length) {
    this.destroy();
  }
};

Particles.prototype.emit = function(amount) {
  for (let i = 0; i < amount; i++) {
    let particle;

    if (this.idleParticles.length) {
      particle = this.idleParticles.shift();
    } else {
      particle = this.activeParticles.shift();
    }

    particle.age = 0;
    particle.progress = 0;
    particle.lifeCurve = 0;
    particle.opacity = this.opacity;
    particle.lifespan = this.lifespan * this.fps;
    particle.friction = this.friction;
    particle.scale = this.scale;
    particle.rotation = this.rotation;
    particle.rotationSpeed = this.rotationSpeed;
    particle.x = this.emitter.x;
    particle.y = this.emitter.y;
    particle.vx = this.vx;
    particle.vy = this.vy;

    let randomIndex = random(0, this.images.length - 1, true);
    particle.image = this.images[randomIndex];

    // Emit particle
    // particle.size = random(0.6, 1.2);

    this.activeParticles.push(particle);
  }
};

Particles.prototype.retire = function(particle, id) {
  if (this.isWithinBounds(particle) && this.isWithinAge(particle)) {
    const retiredParticle = this.activeParticles.splice(id, 1)[0];
    this.idleParticles.push(retiredParticle);
  }
};

Particles.prototype.isWithinBounds = function(particle) {
  const horizontalBounds = (particle.x > 0 && particle.x < 300);
  const verticalBounds = (particle.y > 0 && particle.y < 250);
  return horizontalBounds && verticalBounds;
};

Particles.prototype.isWithinAge = function(particle) {
  return particle.age > this.lifespan * this.fps;
};

export default Particles;
