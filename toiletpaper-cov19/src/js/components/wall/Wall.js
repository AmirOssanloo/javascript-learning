function Wall() {
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.container = document.querySelector('#hero');
  this.width = this.container.offsetWidth;
  this.height = this.container.offsetHeight;

  this.canvas.width = this.width;
  this.canvas.height = this.height;

  /* Initiate
  ============================================ */
  this.draw();
};

Wall.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  // Gradient gradient warm
  const gradientWarm = this.ctx.createLinearGradient(0, 0, 0, this.height * 0.6);
  gradientWarm.addColorStop(0, 'rgba(255, 125, 0, 0.05)');
  gradientWarm.addColorStop(1, 'rgba(255, 125, 0, 0)');
  this.ctx.fillStyle = gradientWarm;
  this.ctx.fillRect(0, 0, this.width, this.height * 0.6);

  // Gradient gradient dark
  const gradientDarkHeight = this.height * 0.45;
  const gradientDarkY = this.height - gradientDarkHeight;
  // console.log(this.canvas.height)
  // console.log(gradientDarkY, gradientDarkHeight)
  const gradientDark = this.ctx.createLinearGradient(0, gradientDarkY, 0, gradientDarkHeight + gradientDarkY);
  gradientDark.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradientDark.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  this.ctx.fillStyle = gradientDark;
  this.ctx.fillRect(0, gradientDarkY, this.canvas.width, gradientDarkHeight);

  
}

Wall.prototype.onWindowResize = function() {
  this.width = this.container.offsetWidth;
  this.height = this.container.offsetHeight;
  this.canvas.width = this.width;
  this.canvas.height = this.height;

  this.draw();
};

export default Wall;