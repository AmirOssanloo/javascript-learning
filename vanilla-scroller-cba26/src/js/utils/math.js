export const random = (lower, upper, integer) => {
  lower = lower === undefined ? 0 : lower;
  upper = upper === undefined ? 1 : upper;

  let random = integer
    ? lower + Math.floor(Math.random() * (upper - lower + 1))
    : lower + Math.random() * (upper - lower);

  return random;
};

export const norm = (number, lower, upper, limit) => {
  number = (number - lower) / (upper - lower);
  number = limit ? clamp(number, 0, 1) : number;
  return number;
};

export const lerp = (number, lower, upper, limit) => {
  number = (upper - lower) * number + lower;
  number = limit ? clamp(number, lower, upper) : number;
  return number;
};

export const clamp = (number, lower, upper) => {
  number = number <= upper ? number : upper;
  number = number >= lower ? number : lower;
  return number;
};

export const map = (number, sourceLower, sourceUpper, targetLower, targetUpper, clamp) => {
  number = norm(number, sourceLower, sourceUpper, clamp);
  number = lerp(number, targetLower, targetUpper, clamp);
  return number;
};
