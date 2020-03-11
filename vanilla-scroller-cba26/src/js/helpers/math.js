/**
 * Produces a random number between the `lower` and `upper` bounds.
 * If no argument is provided a floating-point number between `0` and `1`
 * is returned. If `integer` is `true`, an integer is returned instead
 * of a floating-point number.
 *
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @param {boolean} integer Specify returning an integer.
 * @returns {number} Returns the random number.
 */
export const random = (lower, upper, integer) => {
  lower = lower === undefined ? 0 : lower;
  upper = upper === undefined ? 1 : upper;

  let random = integer
    ? lower + Math.floor(Math.random() * (upper - lower + 1))
    : lower + Math.random() * (upper - lower);

  return random;
};