function StatsParticles() {
  this.canvas = null;
  this.label = "";
  this.number = 0;
  this.bonuses = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 15000, 25000, 50000, 100000, 250000, 500000, 1000000];
};

StatsParticles.prototype.onNumberUpdate = function(number) {
  console.log(number);

  switch (number) {
    case 10:
      return;
    case 25:
      return;
    case 50:
      return;
    case 100:
      return;
    case 250:
      return;
    case 500:
      return;
    case 1000:
      return;
    case 2500:
      return;
    case 5000:
      return;
    case 10000:
      return;
    case 25000:
      return;
    case 50000:
      return;
    case 100000:
      return;
    case 250000:
      return;
    case 500000:
      return;
    case 1000000:
      return;
  }
};

export default StatsParticles;
