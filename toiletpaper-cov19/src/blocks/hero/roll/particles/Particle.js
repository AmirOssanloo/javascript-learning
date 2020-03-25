function Particle() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.friction = 0;
  this.lifespan = 0;
  this.opacity = 0;
  this.progress = 0;
  this.rotation = 0;
  this.rotationSpeed = 0;
  this.scale = 0;
  this.size = 1;
  this.image = null;
  this.age = 0;
};

Particle.prototype.accelerate = function(ax, ay) {
  this.vx += ax;
  this.vy += ay;
};

Particle.prototype.getSpeed = function() {
  return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
};

Particle.prototype.setSpeed = function(speed) {
  let heading = this.getHeading();

  this.vx = Math.cos(heading) * speed;
  this.vy = Math.sin(heading) * speed;
};

Particle.prototype.getHeading = function() {
  return Math.atan2(this.vy, this.vx);
};

Particle.prototype.setHeading = function(heading) {
  let speed = this.getSpeed();

  this.vx = Math.cos(heading) * speed;
  this.vy = Math.sin(heading) * speed;
};

Particle.prototype.getLifeCurve = function() {
  return Math.sin(this.progress * Math.PI);
};

Particle.prototype.render = function(ctx) {
  if (this.image) {
    const image = this.image;
    const imageX = -image.width * (this.scale / 2);
    const imageY = -image.height * (this.scale / 2);
    const imageWidth = image.width * this.scale;
    const imageHeight = image.height * this.scale;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale = this.scale;
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);
    ctx.restore();
  }
};

Particle.prototype.update = function() {
  this.age += 1;
  this.progress = this.age / this.lifespan;

  if (this.progress > 1) {
    this.progress = 1;
  }

  this.vx *= this.friction;
  this.vy *= this.friction;
  this.x += this.vx;
  this.y += this.vy;
  this.rotation += this.rotationSpeed;
};

export default Particle;
